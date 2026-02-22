import { TopicList } from "@/components/topics/TopicList";

export const metadata = {
  title: "トピック | サナ活",
  description: "高市早苗に関するニューストピック一覧",
};

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        トピック
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        カテゴリ別にニュースを閲覧できます
      </p>
      <TopicList />
    </div>
  );
}
