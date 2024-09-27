// Third-party dependencies
import { NextResponse } from "next/server";

// Current project dependencies

export const GET = async () => {
  return NextResponse.json({
    status: "Active",
    message: "Welcome to the API",
  });
};
