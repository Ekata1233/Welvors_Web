
"use client";

import { useState } from "react";

/* ==========================================================
   VERIFICATION DATA
   ========================================================== */

const BASIC_CHECKS = [
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile & email",
    description: "Stops fake mass signups",
  },
  {
    id: "location",
    icon: "📍",
    title: "City location",
    description: "Confirms you're really nearby",
  },
];

const VERIFICATION_CHECKS = [
  {
    id: "government",
    icon: "🪪",
    title: "Government ID",
    description: "Aadhaar, PAN, passport or DL",
  },
  {
    id: "selfie",
    icon: "🤳",
    title: "Selfie match",
    description: "Your face matches your ID",
  },
  {
    id: "video",
    icon: "🎥",
    title: "Live video",
    description: "A short clip proves you're real",
  },
];

const TRUST_FEATURES = [
  {
    icon: "🚫",
    title: "Zero fake profiles",
    description: "No verification, no matches",
  },
  {
    icon: "📊",
    title: "Trust Score on every profile",
    description: "See what's verified at a glance",
  },
  {
    icon: "🔒",
    title: "Documents never shown",
    description: "Others only see the result",
  },
];

/* ==========================================================
   VERIFICATION SECTION
   ========================================================== */

export default function VerificationSection() {
  const [verifiedChecks, setVerifiedChecks] = useState<
    string[]
  >([]);

  const completedChecks = 2 + verifiedChecks.length;

  const remainingChecks = 5 - completedChecks;

  const isFullyVerified = completedChecks === 5;

  const progress = (completedChecks / 5) * 100;

  const handleVerify = (id: string) => {
    setVerifiedChecks((previous) =>
      previous.includes(id)
        ? previous
        : [...previous, id]
    );
  };

  return (
    <section
      id="verification"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">

        {/* ==================================================
            SECTION HEADING
            ================================================== */}

        <div className="mb-8 lg:mb-10">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[2px] text-[#cb4064]">
            Verification & Trust Score
          </p>

          <h2
            className="text-[36px] leading-[1.12] tracking-[-1px] text-[#201c1d] sm:text-[44px] lg:text-[50px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Know them{" "}
            <span className="italic text-[#d0476b]">
              before
            </span>{" "}
            you say hi.
          </h2>

          <p className="mt-4 max-w-[620px] text-[16px] leading-[1.65] text-[#716b68] sm:text-[18px]">
            Every member is verified before they can match.
            Their Trust Score shows exactly what&apos;s been
            checked.
          </p>
        </div>

        {/* ==================================================
            MAIN CONTENT
            ================================================== */}

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.82fr_1fr] lg:gap-12">

          {/* ==================================================
              LEFT MOBILE MOCKUP
              ================================================== */}

          <div className="relative mx-auto flex h-[450px] w-full max-w-[480px] items-center justify-center sm:h-[550px] lg:h-[620px]">

            {/* BACKGROUND GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b6a2a7]/20 blur-[60px]" />

            {/* PHONE IMAGE */}

            <img
              src="https://ik.imagekit.io/r0vb3de74/verify.png"
              alt="Welvors Trust Score verification screen"
              draggable={false}
              className="relative z-10 block h-[90%] w-auto max-w-[85%] select-none object-contain drop-shadow-[0_25px_35px_rgba(55,35,40,0.22)]"
            />

            {/* ANIMATED VERIFIED BADGE */}

            <div className="verification-floating-badge absolute bottom-[17%] left-0 z-20 flex items-center gap-2.5 rounded-[16px] border border-[#eee8e5] bg-white px-3 py-2.5 shadow-[0_8px_25px_rgba(40,20,25,0.10)] sm:left-[2%] sm:gap-3 sm:px-4 sm:py-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#397ff5] text-[19px] font-semibold text-white">
                ✓
              </div>

              <div>
                <p className="text-[12px] font-bold leading-tight text-[#252122] sm:text-[14px]">
                  Verified badge
                </p>

                <p className="mt-0.5 whitespace-nowrap text-[10px] text-[#928b87] sm:text-[12px]">
                  Shown on every profile
                </p>
              </div>

            </div>
          </div>

          {/* ==================================================
              RIGHT VERIFICATION CARD
              ================================================== */}

          <div className="rounded-[26px] border border-[#ede8e5] bg-white p-4 shadow-[0_10px_35px_rgba(35,20,25,0.06)] sm:p-6">

            {/* PROGRESS HEADER */}

            <div className="flex items-center gap-4 border-b border-[#f0ece9] pb-5 sm:gap-5">

              {/* CIRCULAR PROGRESS */}

              <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center sm:h-[90px] sm:w-[90px]">

                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#eae5e1"
                    strokeWidth="9"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#269764"
                    strokeWidth="9"
                    pathLength="100"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    className="transition-all duration-700 ease-out"
                  />
                </svg>

                <div className="relative text-center">
                  <p className="text-[23px] font-bold leading-none text-[#201d1e]">
                    {completedChecks}/5
                  </p>

                  <p className="mt-1 text-[11px] text-[#918985]">
                    checks
                  </p>
                </div>

              </div>

              {/* PROGRESS TEXT */}

              <div
                className="min-w-0"
                aria-live="polite"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.6px] ${
                    isFullyVerified
                      ? "bg-[#e3f5eb] text-[#218653]"
                      : "bg-[#f4f1ef] text-[#746d69]"
                  }`}
                >
                  {isFullyVerified ? "VERIFIED" : "BASIC"}
                </span>

                <h3 className="mt-2 text-[15px] font-bold leading-snug text-[#211e1f] sm:text-[18px]">
                  {isFullyVerified
                    ? "You're fully verified!"
                    : `Finish ${remainingChecks} quick ${
                        remainingChecks === 1
                          ? "check"
                          : "checks"
                      } to get verified`}
                </h3>

                <p className="mt-1.5 text-[12px] text-[#948c88] sm:text-[14px]">
                  {isFullyVerified
                    ? "All 5 verification checks completed."
                    : "Try it: tap Verify on each check"}
                </p>
              </div>

            </div>

            {/* ==================================================
                TIER 1 — BASIC
                ================================================== */}

            <div className="mt-5">

              <div className="mb-2.5 flex items-center justify-between gap-2">
                <h4 className="text-[12px] font-bold uppercase tracking-[0.3px] text-[#272324] sm:text-[13px]">
                  Tier 1 · Basic
                </h4>

                <span className="text-[10px] text-[#948c88] sm:text-[12px]">
                  Automatic at signup
                </span>
              </div>

              <div className="space-y-2">

                {BASIC_CHECKS.map((item) => (
                  <div
                    key={item.id}
                    className="flex min-h-[72px] items-center gap-3 rounded-[16px] border border-[#d5eee0] bg-[#f2faf5] px-3 py-3 sm:gap-4 sm:px-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f2ef] text-[19px]">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h5 className="text-[13px] font-bold text-[#242122] sm:text-[15px]">
                        {item.title}
                      </h5>

                      <p className="mt-1 text-[11px] leading-relaxed text-[#928b87] sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#dff2e7] px-3 py-2 text-[11px] font-semibold text-[#218452] sm:text-[12px]">
                      ✓ Done
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* ==================================================
                TIER 2 — VERIFIED
                ================================================== */}

            <div className="mt-5">

              <div className="mb-2.5 flex items-center justify-between gap-2">
                <h4 className="text-[12px] font-bold uppercase tracking-[0.3px] text-[#272324] sm:text-[13px]">
                  Tier 2 · Verified
                </h4>

                <span className="text-[10px] text-[#948c88] sm:text-[12px]">
                  Takes about 2 minutes
                </span>
              </div>

              <div className="space-y-2">

                {VERIFICATION_CHECKS.map((item) => {
                  const isVerified =
                    verifiedChecks.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className={`flex min-h-[72px] items-center gap-3 rounded-[16px] border px-3 py-3 transition-all duration-300 sm:gap-4 sm:px-4 ${
                        isVerified
                          ? "border-[#d5eee0] bg-[#f2faf5]"
                          : "border-[#eee9e6] bg-white hover:border-[#f2b8c8]"
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f2ef] text-[19px]">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">

                        <h5 className="text-[13px] font-bold text-[#242122] sm:text-[15px]">
                          {item.title}
                        </h5>

                        <p className="mt-1 text-[11px] leading-relaxed text-[#928b87] sm:text-[13px]">
                          {item.description}
                        </p>

                      </div>

                      {isVerified ? (
                        <span className="shrink-0 rounded-full bg-[#dff2e7] px-3 py-2 text-[11px] font-semibold text-[#218452] sm:text-[12px]">
                          ✓ Done
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleVerify(item.id)}
                          aria-label={`Demo: verify ${item.title}`}
                          className="shrink-0 cursor-pointer rounded-full bg-[#d0476b] px-4 py-2.5 text-[12px] font-semibold text-white transition-colors duration-200 hover:bg-[#b93257] active:scale-95 sm:px-5 sm:text-[13px]"
                        >
                          Verify
                        </button>
                      )}

                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>

        {/* ==================================================
            BOTTOM TRUST FEATURE CARDS
            ================================================== */}

        <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-10">

          {TRUST_FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-[20px] bg-[#f5f2ef] px-4 py-4 transition-colors duration-300 hover:bg-[#fce7ed] sm:px-3 lg:gap-4 lg:px-5 lg:py-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-white text-[21px]">
                {item.icon}
              </div>

              <div className="min-w-0">
                <h4 className="text-[13px] font-bold leading-snug text-[#252122] lg:text-[15px]">
                  {item.title}
                </h4>

                <p className="mt-1 text-[11px] leading-relaxed text-[#928b87] lg:text-[13px]">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ==================================================
          INTERNAL CSS — FLOATING BADGE ANIMATION
          ================================================== */}

      <style jsx>{`
        @keyframes verificationBadgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-16px);
          }
        }

        .verification-floating-badge {
          animation: verificationBadgeFloat 3.8s
            ease-in-out infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          @keyframes verificationBadgeFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-10px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .verification-floating-badge {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>

    </section>
  );
}
