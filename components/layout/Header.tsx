
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EAE5E2] bg-white">
      <div className="mx-auto flex h-[74px] w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:gap-8 lg:px-10">

        {/* Logo and Navigation */}
        <div className="flex min-w-0 items-center gap-6 lg:gap-10">

          {/* Welvors Logo */}
          <Link
            href="/"
            aria-label="Welvors Home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="https://ik.imagekit.io/r0vb3de74/welvorlslogo.png"
              alt="Welvors Logo"
              width={170}
              height={55}
              priority
              unoptimized
              className="h-auto w-[125px] object-contain sm:w-[145px] lg:w-[170px]"
            />
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
