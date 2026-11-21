"use client";

import { useId, useRef, type ReactNode } from "react";
import { CalendarDays, Sparkles, X } from "lucide-react";

export default function EventComingSoonButton({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children?: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const descriptionId = useId();

  return (
    <>
      <button
        type="button"
        aria-label={`View ${title}`}
        aria-haspopup="dialog"
        className={className}
        onClick={() => dialogRef.current?.showModal()}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[34rem] overflow-y-auto rounded-[32px] bg-white p-0 text-center text-[#2e2025] shadow-2xl backdrop:bg-[#24131e]/60 backdrop:backdrop-blur-sm"
      >
        <div className="relative isolate overflow-hidden bg-linear-to-br from-[#fff1e8] via-[#fff5f8] to-[#f5e6f3] px-7 pb-8 pt-9 sm:px-12 sm:pb-10 sm:pt-12">
          <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-20 -z-10 size-56 rounded-full border border-[#d0476b]/15" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-12 -z-10 size-64 rounded-full border border-[#d0476b]/15" />
          <form method="dialog" className="absolute right-4 top-4">
            <button
              type="submit"
              aria-label="Close popup"
              className="grid size-10 place-items-center rounded-full bg-white/80 text-[#6d3949] hover:bg-white focus-visible:outline-2 focus-visible:outline-[#D0476B]"
            >
              <X aria-hidden="true" size={19} />
            </button>
          </form>
          <div aria-hidden="true" className="relative mx-auto mb-6 grid size-[4.75rem] rotate-[-8deg] place-items-center rounded-[24px] border border-white bg-white/80 text-[#B83C5D] shadow-lg shadow-[#b83c5d]/15 sm:size-[5.5rem]">
            <CalendarDays size={34} strokeWidth={1.7} />
            <Sparkles size={21} className="absolute -right-3 -top-2 text-[#B83C5D]" />
          </div>
          <h2 id={headingId} className="font-serif text-[2.75rem] font-bold leading-none tracking-tight sm:text-6xl">
            Coming Soon
          </h2>
          <p id={descriptionId} className="mx-auto mt-4 max-w-sm break-words text-base font-medium leading-6 text-[#6d4652] sm:text-lg">
            {title}
          </p>
        </div>
        <form method="dialog" className="border-t border-dashed border-[#e6bac7] px-7 py-6 sm:px-12 sm:py-7">
          <button
            type="submit"
            className="min-h-12 w-full rounded-full bg-[#B83C5D] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9c2c4c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B83C5D] sm:w-auto"
          >
            Back to events
          </button>
        </form>
      </dialog>
    </>
  );
}
