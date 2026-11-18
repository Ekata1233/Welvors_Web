import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">

      <h1 className="text-8xl font-bold text-[#D0476B]">
        404
      </h1>

      <h2 className="text-2xl font-bold">
        Page not found
      </h2>

      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="rounded-full bg-[#D0476B] px-6 py-3 text-white"
      >
        Back to Home
      </Link>

    </section>
  );
}