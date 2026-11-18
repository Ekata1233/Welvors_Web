"use client";

import { useState } from "react";
import { EVENT_HIGHLIGHT_PHOTOS } from "../constants/event-details.constants";
import EventGalleryModal from "../components/EventGalleryModal";


export default function EventHighlights() {
  const [selectedPhoto, setSelectedPhoto] =
    useState<number | null>(null);

  const photos = EVENT_HIGHLIGHT_PHOTOS;

  const visiblePhotos = photos.slice(0, 5);

  const remainingPhotos = Math.max(
    0,
    photos.length - visiblePhotos.length
  );

  const gridPositions = [
    "col-start-1 row-start-1 row-span-2",
    "col-start-2 row-start-1",
    "col-start-2 row-start-2",
    "col-start-1 row-start-3",
    "col-start-2 row-start-3",
  ];

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <div className="mb-[16px] flex items-end justify-between gap-3">

        <div className="min-w-0">

          <h2 className="text-[20px] leading-[26px] font-bold text-[#202020]">
            Event Highlights ✨
          </h2>

          <p className="mt-1 text-[13px] leading-[18px] text-[#908B85]">
            From our last Sinhagad trek
          </p>

        </div>

        {/* View All Photos */}

        <button
          type="button"
          onClick={() => setSelectedPhoto(0)}
          disabled={photos.length === 0}
          className="shrink-0 cursor-pointer text-[12px] font-bold whitespace-nowrap text-[#EE4D78] transition-colors duration-200 hover:text-[#C5345D] sm:text-[14px]"
        >
          View All Photos
        </button>

      </div>

      {/* ================= MOSAIC PHOTO GALLERY ================= */}

      <div className="grid grid-cols-[1.25fr_1fr] grid-rows-[85px_85px_65px] gap-[7px] sm:grid-rows-[115px_115px_85px] sm:gap-[9px] lg:grid-rows-[140px_140px_106px] lg:gap-[10px]">

        {visiblePhotos.map((photo, index) => {
          const showOverlay =
            index === 4 && remainingPhotos > 0;

          return (
            <button
              key={photo.id}
              type="button"
              aria-label={
                showOverlay
                  ? `View ${remainingPhotos} more photos`
                  : `View ${photo.alt}`
              }
              onClick={() =>
                setSelectedPhoto(showOverlay ? 5 : index)
              }
              className={`group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-[16px] bg-[#F4F1ED] sm:rounded-[19px] ${gridPositions[index]}`}
            >

              {/* Gallery Image */}

              <img
                src={photo.imageUrl}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Normal Image Hover Overlay */}

              {!showOverlay && (
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              )}

              {/* Remaining Photos Overlay */}

              {showOverlay && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-colors duration-300 group-hover:bg-black/60">

                  <span className="text-[13px] font-bold text-white sm:text-[16px]">

                    +{remainingPhotos} photos

                  </span>

                </div>
              )}

            </button>
          );
        })}

      </div>

      {/* ================= PHOTO GALLERY MODAL ================= */}

      {selectedPhoto !== null && (
        <EventGalleryModal
          photos={photos}
          initialIndex={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}

    </section>
  );
}