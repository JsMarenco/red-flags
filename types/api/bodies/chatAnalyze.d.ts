// Third-party dependencies

// Current project dependencies

/**
 * Represents the request body structure for chat analysis API.
 *
 * @type {Object} ApiChatAnalyzeBody
 * @property {Pick<Message, "sender" | "message">[]} messages - An array of messages to be analyzed.
 */
declare type ApiChatAnalyzeBody = {
  messages: Pick<Message, "sender" | "message">[];
};
