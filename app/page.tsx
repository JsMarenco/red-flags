// Third-party dependencies

import { Button } from "@nextui-org/button";
import Link from "next/link";

import appRoutes from "@/constans/routes/app";

// Current project dependencies

export default function Home() {
  return (
    <>
      <div className="h-screen absolute w-full z-10 bg-transparent top-0 bottom-0 left-0 right-0 mx-auto">
        <div className="flex flex-col items-center justify-center h-full text-white px-6 bg-transparent">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-sm">
            Is she / he the right one for you?
          </h1>

          <p className="text-md md:text-lg mb-8 text-center opacity-80">
            Let AI analyze your chat for relationship insights.
          </p>

          <Link href={appRoutes.chatAnalyze.router}>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-5 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
              color="primary"
              size="lg"
            >
              Analyze My Chat
            </Button>
          </Link>
        </div>
      </div>

      <div className="app_bg bg-black" />

      <div className="star-field z-1">
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
      </div>
    </>
  );
}
