"use client";

import { SUGGESTED_QUESTIONS } from "@/lib/ai/chat";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  questions?: string[];
}

export function SuggestedQuestions({
  onSelect,
  questions,
}: SuggestedQuestionsProps) {
  const items = questions ?? SUGGESTED_QUESTIONS;

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500">
        {questions ? "深掘りする:" : "よくある質問:"}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition-colors hover:border-rose-300 hover:bg-rose-50"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
