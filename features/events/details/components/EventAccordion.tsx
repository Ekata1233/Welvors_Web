"use client";

import { ChevronDown } from "lucide-react";

type EventAccordionProps = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function EventAccordion({
  id,
  title,
  description,
  icon,
  isOpen,
  onToggle,
}: EventAccordionProps) {
  return (
    <div className="w-full min-w-0">

      {/* ================= ACCORDION HEADER ================= */}

      <button
        id={`${id}-trigger`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="group flex min-h-[49px] w-full cursor-pointer items-center justify-between gap-3 rounded-[12px] bg-white px-[14px] py-3 text-left transition-colors duration-300 hover:bg-[#FDE4E9]"
      >

        {/* Accordion Title */}

        <div className="flex min-w-0 items-center gap-[10px]">

          {icon && (
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[11px] bg-[#F7F5F2] text-[17px]">

              {icon}

            </span>
          )}

          <span className="text-[14px] leading-[20px] font-bold text-[#202020]">

            {title}

          </span>

        </div>

        {/* Accordion Arrow */}

        <ChevronDown
          size={16}
          strokeWidth={2}
          className={`shrink-0 text-[#908B85] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />

      </button>

      {/* ================= ACCORDION CONTENT ================= */}

      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >

        <div className="min-h-0 overflow-hidden">

          <p
            className={`px-[14px] pt-[2px] pb-[14px] text-[13px] leading-[21px] text-[#77716D] ${
              icon ? "sm:pl-[58px]" : ""
            }`}
          >

            {description}

          </p>

        </div>

      </div>

    </div>
  );
}