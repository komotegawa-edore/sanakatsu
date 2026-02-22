export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <p className="text-center text-xs text-gray-400">
          若者が政治に興味を持つきっかけをつくるアプリです。特定の政党・政治家を支持するものではありません。
        </p>
        <p className="mt-1 text-center text-xs text-gray-300">
          &copy; {new Date().getFullYear()} サナ活
        </p>
      </div>
    </footer>
  );
}
