"use client";

// Third-party dependencies
import { useState, useRef } from "react";

// Current project dependencies
import AnalyzePageUI from "./UI";

import parseChatBlock from "@/utils/chat/parseChatBlock";
import analyzeChatService from "@/services/app/chat/analyze";

export default function AnalyzePage() {
  const [chat, setChat] = useState<Chat | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messageToSend, setMessageToSend] = useState<number>(90);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analyzeResult, setAnalyzeResult] =
    useState<ChatAnalyzeApiResponse | null>(null);

  /**
   * Handles the file input change event to read and parse the uploaded text file.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target?.result as string;

        try {
          // Parse the content as JSON and update the chat state
          const chat = parseChatBlock(fileContent);

          // Update the chat state with the new chat content
          setChat(chat);

          // Reset the file input value to allow re-uploading the same file
          event.target.value = ""; // This line allows re-uploading the same file
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Failed to parse the file content", error);
        }
      };

      reader.readAsText(file);
    }

    setIsLoading(false);
  };

  /**
   * Handles analyzing the chat data to print the last `messageToSend` messages or fewer.
   */
  const handleAnalyze = async () => {
    if (!chat) {
      // eslint-disable-next-line no-console
      console.warn("No chat data available to analyze.");

      return;
    }

    setIsLoading(true);

    // Get the total number of messages
    const totalMessages = chat.messages.length;

    // Determine the number of messages to display, based on state
    // It will show the lesser between `messageToSend` and `totalMessages`
    const messagesToDisplay = Math.min(messageToSend, totalMessages);

    // Extract the last `messagesToDisplay` messages
    const lastMessages = chat.messages.slice(-messagesToDisplay);

    const messages: Pick<Message, "sender" | "message">[] = lastMessages.map(
      (msg: Message): Pick<Message, "sender" | "message"> => {
        return {
          message: msg.message,
          sender: msg.sender,
        };
      },
    );

    const body: ApiChatAnalyzeBody = {
      messages: messages,
    };

    const data = await analyzeChatService(body);

    setAnalyzeResult(data);

    setIsLoading(false);
  };

  /**
   * Handles the click event to trigger the file input dialog.
   */
  const handleFileUploadClick = () => {
    setIsLoading(true);
    fileInputRef.current?.click();
    setIsLoading(false);
  };

  /**
   * Handles the event to reload the page for analyzing a new chat.
   */
  const handleAnalyzeNewChat = () => {
    window.location.reload();
  };

  return (
    <AnalyzePageUI
      analyzeResult={analyzeResult}
      chat={chat}
      fileInputRef={fileInputRef}
      handleAnalyze={handleAnalyze}
      handleAnalyzeNewChat={handleAnalyzeNewChat}
      handleFileChange={handleFileChange}
      handleFileUploadClick={handleFileUploadClick}
      isLoading={isLoading}
    />
  );
}
