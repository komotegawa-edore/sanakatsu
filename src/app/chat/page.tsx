import { ChatContainer } from "@/components/chat/ChatContainer";

export const metadata = {
  title: "AIチャット | サナ活",
  description: "高市早苗に関するニュースについてAIに質問",
};

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <ChatContainer />
    </div>
  );
}
