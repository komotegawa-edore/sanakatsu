"use client";

import { SUGGESTED_QUESTIONS } from "@/lib/ai/chat";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500">よくある質問:</p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTED_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition-colors hover:border-rose-300 hover:bg-rose-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-rose-500"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
