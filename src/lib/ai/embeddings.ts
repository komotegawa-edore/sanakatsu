import OpenAI from "openai";

let _openai: OpenAI | null = null;
function getOpenAI() {
  if (!_openai) _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return _openai;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await getOpenAI().embeddings.create({
    model: "text-embedding-3-small",
    input: text.slice(0, 8000),
  });
  return response.data[0].embedding;
}

export async function generateEmbeddings(
  texts: string[]
): Promise<number[][]> {
  if (texts.length === 0) return [];

  const truncated = texts.map((t) => t.slice(0, 8000));
  const response = await getOpenAI().embeddings.create({
    model: "text-embedding-3-small",
    input: truncated,
  });
  return response.data.map((d) => d.embedding);
}

export function chunkText(text: string, maxChunkSize = 1000): string[] {
  if (text.length <= maxChunkSize) return [text];

  const chunks: string[] = [];
  const paragraphs = text.split(/\n\n+/);
  let current = "";

  for (const para of paragraphs) {
    if (current.length + para.length > maxChunkSize && current.length > 0) {
      chunks.push(current.trim());
      current = "";
    }
    current += (current ? "\n\n" : "") + para;
  }

  if (current.trim()) {
    chunks.push(current.trim());
  }

  return chunks;
}
