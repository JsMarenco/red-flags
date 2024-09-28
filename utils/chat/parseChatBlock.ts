// Third-party dependencies

// Current project dependencies
import extractWhatsAppMessage from "./extractWhatsAppMessage";
import groupMessagesByDay from "./groupMessagesByDay";
import parseChatMessage from "./parseChatMessage";

/**
 * Parses a block of chat messages and returns an array of Message objects.
 *
 * @param {string} chatBlock - The input string containing multiple chat messages.
 * @returns {Chat} - An array of parsed Message objects.
 *
 * @example
 * const chatBlock = `
 * 01/01/23, 1:23 pm - Sender 1: Hello
 * 01/01/23, 1:24 pm - Sender 2: Hi there
 * 01/01/23, 1:25 pm - Sender 1: How are you?
 * `;
 */
const parseChatBlock = (chatBlock: string): Chat => {
  const encryptionInfo = extractWhatsAppMessage(chatBlock);
  const matchedMessages = matchMessages(chatBlock);
  const mainSender = extractMainSender(matchedMessages);
  const messages = parseMessages(matchedMessages, mainSender);
  const sortedMessages = groupMessagesByDay(messages);
  const totalMessagesCount = sortedMessages.reduce(
    (total, day) => total + day.messageCount,
    0,
  );

  return {
    encryptionDate: encryptionInfo.date,
    encryptionMessage: encryptionInfo.message,
    messages,
    sortedMessages,
    messagesCount: totalMessagesCount,
  };
};

/**
 * Matches messages from the chat block using a regex pattern.
 *
 * @param {string} chatBlock - The input string containing chat messages.
 * @returns {string[]} - An array of matched message strings.
 */
const matchMessages = (chatBlock: string): string[] => {
  // Split the input string by line breaks to get individual lines
  const lines = chatBlock.split("\n");

  // Initialize an array to hold formatted messages
  const messages: string[] = [];

  // Variable to hold the current message being built
  let currentMessage = "";

  // Loop through each line to build messages

  // Loop through each line to build messages
  for (const line of lines) {
    // Trim the line to avoid leading/trailing spaces
    const trimmedLine = line.trim();

    // Check if the line contains a date, time, and a sender
    const messagePattern =
      /^(\d{1,2}\/\d{1,2}\/\d{2,4}),?\s*(\d{1,2}:\d{2}\s?[APap][mM])\s*-\s*([^:]+):\s*(.*?)(?=\n\d{1,2}\/\d{1,2}\/\d{2,4}|$)/s;

    if (messagePattern.test(trimmedLine)) {
      // If there is a current message being built, add it to the messages array
      if (currentMessage) {
        messages.push(currentMessage);
      }
      // Start a new message
      currentMessage = trimmedLine; // Reset currentMessage with the new line
    } else if (currentMessage) {
      // If it's not a new message and we have a current message, append this line to it
      currentMessage += " " + trimmedLine; // Append the trimmed line
    }
  }

  // Push any remaining current message to messages
  if (currentMessage) {
    messages.push(currentMessage);
  }

  return messages; // Return the array of messages
};

/**
 * Extracts the main sender from the first matched message.
 *
 * @param {string[]} matchedMessages - An array of matched message strings.
 * @returns {string} - The main sender's name.
 * @throws {Error} - Throws an error if the main sender is invalid.
 */
const extractMainSender = (matchedMessages: string[]): string => {
  if (matchedMessages.length === 0) {
    throw new Error("No matched messages found");
  }

  const firstMatchedMessage = matchedMessages[0];
  const senderPart = firstMatchedMessage.split(" - ")[1];

  if (!senderPart) {
    throw new Error("Invalid first matched message");
  }

  const mainSender = senderPart.split(":")[0].trim();

  if (!mainSender) {
    throw new Error("Invalid main sender");
  }

  return mainSender;
};

/**
 * Parses valid messages into Message objects.
 *
 * @param {string[]} matchedMessages - An array of matched message strings.
 * @param {string} mainSender - The main sender's name.
 * @returns {Message[]} - An array of parsed Message objects.
 */
const parseMessages = (
  matchedMessages: string[],
  mainSender: string,
): Message[] => {
  return matchedMessages
    .filter(
      (line) => !line.includes("Messages and calls are end-to-end encrypted"),
    )
    .map((line) => {
      try {
        return parseChatMessage(line, mainSender);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error parsing message:", error);

        return null;
      }
    })
    .filter((message) => message !== null) as Message[]; // Type assertion to Message[]
};

export default parseChatBlock;
