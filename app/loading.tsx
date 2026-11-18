import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-3"
    >
      <LoaderCircle
        size={36}
        className="animate-spin text-[#D0476B]"
      />

      <p className="text-sm text-gray-500">
        Loading...
      </p>
    </div>
  );
}