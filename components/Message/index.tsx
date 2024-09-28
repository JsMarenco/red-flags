// Third-party dependencies

// Current project dependencies

const Message: React.FC<Message> = ({
  message,
  date,
  type,
  edited,
  sender,
  isSender,
}) => {
  // Define the styles for sender and receiver containers
  const senderContainerStyles =
    "bg-[#FEFEFF] text-black self-end text-right dark:bg-[#015C4D] dark:text-white";
  const receiverContainerStyles =
    "bg-[#834DFE] text-white self-start text-left dark:bg-[#1E2D32] dark:text-white";

  // Styles for labels and messages
  const senderLabelStyles = "text-black dark:text-white";
  const receiverLabelStyles = "text-white dark:text-white";

  const messageStyles = `p-2 max-w-[45%] shadow-xl rounded-lg ${
    isSender ? senderContainerStyles : receiverContainerStyles
  }`;

  return (
    <div className={messageStyles}>
      <div
        className={`font-bold text-sm ${isSender ? senderLabelStyles : receiverLabelStyles}`}
      >
        {sender}
      </div>

      {/* Render message based on its type */}
      {type === "text" && (
        <p
          className={`text-sm ${isSender ? senderLabelStyles : receiverLabelStyles}`}
        >
          {message}
        </p>
      )}

      {type === "media" && (
        <p
          className={`italic text-sm ${isSender ? senderLabelStyles : receiverLabelStyles}`}
        >
          {message}
        </p>
      )}

      {type === "link" && (
        <a
          className={`underline block break-words text-sm ${isSender ? senderLabelStyles : receiverLabelStyles}`}
          href={message}
          rel="noopener noreferrer"
          target="_blank"
        >
          {message}
        </a>
      )}

      {/* Date and edited status */}
      <div className="flex items-center justify-end gap-2">
        {edited && (
          <span
            className={`block text-xs ${isSender ? senderLabelStyles : receiverLabelStyles}`}
          >
            <i>edited</i>
          </span>
        )}

        <span
          className={`block text-xs ${isSender ? senderLabelStyles : receiverLabelStyles}`}
        >
          {date}
        </span>
      </div>
    </div>
  );
};

export default Message;
