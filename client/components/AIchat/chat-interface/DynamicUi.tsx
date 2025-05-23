import { ChatMessage } from "@/types/chat";
import React from "react";
import ChatBubble from "./customUI/Chat";
import BubbleChart from "./customUI/BubbleComp";

interface DynamicMessageRendererProps {
  message: ChatMessage;
}

export const DynamicMessageRenderer: React.FC<DynamicMessageRendererProps> = ({ message }) => {
  switch (message.uiType) {
    case "text":
      return <ChatBubble text={message.text || ""} sender={message.sender} toolName={message.payload?.tool_calls}/>;
    case "bubble_chart":
      return <BubbleChart contractAddress={message.payload?.contractAddress} />;
    default:
      return <span>{message.text}</span>;
  }
};
