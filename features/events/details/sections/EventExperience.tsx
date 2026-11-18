"use client";

import { useState } from "react";
import { EVENT_EXPERIENCE_STEPS } from "../constants/event-details.constants";


export default function EventExperience() {
  const [activeStep, setActiveStep] = useState(0);

  const selectedStep =
    EVENT_EXPERIENCE_STEPS[activeStep];

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}
      <div className="mb-4">
        <h2 className="text-[20px] leading-[26px] font-bold text-[#202020]">
          Your Experience, Step by Step
        </h2>

        <p className="mt-1 text-[13px] leading-[18px] text-[#908B85]">
          A relaxed, hosted day — tap any step to see what happens
        </p>
      </div>

      {/* ================= EXPERIENCE TIMELINE ================= */}
      <div className="w-full overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        <div className="flex w-max items-start px-2 pt-2 md:px-3">

          {EVENT_EXPERIENCE_STEPS.map((step, index) => {
            const isActive = activeStep === index;

            const isLast =
              index === EVENT_EXPERIENCE_STEPS.length - 1;

            return (
              <div
                key={step.id}
                className="relative w-[100px] shrink-0 sm:w-[110px]"
              >

                {/* Connecting Line */}
                {!isLast && (
                  <div className="absolute top-[36px] left-1/2 h-[2px] w-full bg-[#F5B8CA]" />
                )}

                {/* Step Button */}
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveStep(index)}
                  className="relative z-10 flex w-full cursor-pointer flex-col items-center text-center"
                >

                  {/* Circular Image */}
                  <div
                    className={`relative h-[74px] w-[74px] rounded-full border-2 bg-white p-[3px] transition-all duration-200 ${
                      isActive
                        ? "border-[#EE4D78]"
                        : "border-[#F5CBD6]"
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="h-full w-full rounded-full object-cover"
                    />

                    {/* Step Number */}
                    <span
                      className={`absolute -top-[4px] -right-[4px] flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-white text-[11px] leading-none font-bold shadow-sm ${
                        isActive
                          ? "bg-[#EE4D78] text-white"
                          : "bg-white text-[#EE4D78]"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-[7px] flex min-h-[32px] max-w-[95px] items-center justify-center text-[12px] leading-[15px] font-bold text-[#202020]">
                    {step.title}
                  </h3>

                  {/* Step Time */}
                  <span className="mt-1 text-[11px] leading-[15px] font-semibold text-[#EE4D78]">
                    {step.time}
                  </span>

                </button>

              </div>
            );
          })}

        </div>
      </div>

      {/* ================= SELECTED STEP DETAILS ================= */}
      <article
        aria-live="polite"
        className="mt-2 rounded-[20px] border border-[#EAE6E2] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]"
      >

        {/* Step Number & Time */}
        <div className="flex items-center justify-between gap-3">

          <span className="text-[12px] font-bold tracking-[0.5px] text-[#EE4D78]">
            STEP {activeStep + 1} OF{" "}
            {EVENT_EXPERIENCE_STEPS.length}
          </span>

          <span className="text-[12px] font-bold text-[#EE4D78]">
            {selectedStep.time}
          </span>

        </div>

        {/* Step Title */}
        <h3 className="mt-2 text-[17px] leading-[22px] font-bold text-[#202020]">
          {selectedStep.title}
        </h3>

        {/* Step Description */}
        <p className="mt-[6px] text-[13px] leading-[20px] text-[#65615D]">
          {selectedStep.description}
        </p>

        {/* Step Tags */}
        <div className="mt-3 flex flex-wrap items-center gap-[6px]">

          {selectedStep.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex min-h-[26px] items-center rounded-full bg-[#F4F1ED] px-[11px] py-1 text-[12px] leading-none font-semibold text-[#65615D]"
            >
              {tag}
            </span>
          ))}

        </div>

      </article>

    </section>
  );
}