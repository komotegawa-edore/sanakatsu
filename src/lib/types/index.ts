export interface Article {
  id: number;
  title: string;
  url: string;
  source: string;
  publishedAt: Date;
  summary: string | null;
  content: string | null;
  topicId: number | null;
  createdAt: Date;
}

export interface ArticleWithTopic extends Article {
  topicName: string | null;
  topicSlug: string | null;
}

export interface Embedding {
  id: number;
  articleId: number;
  textChunk: string;
  createdAt: Date;
}

export interface Topic {
  id: number;
  slug: string;
  name: string;
  description: string | null;
}

export interface TopicWithCount extends Topic {
  articleCount: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface Citation {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  snippet: string;
}

export interface SimilarityResult {
  articleId: number;
  title: string;
  url: string;
  source: string;
  publishedAt: Date;
  textChunk: string;
  similarity: number;
}

export interface CollectedArticle {
  title: string;
  url: string;
  source: string;
  publishedAt: Date;
  summary: string | null;
  content: string | null;
}
