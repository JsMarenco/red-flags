// Third-party dependencies

// Current project dependencies

/**
 * Function to group and sort messages by day.
 *
 * @param {Message[]} messages - Array of message objects.
 * @returns {GroupedMessages[]} - Array of objects representing messages grouped by date.
 */
const groupMessagesByDay = (messages: Message[]): GroupedMessages[] => {
  const groupedMessages: { [key: string]: GroupedMessages } = {};

  // Iterate over each message to group them by day.
  messages.forEach((message: Message) => {
    const date = message.date.split(" ")[0]; // Extract the date part, e.g., '2024-09-26'

    if (!groupedMessages[date]) {
      groupedMessages[date] = {
        date,
        messages: [],
        messageCount: 0,
      };
    }

    groupedMessages[date].messages.push(message);
    groupedMessages[date].messageCount++;
  });

  // Convert groupedMessages object to an array and sort by date.
  return Object.values(groupedMessages);
};

export default groupMessagesByDay;
