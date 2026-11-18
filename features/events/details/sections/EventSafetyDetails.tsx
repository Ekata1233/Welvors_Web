"use client";

import { useState } from "react";

import {
  Siren,
  MapPin,
  Flag,
  Headset,
  ShieldCheck,
  X,
} from "lucide-react";



import type {
  EventSafetyAction,
} from "../types/event-details.types";
import { EVENT_SAFETY_ITEMS } from "../constants/event-details.constants";

const SAFETY_ACTIONS = [
  {
    id: "SOS",
    title: "SOS",
    icon: Siren,
  },
  {
    id: "SHARE_LOCATION",
    title: "Share live location",
    icon: MapPin,
  },
  {
    id: "REPORT",
    title: "Report",
    icon: Flag,
  },
  {
    id: "SUPPORT",
    title: "Support",
    icon: Headset,
  },
] as const;

const ACTION_DETAILS = {
  SOS: {
    title: "Emergency assistance",
    description:
      "If you are in immediate danger, contact emergency services.",
  },
  SHARE_LOCATION: {
    title: "Share live location",
    description:
      "Live location sharing will be available through the Welvors app when integrated.",
  },
  REPORT: {
    title: "Report an issue",
    description:
      "Event reporting is not yet available on this website.",
  },
  SUPPORT: {
    title: "Event support",
    description:
      "Event support will be available once the support service is integrated.",
  },
};

export default function EventSafety() {
  const [activeAction, setActiveAction] =
    useState<EventSafetyAction | null>(null);

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <h2 className="mb-[14px] text-[20px] leading-[26px] font-bold text-[#202020]">
        Your Safety Matters 🛡️
      </h2>

      {/* ================= SAFETY INFORMATION CARDS ================= */}

      <div className="grid grid-cols-2 gap-[10px]">

        {EVENT_SAFETY_ITEMS.map((item) => (
          <article
            key={item.id}
            className="flex min-h-[74px] min-w-0 items-center gap-3 rounded-[18px] border border-[#EAE6E2] bg-white p-3 shadow-[0_3px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#F5CBD6] hover:bg-[#FDE4E9]"
          >

            {/* Safety Icon */}

            <div
              style={{
                backgroundColor: item.background,
              }}
              className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] text-[20px]"
            >
              {item.icon}
            </div>

            {/* Safety Details */}

            <div className="min-w-0 flex-1">

              <h3 className="text-[12px] leading-[17px] font-bold text-[#202020] sm:text-[14px] sm:leading-[20px]">
                {item.title}
              </h3>

              <p className="mt-[3px] text-[11px] leading-[15px] text-[#908B85] sm:text-[12px] sm:leading-[17px]">
                {item.description}
              </p>

            </div>

          </article>
        ))}

      </div>

      {/* ================= SAFETY INFORMATION BANNER ================= */}

      <div className="mt-3 flex items-center gap-[9px] rounded-[14px] border border-[#CFE8D7] bg-[#EAF7EF] px-3 py-[11px]">

        <ShieldCheck
          size={19}
          strokeWidth={2}
          className="shrink-0 text-[#228B54]"
        />

        <p className="text-[12px] leading-[18px] font-medium text-[#287448] sm:text-[13px]">
          Respect, consent, and personal boundaries are
          important at every event.
        </p>

      </div>

      {/* ================= SAFETY ACTION BUTTONS ================= */}

      <div className="mt-3 grid grid-cols-2 gap-[10px] sm:grid-cols-4">

        {SAFETY_ACTIONS.map((action) => {
          const Icon = action.icon;

          const isSOS = action.id === "SOS";

          return (
            <button
              key={action.id}
              type="button"
              onClick={() =>
                setActiveAction(action.id)
              }
              aria-expanded={activeAction === action.id}
              className={`group flex min-h-[64px] cursor-pointer flex-col items-center justify-center gap-[6px] rounded-[16px] border bg-white px-2 py-3 transition-all duration-300 hover:border-[#F5B8CA] hover:bg-[#FDE4E9] ${
                isSOS
                  ? "border-[#F4CDD5] text-[#E94D65]"
                  : "border-[#EAE6E2] text-[#202020]"
              }`}
            >

              <Icon
                size={21}
                strokeWidth={1.9}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-center text-[12px] leading-[16px] font-bold">
                {action.title}
              </span>

            </button>
          );
        })}

      </div>

      {/* ================= ACTION INFORMATION ================= */}

      {activeAction && (
        <div
          aria-live="polite"
          className="mt-3 rounded-[18px] border border-[#EAE6E2] bg-white p-4 shadow-sm"
        >

          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0 flex-1">

              <h3 className="text-[15px] font-bold text-[#202020]">
                {ACTION_DETAILS[activeAction].title}
              </h3>

              <p className="mt-1 text-[13px] leading-[19px] text-[#908B85]">
                {ACTION_DETAILS[activeAction].description}
              </p>

            </div>

            <button
              type="button"
              aria-label="Close information"
              onClick={() => setActiveAction(null)}
              className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#F4F1ED] transition-colors hover:bg-[#FDE4E9]"
            >
              <X size={16} />
            </button>

          </div>

          {/* Emergency Call Button */}

          {activeAction === "SOS" && (
            <a
              href="tel:112"
              className="mt-3 flex min-h-[42px] w-full items-center justify-center rounded-[12px] bg-[#E94D65] text-[13px] font-bold text-white transition-colors hover:bg-[#CA3650]"
            >
              Call Emergency Services — 112
            </a>
          )}

        </div>
      )}

    </section>
  );
}