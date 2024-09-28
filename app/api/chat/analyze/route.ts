// Third-party dependencies
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Current project dependencies
import httpStatus from "@/constans/common/httpStatus";

export const POST = async (req: Request) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("API key not found");
    }

    const { messages }: ApiChatAnalyzeBody = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({
        status: httpStatus.ok.code,
        conclusion: "No messages provided for analysis.",
        redFlags: [],
        greenFlags: [],
        success: true,
      });
    }

    const expectedResponse: Pick<
      ChatAnalyzeApiResponse,
      "conclusion" | "redFlags" | "greenFlags"
    > = {
      conclusion: "",
      redFlags: [{ description: "", title: "" }],
      greenFlags: [{ description: "", title: "" }],
    };

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = [
      "Please analyze the following messages:",
      JSON.stringify(messages),
      "The expected response should be similar to this:",
      JSON.stringify(expectedResponse),
      "Please provide a summary in JSON format that includes:",
      "- Overall conclusion",
      "- Red flags",
      "- Green flags",
      "Ensure the JSON format is clear and concise.",
      "The response language should be determined by the messages.",
      "Example, if the messages are in English, the response should be in English too.",
      "Example, if  the messages are in Spanish, the response should be in Spanish too.",
      "Please ensure the response is accurate and does not contain any errors or inaccuracies.",
    ].join("\n");

    const result = await model.generateContent(prompt);

    const rawResponse = result.response.text();
    const cleanedResponse = rawResponse
      .replace(/```/g, "")
      .replace(/json/g, "");

    // Parse the cleaned response as JSON
    let jsonResponse;

    try {
      jsonResponse = JSON.parse(cleanedResponse);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to parse JSON:", error);

      return NextResponse.json({
        status: httpStatus.badRequest.code,
        message: "Invalid JSON response",
      });
    }

    // Use the spread operator to create a new object with the status and response data
    return NextResponse.json({
      status: httpStatus.ok.code,
      ...jsonResponse, // Spread operator to include properties from jsonResponse
    });
  } catch (error) {
    const response: ChatAnalyzeApiResponse = {
      conclusion: "",
      redFlags: [],
      greenFlags: [],
      success: false,
      message: "Something went wrong. Please try again later.",
      status: httpStatus.serverError.code,
    };

    return NextResponse.json(response);
  }
};
