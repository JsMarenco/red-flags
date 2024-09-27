// Third-party dependencies
import Link from "next/link";
import { Button } from "@nextui-org/button";

// Current project dependencies

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-bold">404 - Not Found</h2>

        <p className="mt-4 text-lg">Could not find the requested resource</p>

        <Link className="mt-4 block" href="/">
          <Button variant="solid">Go home</Button>
        </Link>
      </div>
    </div>
  );
}
