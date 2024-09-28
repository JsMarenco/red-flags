// Third-party dependencies
import { ScrollShadow } from "@nextui-org/scroll-shadow";

// Current project dependencies
import Message from "../Message";
import PackmanLoader from "../Loaders/Packman";

export default function Chat({ chat }: { chat: Chat | null }) {
  return (
    <ScrollShadow className="w-full overflow-x-hidden h-full flex flex-col gap-2 p-2 rounded-lg bg-[#F0F3F5] dark:bg-[#1B1B1E]">
      {chat ? (
        chat.sortedMessages.map((day, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h2 className="text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow-lg p-2 w-auto mx-auto">
              {day.date}
            </h2>

            {day.messages.map((msg, index) => (
              <Message
                key={index}
                date={msg.date}
                edited={msg.edited}
                isSender={msg.isSender}
                message={msg.message}
                sender={msg.sender}
                type={msg.type}
              />
            ))}
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <PackmanLoader />

          <p className="text-lg mt-4 font-medium text-gray-600 dark:text-gray-300">
            No chat has been loaded yet
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please upload a chat file to get started.
          </p>
        </div>
      )}
    </ScrollShadow>
  );
}
