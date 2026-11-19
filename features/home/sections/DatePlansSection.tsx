"use client";

import { useState } from "react";

/* ==========================================================
   DATE PLAN OPTIONS
   ========================================================== */

const ACTIVITIES = [
  {
    label: "Coffee",
    icon: "☕",
    title: "Coffee & deep talks",
  },
  {
    label: "Dinner",
    icon: "🍽️",
    title: "Dinner & honest chats",
  },
  {
    label: "Drinks",
    icon: "🍸",
    title: "Drinks & good company",
  },
  {
    label: "Walk",
    icon: "🌇",
    title: "Sunset walk together",
  },
  {
    label: "Brunch",
    icon: "🥐",
    title: "Brunch & conversations",
  },
  {
    label: "Movie",
    icon: "🎬",
    title: "Movie & good vibes",
  },
] as const;

const DATE_OPTIONS = [
  "Today",
  "Tomorrow",
  "Weekend",
] as const;

const BILL_OPTIONS = [
  "🤝 I'll pay",
  "⚖️ TTMM",
  "🙌 Decide there",
] as const;

const AUDIENCE_OPTIONS = [
  "Everyone verified",
  "Trust 80+",
  "💎 Platinum only",
] as const;

/* ==========================================================
   DATE PLAN JOURNEY
   ========================================================== */

const JOURNEY_STEPS = [
  {
    icon: "📝",
    title: "Post",
    description: "Activity, time, place",
  },
  {
    icon: "💌",
    title: "Get requests",
    description: "Each with a note",
  },
  {
    icon: "✅",
    title: "You approve",
    description: "Only who you pick",
  },
  {
    icon: "📍",
    title: "Meet",
    description: "Details land in chat",
  },
  {
    icon: "⭐",
    title: "Rate",
    description: "Keeps everyone honest",
  },
];

/* ==========================================================
   SAFETY FEATURES
   ========================================================== */

const SAFETY_FEATURES = [
  {
    icon: "🛡️",
    title: "Public venues",
  },
  {
    icon: "🙈",
    title: "Photos hidden till approved",
  },
  {
    icon: "📊",
    title: "Minimum Trust Score",
  },
  {
    icon: "🔔",
    title: "Auto alerts if cancelled",
  },
  {
    icon: "🚫",
    title: "No-shows get flagged",
  },
  {
    icon: "🚀",
    title: "Boost to the top",
  },
];

/* ==========================================================
   OPTION BUTTON
   ========================================================== */

type OptionButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function OptionButton({
  label,
  active,
  onClick,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`
        rounded-full
        border
        px-3.5
        py-2.5
        text-xs
        font-semibold
        whitespace-nowrap
        transition-all
        duration-200
        ${
          active
            ? "border-[#cf486b] bg-[#cf486b] text-white"
            : "border-[#eae5e2] bg-white text-[#292526] hover:border-[#cf486b]"
        }
      `}
    >
      {label}
    </button>
  );
}

/* ==========================================================
   DATE PLANS SECTION
   ========================================================== */

