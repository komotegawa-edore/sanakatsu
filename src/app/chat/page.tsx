import { ChatContainer } from "@/components/chat/ChatContainer";

export const metadata = {
  title: "AIチャット | サナ活",
  description: "政治の基本から最新ニュースまでAIに質問",
};

export default function ChatPage() {
  return (
    <div className="-mb-16 h-[calc(100dvh-3.5rem)] overflow-hidden">
      <ChatContainer />
    </div>
  );
}
