"use client";

import { useNewsArticles } from "@/hooks/useNewsArticles";
import { NewsCard } from "./NewsCard";

interface NewsTimelineProps {
  topicId?: number;
}

export function NewsTimeline({ topicId }: NewsTimelineProps) {
  const { articles, isLoading, error } = useNewsArticles(topicId);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-50 p-4 text-center text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
        ニュースの読み込みに失敗しました
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="rounded-xl bg-gray-50 p-8 text-center text-sm text-gray-500 dark:bg-gray-800">
        まだニュースがありません。データ収集を実行してください。
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {articles.map(
        (article: {
          id: number;
          title: string;
          url: string;
          source: string;
          publishedAt: string;
          summary: string | null;
          topicName: string | null;
        }) => (
          <NewsCard
            key={article.id}
            title={article.title}
            url={article.url}
            source={article.source}
            publishedAt={article.publishedAt}
            summary={article.summary}
            topicName={article.topicName}
          />
        )
      )}
    </div>
  );
}
