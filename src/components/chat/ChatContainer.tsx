"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import Image from "next/image";
import { useRef, useEffect, useMemo, useState } from "react";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import { SuggestedQuestions } from "./SuggestedQuestions";

export function ChatContainer() {
  const [rateLimited, setRateLimited] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const transport = useMemo(
    () => new TextStreamChatTransport({ api: "/api/chat" }),
    []
  );

  const { messages, sendMessage, status } = useChat({
    transport,
    onError(error) {
      if (error.message.includes("429") || error.message.includes("rate_limit")) {
        setRateLimited(true);
        setErrorMessage("本日の利用上限（5回）に達しました。明日またお試しください。");
      } else {
        setErrorMessage("エラーが発生しました。しばらくしてからお試しください。");
      }
    },
  });

  const isLoading = status === "submitted" || status === "streaming";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSend = (content: string) => {
    if (rateLimited) return;
    setErrorMessage(null);
    sendMessage({ text: content });
  };

  // Find the first user message for follow-up context
  const firstUserMessage = messages.find((m) => m.role === "user");
  const firstUserText = firstUserMessage?.parts
    ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");

  // Show follow-ups when AI has finished responding
  const lastMessage = messages[messages.length - 1];
  const showFollowUp =
    messages.length > 0 &&
    lastMessage?.role === "assistant" &&
    status === "ready";

  return (
    <div className="flex h-full flex-col">
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <Image
              src="/sanae.png"
              alt="サナ活"
              width={96}
              height={96}
              className="rounded-full opacity-90"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                サナ活 AI チャット
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                政治の基本から最新ニュースまで、やさしく回答します
              </p>
            </div>
            <SuggestedQuestions onSelect={handleSend} />
          </div>
        ) : (
          <>
            {messages.map((m) => (
              <MessageBubble
                key={m.id}
                role={m.role as "user" | "assistant"}
                content={
                  m.parts
                    ?.filter(
                      (p): p is { type: "text"; text: string } =>
                        p.type === "text"
                    )
                    .map((p) => p.text)
                    .join("") ?? ""
                }
              />
            ))}
          </>
        )}
        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-500">
              <span className="animate-pulse">回答を生成中...</span>
            </div>
          </div>
        )}
        {errorMessage && (
          <div className="flex justify-center">
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          </div>
        )}
        {showFollowUp && !rateLimited && (
          <div className="pt-2">
            <SuggestedQuestions
              onSelect={handleSend}
              lastUserMessage={firstUserText}
            />
          </div>
        )}
      </div>

      <div className="sticky bottom-0 border-t border-gray-200 bg-white p-4">
        <ChatInput onSubmit={handleSend} isLoading={isLoading || rateLimited} />
        {rateLimited && (
          <p className="mt-2 text-center text-xs text-gray-400">
            本日の利用上限に達しました
          </p>
        )}
      </div>
    </div>
  );
}
