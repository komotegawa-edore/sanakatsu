import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import * as schema from "../src/lib/db/schema";

async function migrate() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is required");
    process.exit(1);
  }

  const client = neon(process.env.DATABASE_URL);
  const db = drizzle(client, { schema });

  console.log("Enabling pgvector extension...");
  await db.execute(sql`CREATE EXTENSION IF NOT EXISTS vector`);

  console.log("Creating topics table...");
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS topics (
      id SERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      description TEXT
    )
  `);

  console.log("Creating articles table...");
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      url TEXT NOT NULL,
      source TEXT NOT NULL,
      published_at TIMESTAMP NOT NULL,
      summary TEXT,
      content TEXT,
      topic_id INTEGER REFERENCES topics(id),
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);

  await db.execute(sql`CREATE UNIQUE INDEX IF NOT EXISTS articles_url_idx ON articles(url)`);
  await db.execute(sql`CREATE INDEX IF NOT EXISTS articles_published_idx ON articles(published_at)`);
  await db.execute(sql`CREATE INDEX IF NOT EXISTS articles_topic_idx ON articles(topic_id)`);

  console.log("Creating embeddings table...");
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS embeddings (
      id SERIAL PRIMARY KEY,
      article_id INTEGER NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
      embedding vector(1536) NOT NULL,
      text_chunk TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);

  await db.execute(sql`CREATE INDEX IF NOT EXISTS embeddings_article_idx ON embeddings(article_id)`);

  console.log("Inserting default topics...");
  const defaultTopics = [
    { slug: "policy", name: "政策・公約", description: "経済政策、安全保障、デジタル政策などの政策関連" },
    { slug: "speech", name: "発言・声明", description: "記者会見、国会答弁、インタビューでの発言" },
    { slug: "activity", name: "活動・動向", description: "外交活動、地方訪問、党内活動などの動向" },
    { slug: "media", name: "メディア報道", description: "メディアでの報道、論評、分析記事" },
    { slug: "other", name: "その他", description: "上記に分類されないニュース" },
  ];

  for (const topic of defaultTopics) {
    await db
      .insert(schema.topics)
      .values(topic)
      .onConflictDoNothing({ target: schema.topics.slug });
  }

  console.log("Migration complete!");
}

migrate().catch(console.error);
