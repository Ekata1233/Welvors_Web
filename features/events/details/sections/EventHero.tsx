"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart,
  Ellipsis,
  Flag,
  Copy,
} from "lucide-react";

import type { EventDetails } from "../types/event-details.types";

type EventHeroProps = {
  event: EventDetails;
};

export default function EventHero({
  event,
}: EventHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isFavourite, setIsFavourite] = useState(
    event.isFavourite
  );

  const [showMenu, setShowMenu] = useState(false);

  const [copied, setCopied] = useState(false);

  const touchStart = useRef<number | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const totalImages = event.images.length;

  const nextImage = () => {
    if (!totalImages) return;

    setActiveIndex(
      (previous) => (previous + 1) % totalImages
    );
  };

  const previousImage = () => {
    if (!totalImages) return;

    setActiveIndex(
      (previous) =>
        (previous - 1 + totalImages) % totalImages
    );
  };

  // Close more-options menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Copy event link
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setCopied(true);
      setShowMenu(false);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy event link:", error);
    }
  };

  // Share event
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        });
      } else {
        await handleCopy();
      }
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  const actionButtonClass =
    "flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#202020] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition hover:bg-white active:scale-95";

  return (
    <section className="group relative h-[340px] w-full overflow-hidden bg-[#332C32] md:h-[350px] lg:h-[360px]">

      {/* ================= BACKGROUND IMAGES ================= */}

      <div
        className="absolute inset-0"
        onTouchStart={(event) => {
          touchStart.current =
            event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;

          const difference =
            touchStart.current -
            event.changedTouches[0].clientX;

          if (difference > 50) {
            nextImage();
          }

          if (difference < -50) {
            previousImage();
          }

          touchStart.current = null;
        }}
      >
        {event.images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`${event.title} - ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={
              index === 0 ? "high" : "auto"
            }
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* ================= GRADIENT OVERLAY ================= */}

      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#211822]/95 via-black/15 via-50% to-black/10" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="pointer-events-none relative mx-auto h-full w-full max-w-[1280px] px-4 md:px-5">

        {/* ================= TOP NAVIGATION ================= */}

        <div className="pointer-events-auto absolute inset-x-4 top-3 flex items-center justify-between md:inset-x-5">

          {/* Back Button */}

          <Link
            href="/events"
            aria-label="Back to events"
            className={actionButtonClass}
          >
            <ChevronLeft
              size={25}
              strokeWidth={2.3}
            />
          </Link>

          {/* Right Action Buttons */}

          <div className="flex items-center gap-2">

            {/* Share */}

            <button
              type="button"
              aria-label="Share event"
              onClick={handleShare}
              className={actionButtonClass}
            >
              <Share2
                size={19}
                strokeWidth={2}
              />
            </button>

            {/* Favourite */}

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
              className={actionButtonClass}
            >
              <Heart
                size={21}
                strokeWidth={2.1}
                className={
                  isFavourite
                    ? "fill-[#EE4D78] text-[#EE4D78]"
                    : "text-[#202020]"
                }
              />
            </button>

            {/* More Options */}

            <div
              ref={menuRef}
              className="relative"
            >
              <button
                type="button"
                aria-label="More options"
                aria-expanded={showMenu}
                onClick={() =>
                  setShowMenu((previous) => !previous)
                }
                className={actionButtonClass}
              >
                <Ellipsis
                  size={22}
                  strokeWidth={2.5}
                />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-[52px] z-30 w-[190px] overflow-hidden rounded-[16px] border border-[#EAE6E2] bg-white p-1.5 text-[#202020] shadow-xl">

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-left text-[14px] font-medium hover:bg-[#F7F6F5]"
                  >
                    <Copy size={16} />
                    Copy event link
                  </button>

                  <button
                    type="button"
                    disabled
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[14px] font-medium text-[#D93665] opacity-50"
                  >
                    <Flag size={16} />
                    Report event
                  </button>

                </div>
              )}
            </div>

          </div>

        </div>

        {/* ================= IMAGE COUNTER ================= */}

        {totalImages > 0 && (
          <div className="absolute right-4 top-[110px] rounded-full bg-black/40 px-[11px] py-[5px] text-[12px] leading-none font-bold text-white md:right-5">
            {activeIndex + 1}/{totalImages}
          </div>
        )}

        {/* ================= EVENT TEXT ================= */}

        <div className="absolute inset-x-4 bottom-[38px] text-white md:inset-x-5 md:bottom-[40px]">

          {/* Category Badge */}

          <span className="inline-flex h-[29px] items-center rounded-full border border-white/25 bg-white/20 px-3 text-[12px] leading-none font-bold backdrop-blur-[6px]">
            {event.category}
          </span>

          {/* Event Title */}

          <h1 className="mt-[9px] text-[27px] leading-[33px] font-bold tracking-[-0.7px] md:text-[29px] md:leading-[35px]">
            {event.title}
          </h1>

          {/* Description */}

          <p className="mt-[5px] max-w-[350px] text-[14px] leading-[20px] font-medium text-white/90">
            {event.description}
          </p>

        </div>

        {/* ================= CAROUSEL INDICATORS ================= */}

        <div className="pointer-events-auto absolute inset-x-0 bottom-[14px] flex items-center justify-center gap-[5px]">

          {event.images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View image ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`flex h-[18px] cursor-pointer items-center justify-center transition-all duration-300 ${
                activeIndex === index
                  ? "w-[18px]"
                  : "w-[6px]"
              }`}
            >
              <span
                className={`h-[5px] w-full rounded-full ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-white/50"
                }`}
              />
            </button>
          ))}

        </div>

      </div>

      {/* ================= DESKTOP CAROUSEL ARROWS ================= */}

      {totalImages > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={previousImage}
            className="absolute top-1/2 left-5 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/25 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/50 focus-visible:opacity-100 lg:flex lg:group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={nextImage}
            className="absolute top-1/2 right-5 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/25 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/50 focus-visible:opacity-100 lg:flex lg:group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* ================= COPY MESSAGE ================= */}

      {copied && (
        <div
          role="status"
          className="absolute top-[65px] left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#202020] px-4 py-2 text-[13px] font-semibold whitespace-nowrap text-white"
        >
          Event link copied
        </div>
      )}

    </section>
  );
}