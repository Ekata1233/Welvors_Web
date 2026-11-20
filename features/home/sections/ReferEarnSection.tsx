
"use client";

import { useState } from "react";
import ReferralRewardVisual from "../components/ReferralRewardVisual";

/* ==========================================================
   REFERRAL CONFIGURATION
   ========================================================== */

const REFERRAL_CODE = "WELVORS350";

// Replace this with your actual referral URL when available.
const REFERRAL_BASE_URL = "https://welvors.com/refer";

const JOIN_REWARD = 50;
const PLAN_REWARD = 300;
const TOTAL_REWARD = JOIN_REWARD + PLAN_REWARD;

/* ==========================================================
   REFERRAL STEPS
   ========================================================== */

const REFERRAL_STEPS = [
  {
    id: 1,
    title: "Share your code",
    description: "Instagram, Facebook or LinkedIn",
    reward: null,
  },
  {
    id: 2,
    title: "They join",
    description: "Sign up with your code",
    reward: 50,
  },
  {
    id: 3,
    title: "They buy a plan",
    description: "Any paid plan",
    reward: 300,
  },
];

/* ==========================================================
   SOCIAL SHARE OPTIONS
   ========================================================== */

type SharePlatform = "Instagram" | "Facebook" | "LinkedIn";

const SHARE_OPTIONS: {
  name: SharePlatform;
  background: string;
  color: string;
}[] = [
  {
    name: "Instagram",
    background: "#f9e0e8",
    color: "#e72968",
  },
  {
    name: "Facebook",
    background: "#e5edfc",
    color: "#1877F2",
  },
  {
    name: "LinkedIn",
    background: "#e3f1fa",
    color: "#0A66C2",
  },
];

/* ==========================================================
   REFER & EARN SECTION
   ========================================================== */

