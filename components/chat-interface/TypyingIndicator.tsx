import React, { memo } from "react";

export const TypingIndicator = memo(() => (
  <div className="flex items-center text-base text-white  px-4 py-2 rounded-2xl max-w-fit shadow-md">
    <span>AI is typing</span>
    <span className="ml-1 typing-dots">.</span>

    <style jsx>{`
      @keyframes dots {
        0% {
          content: "";
        }
        33% {
          content: ".";
        }
        66% {
          content: "..";
        }
        100% {
          content: "...";
        }
      }

      .typing-dots::after {
        content: "...";
        animation: blink 1.2s steps(3, end) infinite;
      }

      @keyframes blink {
        0% {
          content: "";
        }
        33% {
          content: ".";
        }
        66% {
          content: "..";
        }
        100% {
          content: "...";
        }
      }
    `}</style>
  </div>
));

TypingIndicator.displayName = "TypingIndicator";
