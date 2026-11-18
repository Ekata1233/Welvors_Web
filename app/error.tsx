"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <AlertCircle size={48} className="text-[#D0476B]" />

      <h2 className="text-2xl font-bold">
        Something went wrong
      </h2>

      <p className="text-gray-500">
        Please try again in a moment.
      </p>

      <button
        onClick={reset}
        className="rounded-full bg-[#D0476B] px-6 py-3 font-medium text-white"
      >
        Try again
      </button>
    </section>
  );
}