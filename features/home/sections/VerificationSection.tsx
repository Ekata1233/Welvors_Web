
"use client";

import { useEffect, useRef, useState } from "react";

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
   ANIMATION CONFIGURATION
   ========================================================== */

const INITIAL_DELAY = 800;
const NEXT_CHECK_DELAY = 500;
const CHECK_DURATION = 1900;
const RESTART_DELAY = 2000;

/* ==========================================================
   VERIFICATION SECTION
   ========================================================== */

export default function VerificationSection() {
  const [verifiedChecks, setVerifiedChecks] = useState<string[]>([]);

  const [checkingId, setCheckingId] = useState<string | null>(null);

  const [checkingProgress, setCheckingProgress] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const [animationStarted, setAnimationStarted] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const completedChecks = 2 + verifiedChecks.length;
  const remainingChecks = 5 - completedChecks;
  const isFullyVerified = completedChecks === 5;
  const progress = (completedChecks / 5) * 100;

  /* ==========================================================
     OBSERVE SECTION VISIBILITY
     ========================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ==========================================================
     AUTOMATIC SEQUENTIAL VERIFICATION
     ========================================================== */

  useEffect(() => {
    if (!isVisible || isFullyVerified || checkingId) {
      return;
    }

    const nextCheck = VERIFICATION_CHECKS.find(
      (item) => !verifiedChecks.includes(item.id)
    );

    if (!nextCheck) return;

    const timer = window.setTimeout(() => {
      setAnimationStarted(true);
      setCheckingProgress(0);
      setCheckingId(nextCheck.id);
    }, animationStarted ? NEXT_CHECK_DELAY : INITIAL_DELAY);

    return () => window.clearTimeout(timer);
  }, [
    isVisible,
    isFullyVerified,
    checkingId,
    verifiedChecks,
    animationStarted,
  ]);

  /* ==========================================================
     CHECKING ANIMATION
     ========================================================== */

  useEffect(() => {
    if (!checkingId || !isVisible) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;

      const percentage = Math.min(
        (elapsed / CHECK_DURATION) * 100,
        100
      );

      setCheckingProgress(percentage);

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        const finishedId = checkingId;

        setVerifiedChecks((previous) =>
          previous.includes(finishedId)
            ? previous
            : [...previous, finishedId]
        );

        setCheckingId(null);
        setCheckingProgress(0);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [checkingId, isVisible]);

  /* ==========================================================
     AUTO RESTART ANIMATION FOREVER
     ========================================================== */

  useEffect(() => {
    if (!isVisible || !isFullyVerified || checkingId) {
      return;
    }

    const restartTimer = window.setTimeout(() => {
      setVerifiedChecks([]);
      setCheckingProgress(0);
      setCheckingId(null);
      setAnimationStarted(true);
    }, RESTART_DELAY);

    return () => window.clearTimeout(restartTimer);
  }, [isVisible, isFullyVerified, checkingId]);

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <section
      ref={sectionRef}
      id="verification"
      className="w-full bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">

        {/* SECTION HEADING */}

        <div className="mb-8 lg:mb-10">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[2px] text-[#b92e59]">
            Verification & Trust Score
          </p>

          <h2
            className="text-[36px] leading-[1.12] tracking-[-1px] text-[#201c1d] sm:text-[44px] lg:text-[50px]"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            Know them{" "}
            <span className="italic text-[#c93e6c]">
              before
            </span>{" "}
            you say hi.
          </h2>

          <p className="mt-4 max-w-[650px] text-[16px] leading-[1.7] text-[#716b68] sm:text-[18px]">
            No verification, no matches. Every profile
            shows what&apos;s been checked.
          </p>
        </div>

        {/* FULL WIDTH VERIFICATION CARD */}

        <div className="w-full rounded-[26px] border border-[#eae4e1] bg-white p-4 shadow-[0_12px_38px_rgba(35,20,25,0.07)] sm:p-6 lg:p-7">

          {/* PROGRESS HEADER */}

          <div className="flex items-center gap-4 border-b border-[#eee9e6] pb-5 sm:gap-5">

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
                  stroke="#2fa66a"
                  strokeWidth="9"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset={100 - progress}
                  className="transition-all duration-700 ease-in-out"
                />
              </svg>

              <div className="relative text-center">
                <p
                  key={completedChecks}
                  className="verification-count-pop text-[23px] font-bold leading-none text-[#201d1e] sm:text-[25px]"
                >
                  {completedChecks}/5
                </p>

                <p className="mt-1 text-[11px] text-[#918985]">
                  checks
                </p>
              </div>
            </div>

            {/* PROGRESS DETAILS */}

            <div
              className="min-w-0 flex-1"
              aria-live="off"
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.6px] transition-all duration-500 ${
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
                      remainingChecks === 1 ? "check" : "checks"
                    } to get verified`}
              </h3>

              <p className="mt-1.5 text-[12px] text-[#948c88] sm:text-[14px]">
                {isFullyVerified
                  ? "All 5 verification checks completed."
                  : "Watch the automatic verification demo"}
              </p>
            </div>
          </div>

          {/* VERIFICATION TIERS */}

          <div className="mt-5 grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-7">

            {/* LEFT COLUMN — TIER 1 BASIC */}

            <div className="min-w-0">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h4 className="text-[12px] font-bold uppercase tracking-[0.3px] text-[#272324] sm:text-[13px]">
                  Tier 1 · Basic
                </h4>

                <span className="text-[10px] text-[#948c88] sm:text-[12px]">
                  Automatic at signup
                </span>
              </div>

              <div className="space-y-2.5">
                {BASIC_CHECKS.map((item) => (
                  <div
                    key={item.id}
                    className="flex min-h-[66px] items-center gap-3 rounded-[16px] border border-[#d5eee0] bg-[#f2faf5] px-3 py-3 sm:gap-4 sm:px-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f2ef] text-[19px]">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h5 className="text-[13px] font-bold text-[#242122] sm:text-[15px]">
                        {item.title}
                      </h5>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#dff2e7] px-3 py-2 text-[11px] font-semibold text-[#218452] sm:text-[12px]">
                      ✓ Done
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN — TIER 2 VERIFIED */}

            <div className="min-w-0">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h4 className="text-[12px] font-bold uppercase tracking-[0.3px] text-[#272324] sm:text-[13px]">
                  Tier 2 · Verified
                </h4>

                <span className="text-[10px] text-[#948c88] sm:text-[12px]">
                  Takes about 2 minutes
                </span>
              </div>

              <div className="space-y-2.5">
                {VERIFICATION_CHECKS.map((item) => {
                  const isVerified = verifiedChecks.includes(item.id);
                  const isChecking = checkingId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`relative flex min-h-[66px] items-center gap-3 overflow-hidden rounded-[16px] border px-3 py-3 transition-colors duration-500 sm:gap-4 sm:px-4 ${
                        isVerified
                          ? "border-[#d5eee0] bg-[#f2faf5]"
                          : isChecking
                          ? "border-[#dcebe0] bg-white"
                          : "border-[#eee9e6] bg-white"
                      }`}
                    >

                      {/* ANIMATED GREEN PROGRESS FILL */}

                      {isChecking && (
                        <div
                          className="pointer-events-none absolute inset-y-0 left-0 z-0 bg-gradient-to-r from-[#e0f3e7] via-[#eaf7ee] to-[#f2faf5]"
                          style={{
                            width: `${checkingProgress}%`,
                          }}
                        />
                      )}

                      {/* ICON */}

                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f2ef] text-[19px]">
                        {item.icon}
                      </div>

                      {/* TITLE */}

                      <div className="relative z-10 min-w-0 flex-1">
                        <h5 className="text-[13px] font-bold text-[#242122] sm:text-[15px]">
                          {item.title}
                        </h5>
                      </div>

                      {/* AUTOMATIC STATUS */}

                      <div className="relative z-10 shrink-0">
                        {isVerified ? (
                          <span className="verification-done-pop inline-flex items-center rounded-full bg-[#dff2e7] px-3 py-2 text-[11px] font-semibold text-[#218452] sm:text-[12px]">
                            ✓ Done
                          </span>
                        ) : isChecking ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#242122] px-3 py-2.5 text-[11px] font-semibold text-white sm:px-4 sm:text-[12px]">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Checking
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-[#f4f1ef] px-4 py-2.5 text-[12px] font-semibold text-[#8c8581]">
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TRUST FEATURE CARDS */}

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

      {/* INTERNAL ANIMATION CSS */}

      <style jsx>{`
        @keyframes verificationCountPop {
          0% {
            opacity: 0.5;
            transform: scale(0.82);
          }

          65% {
            opacity: 1;
            transform: scale(1.12);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .verification-count-pop {
          animation: verificationCountPop 0.45s ease-out;
        }

        @keyframes verificationDonePop {
          0% {
            opacity: 0;
            transform: scale(0.75);
          }

          65% {
            opacity: 1;
            transform: scale(1.08);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .verification-done-pop {
          animation: verificationDonePop 0.4s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .verification-count-pop,
          .verification-done-pop {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
