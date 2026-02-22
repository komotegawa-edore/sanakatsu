import { getTopicBySlug } from "@/lib/db/topics";
import { getArticles } from "@/lib/db/articles";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const topic = await getTopicBySlug(slug);
  if (!topic) return { title: "Not Found" };
  return {
    title: `${topic.name} | サナ活`,
    description: topic.description,
  };
}

export default async function TopicDetailPage({ params }: Props) {
  const { slug } = await params;
  const topic = await getTopicBySlug(slug);
  if (!topic) notFound();

  const articles = await getArticles(50, 0, topic.id);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <Link
        href="/topics"
        className="mb-4 inline-block text-sm text-rose-600 hover:underline"
      >
        &larr; トピック一覧に戻る
      </Link>
      <h1 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        {topic.name}
      </h1>
      {topic.description && (
        <p className="mb-6 text-sm text-gray-500">{topic.description}</p>
      )}

      {articles.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-8 text-center text-sm text-gray-500 dark:bg-gray-800">
          このトピックにはまだ記事がありません
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                <span>{article.source}</span>
                <span>
                  {format(new Date(article.publishedAt), "yyyy/MM/dd HH:mm", {
                    locale: ja,
                  })}
                </span>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 hover:text-rose-600 dark:text-white"
              >
                {article.title}
              </a>
              {article.summary && (
                <p className="mt-2 line-clamp-2 text-xs text-gray-600 dark:text-gray-400">
                  {article.summary}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
