"use client";

import { useEffect, useRef, useState } from "react";

import {
  DEFAULT_EVENT_FILTERS,
  EVENT_FILTER_GROUPS,
} from "../constants/event.constants";

import type { EventFilters } from "../types/event.types";

type EventFilterProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: EventFilters) => void;
  initialFilters: EventFilters;
  resultCount: number;
};

export default function EventFilter({
  isOpen,
  onClose,
  onApply,
  initialFilters,
  resultCount,
}: EventFilterProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [filters, setFilters] =
    useState<EventFilters>(initialFilters);

  // Open and close modal
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Select filter
  const handleSelect = (
    key: keyof EventFilters,
    value: string,
  ) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  // Reset filters
  const handleReset = () => {
    setFilters({ ...DEFAULT_EVENT_FILTERS });
  };

  // Apply filters
  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="event-filter-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-x-0 bottom-0 top-auto m-0 mx-auto max-h-[90dvh] w-full max-w-[780px] overflow-y-auto rounded-t-[32px] border-0 bg-white p-0 text-[#202020] outline-none backdrop:bg-black/40"
    >
      <div className="px-5 pt-3 pb-7 sm:px-6 sm:pb-8">

        {/* Top Handle */}
        <div className="mb-4 flex justify-center">
          <div className="h-[6px] w-[52px] rounded-full bg-[#E5E0DB]" />
        </div>

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2
            id="event-filter-title"
            className="text-[24px] font-bold"
          >
            Filters
          </h2>

          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer text-[16px] font-semibold text-[#D93665] hover:opacity-75"
          >
            Reset
          </button>
        </div>

        {/* Filter Groups */}
        <div className="space-y-5">
          {EVENT_FILTER_GROUPS.map((group) => (
            <fieldset
              key={group.key}
              className="min-w-0"
            >
              <legend className="mb-3 text-[13px] font-bold tracking-[0.7px] text-[#908B85]">
                {group.label}
              </legend>

              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const isSelected =
                    filters[group.key] === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() =>
                        handleSelect(
                          group.key,
                          option.value,
                        )
                      }
                      className={`cursor-pointer rounded-full border px-[18px] py-[11px] text-[16px] font-semibold transition-colors ${
                        isSelected
                          ? "border-[#202020] bg-[#202020] text-white"
                          : "border-[#EAE6E2] bg-white text-[#65615D] hover:border-[#202020]"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        {/* Apply Button */}
        <button
          type="button"
          onClick={handleApply}
          className="mt-7 flex h-[66px] w-full cursor-pointer items-center justify-center rounded-[20px] bg-linear-to-r from-[#ED507D] to-[#C53361] text-[18px] font-bold text-white transition hover:opacity-90"
        >
          Show {resultCount} results
        </button>

      </div>
    </dialog>
  );
}