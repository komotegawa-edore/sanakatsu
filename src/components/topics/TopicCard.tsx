"use client";

import Link from "next/link";

interface TopicCardProps {
  slug: string;
  name: string;
  description: string | null;
  articleCount: number;
}

export function TopicCard({
  slug,
  name,
  description,
  articleCount,
}: TopicCardProps) {
  return (
    <Link
      href={`/topics/${slug}`}
      className="block rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700 dark:bg-rose-900 dark:text-rose-300">
          {articleCount}件
        </span>
      </div>
    </Link>
  );
}
