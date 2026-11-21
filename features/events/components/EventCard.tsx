"use client";

import { useState } from "react";
import { Heart, CalendarDays } from "lucide-react";
import EventComingSoonButton from "./EventComingSoonButton";

import type { NearbyEvent } from "../types/event.types";

type EventCardProps = {
  event: NearbyEvent;
};

export default function EventCard({
  event,
}: EventCardProps) {
  const [isFavourite, setIsFavourite] = useState(
    event.isFavourite ?? false
  );

  return (
    <article className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#EAE6E2] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08),0_2px_5px_rgba(0,0,0,0.03)]">

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden xl:h-[200px]">

        {/* Event Image */}
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

        {/* Top Section */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">

          {/* Status Badge */}
          <span
            className={`inline-flex h-[26px] items-center rounded-full px-3 text-[12px] leading-none font-bold whitespace-nowrap text-white ${
              event.badgeType === "verified"
                ? "bg-[#2CAF69]"
                : "bg-[#EBA73B]"
            }`}
          >
            {event.badge}
          </span>

          {/* Favourite Button */}
          <button
            type="button"
            aria-label={
              isFavourite
                ? "Remove from favourites"
                : "Add to favourites"
            }
            aria-pressed={isFavourite}
            onClick={() =>
              setIsFavourite((previous) => !previous)
            }
            className="relative z-20 flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/95 shadow-sm transition-all hover:bg-white active:scale-95"
          >
            <Heart
              size={22}
              strokeWidth={2.2}
              className={
                isFavourite
                  ? "fill-[#EE4D78] text-[#EE4D78]"
                  : "text-[#202020]"
              }
            />
          </button>

        </div>

        {/* Date and Time Badges */}
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-[6px] px-3 pb-3">

          {/* Date */}
          <span className="inline-flex h-[28px] items-center gap-1 rounded-full bg-white px-[10px] text-[12px] leading-none font-bold whitespace-nowrap text-[#202020]">

            <CalendarDays
              size={12}
              strokeWidth={2}
              className="shrink-0"
            />

            {event.date}

          </span>

          {/* Time */}
          <span className="inline-flex h-[28px] items-center gap-1 rounded-full bg-white px-[10px] text-[12px] leading-none font-bold whitespace-nowrap text-[#202020]">

            <span className="text-[12px]">
              🕐
            </span>

            {event.time} · {event.duration}

          </span>

        </div>

      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="flex flex-1 flex-col px-[14px] pt-[10px] pb-3">

        {/* Event Title */}
        <h3
          title={event.title}
          className="truncate text-[17px] leading-[22px] font-bold tracking-[-0.2px] text-[#202020] xl:text-[18px]"
        >
          {event.title}
        </h3>

        {/* Venue and Distance */}
        <div className="mt-1 flex items-start gap-[5px]">

          <span className="shrink-0 text-[13px]">
            📍
          </span>

          <p className="text-[13px] leading-[18px] text-[#65615D] xl:text-[14px]">
            {event.venue} · {event.distance} km
          </p>

        </div>

        {/* Transport Information */}
        <div className="mt-[2px] flex items-start gap-[5px]">

          <span className="shrink-0 text-[12px]">
            🚇
          </span>

          <p className="text-[12px] leading-[17px] text-[#908B85] xl:text-[13px]">
            {event.transportDetails}
          </p>

        </div>

        {/* Verified Guest Information */}
        <div className="mt-1 flex items-start gap-[5px]">

          <span className="shrink-0 text-[13px]">
            👥
          </span>

          <p className="text-[13px] leading-[18px] text-[#65615D] xl:text-[14px]">
            {event.guestDetails}
          </p>

        </div>

        {/* Divider */}
        <div className="mt-auto pt-[10px]">
          <div className="border-t border-dashed border-[#EAE6E2]" />
        </div>

        {/* ================= PRICE & BOOK BUTTON ================= */}
        <div className="mt-2 flex items-center justify-between gap-2">

          {/* Pricing */}
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-[5px]">

            {/* Current Price */}
            <span className="text-[18px] leading-[23px] font-bold whitespace-nowrap text-[#202020] xl:text-[19px]">
              ₹{event.price.toLocaleString("en-IN")}
            </span>

            {/* Original Price */}
            {event.originalPrice > event.price && (
              <span className="text-[12px] font-semibold whitespace-nowrap text-[#908B85] line-through">
                ₹{event.originalPrice.toLocaleString("en-IN")}
              </span>
            )}

            {/* Discount Badge */}
            {event.discountPercentage > 0 && (
              <span className="inline-flex h-[20px] items-center rounded-full bg-[#E4F6ED] px-[7px] text-[11px] leading-none font-bold whitespace-nowrap text-[#16AE68]">
                {event.discountPercentage}% OFF
              </span>
            )}

            {/* Per Person */}
            <span className="text-[12px] font-medium whitespace-nowrap text-[#908B85]">
              / person
            </span>

          </div>

          {/* Book Button */}
          <EventComingSoonButton
            title={event.title}
            className="inline-flex h-[36px] shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-linear-to-r from-[#EE4D78] to-[#C8325B] px-4 text-[14px] font-bold whitespace-nowrap text-white after:absolute after:inset-0 after:z-10"
          >
            Book →
          </EventComingSoonButton>

        </div>

      </div>

    </article>
  );
}
