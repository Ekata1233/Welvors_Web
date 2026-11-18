"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="p-2 text-[#201C1D] cursor-pointer"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-b border-[#EAE5E2] shadow-lg p-6">

          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#595350] font-medium hover:text-[#D0476B]"
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-[#EAE5E2]" />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[#EAE5E2] px-5 py-3 text-center"
            >
              Log in
            </Link>

            <Link
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#D0476B] px-5 py-3 text-center font-semibold text-white"
            >
              Download app
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}