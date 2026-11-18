"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const INCLUDED_ITEMS = [
  {
    icon: "🗂️",
    title: "Event Coordination",
    background: "#FDE4E9",
  },
  {
    icon: "👨‍💼",
    title: "Professional Event Host",
    background: "#EEE8FF",
  },
  {
    icon: "🧊",
    title: "Icebreaker Activities",
    background: "#E4F3FF",
  },
  {
    icon: "🏆",
    title: "Group Challenges",
    background: "#FFF1DC",
  },
  {
    icon: "🥤",
    title: "Basic Refreshments",
    background: "#E4F6ED",
  },
  {
    icon: "📷",
    title: "Group Photography",
    background: "#FDEAE3",
  },
];

const NOT_INCLUDED_ITEMS = [
  "Personal travel expenses",
  "Personal trekking equipment",
  "Additional food and beverages",
  "Personal expenses",
];

export default function EventInclusions() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}
      <h2 className="mb-4 text-[20px] leading-[26px] font-bold text-[#202020]">
        Everything Included in Your Experience
      </h2>

      {/* ================= INCLUDED FACILITIES ================= */}
      <div className="rounded-[22px] border border-[#EAE6E2] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        <div className="grid grid-cols-2 gap-x-4 gap-y-4">

          {INCLUDED_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex min-w-0 items-center gap-[10px]"
            >

              {/* Facility Icon */}
              <div
                style={{
                  backgroundColor: item.background,
                }}
                className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[12px] text-[18px]"
              >
                {item.icon}
              </div>

              {/* Facility Title */}
              <span className="text-[12px] leading-[17px] font-semibold text-[#202020] sm:text-[14px] sm:leading-[20px]">
                {item.title}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* ================= NOT INCLUDED CARD ================= */}
      <div className="mt-3 overflow-hidden rounded-[20px] border border-[#EAE6E2] bg-white shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        {/* Dropdown Button */}
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls="event-not-included"
          onClick={() =>
            setIsExpanded((previous) => !previous)
          }
          className="flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left"
        >

          <span className="text-[15px] font-bold text-[#202020]">
            Not Included
          </span>

          <ChevronDown
            size={16}
            strokeWidth={2}
            className={`shrink-0 text-[#908B85] transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />

        </button>

        {/* Expandable Content */}
        <div
          id="event-not-included"
          inert={!isExpanded}
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >

          <div className="overflow-hidden">

            <div className="mx-4 border-t border-[#EAE6E2] pb-4 pt-3">

              <div className="space-y-3">

                {NOT_INCLUDED_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >

                    <X
                      size={15}
                      strokeWidth={2}
                      className="shrink-0 text-[#EE4D78]"
                    />

                    <span className="text-[13px] leading-[18px] text-[#65615D]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}