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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-900/30">
                <svg className="h-6 w-6 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                AIチャット
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                高市早苗に関する質問にAIが出典付きで回答。ニュース記事に基づいた正確な情報を提供します。
              </p>
            </Link>

            {/* Feature 2 */}
            <Link
              href="/news"
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-rose-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
                <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
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

            <div className="hidden text-gray-300 sm:block dark:text-gray-600">&rarr;</div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                2
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">AI解析・分類</p>
              <p className="max-w-[160px] text-xs text-gray-500">
                記事をベクトル化してカテゴリ分類
              </p>
            </div>

            <div className="hidden text-gray-300 sm:block dark:text-gray-600">&rarr;</div>

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
          <Image
            src="/sanae.png"
            alt=""
            width={56}
            height={56}
            className="mx-auto rounded-full"
          />
          <p className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
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
