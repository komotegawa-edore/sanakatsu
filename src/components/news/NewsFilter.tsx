"use client";

import { useTopics } from "@/hooks/useTopics";
import { cn } from "@/lib/utils";

interface NewsFilterProps {
  selectedTopicId: number | undefined;
  onSelect: (topicId: number | undefined) => void;
}

export function NewsFilter({ selectedTopicId, onSelect }: NewsFilterProps) {
  const { topics, isLoading } = useTopics();

  if (isLoading) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(undefined)}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition-colors",
          selectedTopicId === undefined
            ? "bg-rose-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
        )}
      >
        すべて
      </button>
      {topics.map((topic: { id: number; name: string; articleCount: number }) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic.id)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors",
            selectedTopicId === topic.id
              ? "bg-rose-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
          )}
        >
          {topic.name} ({topic.articleCount})
        </button>
      ))}
    </div>
  );
}
