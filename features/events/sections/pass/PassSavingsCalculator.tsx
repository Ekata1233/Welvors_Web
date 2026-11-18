"use client";

import { useState } from "react";

export default function PassSavingsCalculator() {
  const [eventCount, setEventCount] = useState(2);

  const averageTicketPrice = 499;
  const convenienceFee = 70;
  const monthlyPassPrice = 433;
  const discount = 0.15;

  const withoutPass =
    eventCount * (averageTicketPrice + convenienceFee);

  const withPass = Math.round(
    monthlyPassPrice +
      Math.max(0, eventCount - 1) *
        averageTicketPrice *
        (1 - discount)
  );

  const savings = withoutPass - withPass;

  const progress = ((eventCount - 1) / 5) * 100;

  return (
    <section className="w-full min-w-0">

      {/* Heading */}
      <h2 className="mb-4 text-[22px] leading-[28px] font-bold text-[#202020]">
        Is it worth it for you?
      </h2>

      <div className="rounded-[24px] border border-[#EAE6E2] bg-white p-4 shadow-[0_5px_15px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        {/* Slider Header */}
        <div className="flex items-center justify-between gap-2">

          <label
            htmlFor="event-count"
            className="text-[15px] font-bold text-[#202020]"
          >
            Events I go to per month
          </label>

          <span className="shrink-0 rounded-full bg-[#EFE9FD] px-3 py-1 text-[13px] font-bold text-[#7048E8]">
            {eventCount} {eventCount === 1 ? "event" : "events"}
          </span>

        </div>

        {/* Range Slider */}
        <input
          id="event-count"
          type="range"
          min={1}
          max={6}
          step={1}
          value={eventCount}
          onChange={(event) =>
            setEventCount(Number(event.target.value))
          }
          style={{
            background: `linear-gradient(to right, #6942D7 ${progress}%, #EEEEEE ${progress}%)`,
          }}
          className="my-5 h-[8px] w-full cursor-pointer appearance-none rounded-full border border-[#C9C6C2] accent-[#6942D7] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6942D7] [&::-moz-range-thumb]:h-[20px] [&::-moz-range-thumb]:w-[20px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#6942D7]"
        />

        {/* Cost Comparison */}
        <div className="grid grid-cols-2 gap-[10px]">

          {/* Without Pass */}
          <div className="rounded-[16px] bg-[#F4F2EF] px-4 py-3">

            <p className="text-[13px] font-semibold text-[#908B85]">
              Without Pass
            </p>

            <p className="mt-1 text-[21px] leading-[25px] font-bold text-[#202020]">
              ₹{withoutPass.toLocaleString("en-IN")}
            </p>

          </div>

          {/* With Pass */}
          <div className="rounded-[16px] bg-[#EFE9FD] px-4 py-3">

            <p className="text-[13px] font-semibold text-[#908B85]">
              With Pass
            </p>

            <p className="mt-1 text-[21px] leading-[25px] font-bold text-[#7048E8]">
              ₹{withPass.toLocaleString("en-IN")}
            </p>

          </div>

        </div>

        {/* Savings */}
        <div className="mt-3 flex min-h-[40px] items-center justify-center rounded-[14px] bg-[#E4F6ED] px-3 py-2 text-center text-[13px] font-bold text-[#078B49]">
          You save ₹{savings.toLocaleString("en-IN")} every month
        </div>

      </div>

    </section>
  );
}