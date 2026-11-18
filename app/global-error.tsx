"use client";

import { useEffect } from "react";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">

          <h1 className="text-3xl font-bold">
            Something went wrong
          </h1>

          <p className="text-gray-500">
            We are unable to load the website.
            Please try again.
          </p>

          <button
            onClick={reset}
            className="rounded-full bg-[#D0476B] px-6 py-3 text-white"
          >
            Try again
          </button>

        </main>
      </body>
    </html>
  );
}