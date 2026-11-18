import Link from "next/link";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EAE5E2] bg-white">

      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between gap-8 px-6">

        {/* Logo and Navigation */}
        <div className="flex items-center gap-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#D0476B] font-serif text-xl font-bold text-white">
              W
            </div>

            <span className="font-serif text-[28px] font-bold tracking-tight text-[#201C1D]">
              Welvors
            </span>

          </Link>

          {/* Desktop Navbar */}
          <Navbar />

        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          <Link
            href="/login"
            className="rounded-full border border-[#EAE5E2] px-5 py-2.5 text-[15px] font-medium text-[#201C1D] transition-colors hover:bg-gray-50"
          >
            Log in
          </Link>

          <Link
            href="/#download"
            className="rounded-full bg-[#D0476B] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#B83C5D]"
          >
            Download app
          </Link>

        </div>

        {/* Mobile Navbar */}
        <MobileNavbar />

      </div>

    </header>
  );
}