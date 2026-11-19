
"use client";

import { useState, useId } from "react";

const AVATARS = [
  { bg: "#f8d8df", skin: "#efc29f", hair: "#3b241e", style: "long" },
  { bg: "#dce6f4", skin: "#e7b797", hair: "#211c1b", style: "bun" },
  { bg: "#e0eddf", skin: "#bf8969", hair: "#35231e", style: "curly" },
  { bg: "#fae6cb", skin: "#f4cba9", hair: "#87502c", style: "short" },
  { bg: "#ebdff4", skin: "#bd8b73", hair: "#211c27", style: "short" },
  { bg: "#fae0d7", skin: "#edbd9c", hair: "#a23c61", style: "long" },
];

const REVEAL_OPTIONS = [
  { id: "match", icon: "💬", label: "When we match" },
  { id: "chat", icon: "✉️", label: "After we chat" },
  { id: "meet", icon: "🗓️", label: "After we meet" },
  { id: "mutual", icon: "🤝", label: "Mutual reveal" },
  { id: "manual", icon: "🔒", label: "Only when I say" },
];

const JOURNEY = [
  "Strangers",
  "Matched",
  "Chatted",
  "Met",
];

const FEATURES = [
  {
    icon: "✅",
    title: "Still fully verified",
    description: "Hides your photo, never your authenticity",
  },
  {
    icon: "👆",
    title: "One match at a time",
    description: "Nothing is revealed automatically",
  },
  {
    icon: "🔔",
    title: "Screenshot alerts",
    description: "Know if a revealed photo is captured",
  },
  {
    icon: "🔐",
    title: "Encrypted & unlisted",
    description: "Never in discovery, search or feed",
  },
];

/* ==========================================================
   AVATAR ILLUSTRATION
   ========================================================== */

function Avatar({ index }: { index: number }) {
  const avatar = AVATARS[index];
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 240 300"
      className="block h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="240" height="300" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <rect width="240" height="300" fill={avatar.bg} />

        {avatar.style === "long" ? (
          <path
            d="M30 240V145C30 20 210 20 210 145V240Z"
            fill={avatar.hair}
          />
        ) : (
          <ellipse
            cx="120"
            cy="132"
            rx="78"
            ry="90"
            fill={avatar.hair}
          />
        )}

        {avatar.style === "bun" && (
          <circle
            cx="120"
            cy="32"
            r="29"
            fill={avatar.hair}
          />
        )}

        {avatar.style === "curly" &&
          Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;

            return (
             <circle
  key={i}
  cx={(120 + Math.cos(angle) * 73).toFixed(4)}
  cy={(108 + Math.sin(angle) * 65).toFixed(4)}
  r="25"
  fill="#35231e"
/>
            );
          })}

        <ellipse
          cx="120"
          cy="138"
          rx="60"
          ry="68"
          fill={avatar.skin}
        />

        <rect
          x="102"
          y="190"
          width="36"
          height="43"
          rx="12"
          fill={avatar.skin}
        />

        <ellipse
          cx="120"
          cy="307"
          rx="100"
          ry="83"
          fill={avatar.skin}
        />

        <circle cx="98" cy="139" r="6.5" fill="#392821" />
        <circle cx="142" cy="139" r="6.5" fill="#392821" />

        <path
          d="M103 165 Q120 180 137 165"
          fill="none"
          stroke="#392821"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ==========================================================
   SAFEFACE SECTION
   ========================================================== */

