"use client";

import { useState } from "react";
import Image from "next/image";
import { NewsTimeline } from "@/components/news/NewsTimeline";
import { NewsFilter } from "@/components/news/NewsFilter";

export default function NewsPage() {
  const [selectedTopicId, setSelectedTopicId] = useState<number | undefined>();

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="mb-6 flex items-center gap-3">
        <Image
          src="/sanae.png"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            ニュース一覧
          </h1>
          <p className="text-xs text-gray-500">高市早苗に関する最新ニュース</p>
        </div>
      </div>
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
