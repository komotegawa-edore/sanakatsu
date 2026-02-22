import Image from "next/image";
import { TopicList } from "@/components/topics/TopicList";

export const metadata = {
  title: "トピック | サナ活",
  description: "高市早苗に関するニューストピック一覧",
};

export default function TopicsPage() {
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
            トピック
          </h1>
          <p className="text-xs text-gray-500">
            カテゴリ別にニュースを閲覧できます
          </p>
        </div>
      </div>
      <TopicList />
    </div>
  );
}
