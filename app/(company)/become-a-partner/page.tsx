
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import PartnerApplicationForm from "@/features/company/components/PartnerApplicationForm";

export const metadata: Metadata = {
  title: "Become a Partner | Welvors",
  description:
    "Partner with Welvors to host safe, curated singles events and create meaningful real-life connections.",
};

const partnerTypes = [
  {
    title: "Venue partners",
    description:
      "cafés, restaurants, and lounges that can host small, safe gatherings.",
  },
  {
    title: "Event hosts",
    description:
      "experienced hosts who can run warm, well-organised singles events.",
  },
  {
    title: "City partners",
    description:
      "local teams who own events end-to-end in their city.",
  },
];

const whyPartner = [
  {
    title: "A community that shows up",
    description:
      "verified, intent-driven members, not walk-ins.",
  },
  {
    title: "Safety handled",
    description:
      "verified guests, clear guidelines, and support on the ground.",
  },
  {
    title: "Shared growth",
    description:
      "transparent revenue share and repeat events as your city grows.",
  },
  {
    title: "Brand backing",
    description:
      "marketing, booking, and check-in all run through Welvors.",
  },
];

const steps = [
  {
    title: "1. Apply",
    description:
      "tell us about you and your city using the form below.",
  },
  {
    title: "2. Chat",
    description:
      "a quick call to align on format, capacity, and safety.",
  },
  {
    title: "3. Onboard",
    description:
      "we set you up with the tools, guidelines, and a first event.",
  },
  {
    title: "4. Host & grow",
    description:
      "run events, get paid, and scale with demand.",
  },
];

const requirements = [
  "A safe, welcoming space or a track record of running good events.",
  "Reliability — our members trust us, and we extend that trust to you.",
  "A genuine care for creating real connections, not just filling seats.",
];

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#302a29] sm:text-[28px]">
      {children}
    </h2>
  );
}

function HighlightList({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
      {items.map((item) => (
        <li key={item.title}>
          <strong className="font-semibold text-[#d20853]">
            {item.title}
          </strong>{" "}
          — {item.description}
        </li>
      ))}
    </ul>
  );
}

export default function BecomePartnerPage() {
  return (
    <main className="min-h-screen bg-[#faf7f4] text-[#302a29]">
      {/* Header */}
      <header className="border-b border-[#ebe3dd]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Breadcrumb"
              className="text-[13px] text-[#978b83]"
            >
              <Link href="/" className="hover:text-[#d20853]">
                Welvors
              </Link>
              <span className="mx-1.5">›</span>
              <span>Company</span>
              <span className="mx-1.5">›</span>
              <span>Become a partner</span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#d20853] hover:text-[#aa0640]"
            >
              <ArrowLeft size={15} />
              Back to Welvors
            </Link>
          </div>

          <span className="mt-7 inline-flex rounded-full border border-[#efc6d5] bg-[#fbeaf0] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[1.8px] text-[#d20853]">
            Partnerships
          </span>

          <h1 className="mt-5 max-w-[850px] font-serif text-[36px] leading-[1.13] tracking-[-0.025em] sm:text-[46px] lg:text-[54px]">
            Partner with Welvors.
          </h1>

          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.8] text-[#c62c60] sm:text-[17px]">
            Host safe, curated singles events in your city — or
            bring your venue to a community that shows up.
            Let&apos;s build real-life connection together.
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-9 sm:px-8 sm:pt-12 lg:px-10">
        <div className="space-y-9 text-[15px] leading-[1.85] text-[#685f5b] sm:text-[16px]">
          <p>
            Welvors runs verified, safety-first offline events —
            coffee meets, dinners, and curated gatherings for
            singles who want something real. We partner with
            venues, event hosts, and city partners to make those
            experiences happen. If that&apos;s you, we&apos;d love
            to hear from you.
          </p>

          <section>
            <SectionTitle>Who we partner with</SectionTitle>
            <HighlightList items={partnerTypes} />
          </section>

          <section>
            <SectionTitle>Why partner with us</SectionTitle>
            <HighlightList items={whyPartner} />
          </section>

          <section>
            <SectionTitle>How it works</SectionTitle>
            <HighlightList items={steps} />
          </section>

          <section>
            <SectionTitle>What we look for</SectionTitle>

            <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>Apply to partner</SectionTitle>
            <PartnerApplicationForm />
          </section>
        </div>
      </article>
    </main>
  );
}
