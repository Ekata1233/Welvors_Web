
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/constants/navigation";
import { GOOGLE_PLAY_URL } from "@/constants/appLinks";
import NavbarAuth from "./NavbarAuth";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="cursor-pointer p-2 text-[#201C1D]"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <nav className="absolute left-0 top-full w-full border-b border-[#EAE5E2] bg-white p-6 shadow-lg">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-medium text-[#595350] hover:text-[#D0476B]"
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-[#EAE5E2]" />

            <NavbarAuth
              mobile
              onNavigate={closeMenu}
            />

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="rounded-full bg-[#D0476B] px-5 py-3 text-center font-semibold text-white"
            >
              Download app
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