export default function DatePlansSection() {
  const [activity, setActivity] = useState<
    (typeof ACTIVITIES)[number]["label"]
  >("Coffee");

  const [date, setDate] = useState<
    (typeof DATE_OPTIONS)[number]
  >("Today");

  const [bill, setBill] = useState<
    (typeof BILL_OPTIONS)[number]
  >("🤝 I'll pay");

  const [audience, setAudience] = useState<
    (typeof AUDIENCE_OPTIONS)[number]
  >("Everyone verified");

  const [isPublished, setIsPublished] = useState(false);

  const selectedActivity =
    ACTIVITIES.find((item) => item.label === activity) ??
    ACTIVITIES[0];

  return (
    <section
      id="date-plans"
      className="overflow-hidden bg-[#f5f2ef] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-6">

        {/* ==================================================
            SECTION HEADING
            ================================================== */}

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#c83e61]">
            Date Plans
          </p>

          <h2 className="font-serif text-[36px] font-semibold leading-[1.12] tracking-[-1.3px] text-[#201c1d] sm:text-[44px] lg:text-[50px]">
            Skip the chat.{" "}
            <span className="italic text-[#cf486b]">
              Make a plan.
            </span>
          </h2>

          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#746e6b] sm:text-lg">
            Post what you want to do. Verified people nearby
            ask to join.
            <br className="hidden sm:block" />
            You pick who comes.
          </p>
        </div>

        {/* ==================================================
            MOCKUP AND INTERACTIVE FORM
            ================================================== */}

        <div className="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-14">

          {/* ================================================
              LEFT MOBILE MOCKUP
              ================================================ */}

          <div className="date-plan-mockup">

            {/* BACKGROUND GLOW */}

            <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#6e3d49]/10 blur-[65px]" />

            {/* PHONE IMAGE */}

            <img
              src="https://ik.imagekit.io/r0vb3de74/Pasta%20&%20Honest%20Chats%20Date%20Plan.png"
              alt="Welvors date plans mobile application"
              draggable={false}
              className="date-plan-phone"
            />

            {/* LIVE REQUESTS */}

            <div className="date-plan-floating-card date-plan-live">
              <div className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-[#279762]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#279762]" />
                Live
              </div>

              <div>
                <p className="date-plan-float-title">
                  9 requests
                </p>

                <p className="date-plan-float-description">
                  for tonight&apos;s dinner
                </p>
              </div>
            </div>

            {/* APPROVED REQUEST */}

            <div className="date-plan-floating-card date-plan-approved">

              <span className="date-plan-check-icon">
                ✓
              </span>

              <div>
                <p className="date-plan-float-title">
                  You approved Ananya
                </p>

                <p className="date-plan-float-description">
                  Details sent to chat
                </p>
              </div>
            </div>

            {/* HOST RATING */}

            <div className="date-plan-floating-card date-plan-rating">

              <span className="shrink-0 text-base">
                ⭐
              </span>

              <div>
                <p className="date-plan-float-title">
                  4.9 host rating
                </p>

                <p className="date-plan-float-description">
                  Shows up on time
                </p>
              </div>
            </div>
          </div>

          {/* ================================================
              RIGHT DATE PLAN FORM
              ================================================ */}

          <div className="rounded-[26px] border border-[#eae5e2] bg-white p-5 shadow-[0_12px_35px_rgba(45,25,30,0.06)] sm:p-6">

            {/* FORM HEADER */}

            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-[#201c1d] sm:text-lg">
                Post a plan in 30 seconds
              </h3>

              <span className="shrink-0 rounded-full bg-[#faebef] px-3 py-1.5 text-xs font-semibold text-[#c83e61]">
                Try it
              </span>
            </div>

            <div className="space-y-4">

              {/* WHAT */}

              <div>
                <p className="date-plan-label">What</p>

                <div className="flex flex-wrap gap-2">
                  {ACTIVITIES.map((item) => (
                    <OptionButton
                      key={item.label}
                      label={`${item.icon} ${item.label}`}
                      active={activity === item.label}
                      onClick={() => {
                        setActivity(item.label);
                        setIsPublished(false);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* WHEN */}

              <div>
                <p className="date-plan-label">When</p>

                <div className="flex flex-wrap gap-2">
                  {DATE_OPTIONS.map((item) => (
                    <OptionButton
                      key={item}
                      label={item}
                      active={date === item}
                      onClick={() => {
                        setDate(item);
                        setIsPublished(false);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* BILL */}

              <div>
                <p className="date-plan-label">Bill</p>

                <div className="flex flex-wrap gap-2">
                  {BILL_OPTIONS.map((item) => (
                    <OptionButton
                      key={item}
                      label={item}
                      active={bill === item}
                      onClick={() => {
                        setBill(item);
                        setIsPublished(false);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* WHO CAN ASK */}

              <div>
                <p className="date-plan-label">
                  Who can ask
                </p>

                <div className="flex flex-wrap gap-2">
                  {AUDIENCE_OPTIONS.map((item) => (
                    <OptionButton
                      key={item}
                      label={item}
                      active={audience === item}
                      onClick={() => {
                        setAudience(item);
                        setIsPublished(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ==============================================
                LIVE DATE PLAN PREVIEW
                ============================================== */}

            <div className="mt-5 flex items-center gap-3.5 rounded-[18px] border border-dashed border-[#df7791] bg-[#f7f3f1] p-3.5">

              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f8dbe4] to-[#e7a1b4] text-[27px]">
                {selectedActivity.icon}
              </div>

              <div className="min-w-0">

                <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full bg-[#cf486b] px-2.5 py-1 text-[10px] font-semibold text-white">
                    {date}
                  </span>

                  <span className="rounded-full border border-[#e9e2df] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#353031]">
                    {bill}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#242021] sm:text-base">
                  {selectedActivity.title}
                </h4>

                <p className="mt-1.5 text-[11px] leading-relaxed text-[#807875] sm:text-xs">
                  {audience === "Everyone verified"
                    ? "Verified members"
                    : audience}{" "}
                  · 🙈 SafeFace till you approve
                </p>

              </div>
            </div>

            {/* GO LIVE BUTTON */}

            <button
              type="button"
              onClick={() => setIsPublished(true)}
              className={`
                mt-3.5
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-full
                text-sm
                font-bold
                text-white
                transition-colors
                duration-300
                ${
                  isPublished
                    ? "bg-[#269b66]"
                    : "bg-[#cf486b] hover:bg-[#b9395b]"
                }
              `}
            >
              {isPublished
                ? "✓ Demo plan is live!"
                : "🔴 Go live"}
            </button>

            {isPublished && (
              <p
                role="status"
                className="mt-2 text-center text-xs text-[#269b66]"
              >
                Preview only. No real date plan was published.
              </p>
            )}
          </div>
        </div>

        {/* ==================================================
            DATE PLAN JOURNEY
            ================================================== */}

        <div className="relative mt-14 sm:mt-16">

          {/* DESKTOP CONNECTING LINE */}

          <div className="absolute left-[10%] right-[10%] top-[27px] hidden border-t-2 border-dashed border-[#e8a0b3] sm:block" />

          <div className="relative grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-5 sm:gap-3">

            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={step.title}
                className={`
                  flex flex-col items-center text-center
                  ${
                    index === JOURNEY_STEPS.length - 1
                      ? "col-span-2 sm:col-span-1"
                      : ""
                  }
                `}
              >
                <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-[18px] border border-[#eae5e2] bg-white text-[23px]">
                  {step.icon}
                </div>

                <h4 className="mt-3 text-sm font-bold text-[#292526]">
                  {step.title}
                </h4>

                <p className="mt-1.5 text-xs leading-relaxed text-[#928a86]">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ==================================================
            DARK SAFETY FEATURES BANNER
            ================================================== */}

        <div className="mt-10 rounded-[24px] bg-[#1e1a1b] px-4 py-7 sm:mt-12 sm:px-6">

          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">

            {SAFETY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <span className="text-[23px]">
                  {feature.icon}
                </span>

                <p className="mt-2.5 max-w-[140px] text-xs font-bold leading-relaxed text-white">
                  {feature.title}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ====================================================
          INTERNAL CSS
          ==================================================== */}

      <style jsx>{`
        .date-plan-mockup {
          position: relative;
          isolation: isolate;
          width: 100%;
          max-width: 540px;
          height: 600px;
          margin: 0 auto;
        }

        .date-plan-phone {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: auto;
          height: 94%;
          max-width: 85%;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(
            0 28px 32px rgba(56, 34, 40, 0.2)
          );
        }

        .date-plan-floating-card {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border: 1px solid #eee9e7;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 10px 28px rgba(55, 34, 42, 0.09);
          white-space: nowrap;

          animation-name: date-plan-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .date-plan-float-title {
          color: #242021;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }

        .date-plan-float-description {
          color: #928985;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
        }

        .date-plan-live {
          top: 17%;
          left: 0;
          animation-duration: 4s;
          animation-delay: 0s;
        }

        .date-plan-approved {
          top: 48%;
          right: 0;
          animation-duration: 4.8s;
          animation-delay: -1.5s;
        }

        .date-plan-rating {
          bottom: 12%;
          left: 4%;
          animation-duration: 4.4s;
          animation-delay: -2.5s;
        }

        .date-plan-check-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 29px;
          height: 29px;
          border-radius: 50%;
          background: #279762;
          color: white;
          font-size: 16px;
          font-weight: 700;
        }

        .date-plan-label {
          margin-bottom: 8px;
          color: #948b87;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        @keyframes date-plan-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -16px, 0);
          }
        }

        /* ==========================================
           TABLET
           ========================================== */

        @media (max-width: 1023px) {
          .date-plan-mockup {
            max-width: 500px;
            height: 560px;
          }

          .date-plan-live {
            left: 1%;
          }

          .date-plan-approved {
            right: 1%;
          }
        }

        /* ==========================================
           MOBILE
           ========================================== */

        @media (max-width: 640px) {
          .date-plan-mockup {
            max-width: 420px;
            height: 460px;
          }

          .date-plan-phone {
            height: 92%;
            max-width: 78%;
          }

          .date-plan-floating-card {
            gap: 6px;
            padding: 8px 10px;
            border-radius: 12px;
          }

          .date-plan-float-title {
            font-size: 10px;
          }

          .date-plan-float-description {
            font-size: 9px;
          }

          .date-plan-live {
            top: 18%;
            left: 0;
          }

          .date-plan-approved {
            top: 48%;
            right: 0;
          }

          .date-plan-rating {
            bottom: 11%;
            left: 2%;
          }

          .date-plan-check-icon {
            width: 23px;
            height: 23px;
            font-size: 13px;
          }
        }

        @media (max-width: 375px) {
          .date-plan-mockup {
            height: 400px;
          }

          .date-plan-floating-card {
            padding: 7px 8px;
          }

          .date-plan-float-title {
            font-size: 9px;
          }

          .date-plan-float-description {
            font-size: 8px;
          }
        }

        /* ==========================================
           ACCESSIBILITY
           ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .date-plan-floating-card {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}