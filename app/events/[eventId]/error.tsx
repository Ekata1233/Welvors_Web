"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">

      <h2 className="text-xl font-bold">
        Something went wrong
      </h2>

      <button
        type="button"
        onClick={reset}
        className="cursor-pointer rounded-full bg-[#EE4D78] px-6 py-3 font-semibold text-white"
      >
        Try again
      </button>

    </div>
  );
}