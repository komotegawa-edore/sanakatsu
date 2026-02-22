"use client";

import { useTopics } from "@/hooks/useTopics";
import { TopicCard } from "./TopicCard";

export function TopicList() {
  const { topics, isLoading, error } = useTopics();

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
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
      <div className="rounded-xl bg-red-50 p-4 text-center text-sm text-red-600">
        トピックの読み込みに失敗しました
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {topics.map(
        (topic: {
          id: number;
          slug: string;
          name: string;
          description: string | null;
          articleCount: number;
        }) => (
          <TopicCard
            key={topic.id}
            slug={topic.slug}
            name={topic.name}
            description={topic.description}
            articleCount={topic.articleCount}
          />
        )
      )}
    </div>
  );
}
