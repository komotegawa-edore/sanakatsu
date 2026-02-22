import { db, schema } from ".";
import { eq, sql, count } from "drizzle-orm";
import type { TopicWithCount } from "../types";

const DEFAULT_TOPICS = [
  { slug: "policy", name: "政策・公約", description: "経済政策、安全保障、デジタル政策などの政策関連" },
  { slug: "speech", name: "発言・声明", description: "記者会見、国会答弁、インタビューでの発言" },
  { slug: "activity", name: "活動・動向", description: "外交活動、地方訪問、党内活動などの動向" },
  { slug: "media", name: "メディア報道", description: "メディアでの報道、論評、分析記事" },
  { slug: "other", name: "その他", description: "上記に分類されないニュース" },
];

export async function ensureDefaultTopics() {
  for (const topic of DEFAULT_TOPICS) {
    await db
      .insert(schema.topics)
      .values(topic)
      .onConflictDoNothing({ target: schema.topics.slug });
  }
}

export async function getTopics(): Promise<TopicWithCount[]> {
  const result = await db
    .select({
      id: schema.topics.id,
      slug: schema.topics.slug,
      name: schema.topics.name,
      description: schema.topics.description,
      articleCount: count(schema.articles.id),
    })
    .from(schema.topics)
    .leftJoin(schema.articles, eq(schema.topics.id, schema.articles.topicId))
    .groupBy(schema.topics.id)
    .orderBy(schema.topics.id);

  return result as TopicWithCount[];
}

export async function getTopicBySlug(slug: string) {
  const result = await db
    .select()
    .from(schema.topics)
    .where(eq(schema.topics.slug, slug))
    .limit(1);
  return result[0] ?? null;
}

export async function getTopicIdBySlug(slug: string): Promise<number | null> {
  const topic = await getTopicBySlug(slug);
  return topic?.id ?? null;
}

export { DEFAULT_TOPICS };
