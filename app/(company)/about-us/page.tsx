
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Welvors",
  description:
    "Learn about Welvors, our story, values, and mission to build a safer dating experience based on trust.",
};

const beliefs = [
  {
    title: "Trust is the product.",
    description:
      "Everything else — matches, chats, events — only matters if you can trust who's on the other side.",
  },
  {
    title: "Real over endless.",
    description:
      "A few genuine connections beat a thousand hollow swipes.",
  },
  {
    title: "Safety is non-negotiable.",
    description:
      "Especially for women. If people don't feel safe, nothing else counts.",
  },
  {
    title: "Your pace, your choice.",
    description:
      "Serious doesn't mean rushed. Marriage is an option, never a default.",
  },
];

const differences = [
  {
    others: "Anyone can sign up with a fake photo",
    welvors:
      "Multi-level verification — mobile, ID, face and video checks",
  },
  {
    others: "Optimise for time-on-app",
    welvors:
      "Optimise for genuine matches who want the same thing",
  },
  {
    others: "Safety bolted on later",
    welvors:
      "SafeFace privacy, verified-only pools and offline-event safety built in",
  },
  {
    others: "No accountability after matching",
    welvors:
      "Commitment Mode and a Forever Love reward that grows with your relationship",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f4] text-[#302a29]">
      {/* Page header */}
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
              <span>About Us</span>
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
            Our Story
          </span>

          <h1 className="mt-5 max-w-[850px] font-serif text-[36px] leading-[1.13] tracking-[-0.025em] sm:text-[46px] lg:text-[54px]">
            We&apos;re building trust,
            <br />
            not another dating app.
          </h1>

          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.8] text-[#c62c60] sm:text-[17px]">
            Welvors exists for people who are done with endless
            swiping and want something real — with safety and
            honesty built into every step.
          </p>
        </div>
      </header>

      {/* Main content */}
      <article className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-9 sm:px-8 sm:pt-12 lg:px-10">
        <div className="space-y-9 text-[15px] leading-[1.85] text-[#685f5b] sm:text-[16px]">
          <p>
            Welvors is a serious-relationship dating platform for
            career-focused Indian professionals. We started with a
            simple frustration: the apps everyone uses are built to
            keep you swiping, not to help you actually meet someone
            worth your time. So we built the opposite.
          </p>

          {/* Our story */}
          <section>
            <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
              Our story
            </h2>

            <p className="mb-4">
              Welvors began with a question our founders kept hearing
              from friends in their late twenties:{" "}
              <em>
                &ldquo;Why is it so hard to meet someone genuine?&rdquo;
              </em>{" "}
              Dating apps felt like a numbers game; matrimony sites
              felt like a spreadsheet of biodata and family pressure,
              and nothing in between respected how modern
              professionals actually want to date — on their own
              timeline, without games, and safely.
            </p>

            <p>
              We set out to build a place where every profile is a
              real, verified person, where safety isn&apos;t an
              afterthought, and where wanting something serious is
              normal — not something you have to apologise for.
            </p>
          </section>

          {/* What we believe */}
          <section>
            <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
              What we believe
            </h2>

            <ul className="list-disc space-y-3 pl-5 marker:text-[#d20853]">
              {beliefs.map((belief) => (
                <li key={belief.title}>
                  <strong className="font-semibold text-[#d20853]">
                    {belief.title}
                  </strong>{" "}
                  {belief.description}
                </li>
              ))}
            </ul>
          </section>

          {/* How we're different */}
          <section>
            <h2 className="mb-5 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
              How we&apos;re different
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#e9e0d9]">
              <table className="w-full min-w-[550px] border-collapse text-left text-[13px] sm:text-[14px]">
                <thead className="bg-[#f1eae5]">
                  <tr>
                    <th className="w-1/2 border-b border-r border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      What most apps do
                    </th>
                    <th className="w-1/2 border-b border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      What Welvors does
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {differences.map((row) => (
                    <tr key={row.others}>
                      <td className="border-b border-r border-[#e9e0d9] px-4 py-3 align-top">
                        {row.others}
                      </td>
                      <td className="border-b border-[#e9e0d9] px-4 py-3 align-top">
                        {row.welvors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Who we serve */}
          <section>
            <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
              Who we serve
            </h2>

            <p>
              Welvors is built for adults 18+ who are looking for
              something real — from a meaningful relationship to a
              life partner. We&apos;re proudly not a matrimony app:
              no biodata, no family logins, no pressure. Just you,
              deciding for yourself.
            </p>

            <div className="mt-5 rounded-xl border border-[#f1d8e1] bg-[#fcebf1] px-5 py-4">
              <div className="mb-2 flex items-center gap-2 font-semibold text-[#d20853]">
                <Heart size={16} fill="currentColor" />
                Our promise
              </div>

              <p className="text-[14px] leading-[1.75] text-[#685f5b]">
                Every person you see on Welvors is a real, verified
                human. No bots, no catfish, no time-wasters —
                that&apos;s the whole point.
              </p>
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
              The people behind Welvors
            </h2>

            <p>
              We&apos;re a small, senior team of product,
              trust-and-safety, and engineering people who&apos;ve
              built consumer apps used by millions — now focused
              entirely on doing dating honestly. We obsess over
              the details most apps skip: how a report is handled,
              how quickly a fake profile is caught, how safe a
              first meeting feels.
            </p>
          </section>

          {/* Company information */}
          <section>
            <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#d20853] sm:text-[28px]">
              Where we are
            </h2>

            <div className="space-y-2 rounded-xl border border-[#e9e0d9] bg-white/80 px-5 py-5 text-[14px] leading-[1.7]">
              <p>
                <strong className="text-[#302a29]">Company:</strong>{" "}
                Infynod Tech Private Limited
                (CIN: U62020PN2026PTC258333)
              </p>

              <p>
                <strong className="text-[#302a29]">
                  Registered in:
                </strong>{" "}
                India
              </p>

              <p>
                <strong className="text-[#302a29]">
                  Head office:
                </strong>{" "}
                Hadapsar, Pune, Maharashtra, India
              </p>

              <p>
                <strong className="text-[#302a29]">
                  General enquiries:
                </strong>{" "}
                <a
                  href="mailto:info@infynod.com"
                  className="text-[#d20853] hover:underline"
                >
                  info@infynod.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
