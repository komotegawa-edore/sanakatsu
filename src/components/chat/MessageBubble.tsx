"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "");
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex w-full gap-2",
        role === "user" ? "justify-end" : "justify-start"
      )}
    >
      {role === "assistant" && (
        <Image
          src="/sanae.png"
          alt=""
          width={28}
          height={28}
          className="mt-1 h-7 w-7 flex-shrink-0 self-start rounded-full"
        />
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          role === "user"
            ? "bg-rose-600 text-white"
            : "bg-gray-100 text-gray-900"
        )}
      >
        <div className="whitespace-pre-wrap break-words">
          {role === "assistant" ? stripMarkdown(content) : content}
        </div>
      </div>
    </div>
  );
}
