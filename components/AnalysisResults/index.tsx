// Third-party dependencies

// Current project dependencies
import Flags from "@/components/Flags";

const AnalysisResults = ({
  analyzeResult,
}: {
  analyzeResult: ChatAnalyzeApiResponse;
}) => {
  return (
    <div className="col-span-1 md:col-span-2 mt-4">
      <h2 className="text-center font-bold text-lg">Analysis Results</h2>

      <div className="mt-8">
        <h3 className="font-semibold text-red-700 text-lg">Red Flags</h3>
        {analyzeResult.redFlags && analyzeResult.redFlags.length > 0 ? (
          <Flags flags={analyzeResult.redFlags} isGreen={false} />
        ) : (
          <p className="mt-2 text-gray-500 text-sm text-center">
            No red flags found.
          </p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-green-700 text-lg">Green Flags</h3>
        {analyzeResult.greenFlags && analyzeResult.greenFlags.length > 0 ? (
          <Flags flags={analyzeResult.greenFlags} isGreen={true} />
        ) : (
          <p className="mt-2 text-gray-500 text-sm text-center">
            No green flags found.
          </p>
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Conclusion</h3>
        <p>{analyzeResult.conclusion}</p>
      </div>
    </div>
  );
};

export default AnalysisResults;
