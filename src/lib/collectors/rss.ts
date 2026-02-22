import Parser from "rss-parser";
import type { CollectedArticle } from "../types";
import { RSS_SOURCES } from "./sources";

const parser = new Parser({
  timeout: 10000,
  headers: {
    "User-Agent": "SanakatsuBot/1.0",
  },
});

function isRelevant(title: string, content?: string): boolean {
  const text = `${title} ${content ?? ""}`;
  return text.includes("高市") || text.includes("たかいち") || text.includes("Takaichi");
}

export async function collectFromRSS(): Promise<CollectedArticle[]> {
  const articles: CollectedArticle[] = [];

  for (const source of RSS_SOURCES) {
    try {
      const feed = await parser.parseURL(source.url);
      for (const item of feed.items) {
        if (!item.title || !item.link) continue;
        if (!isRelevant(item.title, item.contentSnippet)) continue;

        articles.push({
          title: item.title.trim(),
          url: item.link,
          source: source.name,
          publishedAt: item.pubDate ? new Date(item.pubDate) : new Date(),
          summary: item.contentSnippet?.slice(0, 500) ?? null,
          content: item.content?.slice(0, 5000) ?? item.contentSnippet ?? null,
        });
      }
      console.log(`[RSS] ${source.name}: ${feed.items.length} items, ${articles.length} relevant`);
    } catch (error) {
      console.error(`[RSS] Failed to fetch ${source.name}:`, error);
    }
  }

  return articles;
}
