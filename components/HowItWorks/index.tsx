const HowItWorks = () => {
  return (
    <div className="p-4 mx-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-left">
        How does it work?
      </h2>

      <p className="mt-4 text-gray-700 dark:text-gray-400 text-left">
        This tool analyzes WhatsApp conversations, looking for
        <span className="font-semibold text-red-500"> red flags</span> and
        <span className="font-semibold text-green-500"> green flags </span>
        to provide a conclusion based on the behavior and content of the
        messages.
      </p>

      <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-gray-200 text-left">
        How to Export WhatsApp Conversations?
      </h3>

      <p className="mt-2 text-gray-700 dark:text-gray-400 text-left">
        To export a WhatsApp conversation without media, follow these steps:
      </p>

      <ol className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside text-left">
        <li>Open the chat and tap on the three-dot icon.</li>
        <li>
          Select {`"`}More{`"`} and choose {`"`}Export chat{`"`}.
        </li>
        <li>Opt not to include media when prompted.</li>
      </ol>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-left">
        This will allow you to send the chat to your email as a TXT file,
        including up to 40,000 messages.
      </p>
    </div>
  );
};

export default HowItWorks;
