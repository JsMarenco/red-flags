// Third-party dependencies

// Current project dependencies

/**
 * Extracts the WhatsApp message about encryption from the chat block.
 *
 * @param {string} chatBlock - The input string containing multiple chat messages.
 * @returns {EncryptionInfo} - The extracted WhatsApp message about encryption and its date or an empty object if not found.
 */
const extractWhatsAppMessage = (chatBlock: string): EncryptionInfo => {
  // Define a regex pattern to match the date, time, and the specific WhatsApp message about encryption
  const combinedRegex =
    /(\d{2}\/\d{2}\/\d{2}, \d{1,2}:\d{2}\s?[ap]m) - Messages and calls are end-to-end encrypted\. No one outside of this chat, not even WhatsApp, can read or listen to them\. Tap to learn more\./;

  // Split the input block into individual lines based on line breaks
  const lines = chatBlock.split("\n").filter((line) => line.trim() !== "");

  // Search for the combined pattern in the lines using regex
  for (const line of lines) {
    const match = line.match(combinedRegex);

    if (match) {
      // If a match is found, return the message and date
      return {
        message:
          "Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.",
        date: match[1], // Use the captured date from the match
      };
    }
  }

  // Return an empty object if the message is not found
  return {
    message: "",
    date: "",
  };
};

export default extractWhatsAppMessage;