export default function SafeFaceSection() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const [revealOption, setRevealOption] = useState("chat");

  const [journeyStep, setJourneyStep] = useState(0);

  const [photoRevealed, setPhotoRevealed] = useState(false);

  const canReveal =
    (revealOption === "match" && journeyStep >= 1) ||
    (revealOption === "chat" && journeyStep >= 2) ||
    (revealOption === "meet" && journeyStep >= 3);

  const hiddenMessage =
    revealOption === "match"
      ? "Unlocks when you match."
      : revealOption === "chat"
        ? "Unlocks after you chat."
        : revealOption === "meet"
          ? "Unlocks after you meet."
          : revealOption === "mutual"
            ? "Both people must agree to reveal."
            : "Only you decide when to reveal.";

  return (
    <section
      id="safeface"
      className="w-full overflow-hidden bg-[#f5f2ef] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">

        {/* SECTION HEADING */}

        <div className="mb-8 lg:mb-10">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[2px] text-[#cc4164]">
            SafeFace · For Women
          </p>

          <h2
            className="text-[36px] leading-[1.12] tracking-[-1px] text-[#201c1d] sm:text-[44px] lg:text-[50px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your face.{" "}
            <span className="italic text-[#d0476b]">
              Your terms.
            </span>
          </h2>

          <p className="mt-4 max-w-[580px] text-[16px] leading-[1.6] text-[#716b68] sm:text-[18px]">
            Matches meet your avatar first. Your real
            photo stays private until you decide, one
            person at a time.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-8">

          {/* LEFT INTERACTIVE CARD */}

          <div className="grid min-w-0 grid-cols-1 gap-5 rounded-[28px] border border-[#eae4e1] bg-white p-5 shadow-[0_12px_30px_rgba(40,20,25,0.06)] sm:grid-cols-[0.9fr_1.1fr] sm:p-6">

            {/* AVATAR PROFILE */}

            <div className="relative isolate min-h-[320px] overflow-hidden rounded-[22px] sm:min-h-[360px]">

              <div className="absolute inset-0">
                {photoRevealed ? (
                  <img
                    src="/images/home/safeface-profile.jpg"
                    alt="Example revealed profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Avatar index={selectedAvatar} />
                )}
              </div>

              {/* PRIVACY STATUS */}

              <span
                className={`absolute left-3 top-3 z-10 rounded-full px-3 py-2 text-[11px] font-semibold text-white ${
                  photoRevealed
                    ? "bg-[#269764]"
                    : "bg-black/65"
                }`}
              >
                {photoRevealed
                  ? "✓ Photo revealed"
                  : "🔒 Photo hidden"}
              </span>

              {/* PROFILE INFORMATION */}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-4 pt-14 text-white">

                <div className="flex items-center gap-2">
                  <h3 className="text-[17px] font-bold">
                    Riya, 27
                  </h3>

                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#3980f6] text-[12px]">
                    ✓
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-white/90 sm:text-[12px]">
                  Architect · Mumbai · Trust 96
                </p>
              </div>

            </div>

            {/* RIGHT INTERACTIVE OPTIONS */}

            <div className="flex min-w-0 flex-col justify-between gap-5">

              {/* STEP 1 — PICK AVATAR */}

              <div>
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.6px] text-[#948c88]">
                  1 · Pick your avatar
                </h3>

                <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                  {AVATARS.map((avatar, index) => (
                    <button
                      key={avatar.bg}
                      type="button"
                      aria-label={`Select avatar ${index + 1}`}
                      aria-pressed={selectedAvatar === index}
                      onClick={() => {
                        setSelectedAvatar(index);
                        setPhotoRevealed(false);
                      }}
                      className={`aspect-square min-w-0 cursor-pointer overflow-hidden rounded-[11px] border-2 transition-all duration-200 hover:-translate-y-1 ${
                        selectedAvatar === index
                          ? "border-[#eb527b]"
                          : "border-transparent"
                      }`}
                    >
                      <Avatar index={index} />
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2 — REVEAL PREFERENCE */}

              <div>
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.6px] text-[#948c88]">
                  2 · When do they see the real you?
                </h3>

                <div className="flex flex-wrap gap-2">
                  {REVEAL_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={revealOption === option.id}
                      onClick={() => {
                        setRevealOption(option.id);
                        setPhotoRevealed(false);
                      }}
                      className={`cursor-pointer rounded-full border px-3 py-2 text-[11px] font-semibold transition-all duration-200 sm:text-[12px] ${
                        revealOption === option.id
                          ? "border-[#d0476b] bg-[#d0476b] text-white"
                          : "border-[#ede8e5] bg-white text-[#282324] hover:bg-[#fce9ee]"
                      }`}
                    >
                      {option.icon} {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 3 — JOURNEY */}

              <div>
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.6px] text-[#948c88]">
                  3 · Move through the journey
                </h3>

                <div className="grid grid-cols-4 rounded-full border border-[#ede8e5] p-[3px]">
                  {JOURNEY.map((step, index) => (
                    <button
                      key={step}
                      type="button"
                      aria-pressed={journeyStep === index}
                      onClick={() => {
                        setJourneyStep(index);
                        setPhotoRevealed(false);
                      }}
                      className={`cursor-pointer rounded-full px-1 py-2.5 text-[10px] font-semibold transition-colors duration-200 sm:text-[11px] ${
                        journeyStep === index
                          ? "bg-[#201c1d] text-white"
                          : "text-[#282324] hover:bg-[#f5f2ef]"
                      }`}
                    >
                      {step}
                    </button>
                  ))}
                </div>

                {/* REVEAL STATUS */}

                <div
                  aria-live="polite"
                  className="mt-4 rounded-[15px] bg-[#f5f2ef] px-4 py-3.5 text-[12px] leading-relaxed text-[#716b68]"
                >
                  {photoRevealed ? (
                    <>
                      <strong className="text-[#269764]">
                        Revealed.
                      </strong>{" "}
                      Only this person can see your photo.
                    </>
                  ) : canReveal ? (
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-[#269764]">
                        Ready to reveal.
                      </strong>

                      <button
                        type="button"
                        onClick={() => setPhotoRevealed(true)}
                        className="cursor-pointer rounded-full bg-[#d0476b] px-3 py-1.5 font-semibold text-white"
                      >
                        Reveal photo
                      </button>
                    </div>
                  ) : (
                    <>
                      <strong className="text-[#201c1d]">
                        Hidden.
                      </strong>{" "}
                      {hiddenMessage}
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT MOBILE MOCKUP */}

          <div className="relative isolate mx-auto flex h-[450px] w-full max-w-[440px] items-center justify-center sm:h-[530px] lg:h-[580px]">

            {/* BACKGROUND GLOW */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b7077]/20 blur-[65px]" />

            {/* MOBILE IMAGE */}

            <img
              src="https://ik.imagekit.io/r0vb3de74/SafeFace%20Photo%20Privacy%20App%20Screen.png"
              alt="Welvors SafeFace photo privacy screen"
              draggable={false}
              className="relative z-10 block h-[88%] w-auto max-w-[80%] select-none object-contain drop-shadow-[0_22px_30px_rgba(50,35,40,0.19)]"
            />

            {/* SCREENSHOT ALERT */}

            <div className="safeface-float safeface-alert absolute left-0 top-[20%] z-20 flex items-center gap-2 rounded-[15px] border border-[#eee8e5] bg-white px-3 py-3 shadow-[0_8px_25px_rgba(40,20,25,0.10)] sm:px-4">

              <span className="text-[18px]">🔔</span>

              <div>
                <p className="whitespace-nowrap text-[11px] font-bold leading-snug text-[#211e1f] sm:text-[13px]">
                  Screenshot alert
                </p>

                <p className="whitespace-nowrap text-[10px] text-[#948c88] sm:text-[12px]">
                  You&apos;re told instantly
                </p>
              </div>

            </div>

            {/* SET UP IN ONE MINUTE */}

            <div className="safeface-float safeface-setup absolute bottom-[15%] right-0 z-20 flex items-center gap-2 rounded-[15px] border border-[#eee8e5] bg-white px-3 py-3 shadow-[0_8px_25px_rgba(40,20,25,0.10)] sm:px-4">

              <span className="text-[18px]">⏱️</span>

              <div>
                <p className="whitespace-nowrap text-[11px] font-bold leading-snug text-[#211e1f] sm:text-[13px]">
                  Set up in 1 min
                </p>

                <p className="whitespace-nowrap text-[10px] text-[#948c88] sm:text-[12px]">
                  Change it anytime
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM FEATURE CARDS */}

        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">

          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] border border-[#ede7e4] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
            >
              <div className="mb-4 text-[24px]">
                {feature.icon}
              </div>

              <h3 className="text-[13px] font-bold leading-snug text-[#211e1f] sm:text-[15px]">
                {feature.title}
              </h3>

              <p className="mt-2 text-[11px] leading-relaxed text-[#716b68] sm:text-[13px]">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* INTERNAL CSS — FLOATING ANIMATION */}

      <style jsx>{`
        @keyframes safefaceFloating {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(
              0,
              var(--float-distance, -15px),
              0
            );
          }
        }

        .safeface-float {
          animation: safefaceFloating 4s
            ease-in-out infinite;
          will-change: transform;
        }

        .safeface-alert {
          animation-duration: 4s;
        }

        .safeface-setup {
          animation-duration: 4.8s;
          animation-delay: -2s;
        }

        @media (max-width: 640px) {
          .safeface-float {
            --float-distance: -9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .safeface-float {
            animation: none;
            will-change: auto;
          }
        }
      `}</style>

    </section>
  );
}
