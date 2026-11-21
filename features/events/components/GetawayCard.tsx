"use client";

import { useState } from "react";
import { Heart, CalendarDays } from "lucide-react";
import EventComingSoonButton from "./EventComingSoonButton";

import type { Getaway } from "../types/event.types";

type GetawayCardProps = {
  getaway: Getaway;
};

export default function GetawayCard({
  getaway,
}: GetawayCardProps) {
  const [isFavourite, setIsFavourite] = useState(
    getaway.isFavourite ?? false
  );

  return (
    <article className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#EAE6E2] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08),0_2px_5px_rgba(0,0,0,0.03)]">

      {/* ================= IMAGE SECTION ================= */}
      <div className="relative h-[170px] w-full shrink-0 overflow-hidden xl:h-[190px]">

        {/* Background Image */}
        <img
          src={getaway.image}
          alt={getaway.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/10 via-45% to-transparent" />

        {/* Top Section */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-[14px]">

          {/* Available Spots */}
          <span className="inline-flex h-[28px] items-center gap-1 rounded-full bg-[#EBA73B] px-3 text-[13px] leading-none font-bold whitespace-nowrap text-white">
            🔥 {getaway.spotsLeft} spots left
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
            className="relative z-20 flex h-[46px] w-[46px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/95 shadow-sm transition-all hover:bg-white active:scale-95"
          >
            <Heart
              size={24}
              strokeWidth={2.2}
              className={
                isFavourite
                  ? "fill-[#EE4D78] text-[#EE4D78]"
                  : "text-[#202020]"
              }
            />
          </button>

        </div>

        {/* Image Bottom Details */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-3 text-white">

          {/* Date and Duration Badge */}
          <div className="inline-flex min-h-[28px] max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/35 bg-white/25 px-3 py-1 text-[12px] leading-none font-bold backdrop-blur-[8px] xl:text-[13px]">

            <span className="whitespace-nowrap">
              {getaway.date}
            </span>

            <span className="h-[13px] w-px shrink-0 bg-white/50" />

            {getaway.durationIcon === "🌙" ? (
              <span className="text-[12px]">🌙</span>
            ) : (
              <CalendarDays
                size={13}
                className="shrink-0"
              />
            )}

            <span className="whitespace-nowrap">
              {getaway.duration}
            </span>

          </div>

          {/* Trip Title */}
          <h3 className="mt-[6px] truncate text-[20px] leading-[26px] font-bold tracking-[-0.4px] xl:text-[23px] xl:leading-[28px]">
            {getaway.title}
          </h3>

        </div>

      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="flex flex-1 flex-col px-4 pt-3 pb-3">

        {/* Trip Route */}
        <div className="flex w-full items-center gap-[5px]">

          {getaway.route.map((place, index) => (
            <div
              key={`${place}-${index}`}
              className={`flex min-w-0 items-center gap-[5px] ${
                index !== 0 ? "flex-1" : ""
              }`}
            >

              {/* Route Connecting Line */}
              {index !== 0 && (
                <div className="flex min-w-[10px] flex-1 items-center">

                  <div className="flex-1 border-t-2 border-dashed border-[#EE4D78]" />

                  <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#EE4D78]" />

                </div>
              )}

              {/* Place Name */}
              <span className="min-w-0 truncate text-[13px] leading-[20px] font-bold text-[#202020] xl:text-[16px]">
                {place}
              </span>

            </div>
          ))}

        </div>

        {/* Pickup Details */}
        <div className="mt-[6px] flex items-center gap-1.5">

          <span className="shrink-0 text-[13px]">
            ⏰
          </span>

          <span className="text-[13px] leading-[20px] text-[#908B85] xl:text-[15px]">
            {getaway.pickupDetails}
          </span>

        </div>

        {/* Included Facilities */}
        <div className="mt-2 flex flex-wrap items-center gap-[6px]">

          {getaway.includes.map((item) => (
            <span
              key={item}
              className="inline-flex h-[24px] items-center gap-[3px] rounded-full bg-[#E4F6ED] px-[10px] text-[12px] leading-none font-semibold whitespace-nowrap text-[#16AE68] xl:text-[13px]"
            >
              <span className="font-bold">✓</span>

              {item}
            </span>
          ))}

        </div>

        {/* Divider */}
        <div className="mt-auto pt-[10px]">
          <div className="border-t border-dashed border-[#EAE6E2]" />
        </div>

        {/* ================= PRICE & BOOK BUTTON ================= */}
        <div className="mt-[10px] flex items-center justify-between gap-2">

          {/* Price Details */}
          <div className="min-w-0 flex-1">

            {/* Discounted Price */}
            <span className="mr-[6px] inline-block text-[20px] leading-[26px] font-bold whitespace-nowrap text-[#202020] xl:text-[22px]">
              ₹{getaway.price.toLocaleString("en-IN")}
            </span>

            {/* Original Price */}
            {getaway.originalPrice > getaway.price && (
              <span className="mr-[6px] inline-block text-[12px] font-semibold whitespace-nowrap text-[#908B85] line-through xl:text-[14px]">
                ₹{getaway.originalPrice.toLocaleString("en-IN")}
              </span>
            )}

            {/* Discount Badge */}
            {getaway.discountPercentage > 0 && (
              <span className="mr-1 inline-flex h-[20px] items-center rounded-full bg-[#E4F6ED] px-2 align-middle text-[11px] leading-none font-bold whitespace-nowrap text-[#16AE68] xl:text-[12px]">
                {getaway.discountPercentage}% OFF
              </span>
            )}

            {/* Price Description */}
            <span className="text-[12px] leading-[18px] font-medium text-[#908B85] xl:text-[13px]">
              / person · all-inclusive
            </span>

          </div>

          {/* Book Button */}
          <EventComingSoonButton
            title={getaway.title}
            className="inline-flex h-[36px] shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-linear-to-r from-[#EE4D78] to-[#C8325B] px-[16px] text-[14px] font-bold whitespace-nowrap text-white after:absolute after:inset-0 after:z-10 xl:text-[16px]"
          >
            Book →
          </EventComingSoonButton>

        </div>

      </div>

    </article>
  );
}
