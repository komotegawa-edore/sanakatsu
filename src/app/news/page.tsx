"use client";

import { useState } from "react";
import { NewsTimeline } from "@/components/news/NewsTimeline";
import { NewsFilter } from "@/components/news/NewsFilter";

export default function NewsPage() {
  const [selectedTopicId, setSelectedTopicId] = useState<number | undefined>();

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        ニュース一覧
      </h1>
      <div className="mb-4">
        <NewsFilter
          selectedTopicId={selectedTopicId}
          onSelect={setSelectedTopicId}
        />
      </div>
      <NewsTimeline topicId={selectedTopicId} />
    </div>
  );
}
