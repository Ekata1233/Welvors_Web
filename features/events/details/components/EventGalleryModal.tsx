"use client";

import { useEffect, useRef, useState } from "react";

import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type {
  EventHighlightPhoto,
} from "../types/event-details.types";

type EventGalleryModalProps = {
  photos: EventHighlightPhoto[];
  initialIndex: number;
  onClose: () => void;
};

export default function EventGalleryModal({
  photos,
  initialIndex,
  onClose,
}: EventGalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, Math.min(initialIndex, photos.length - 1))
  );

  const dialogRef = useRef<HTMLDialogElement>(null);

  const totalPhotos = photos.length;
  const activePhoto = photos[activeIndex];

  /* ================= PREVIOUS PHOTO ================= */

  const handlePrevious = () => {
    if (!totalPhotos) return;

    setActiveIndex(
      (previous) =>
        (previous - 1 + totalPhotos) % totalPhotos
    );
  };

  /* ================= NEXT PHOTO ================= */

  const handleNext = () => {
    if (!totalPhotos) return;

    setActiveIndex(
      (previous) => (previous + 1) % totalPhotos
    );
  };

  /* ================= OPEN MODAL ================= */

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (!dialog.open) {
      dialog.showModal();
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();

      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  if (!activePhoto) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Event photo gallery"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          handlePrevious();
        }

        if (event.key === "ArrowRight") {
          handleNext();
        }
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden border-none bg-[#121212] text-white backdrop:bg-black/80"
    >

      {/* ================= GALLERY HEADER ================= */}

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 border-b border-white/10 bg-[#121212] px-5 py-4 sm:px-8">

        <div>

          <h2 className="text-[18px] font-bold sm:text-[22px]">
            Event Highlights ✨
          </h2>

          <p className="mt-1 text-[13px] text-white/60">
            {activeIndex + 1} / {totalPhotos} photos
          </p>

        </div>

        {/* Close Button */}

        <button
          type="button"
          autoFocus
          aria-label="Close gallery"
          onClick={onClose}
          className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#EE4D78]"
        >

          <X size={22} strokeWidth={2} />

        </button>

      </div>

      {/* ================= MAIN PHOTO ================= */}

      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
        className="flex h-full w-full items-center justify-center px-12 pt-[95px] pb-[115px] sm:px-24"
      >

        <img
          key={activePhoto.id}
          src={activePhoto.imageUrl}
          alt={activePhoto.alt}
          className="max-h-full max-w-full rounded-[18px] object-contain"
        />

      </div>

      {/* ================= PREVIOUS BUTTON ================= */}

      {totalPhotos > 1 && (
        <button
          type="button"
          aria-label="Previous photo"
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 z-10 flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 transition-all duration-300 hover:bg-[#EE4D78] sm:left-6 sm:h-[48px] sm:w-[48px]"
        >

          <ChevronLeft size={25} strokeWidth={2} />

        </button>
      )}

      {/* ================= NEXT BUTTON ================= */}

      {totalPhotos > 1 && (
        <button
          type="button"
          aria-label="Next photo"
          onClick={handleNext}
          className="absolute top-1/2 right-2 z-10 flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 transition-all duration-300 hover:bg-[#EE4D78] sm:right-6 sm:h-[48px] sm:w-[48px]"
        >

          <ChevronRight size={25} strokeWidth={2} />

        </button>
      )}

      {/* ================= BOTTOM THUMBNAILS ================= */}

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#121212] px-4 py-4">

        <div className="mx-auto w-fit max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          <div className="flex w-max items-center gap-[9px]">

            {photos.map((photo, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={photo.id}
                  type="button"
                  aria-label={`View photo ${index + 1}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[62px] w-[78px] shrink-0 cursor-pointer overflow-hidden rounded-[11px] border-2 p-[2px] transition-all duration-300 sm:h-[75px] sm:w-[95px] ${
                    isActive
                      ? "border-[#EE4D78] opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >

                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full rounded-[7px] object-cover"
                  />

                </button>
              );
            })}

          </div>

        </div>

      </div>

    </dialog>
  );
}