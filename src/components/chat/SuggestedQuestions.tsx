"use client";

import { SUGGESTED_QUESTIONS, FOLLOWUP_QUESTIONS } from "@/lib/ai/chat";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  lastUserMessage?: string;
}

export function SuggestedQuestions({
  onSelect,
  lastUserMessage,
}: SuggestedQuestionsProps) {
  const isFollowUp = !!lastUserMessage;

  const questions = isFollowUp
    ? FOLLOWUP_QUESTIONS[lastUserMessage] ?? FOLLOWUP_QUESTIONS.default
    : SUGGESTED_QUESTIONS;

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500">
        {isFollowUp ? "深掘りする:" : "よくある質問:"}
      </p>
      <div className="flex flex-wrap gap-2">
        {questions.map((q) => (
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
