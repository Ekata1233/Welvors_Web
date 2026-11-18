import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-7">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="whitespace-nowrap text-[16px] font-medium text-[#595350] transition-colors hover:text-[#D0476B]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}