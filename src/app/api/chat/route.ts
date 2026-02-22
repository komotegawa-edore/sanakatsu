import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { headers } from "next/headers";
import { searchSimilar } from "@/lib/ai/similarity";
import { buildSystemPrompt } from "@/lib/ai/chat";
import { checkRateLimit } from "@/lib/rate-limit";
import { getDb } from "@/lib/db";
import { chatLogs } from "@/lib/db/schema";

export const maxDuration = 30;

const model = process.env.CHAT_MODEL || "gpt-4o-mini";
const maxOutputTokens = Number(process.env.CHAT_MAX_TOKENS) || 1024;

export async function POST(req: Request) {
  // Rate limiting
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  const { allowed, remaining } = checkRateLimit(ip);
  if (!allowed) {
    return new Response(
      JSON.stringify({
        error: "rate_limit",
        message: "本日の利用上限（5回）に達しました。明日またお試しください。",
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  const { messages: rawMessages } = await req.json();

  // Convert parts-based messages to content-based format for streamText
  const messages = rawMessages.map(
    (m: { role: string; content?: string; parts?: { type: string; text: string }[] }) => ({
      role: m.role,
      content:
        m.content ??
        m.parts
          ?.filter((p) => p.type === "text")
          .map((p) => p.text)
          .join("") ??
        "",
    })
  );

  // Get the latest user message for RAG context
  const lastUserMessage = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user");

  // Log user question to DB (non-blocking)
  if (lastUserMessage) {
    getDb()
      .insert(chatLogs)
      .values({ question: lastUserMessage.content })
      .catch(() => {});
  }

  // Search for relevant articles
  let context: Awaited<ReturnType<typeof searchSimilar>> = [];
  try {
    context = lastUserMessage
      ? await searchSimilar(lastUserMessage.content, 5)
      : [];
  } catch {
    // DB unavailable — continue without context
  }

  const systemPrompt = buildSystemPrompt(context);

  const result = streamText({
    model: openai(model),
    system: systemPrompt,
    messages,
    maxOutputTokens,
  });

  return result.toTextStreamResponse({
    headers: {
      "X-RateLimit-Remaining": String(remaining),
    },
  });
}
