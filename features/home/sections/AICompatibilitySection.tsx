"use client";

const compatibilityScores = [
  {
    label: "Intent & goals",
    score: 96,
  },
  {
    label: "Values & family",
    score: 88,
  },
  {
    label: "Interests",
    score: 81,
  },
  {
    label: "Lifestyle",
    score: 72,
  },
];

const matchingInterests = [
  {
    icon: "🎯",
    label: "Same intent",
  },
  {
    icon: "💬",
    label: "Same love language",
  },
  {
    icon: "🥾",
    label: "Trekking",
  },
  {
    icon: "✈️",
    label: "Travel",
  },
];

export default function AICompatibilitySection() {
  return (
    <section
      id="ai-compatibility"
      className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}

        <div>
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[2px] text-[#c53058]">
            AI Compatibility
          </p>

          <h2 className="font-serif text-[36px] font-medium leading-[1.12] tracking-[-1.5px] text-[#201c1c] sm:text-[44px] lg:text-[52px]">
            A match % that{" "}

            <span className="italic text-[#d44770]">
              explains itself.
            </span>
          </h2>
        </div>

        {/* MAIN CONTENT */}

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">

          {/* LEFT COMPATIBILITY SCORES */}

          <div className="order-2 w-full lg:order-1">

            <div className="space-y-[17px]">

              {compatibilityScores.map((item, index) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[115px_minmax(0,1fr)_40px] items-center gap-3 sm:grid-cols-[155px_minmax(0,1fr)_45px] sm:gap-5"
                >
                  <span className="text-[13px] font-medium text-[#302b2b] sm:text-[14px]">
                    {item.label}
                  </span>

                  {/* PROGRESS BAR */}

                  <div
                    role="progressbar"
                    aria-label={item.label}
                    aria-valuenow={item.score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-[8px] overflow-hidden rounded-full bg-[#eae5e1]"
                  >
                    <div
                      className="compatibility-progress h-full origin-left rounded-full bg-gradient-to-r from-[#d24770] via-[#e77857] to-[#eaaa3c]"
                      style={{
                        width: `${item.score}%`,
                        animationDelay: `${index * 150}ms`,
                      }}
                    />
                  </div>

                  <span className="text-right text-[14px] font-bold text-[#201c1c]">
                    {item.score}%
                  </span>
                </div>
              ))}

            </div>

            {/* MATCHING INTERESTS */}

            <div className="mt-7 flex flex-wrap items-center gap-2">

              {matchingInterests.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#faedf1] px-3.5 py-2.5 text-[12px] font-semibold text-[#c53258] transition-colors duration-300 hover:bg-[#f6dce5] sm:text-[13px]"
                >
                  <span>{item.icon}</span>

                  <span>{item.label}</span>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT MOBILE MOCKUP */}

          <div className="order-1 flex items-center justify-center lg:order-2">

            <div className="relative isolate mx-auto h-[440px] w-full max-w-[440px] sm:h-[540px] lg:h-[620px]">

              {/* BACKGROUND GLOW */}

              <div className="pointer-events-none absolute inset-x-[8%] inset-y-[7%] -z-10 rounded-full bg-[#8b6c73]/15 blur-[65px]" />

              {/* MOBILE IMAGE */}

              <div className="absolute inset-0 flex items-center justify-center">

                <img
                  src="https://ik.imagekit.io/r0vb3de74/Pastel%20Match%20Analysis%20App%20Screen.png"
                  alt="Welvors AI compatibility match analysis"
                  draggable={false}
                  className="compatibility-phone block h-[400px] w-auto max-w-[68%] select-none object-contain sm:h-[490px] lg:h-[570px]"
                />

              </div>

              {/* FLOATING TOP 5% CARD */}

              <div className="compatibility-floating-card absolute right-0 top-[14%] z-20 rounded-[16px] border border-[#eee9e6] bg-white px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:right-[-2%] sm:px-4 sm:py-3">

                <p className="font-serif text-[25px] font-semibold leading-none text-[#d44770] sm:text-[30px]">
                  Top 5%
                </p>

                <p className="mt-1 text-[10px] text-[#948b87] sm:text-[12px]">
                  compatibility for you
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* INTERNAL ANIMATION CSS */}

      <style jsx>{`
        @keyframes compatibilityFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -14px, 0);
          }
        }

        @keyframes compatibilityPhoneFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes compatibilityProgress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .compatibility-floating-card {
          animation: compatibilityFloat 4s ease-in-out infinite;
          will-change: transform;
        }

        .compatibility-phone {
          animation: compatibilityPhoneFloat 6s ease-in-out infinite;
          will-change: transform;
          filter: drop-shadow(0 25px 25px rgba(45, 30, 35, 0.18));
        }

        .compatibility-progress {
          animation: compatibilityProgress 1.4s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (max-width: 640px) {
          @keyframes compatibilityFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -9px, 0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .compatibility-floating-card,
          .compatibility-phone,
          .compatibility-progress {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}