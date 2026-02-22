"use client";

import { format } from "date-fns";
import { ja } from "date-fns/locale";

interface NewsCardProps {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  summary: string | null;
  topicName: string | null;
}

export function NewsCard({
  title,
  url,
  source,
  publishedAt,
  summary,
  topicName,
}: NewsCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs text-gray-500">{source}</span>
            <span className="text-xs text-gray-400">
              {format(new Date(publishedAt), "yyyy/MM/dd HH:mm", {
                locale: ja,
              })}
            </span>
            {topicName && (
              <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                {topicName}
              </span>
            )}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-900 hover:text-rose-600 dark:text-white dark:hover:text-rose-400"
          >
            {title}
          </a>
          {summary && (
            <p className="mt-2 line-clamp-2 text-xs text-gray-600 dark:text-gray-400">
              {summary}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
