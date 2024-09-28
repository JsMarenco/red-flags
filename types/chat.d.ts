// Third-party dependencies

// Current project dependencies

/**
 * Represents a chat conversation.
 *
 * @type {Object} Chat
 * @property {Message[]} messages - Array of messages in the chat conversation.
 * @property {GroupedMessages[]} sortedMessages - Array of grouped messages, where each element represents a group of messages sent in one day
 * @property {string} encryptionMessage - The message about encryption from WhatsApp.
 * @property {string} encryptionDate - The date when the encryption message was sent.
 * @property {number} messagesCount - Total number of messages in the chat conversation.
 */
declare type Chat = {
  messages: Message[];
  sortedMessages: GroupedMessages[];
  encryptionMessage: string;
  encryptionDate: string;
  messagesCount: number;
};

/**
 * Represents a single message in a chat.
 *
 * @type {Object} Message
 * @property {string} sender - The identifier of the message sender. Could be a username or user ID.
 * @property {string} message - The content of the message. This could be plain text, a media URL, or a hyperlink depending on the message type.
 * @property {"text" | "media" | "link"} type - The type of the message.
 *   - "text": Represents a plain text message.
 *   - "media": Represents a message containing media, such as an image or video.
 *   - "link": Represents a message containing a hyperlink.
 * @property {boolean} isSender - Indicates whether the message is sent by the current user or not. This is optional and may be undefined.
 * @property {string} date - The timestamp of when the message was sent, formatted as a string (e.g., "2024-09-26T10:00:00Z").
 * @property {boolean} edited - Indicates whether the message has been edited or not. This is optional and may be undefined.
 *
 * @example
 * const message: Message = {
 *   sender: "user123",
 *   message: "Hello, world!",
 *   type: "text",
 *   isSender: true,
 *   date: "2024-09-26T10:00:00Z",
 *   edited: false
 * };
 */
declare type Message = {
  sender: string;
  message: string;
  type: "text" | "media" | "link";
  isSender: boolean;
  date: string;
  edited: boolean;
};

/**
 * Represents information about the WhatsApp encryption message.
 *
 * @type {Object} EncryptionInfo
 * @property {string} message - The WhatsApp encryption message.
 * @property {string} date - The date associated with the encryption message.
 */
declare type EncryptionInfo = {
  message: string;
  date: string;
};

/**
 * Represents a group of messages sent in one day.
 *
 * @type {Object} GroupedMessages
 * @property {string} date - The date for which the messages are grouped, formatted as a string (e.g., "2024-09-26").
 * @property {Message[]} messages - Array of messages sent on the specified date.
 * @property {number} messageCount - Total number of messages sent on the specified date.
 */
declare type GroupedMessages = {
  date: string;
  messages: Message[];
  messageCount: number;
};

/**
 * Represents a flag with a title and description.
 *
 * @type {Object} Flag
 * @property {string} title - The title of the flag.
 * @property {string} description - A detailed description of the flag.
 */
declare type Flag = {
  title: string;
  description: string;
};
