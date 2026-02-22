import { db, schema } from ".";
import { desc, eq, sql, count } from "drizzle-orm";
import type { CollectedArticle } from "../types";

export async function insertArticle(article: CollectedArticle) {
  const result = await db
    .insert(schema.articles)
    .values({
      title: article.title,
      url: article.url,
      source: article.source,
      publishedAt: article.publishedAt,
      summary: article.summary,
      content: article.content,
    })
    .onConflictDoNothing({ target: schema.articles.url })
    .returning({ id: schema.articles.id });

  return result[0]?.id ?? null;
}

export async function getArticles(limit = 50, offset = 0, topicId?: number) {
  const conditions = topicId
    ? eq(schema.articles.topicId, topicId)
    : undefined;

  return db
    .select({
      id: schema.articles.id,
      title: schema.articles.title,
      url: schema.articles.url,
      source: schema.articles.source,
      publishedAt: schema.articles.publishedAt,
      summary: schema.articles.summary,
      topicId: schema.articles.topicId,
      topicName: schema.topics.name,
      topicSlug: schema.topics.slug,
      createdAt: schema.articles.createdAt,
    })
    .from(schema.articles)
    .leftJoin(schema.topics, eq(schema.articles.topicId, schema.topics.id))
    .where(conditions)
    .orderBy(desc(schema.articles.publishedAt))
    .limit(limit)
    .offset(offset);
}

export async function getArticleById(id: number) {
  const result = await db
    .select()
    .from(schema.articles)
    .where(eq(schema.articles.id, id))
    .limit(1);
  return result[0] ?? null;
}

export async function getArticleCount() {
  const result = await db
    .select({ count: count() })
    .from(schema.articles);
  return result[0]?.count ?? 0;
}

export async function updateArticleTopic(articleId: number, topicId: number) {
  await db
    .update(schema.articles)
    .set({ topicId })
    .where(eq(schema.articles.id, articleId));
}

export async function getUncategorizedArticles() {
  return db
    .select()
    .from(schema.articles)
    .where(sql`${schema.articles.topicId} IS NULL`)
    .orderBy(desc(schema.articles.publishedAt));
}
