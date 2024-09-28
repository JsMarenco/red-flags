// Third-party dependencies

// Current project dependencies

/**
 * Parses a single chat message string and returns a Message object.
 *
 * @param {string} chatString - The input chat message string in the format "dd/MM/yy, hh:mm a - sender: message".
 * @param {string} mainSender - The main sender's name to determine the alignment of the message.
 * @throws {Error} - If the input string does not match the expected format.
 * @returns {Message} - A parsed Message object with the appropriate properties.
 */
const parseChatMessage = (chatString: string, mainSender: string): Message => {
  // Regular expression to match the chat message format
  const regex =
    /^(\d{1,2}\/\d{1,2}\/\d{2,4}),?\s*(\d{1,2}:\d{2}\s?[APap][mM])\s*-\s*([^:]+):\s*(.*?)(?=\n\d{1,2}\/\d{1,2}\/\d{2,4}|$)/s;

  const match = chatString.match(regex);

  if (!match) {
    throw new Error("Invalid chat message format");
  }

  // Destructuring the match to obtain the relevant parts
  const [, datePart, timePart, sender, actualMessage] = match;

  // Combine date and time for a complete timestamp
  const dateString = `${datePart} ${timePart}`;

  // Initialize the variable to determine if the message was edited
  let isEdited = false;

  // Check if the message contains the indication that it was edited
  if (actualMessage.includes("<This message was edited>")) {
    isEdited = true;
  }

  // Determine the message type based on the content
  let type: "text" | "media" | "link" = "text"; // Default to text

  if (actualMessage === "<Media omitted>") {
    type = "media";
  } else if (actualMessage.startsWith("http")) {
    type = "link";
  }

  const message: Message = {
    sender: sender.trim(),
    message: actualMessage
      .trim()
      .replace("<This message was edited>", "")
      .trim(),
    type,
    isSender: sender.toLowerCase().includes(mainSender),
    date: dateString,
    edited: isEdited,
  };

  return message;
};

export default parseChatMessage;
