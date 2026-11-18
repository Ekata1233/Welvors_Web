import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PassHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,#74346F_0%,transparent_35%),linear-gradient(15deg,#29186B_0%,#342081_35%,#4931AC_65%,#8965EE_100%)] px-4 pt-10 pb-6 md:px-6 md:pt-[74px] md:pb-7">

      {/* Back Button */}
      <Link
        href="/events"
        aria-label="Back to events"
        className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
      >
        <ChevronLeft size={26} strokeWidth={2.5} />
      </Link>

      {/* Hero Card */}
      <div className="relative rounded-[28px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:p-5">

        {/* Top Section */}
        <div className="flex items-center justify-between gap-2">

          <p className="text-[11px] leading-[18px] font-bold tracking-[1.2px] text-white/80 md:text-[13px]">
            WELVORS · EVENTS PASS
          </p>

          {/* Member Badge */}
          <span className="inline-flex h-[26px] shrink-0 items-center rounded-full bg-[#FFDA65] px-[10px] text-[11px] font-bold text-[#644400] md:text-[12px]">
            ★ MEMBER
          </span>

        </div>

        {/* Main Heading */}
        <h1 className="mt-3 text-[28px] leading-[32px] font-bold tracking-[-0.5px] text-white md:text-[34px] md:leading-[37px]">
          Go out more.
          <br />
          Pay less. Meet better.
        </h1>

        {/* Description */}
        <p className="mt-3 text-[14px] leading-[20px] text-white/85 md:text-[16px]">
          For people who&apos;d rather meet in real life
          than swipe all week.
        </p>

        {/* Highlight Badges */}
        <div className="mt-4 flex flex-wrap items-center gap-2">

          {[
            "₹0 fees",
            "15% off every event",
            "48h early access",
          ].map((label) => (
            <span
              key={label}
              className="inline-flex min-h-[28px] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white md:text-[13px]"
            >
              {label}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}