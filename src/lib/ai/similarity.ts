import { db, schema } from "../db";
import { sql } from "drizzle-orm";
import { generateEmbedding } from "./embeddings";
import type { SimilarityResult } from "../types";

export async function searchSimilar(
  query: string,
  topK = 5
): Promise<SimilarityResult[]> {
  const queryEmbedding = await generateEmbedding(query);

  // pgvector cosine distance: <=> operator (1 - cosine_similarity)
  // Lower distance = more similar
  const results = await db.execute(sql`
    SELECT
      e.article_id,
      a.title,
      a.url,
      a.source,
      a.published_at,
      e.text_chunk,
      1 - (e.embedding <=> ${JSON.stringify(queryEmbedding)}::vector) as similarity
    FROM embeddings e
    JOIN articles a ON e.article_id = a.id
    ORDER BY e.embedding <=> ${JSON.stringify(queryEmbedding)}::vector
    LIMIT ${topK}
  `);

  return (results.rows as Record<string, unknown>[]).map((row) => ({
    articleId: row.article_id as number,
    title: row.title as string,
    url: row.url as string,
    source: row.source as string,
    publishedAt: new Date(row.published_at as string),
    textChunk: row.text_chunk as string,
    similarity: row.similarity as number,
  }));
}
