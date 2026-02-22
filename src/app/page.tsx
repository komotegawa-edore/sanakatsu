import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/sanae.png"
                alt="サナ活"
                width={180}
                height={180}
                className="rounded-full border-4 border-white shadow-lg dark:border-gray-700"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                サナ活
              </h1>
              <p className="mt-2 text-lg text-rose-600 font-medium dark:text-rose-400">
                高市早苗 非公式ニュースQ&A
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                高市早苗に関する最新ニュースをAIが収集・整理。
                気になることを質問すると、出典付きで正確に回答します。
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  href="/chat"
                  className="rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow-md"
                >
                  AIに質問する
                </Link>
                <Link
                  href="/news"
                  className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  ニュースを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-100 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            3つの機能
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {/* Feature 1 */}
            <Link
              href="/chat"
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-rose-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl dark:bg-rose-900/30">
                💬
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                AIチャット
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                高市早苗に関する質問にAIが出典付きで回答。RAG技術でニュース記事に基づいた正確な情報を提供します。
              </p>
            </Link>

            {/* Feature 2 */}
            <Link
              href="/news"
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-rose-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-900/30">
                📰
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                ニュース一覧
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                最新ニュースを時系列で表示。カテゴリで絞り込んで、関心のある分野のニュースをすぐにチェック。
              </p>
            </Link>

            {/* Feature 3 */}
            <Link
              href="/topics"
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-rose-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/30">
                📋
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                トピック要約
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                政策・発言・活動・メディア報道をカテゴリ別に整理。トピックごとに関連記事をまとめて閲覧。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            仕組み
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                1
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">ニュース収集</p>
              <p className="max-w-[160px] text-xs text-gray-500">
                RSSフィードから高市早苗関連ニュースを自動収集
              </p>
            </div>

            <div className="hidden text-gray-300 sm:block dark:text-gray-600">→</div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                2
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">AI解析・分類</p>
              <p className="max-w-[160px] text-xs text-gray-500">
                記事をベクトル化してカテゴリ分類
              </p>
            </div>

            <div className="hidden text-gray-300 sm:block dark:text-gray-600">→</div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                3
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">出典付き回答</p>
              <p className="max-w-[160px] text-xs text-gray-500">
                質問に関連する記事を検索し、出典付きで回答
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            さっそく試してみましょう
          </p>
          <Link
            href="/chat"
            className="mt-4 inline-block rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow-md"
          >
            AIチャットを開く
          </Link>
        </div>
      </section>
    </div>
  );
}