export default function ReferEarnSection() {
  const [friends, setFriends] = useState(5);
  const [copied, setCopied] = useState(false);

  const totalEarnings = friends * TOTAL_REWARD;

  const formatCurrency = (amount: number) =>
    `₹${amount.toLocaleString("en-IN")}`;

  /* ========================================================
     COPY REFERRAL CODE
     ======================================================== */

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  /* ========================================================
     SOCIAL SHARING
     ======================================================== */

  const handleShare = async (platform: SharePlatform) => {
    const referralUrl =
      `${REFERRAL_BASE_URL}/${encodeURIComponent(REFERRAL_CODE)}`;

    const message =
      `Join Welvors and use my referral code ${REFERRAL_CODE}.\n${referralUrl}`;

    // Facebook
    if (platform === "Facebook") {
      const facebookUrl =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`;

      window.open(
        facebookUrl,
        "_blank",
        "noopener,noreferrer",
      );

      return;
    }

    // LinkedIn
    if (platform === "LinkedIn") {
      const linkedInUrl =
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralUrl)}`;

      window.open(
        linkedInUrl,
        "_blank",
        "noopener,noreferrer",
      );

      return;
    }

    // Instagram does not support direct web-link sharing.
    // Copy the referral message for manual sharing.
    if (platform === "Instagram") {
      try {
        await navigator.clipboard.writeText(message);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch {
        setCopied(false);
      }
    }
  };

  return (
    <section
      id="refer-and-earn"
      className="w-full bg-white py-12 sm:py-16 lg:py-[64px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[1.8px] text-[#c83258]">
            Refer &amp; Earn
          </p>

          <h2 className="mt-4 font-serif text-[36px] font-semibold leading-[1.08] tracking-[-1px] text-[#1c1818] sm:text-[44px] lg:text-[52px]">
            Bring your single
            <br className="hidden sm:block" />{" "}
            friends.{" "}
            <span className="italic text-[#d4476c]">
              Earn ₹350 each.
            </span>
          </h2>

          <p className="mt-4 text-[16px] leading-relaxed text-[#6a6260] sm:text-[18px] lg:text-[20px]">
            Rewards go to your Welvors wallet.
          </p>
        </div>

        {/* MAIN REFERRAL CARD */}

        <div className="mt-9 grid grid-cols-1 overflow-hidden rounded-[26px] border border-[#eae3df] shadow-[0_12px_40px_rgba(38,22,25,0.07)] lg:mt-10 lg:grid-cols-2">
          {/* LEFT PANEL */}

          <div className="bg-[radial-gradient(ellipse_at_top_left,#faedf0_0%,#ffffff_55%)] p-5 sm:p-8 lg:p-12">
            {/* REFERRAL CODE BOX */}

            <button
              type="button"
              onClick={copyCode}
              className="flex w-full cursor-pointer items-center gap-3 rounded-[18px] border-2 border-dashed border-[#ed5279] bg-white/80 px-4 py-5 text-left transition-colors hover:bg-[#fff9fa] sm:gap-4 sm:px-5 sm:py-6"
            >
              <span className="shrink-0 rounded-[10px] bg-[#d4476c] px-3 py-3 text-[10px] font-bold tracking-[0.7px] text-white sm:text-[12px]">
                YOUR CODE
              </span>

              <div className="min-w-0">
                <h3 className="break-words font-serif text-[22px] font-bold tracking-[0.8px] text-[#211b1b] sm:text-[29px]">
                  {REFERRAL_CODE}
                </h3>

                <p className="mt-1 text-[12px] text-[#998f8c] sm:text-[14px]">
                  {copied
                    ? "Copied to clipboard!"
                    : "Find yours in the app"}
                </p>
              </div>
            </button>

            {/* SOCIAL SHARE BUTTONS */}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[13px] text-[#716866]">
                Share on
              </span>

              {SHARE_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => handleShare(option.name)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-[12px] font-semibold text-[#211b1b] transition-opacity hover:opacity-75 sm:text-[13px]"
                  style={{
                    backgroundColor: option.background,
                  }}
                >
                  <span
                    className="h-[8px] w-[8px] rounded-full"
                    style={{
                      backgroundColor: option.color,
                    }}
                  />

                  {option.name}
                </button>
              ))}
            </div>

            {/* REFERRAL ILLUSTRATION */}

            <ReferralRewardVisual />
          </div>

          {/* RIGHT PANEL */}

          <div className="bg-[#1c1717] p-5 text-white sm:p-8 lg:p-[42px]">
            {/* TOTAL REWARD */}

            <div className="flex items-end justify-between gap-3">
              <p className="pb-1 text-[13px] text-[#c4b9b9] sm:text-[14px]">
                You earn per friend
              </p>

              <h3 className="font-serif text-[44px] font-semibold leading-none sm:text-[54px] lg:text-[60px]">
                ₹350
              </h3>
            </div>

            {/* REWARD DISTRIBUTION BAR */}

            <div className="mt-5 flex h-[14px] w-full gap-1">
              <div
                className="rounded-full bg-[#f69ab3]"
                style={{
                  width: `${(JOIN_REWARD / TOTAL_REWARD) * 100}%`,
                }}
              />

              <div className="flex-1 rounded-full bg-[#51c18b]" />
            </div>

            {/* REWARD LEGEND */}

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#c9c0c0] sm:text-[13px]">
              <div className="flex items-center gap-2">
                <span className="h-[10px] w-[10px] rounded-[3px] bg-[#f69ab3]" />
                ₹50 when they join
              </div>

              <div className="flex items-center gap-2">
                <span className="h-[10px] w-[10px] rounded-[3px] bg-[#51c18b]" />
                ₹300 when they buy a plan
              </div>
            </div>

            {/* REFERRAL TIMELINE */}

            <div className="relative mt-9">
              {/* VERTICAL CONNECTING LINE */}

              <div className="absolute bottom-[30px] left-[16px] top-[20px] w-[2px] bg-white/15" />

              <div className="relative flex flex-col gap-6">
                {REFERRAL_STEPS.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-center gap-4"
                  >
                    {/* STEP NUMBER */}

                    <div className="relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white text-[14px] font-semibold text-[#211b1b]">
                      {step.id}
                    </div>

                    {/* STEP CONTENT */}

                    <div className="min-w-0 flex-1">
                      <h4 className="text-[15px] font-semibold text-white sm:text-[16px]">
                        {step.title}
                      </h4>

                      <p className="mt-1 text-[12px] text-[#b6acac] sm:text-[13px]">
                        {step.description}
                      </p>
                    </div>

                    {/* REWARD BADGE */}

                    {step.reward !== null && (
                      <span
                        className={`shrink-0 rounded-full px-3 py-2 text-[13px] font-semibold ${
                          step.reward === JOIN_REWARD
                            ? "bg-[#f69ab3]/10 text-[#f69ab3]"
                            : "bg-[#51c18b]/15 text-[#51c18b]"
                        }`}
                      >
                        +₹{step.reward}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE EARNINGS CALCULATOR */}

            <div className="mt-9 rounded-[18px] border border-white/10 bg-white/[0.055] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[13px] text-[#d9d0d0] sm:text-[14px]">
                  If{" "}
                  <span className="font-bold text-white">
                    {friends}
                  </span>{" "}
                  friends join and buy a plan
                </p>

                <p className="font-serif text-[30px] font-semibold leading-none text-[#51c18b] sm:text-[34px]">
                  {formatCurrency(totalEarnings)}
                </p>
              </div>

              {/* RANGE SLIDER */}

              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={friends}
                aria-label="Number of referred friends"
                onChange={(event) =>
                  setFriends(Number(event.target.value))
                }
                className="referral-range mt-5 block w-full cursor-pointer accent-[#f69ab3]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* INTERNAL CSS */}

      <style jsx>{`
        .referral-range {
          display: block;
          appearance: none;
          -webkit-appearance: none;
          height: 8px;
          border: 1px solid #777071;
          border-radius: 999px;
          outline: none;
          background: #514749;
        }

        .referral-range::-webkit-slider-thumb {
          appearance: none;
          -webkit-appearance: none;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          border: none;
          background: #f69ab3;
          cursor: grab;
        }

        .referral-range::-moz-range-thumb {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          border: none;
          background: #f69ab3;
          cursor: grab;
        }

        .referral-range:active::-webkit-slider-thumb {
          cursor: grabbing;
        }

        .referral-range:focus-visible {
          outline: 2px solid #f69ab3;
          outline-offset: 5px;
        }
      `}</style>
    </section>
  );
}
