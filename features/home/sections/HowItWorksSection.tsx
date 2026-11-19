"use client";

import { useEffect, useState } from "react";

import HowItWorksPhone from "../components/HowItWorksPhone";
import HowItWorksStep from "../components/HowItWorksStep";

import {
  HOW_IT_WORKS_DURATION,
  HOW_IT_WORKS_STEPS,
} from "../constants/how-it-works.constants";

/* ==========================================================
   HOW IT WORKS SECTION
   ========================================================== */

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [animationKey, setAnimationKey] = useState(0);

  /* ========================================================
     AUTOMATIC STEP ANIMATION
     ======================================================== */

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex(
        (previous) =>
          (previous + 1) % HOW_IT_WORKS_STEPS.length,
      );

      setAnimationKey(
        (previous) => previous + 1,
      );
    }, HOW_IT_WORKS_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, animationKey]);

  /* ========================================================
     MANUAL STEP SELECTION
     ======================================================== */

  const handleStepClick = (index: number) => {
    setActiveIndex(index);

    setAnimationKey(
      (previous) => previous + 1,
    );
  };

  return (
    <section
      id="how-it-works"
      className="
        relative
        w-full
        scroll-mt-24
        overflow-hidden
        bg-[#f5f2ef]
        py-14
        sm:py-20
        lg:py-[110px]
      "
    >
      {/* MAIN CONTAINER */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ==================================================
            SECTION HEADING
            ================================================== */}

        <div className="mb-10 lg:mb-14">
          <p
            className="
              mb-3
              text-[12px]
              font-semibold
              uppercase
              tracking-[2px]
              text-[#c5385f]
            "
          >
            How it works
          </p>

          <h2
            className="
              font-serif
              text-[36px]
              font-semibold
              leading-[1.12]
              tracking-[-1.5px]
              text-[#211c20]
              sm:text-[46px]
              lg:text-[54px]
            "
          >
            Four steps to{" "}

            <span className="italic text-[#d0476b]">
              forever.
            </span>
          </h2>
        </div>

        {/* ==================================================
            MAIN CONTENT
            ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            md:grid-cols-[0.85fr_1.15fr]
            md:gap-8
            lg:gap-16
          "
        >
          {/* LEFT PHONE MOCKUP */}

          <HowItWorksPhone
            activeIndex={activeIndex}
          />

          {/* RIGHT ANIMATED STEPS */}

          <div
            className="
              flex
              min-w-0
              flex-col
              gap-2
              sm:gap-3
            "
          >
            {HOW_IT_WORKS_STEPS.map(
              (step, index) => (
                <HowItWorksStep
                  key={step.id}
                  step={step}
                  isActive={activeIndex === index}
                  animationKey={animationKey}
                  onClick={() =>
                    handleStepClick(index)
                  }
                />
              ),
            )}
          </div>
        </div>
      </div>

      {/* ==================================================
          INTERNAL ANIMATION CSS
          NO STYLED-JSX REQUIRED
          ================================================== */}

      <style>{`
        @keyframes welvors-how-it-works-fill {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        .welvors-how-it-works-progress {
          transform-origin: left center;

          animation:
            welvors-how-it-works-fill
            ${HOW_IT_WORKS_DURATION}ms
            linear
            forwards;

          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .welvors-how-it-works-progress {
            animation: none;
            transform: scaleX(1);
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}