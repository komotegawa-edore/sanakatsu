import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { searchSimilar } from "@/lib/ai/similarity";
import { buildSystemPrompt } from "@/lib/ai/chat";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Get the latest user message for RAG context
  const lastUserMessage = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user");

  // Search for relevant articles
  const context = lastUserMessage
    ? await searchSimilar(lastUserMessage.content, 5)
    : [];

  const systemPrompt = buildSystemPrompt(context);

  const result = streamText({
    model: openai("gpt-4o"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
