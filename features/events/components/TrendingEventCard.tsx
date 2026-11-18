"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

import type { TrendingEvent } from "../types/event.types";

type TrendingEventCardProps = {
  event: TrendingEvent;
};

export default function TrendingEventCard({
  event,
}: TrendingEventCardProps) {
  const [isFavourite, setIsFavourite] = useState(
    event.isFavourite ?? false
  );

  return (
    <article className="group relative aspect-[5/6] w-full min-w-0 overflow-hidden rounded-[24px] bg-[#202020] shadow-[0_12px_30px_rgba(0,0,0,0.10)] xl:aspect-square xl:rounded-[32px]">

      {/* Background Image */}
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#150F11] via-black/20 via-40% to-transparent" />

      {/* Event Details Link */}
      <Link
        href={`/events/${event.id}`}
        aria-label={`View ${event.title}`}
        className="absolute inset-0 z-10"
      />

      {/* Top Section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 px-3 pt-3 xl:px-4 xl:pt-4">

        {/* Date and Time Badge */}
        <div className="mt-[2px] flex h-[27px] items-center gap-[6px] rounded-full border border-white/35 bg-white/25 px-[10px] text-[11px] leading-none font-bold whitespace-nowrap text-white backdrop-blur-[8px] xl:h-[32px] xl:gap-2 xl:px-[13px] xl:text-[13px]">

          <span>{event.date}</span>

          <span className="h-[12px] w-px bg-white/50" />

          <span className="text-[11px] leading-none">
            🕐
          </span>

          <span>
            {event.time} · {event.duration}
          </span>

        </div>

        {/* Favourite Button */}
        <button
          type="button"
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          aria-pressed={isFavourite}
          onClick={() => setIsFavourite((prev) => !prev)}
          className="pointer-events-auto relative z-20 flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all hover:bg-white active:scale-95 xl:h-[48px] xl:w-[48px]"
        >
          <Heart
            strokeWidth={2.3}
            className={`h-[20px] w-[20px] xl:h-[24px] xl:w-[24px] ${
              isFavourite
                ? "fill-[#EE4D78] text-[#EE4D78]"
                : "text-[#202020]"
            }`}
          />
        </button>

      </div>

      {/* Bottom Event Details */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 text-white xl:px-[22px] xl:pb-[22px]">

        {/* Category Badge */}
        <span className="inline-flex h-[23px] items-center rounded-full bg-white/25 px-[10px] text-[11px] leading-none font-bold tracking-[0.3px] backdrop-blur-sm xl:h-[28px] xl:px-3 xl:text-[13px]">
          {event.category}
        </span>

        {/* Event Title */}
        <h3 className="mt-[10px] line-clamp-2 text-[20px] leading-[25px] font-bold tracking-[-0.5px] xl:text-[27px] xl:leading-[33px]">
          {event.title}
        </h3>

        {/* Event Location */}
        <div className="mt-[6px] flex items-center gap-[5px] xl:mt-2 xl:gap-2">

          <span className="shrink-0 text-[12px] leading-none xl:text-[15px]">
            📍
          </span>

          <span className="truncate text-[13px] leading-[18px] text-white/85 xl:text-[16px] xl:leading-[22px]">
            {event.location}
          </span>

        </div>

        {/* Price and Availability */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-1 gap-y-2 xl:mt-[18px] xl:gap-2">

          {/* Price Section */}
          <div className="flex items-center gap-[5px] xl:gap-[7px]">

            {/* Discounted Price */}
            <span className="text-[18px] leading-none font-bold whitespace-nowrap xl:text-[23px]">
              ₹{event.price.toLocaleString("en-IN")}
            </span>

            {/* Original Price */}
            {event.originalPrice > event.price && (
              <span className="text-[11px] font-semibold whitespace-nowrap text-white/65 line-through xl:text-[14px]">
                ₹{event.originalPrice.toLocaleString("en-IN")}
              </span>
            )}

            {/* Discount Badge */}
            {event.discountPercentage > 0 && (
              <span className="inline-flex h-[18px] items-center justify-center rounded-full bg-[#28AD6D] px-[6px] text-[10px] leading-none font-bold whitespace-nowrap xl:h-[22px] xl:px-2 xl:text-[12px]">
                {event.discountPercentage}% OFF
              </span>
            )}

          </div>

          {/* Available Spots */}
          <span className="inline-flex h-[24px] shrink-0 items-center justify-center rounded-full bg-[#EBA73B] px-[9px] text-[11px] leading-none font-bold whitespace-nowrap xl:h-[30px] xl:px-[13px] xl:text-[15px]">
            {event.spotsLeft}{" "}
            {event.availabilityLabel ?? "spots left"}
          </span>

        </div>

      </div>

    </article>
  );
}