import Link from "next/link";
import {
  DOWNLOAD_LINKS,
  COMPANY_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "@/constants/footer";

type FooterLink = {
  label: string;
  href: string;
};

// Reusable footer link section
function FooterLinkSection({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-[2px] text-[#969091]">
        {title}
      </h2>

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[16px] text-[#D2CCCD] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function Footer() {
  "use cache";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1C1819] text-[#A9A3A4]">
      <div className="mx-auto max-w-[1280px] px-6 pb-7 pt-16 lg:pt-[68px]">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.15fr] lg:gap-12">

          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#D0476B] font-serif text-xl font-bold text-white">
                W
              </span>

              <span className="font-serif text-xl font-bold text-[#F5F0F1]">
                Welvors
              </span>
            </Link>

            <p className="mb-3 text-[15px] leading-6">
              A dating and matrimony platform built on
              authenticity, privacy, security and trust.
            </p>

            <p className="text-[15px] leading-6">
              Welvors is owned and operated by Infynod
              Tech Private Limited, Pune.
              <br />
              CIN U62020PN2026PTC258333
            </p>

            {/* Social Media Links */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map((social) =>
                social.href ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#484344] text-[13px] font-semibold text-[#D2CCCD] transition-colors duration-200 hover:border-[#D0476B] hover:bg-[#D0476B] hover:text-white"
                  >
                    {social.label}
                  </a>
                ) : (
                  <span
                    key={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#484344] text-[13px] font-semibold text-[#D2CCCD]"
                  >
                    {social.label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Download and Support Section */}
          <div>
            <FooterLinkSection
              title="Download App"
              links={DOWNLOAD_LINKS}
            />

            <div className="mt-8">
              <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[2px] text-[#969091]">
                Support
              </h2>

              <a
                href="mailto:support@welvors.com"
                className="break-all text-[16px] text-[#D2CCCD] transition-colors hover:text-white"
              >
                support@welvors.com
              </a>
            </div>
          </div>

          {/* Company Section */}
          <FooterLinkSection
            title="Company"
            links={COMPANY_LINKS}
          />

          {/* Legal and Safety Section */}
          <FooterLinkSection
            title="Legal & Safety"
            links={LEGAL_LINKS}
          />
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#3B3536] pt-6 text-[14px] text-[#969091] md:flex-row md:items-center md:justify-between">

          <p>
            © {currentYear} Infynod Tech Private Limited.
            All rights reserved.
          </p>

          <p>Made with care in India.</p>

        </div>
      </div>
    </footer>
  );
}