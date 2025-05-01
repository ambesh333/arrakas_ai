// hooks/useChatMutation.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const baseEndpoint = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8001";

export const useChatMutation = (
  address: any,
  threadId: string | null,
  missariEnabled: boolean
) => {
  return useMutation({
    mutationFn: async (userInput: string) => {
      const endpoint = missariEnabled ? "messari/chat" : "v1/agent/chat";

      const requestBody = missariEnabled
        ? { prompt: userInput, stream: false }
        : { content: userInput, userId: address };

      const response = await axios.post(
        `${baseEndpoint}/${endpoint}`,
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );

      const output = {
        messages: response.data.messages,
        uiType: response.data.uiType || "text",
        output: {
          receiverAddress: response.data?.walletAddress,
          amount: response.data?.amount,
          symbol: response.data?.token,
          tool_calls: response.data?.tool_calls,
          trxn: response.data?.trxn,
          prediction: response.data?.prediction,
        },
        threadId: response.data.threadId,
      };

      return output;
    },
  });
};
