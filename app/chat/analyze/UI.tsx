// Third-party dependencies
import { Button } from "@nextui-org/button";
import { FiFile } from "react-icons/fi";

// Current project dependencies
import Conversation from "@/components/Chat";
import BookLoader from "@/components/Loaders/Book";
import AnalysisResults from "@/components/AnalysisResults";
import HowItWorks from "@/components/HowItWorks";
import ProductHuntBadge from "@/components/ProductHuntBadge";

export default function AnalyzePageUI({
  handleFileChange,
  chat,
  handleAnalyze,
  analyzeResult,
  isLoading,
  fileInputRef,
  handleFileUploadClick,
  handleAnalyzeNewChat,
}: {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chat: Chat | null;
  handleAnalyze: () => void;
  analyzeResult: ChatAnalyzeApiResponse | null;
  isLoading: boolean;
  handleFileUploadClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleAnalyzeNewChat: () => void;
}) {
  return (
    <div className="fixed max-h-screen top-0 left-0 right-0 z-20 flex flex-col flex-shrink-0 h-auto md:h-screen overflow-y-auto py-20 font-normal">
      {isLoading && (
        <div className="z-30 fixed backdrop-blur-lg top-0 bottom-0 left-0 right-0 mx-auto flex items-center justify-center">
          <BookLoader />
        </div>
      )}

      <div className="max-w-[1330px] w-full h-full px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`${analyzeResult ? "justify-between" : "justify-center"} w-full h-full flex flex-col items-center gap-2 p-2 rounded-lg overflow-y-auto`}
        >
          {!analyzeResult && <HowItWorks />}

          <div>
            {!chat && (
              <div className="flex flex-col items-center justify-center gap-4">
                <input
                  ref={fileInputRef}
                  accept=".txt"
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                />

                <Button
                  className="w-full max-w-xs flex"
                  size="md"
                  startContent={<FiFile />}
                  onClick={handleFileUploadClick}
                >
                  Upload Whatsapp chat
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Upload a conversation file in .txt format to start the
                  analysis.
                </p>
              </div>
            )}

            {analyzeResult && <AnalysisResults analyzeResult={analyzeResult} />}
          </div>

          <div className="w-full flex items-center justify-center gap-2 mt-2">
            {chat && !analyzeResult && (
              <Button
                className="w-full max-w-xs flex"
                size="md"
                onClick={handleAnalyze}
              >
                Analyze
              </Button>
            )}

            {analyzeResult && (
              <Button
                className="w-full max-w-xs flex"
                size="md"
                onClick={handleAnalyzeNewChat}
              >
                Analyze new chat
              </Button>
            )}
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2 justify-center items-center overflow-y-auto">
          <Conversation chat={chat} />

          <ProductHuntBadge />
        </div>
      </div>
    </div>
  );
}
