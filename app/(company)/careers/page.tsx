
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Welvors",
  description:
    "Join Welvors and help us build a safer, more honest dating experience.",
};

const whyWelvors = [
  {
    title: "Real impact.",
    description:
      "Your work directly affects whether someone feels safe enough to meet a stranger.",
  },
  {
    title: "Early and senior.",
    description:
      "Join early, own big surface, and shape the product from the ground up.",
  },
  {
    title: "Trust-and-safety first.",
    description:
      "We invest in the unglamorous work most apps ignore.",
  },
];

const howWeWork = [
  {
    title: "Small teams, high ownership",
    description: "you'll ship, not sit in meetings.",
  },
  {
    title: "Craft matters",
    description:
      "we sweat details users may never consciously notice.",
  },
  {
    title: "Honest by default",
    description: "with our users and with each other.",
  },
  {
    title: "Hybrid",
    description:
      "Pune, Maharashtra hub, with remote flexibility for the right people.",
  },
];

const openRoles = [
  {
    role: "Senior Flutter Engineer",
    team: "Mobile",
    location: "Pune, Maharashtra",
  },
  {
    role: "Backend Engineer (Node.js)",
    team: "Platform",
    location: "Pune, Maharashtra",
  },
  {
    role: "Trust & Safety Lead",
    team: "Operations",
    location: "Pune, Maharashtra",
  },
  {
    role: "Product Designer",
    team: "Design",
    location: "Pune, Maharashtra",
  },
  {
    role: "Community & Events Manager",
    team: "Growth",
    location: "Pune, Maharashtra",
  },
];

const benefits = [
  "Competitive salary and meaningful early-stage equity.",
  "Comprehensive health cover for you and your family.",
  "Flexible hours and generous leave.",
  "A real say in a product you'll be proud of.",
];

const hiringProcess = [
  {
    title: "1. Intro chat",
    description: "a relaxed conversation about you and us.",
  },
  {
    title: "2. Craft round",
    description:
      "a practical discussion or task in your area.",
  },
  {
    title: "3. Team & values",
    description: "meet the people you'll work with.",
  },
  {
    title: "4. Offer",
    description:
      "usually within a week of the final round.",
  },
];

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
      {children}
    </h2>
  );
}

export default function CareersPage() {
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
              <span>Careers</span>
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
            Join Us
          </span>

          <h1 className="mt-5 max-w-[850px] font-serif text-[36px] leading-[1.13] tracking-[-0.025em] sm:text-[46px] lg:text-[54px]">
            Help us make dating
            <br />
            honest again.
          </h1>

          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.8] text-[#c62c60] sm:text-[17px]">
            We&apos;re a small team solving a genuinely hard
            problem — trust between strangers. If that excites
            you, we&apos;d love to talk.
          </p>
        </div>
      </header>

      {/* Main content */}
      <article className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-9 sm:px-8 sm:pt-12 lg:px-10">
        <div className="space-y-9 text-[15px] leading-[1.85] text-[#685f5b] sm:text-[16px]">
          <p>
            Building a trust-first dating platform means every
            decision — from verification to moderation — has
            real consequences for real people. We&apos;re looking
            for people who care about that responsibility as
            much as we do.
          </p>

          {/* Why Welvors */}
          <section>
            <SectionTitle>Why Welvors</SectionTitle>

            <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
              {whyWelvors.map((item) => (
                <li key={item.title}>
                  <strong className="font-semibold text-[#d20853]">
                    {item.title}
                  </strong>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </section>

          {/* How we work */}
          <section>
            <SectionTitle>How we work</SectionTitle>

            <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
              {howWeWork.map((item) => (
                <li key={item.title}>
                  <strong className="font-semibold text-[#d20853]">
                    {item.title}
                  </strong>{" "}
                  — {item.description}
                </li>
              ))}
            </ul>
          </section>

          {/* Open roles */}
          <section>
            <SectionTitle>Open roles</SectionTitle>

            <div className="overflow-x-auto rounded-xl border border-[#e9e0d9]">
              <table className="w-full min-w-[540px] border-collapse text-left text-[13px] sm:text-[14px]">
                <thead className="bg-[#f1eae5]">
                  <tr>
                    <th className="w-1/2 border-b border-r border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      Role
                    </th>
                    <th className="w-1/4 border-b border-r border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      Team
                    </th>
                    <th className="w-1/4 border-b border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      Location
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {openRoles.map((item) => (
                    <tr key={item.role}>
                      <td className="border-b border-r border-[#e9e0d9] px-4 py-3 font-semibold text-[#302a29]">
                        {item.role}
                      </td>
                      <td className="border-b border-r border-[#e9e0d9] px-4 py-3">
                        {item.team}
                      </td>
                      <td className="border-b border-[#e9e0d9] px-4 py-3">
                        {item.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-xl border border-[#e9e0d9] bg-white/80 px-5 py-5">
              <p className="font-semibold text-[#302a29]">
                Don&apos;t see your role?
              </p>
              <p className="mt-1 text-[14px]">
                We&apos;re always happy to meet exceptional people.
                Write to us and tell us what you&apos;d want to build.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <SectionTitle>Benefits</SectionTitle>

            <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </section>

          {/* Hiring process */}
          <section>
            <SectionTitle>Our hiring process</SectionTitle>

            <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
              {hiringProcess.map((step) => (
                <li key={step.title}>
                  <strong className="font-semibold text-[#d20853]">
                    {step.title}
                  </strong>{" "}
                  — {step.description}
                </li>
              ))}
            </ul>
          </section>

          {/* How to apply */}
          <section>
            <SectionTitle>How to apply</SectionTitle>

            <div className="space-y-2 rounded-xl border border-[#e9e0d9] bg-white/80 px-5 py-5 text-[14px] leading-[1.7]">
              <p>
                <strong className="text-[#302a29]">Email:</strong>{" "}
                <a
                  href="mailto:info@infynod.com"
                  className="text-[#d20853] hover:underline"
                >
                  info@infynod.com
                </a>
              </p>

              <p>
                <strong className="text-[#302a29]">Include:</strong>{" "}
                the role, a short note on why, and a link to your
                work or CV.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
