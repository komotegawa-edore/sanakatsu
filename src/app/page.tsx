import Link from "next/link";
import Image from "next/image";

const exampleQuestions = [
  { q: "右翼と左翼ってなに？", label: "政治の基本" },
  { q: "高市早苗ってどんな人？", label: "人物を知る" },
  { q: "選挙ってどうやって投票するの？", label: "選挙の仕組み" },
  { q: "最近の政治ニュースを教えて", label: "最新ニュース" },
];

function NewspaperIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/hero-illustration.png"
                alt="カフェでスマホを使って政治について質問している若者のイラスト"
                width={480}
                height={270}
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-rose-500 dark:text-rose-400">
                政治、よくわからなくて当たり前。
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                聞くだけで、わかる。
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-400">
                「右翼ってなに？」「選挙ってどう行くの？」
                <br className="hidden sm:block" />
                そんな素朴な疑問から、最新の政治ニュースまで。
                <br className="hidden sm:block" />
                AIがやさしい言葉で教えてくれます。
              </p>
              <div className="mt-6">
                <Link
                  href="/chat"
                  className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow-md"
                >
                  AIに聞いてみる
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you can ask */}
      <section className="border-t border-gray-100 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            こんなこと、聞けます
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            政治の基本から最新ニュースまで、なんでもOK
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {exampleQuestions.map(({ q, label }) => (
              <Link
                key={q}
                href="/chat"
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-rose-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-700"
              >
                <span className="flex-shrink-0 rounded-lg bg-rose-100 px-2 py-1 text-xs font-medium text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  {label}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {q}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            使い方はかんたん3ステップ
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            アカウント登録なし・無料で使えます
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src="/step-ask.png"
                alt="チャットで質問を入力しているスマートフォンの画面"
                width={160}
                height={160}
                className="rounded-2xl"
              />
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="mr-1 text-rose-500">1.</span>質問する
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  気になることを
                  <br />
                  そのまま入力するだけ
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src="/step-ai-answer.png"
                alt="AIがニュース記事を読み込んで回答を生成しているイラスト"
                width={160}
                height={160}
                className="rounded-2xl"
              />
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="mr-1 text-rose-500">2.</span>AIが回答
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  やさしい言葉で
                  <br />
                  わかりやすく説明
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src="/step-deep-dive.png"
                alt="ニュース記事やトピックタグが並んだ画面で深掘りするイラスト"
                width={160}
                height={160}
                className="rounded-2xl"
              />
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="mr-1 text-rose-500">3.</span>もっと深く
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  ニュース記事やトピックで
                  <br />
                  さらに詳しく読める
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            チャット以外にも
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Link
              href="/news"
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-rose-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-800"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <NewspaperIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                  ニュース一覧
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  政治の最新ニュースを時系列でチェック。カテゴリで絞り込みも。
                </p>
              </div>
            </Link>

            <Link
              href="/topics"
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-rose-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-rose-800"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
                <TagIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                  トピックまとめ
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  経済・外交・社会保障など、テーマ別に記事を整理して読めます。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-rose-50 to-white py-16 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-gray-500">まずは気軽に一言</p>
          <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
            「右翼と左翼ってなに？」
          </p>
          <Link
            href="/chat"
            className="mt-6 inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow-md"
          >
            AIチャットを開く
          </Link>
          <p className="mt-4 text-xs text-gray-400">
            ※ AIの回答は参考情報です。正確な内容は出典元の記事をご確認ください。
          </p>
        </div>
      </section>
    </div>
  );
}
