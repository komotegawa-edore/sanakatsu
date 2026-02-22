import OpenAI from "openai";
import { DEFAULT_TOPICS } from "../db/topics";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const topicDescriptions = DEFAULT_TOPICS.map(
  (t) => `- ${t.slug}: ${t.name} (${t.description})`
).join("\n");

export async function categorizeArticle(
  title: string,
  content: string | null
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `あなたは日本の政治ニュース分類アシスタントです。以下のカテゴリから最も適切なものを1つ選び、slugのみを返してください。

${topicDescriptions}

slugのみを返してください（例: policy）`,
      },
      {
        role: "user",
        content: `タイトル: ${title}\n内容: ${(content ?? "").slice(0, 1000)}`,
      },
    ],
    temperature: 0,
    max_tokens: 20,
  });

  const slug = response.choices[0]?.message?.content?.trim() ?? "other";
  const validSlugs = DEFAULT_TOPICS.map((t) => t.slug);
  return validSlugs.includes(slug) ? slug : "other";
}
