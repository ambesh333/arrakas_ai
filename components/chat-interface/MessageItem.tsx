import { motion } from "framer-motion";
import React, { memo } from "react";

import { ChatMessage } from "@/types/chat";
import { TypingIndicator } from "./TypyingIndicator";
import ChatBubble from "./customUI/Chat";
import { DynamicMessageRenderer } from "./DynamicUi";

interface MessageItemProps {
  message: ChatMessage;
  userAddress?: string;
}

const MessageItem: React.FC<MessageItemProps> = memo(({ message, userAddress }) => {
  const isTyping = message.sender === "ai" && !message.text && !message.uiType;

  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isTyping || message.sender === "ai" ? "justify-start" : "justify-end"}`}
    >
      <div className="w-full max-w-md">
        {isTyping ? (
          <TypingIndicator />
        ) : message.uiType ? (
          <DynamicMessageRenderer message={message} />
        ) : (
          <ChatBubble text={message.text || ""} sender={message.sender} userAddress={userAddress} />
        )}
      </div>
    </motion.div>
  );
});

MessageItem.displayName = "MessageItem";

export default MessageItem;
