// Third-party dependencies
import axios from "axios";

// Current project dependencies
import apiRoutes from "@/constans/routes/api";
import httpStatus from "@/constans/common/httpStatus";

/**
 * Send a request to analyze a chat.
 *
 * @param body ApiChatAnalyzeBody
 * @description Analyzes the provided chat messages.
 * @returns {Promise<ChatAnalyzeApiResponse>} An object with the response from the API
 */
const analyzeChatService = async (
  body: ApiChatAnalyzeBody,
): Promise<ChatAnalyzeApiResponse> => {
  try {
    const { data, status } = await axios.post(
      apiRoutes.chat.analyze.endpoint,
      body,
    );

    const newResponse: ChatAnalyzeApiResponse = {
      message: data.message,
      redFlags: data.redFlags,
      greenFlags: data.greenFlags,
      conclusion: data.conclusion,
      status: status,
      success: true,
      redirectTo: data.redirectTo,
    };

    return newResponse;
  } catch (err: unknown) {
    const apiAnswer: ChatAnalyzeApiResponse = {
      message: httpStatus.badRequest.message,
      success: false,
      status: httpStatus.badRequest.code,
      conclusion: "",
      redFlags: [],
      greenFlags: [],
    };

    if (axios.isAxiosError(err)) {
      apiAnswer.message = err.response?.data.message;
      apiAnswer.status = err.response?.status || httpStatus.badRequest.code;
    }

    return apiAnswer;
  }
};

export default analyzeChatService;
