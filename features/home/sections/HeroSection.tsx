import HeroAppPreview from "../components/HeroAppPreview";
import HeroStats from "../components/HeroStats";

const features = [
  {
    icon: "🪪",
    title: "Verified profiles only",
    description: "Every member passes ID + live video check",
  },
  {
    icon: "🎯",
    title: "Serious intent",
    description: "See what they're looking for before you match",
  },
  {
    icon: "🗓️",
    title: "Real dates",
    description: "Date plans and events, not endless chat",
  },
];

export default function HeroSection() {
  return (
    <section className="mx-auto mt-4 w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">

      {/* ================= HERO CONTAINER ================= */}

      <div className="relative isolate overflow-hidden rounded-[26px] bg-[#1c1114] px-5 py-5 text-white sm:rounded-[30px] sm:px-8 sm:py-8 lg:px-14 lg:py-12">

        {/* ================= BACKGROUND ================= */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                ellipse at 85% 35%,
                rgba(129, 53, 75, 0.45),
                transparent 55%
              ),
              radial-gradient(
                ellipse at bottom left,
                rgba(120, 73, 34, 0.25),
                transparent 45%
              ),
              linear-gradient(
                150deg,
                #2b171d,
                #180f12 75%
              )
            `,
          }}
        />

        {/* ================= DOTTED BACKGROUND ================= */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* ================= RESPONSIVE GRID ================= */}

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-8">

          {/* ================= HEADING ================= */}

          <div className="min-w-0 lg:col-start-1 lg:row-start-1">

            {/* Verified Badge */}

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 sm:px-4">

              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#35D78A] shadow-[0_0_0_4px_rgba(53,215,138,0.15)]" />

              <span className="text-[11px] font-semibold text-[#DDD1D3] sm:text-[13px]">

                Verified dating app · Made in India

              </span>

            </div>

            {/* Main Heading */}

            <h1 className="mt-5 font-serif text-[clamp(2.25rem,10vw,4.5rem)] leading-[1.03] tracking-[-0.035em] sm:mt-7 lg:text-[clamp(3rem,4.5vw,5rem)]">

              <span className="block">
                Real people.
              </span>

              <span className="block">
                Real intent.
              </span>

              <span className="block italic text-[#F69AB5]">
                Real forever.
              </span>

            </h1>

          </div>

          {/* ================= PHONE MOCKUPS ================= */}

          <div className="relative mt-5 min-w-0 sm:mt-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">

            <HeroAppPreview />

          </div>

          {/* ================= HERO CONTENT ================= */}

          <div className="min-w-0 lg:col-start-1 lg:row-start-2">

            {/* Description */}

            <p className="mt-5 text-[16px] leading-[1.7] text-[#C6B8BB] sm:text-[18px] lg:mt-5">

              The dating app for people who are done with swiping.

            </p>

            {/* ================= FEATURES ================= */}

            <div className="mt-9 space-y-5 lg:mt-7 lg:space-y-4">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 sm:gap-4"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/10 text-xl">

                    {feature.icon}

                  </div>

                  <div>

                    <h3 className="text-[15px] font-bold text-white sm:text-[17px] lg:text-[15px]">

                      {feature.title}

                    </h3>

                    <p className="mt-1 text-[13px] leading-relaxed text-[#B9AAAE] sm:text-[15px] lg:text-[13px]">

                      {feature.description}

                    </p>

                  </div>

                </div>
              ))}

            </div>

            {/* ================= APP DOWNLOAD BUTTONS ================= */}

            <div className="mt-10 flex flex-col gap-3 lg:mt-8 lg:flex-row">

              {/* App Store */}

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[62px] w-full items-center gap-4 rounded-[15px] bg-white px-6 py-3 text-[#202020] transition-colors hover:bg-[#FFF1F5] lg:w-[175px] lg:gap-3 lg:px-4"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7 shrink-0"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.17-.24 2.29-.93 3.54-.84 1.5.12 2.63.72 3.37 1.8-3.09 1.85-2.36 5.92.48 7.15-.57 1.5-1.31 2.99-2.48 4.07ZM12.03 7.25C11.88 5.02 13.69 3.18 15.76 3c.28 2.58-2.34 4.5-3.73 4.25Z" />
                </svg>

                <div>

                  <p className="text-[12px] text-[#77706E]">
                    Download on the
                  </p>

                  <p className="text-[17px] leading-tight font-bold">
                    App Store
                  </p>

                </div>

              </a>

              {/* Google Play */}

              <a
                href="https://play.google.com/store/apps/details?id=com.infynod.welvors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[62px] w-full items-center gap-4 rounded-[15px] bg-white px-6 py-3 text-[#202020] transition-colors hover:bg-[#FFF1F5] lg:w-[175px] lg:gap-3 lg:px-4"
              >

                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 shrink-0"
                >
                  <path
                    fill="#34A853"
                    d="M3 2v20l10-10z"
                  />
                  <path
                    fill="#4285F4"
                    d="M3 2l14 8-4 2z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M17 10l4 2-4 2-4-2z"
                  />
                  <path
                    fill="#EA4335"
                    d="M3 22l14-8-4-2z"
                  />
                </svg>

                <div>

                  <p className="text-[12px] text-[#77706E]">
                    Get it on
                  </p>

                  <p className="text-[17px] leading-tight font-bold">
                    Google Play
                  </p>

                </div>

              </a>

            </div>

            {/* ================= SEE HOW IT WORKS ================= */}

            <a
              href="#how-it-works"
              className="mt-9 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[16px] font-bold transition-colors hover:text-[#F69AB5] lg:mt-4 lg:text-[14px]"
            >

              See how it works

              <span>→</span>

            </a>

            {/* ================= MEMBER INFORMATION ================= */}

            <div className="mt-12 flex items-center gap-4 lg:mt-8">

              <div className="flex shrink-0 items-center -space-x-2">

                {["👩🏻", "👩🏻‍🦱", "👩🏽‍🦱", "👨🏽"].map(
                  (avatar, index) => (
                    <div
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#29191E] text-xl sm:h-10 sm:w-10"
                      style={{
                        backgroundColor: [
                          "#F9DCE8",
                          "#DCEBFA",
                          "#E2EDDD",
                          "#EBDCF8",
                        ][index],
                      }}
                    >

                      {avatar}

                    </div>
                  )
                )}

              </div>

              <p className="text-[13px] leading-relaxed text-[#C6B8BB] lg:text-[12px]">

                Built for Indians who want{" "}

                <strong className="text-white">
                  something real
                </strong>

                , not just matches.

              </p>

            </div>

          </div>

        </div>

        {/* ================= HERO STATISTICS ================= */}

        <div className="mt-7 lg:mt-9">

          <HeroStats />

        </div>

      </div>

    </section>
  );
}