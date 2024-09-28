/* eslint-disable @typescript-eslint/no-unused-vars */
// Third-party dependencies

// Current project dependencies

/**
 * Represents the response type for the chat analysis API.
 *
 * @type {Object} ChatAnalyzeApiResponse
 * @extends {BaseApiResponse}
 *
 * @property {Flag[]} redFlags - An array of identified red flags with titles and descriptions.
 * @property {Flag[]} greenFlags - An array of identified green flags with titles and descriptions.
 * @property {string} conclusion - A summary conclusion based on the analysis of the chats.
 */
declare type ChatAnalyzeApiResponse = BaseApiResponse & {
  redFlags: Flag[];
  greenFlags: Flag[];
  conclusion: string;
};
