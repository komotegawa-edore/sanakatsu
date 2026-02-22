import { collectFromRSS } from "./rss";
import { insertArticle } from "../db/articles";
import { insertEmbedding, hasEmbeddings } from "../db/embeddings";
import { updateArticleTopic, getUncategorizedArticles } from "../db/articles";
import { getTopicIdBySlug, ensureDefaultTopics } from "../db/topics";
import { generateEmbedding, chunkText } from "../ai/embeddings";
import { categorizeArticle } from "../ai/categorize";

export interface PipelineResult {
  articlesCollected: number;
  embeddingsCreated: number;
  articlesCategorized: number;
  errors: string[];
}

export async function runCollectionPipeline(): Promise<PipelineResult> {
  const result: PipelineResult = {
    articlesCollected: 0,
    embeddingsCreated: 0,
    articlesCategorized: 0,
    errors: [],
  };

  try {
    // Ensure default topics exist
    await ensureDefaultTopics();

    // 1. Collect articles from RSS
    console.log("[Pipeline] Collecting articles...");
    const articles = await collectFromRSS();
    console.log(`[Pipeline] Found ${articles.length} articles`);

    // 2. Insert articles and generate embeddings
    for (const article of articles) {
      try {
        const articleId = await insertArticle(article);
        if (articleId === null) {
          // Already exists
          continue;
        }

        result.articlesCollected++;

        // Generate embeddings for article text
        const textForEmbedding = `${article.title}\n\n${article.summary ?? ""}\n\n${article.content ?? ""}`.trim();
        const chunks = chunkText(textForEmbedding);

        for (const chunk of chunks) {
          try {
            const embedding = await generateEmbedding(chunk);
            await insertEmbedding(articleId, embedding, chunk);
            result.embeddingsCreated++;
          } catch (err) {
            result.errors.push(`Embedding failed for article ${articleId}: ${err}`);
          }
        }
      } catch (err) {
        result.errors.push(`Insert failed for "${article.title}": ${err}`);
      }
    }

    // 3. Categorize uncategorized articles
    console.log("[Pipeline] Categorizing articles...");
    const uncategorized = await getUncategorizedArticles();
    for (const article of uncategorized) {
      try {
        const slug = await categorizeArticle(article.title, article.content);
        const topicId = await getTopicIdBySlug(slug);
        if (topicId) {
          await updateArticleTopic(article.id, topicId);
          result.articlesCategorized++;
        }
      } catch (err) {
        result.errors.push(`Categorize failed for "${article.title}": ${err}`);
      }
    }

    console.log("[Pipeline] Complete:", result);
  } catch (err) {
    result.errors.push(`Pipeline error: ${err}`);
  }

  return result;
}
