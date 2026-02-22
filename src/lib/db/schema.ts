import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  vector,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const topics = pgTable("topics", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
});

export const articles = pgTable(
  "articles",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    url: text("url").notNull(),
    source: text("source").notNull(),
    publishedAt: timestamp("published_at").notNull(),
    summary: text("summary"),
    content: text("content"),
    topicId: integer("topic_id").references(() => topics.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("articles_url_idx").on(table.url),
    index("articles_published_idx").on(table.publishedAt),
    index("articles_topic_idx").on(table.topicId),
  ]
);

export const chatLogs = pgTable(
  "chat_logs",
  {
    id: serial("id").primaryKey(),
    question: text("question").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("chat_logs_created_idx").on(table.createdAt)]
);

export const embeddings = pgTable(
  "embeddings",
  {
    id: serial("id").primaryKey(),
    articleId: integer("article_id")
      .references(() => articles.id, { onDelete: "cascade" })
      .notNull(),
    embedding: vector("embedding", { dimensions: 1536 }).notNull(),
    textChunk: text("text_chunk").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("embeddings_article_idx").on(table.articleId),
  ]
);
