"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { addMessage, updateMessage, setIsProcessing, setInput, setThreadId } from "@/store/chatSlice";


import { useChatMutation } from "@/hooks/useChatMutation";

import { useWalletContext } from "@/lib/walletContext";
import { MessageList } from "./MessageList";

export default function ChatBox() {
    const { publicKey } = useWalletContext();
    const dispatch = useDispatch<AppDispatch>();
    const messages = useSelector((state: RootState) => state.chat.messages);
    const input = useSelector((state: RootState) => state.chat.input);
    const isProcessing = useSelector((state: RootState) => state.chat.isProcessing);
    const threadId = useSelector((state: RootState) => state.chat.threadId);
    const processedInputs = useRef<Set<string>>(new Set());

    const missariEnabled = useSelector((state: RootState) => state.chat.missariEnabled);
    const mutation = useChatMutation(publicKey, threadId, missariEnabled);


    useEffect(() => {
        const processMessage = async () => {
            if (!input || isProcessing || processedInputs.current.has(input)) {
                return;
            }

            const timestamp = Date.now();
            const messageId = `user-${timestamp}`;
            const aiMessageId = `ai-${timestamp}`;

            try {
                processedInputs.current.add(input);
                dispatch(setIsProcessing(true));
                dispatch(
                    addMessage({
                        id: messageId,
                        sender: "user",
                        text: input,
                        timestamp,
                    })
                );
                dispatch(
                    addMessage({
                        id: aiMessageId,
                        sender: "ai",
                        text: "",
                        timestamp: timestamp + 1,
                    })
                );

                const aiResponse = await mutation.mutateAsync(input);
                console.log("aipresponse", aiResponse);
                dispatch(
                    updateMessage({
                        id: aiMessageId,
                        text: aiResponse.messages || "",
                        uiType: aiResponse.uiType,
                        payload: aiResponse.output,
                    })
                );
                dispatch(setInput(""));
                if (aiResponse.threadId) {
                    dispatch(setThreadId(aiResponse.threadId));
                }
            } catch (error) {
                console.error("Error processing message:", error);
                dispatch(
                    updateMessage({
                        id: aiMessageId,
                        text: "Error: Unable to fetch AI response.",
                    })
                );
            } finally {
                dispatch(setIsProcessing(false));
            }
        };

        processMessage();
    }, [input, dispatch, mutation, isProcessing]);

    const sortedMessages = [...messages].sort((a, b) => a.timestamp - b.timestamp);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col w-full max-h-[calc(100vh-5rem)] bg-transparent overflow-y-auto rounded-lg  shadow-md p-4 mb-4 space-y-2 no-scrollbar"
        >
            <MessageList messages={sortedMessages} userAddress={publicKey || ""} />
        </motion.div>
    );
}