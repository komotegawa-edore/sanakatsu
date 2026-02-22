import { db, schema } from ".";
import { eq } from "drizzle-orm";

export async function insertEmbedding(
  articleId: number,
  embedding: number[],
  textChunk: string
) {
  await db.insert(schema.embeddings).values({
    articleId,
    embedding,
    textChunk,
  });
}

export async function getEmbeddingsByArticleId(articleId: number) {
  return db
    .select()
    .from(schema.embeddings)
    .where(eq(schema.embeddings.articleId, articleId));
}

export async function hasEmbeddings(articleId: number): Promise<boolean> {
  const result = await db
    .select({ id: schema.embeddings.id })
    .from(schema.embeddings)
    .where(eq(schema.embeddings.articleId, articleId))
    .limit(1);
  return result.length > 0;
}
