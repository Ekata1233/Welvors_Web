
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type {
  InformationCategory,
} from "../types/information.types";

interface InformationHeaderProps {
  title: string;
  category: InformationCategory;
  badge: string;
}

export default function InformationHeader({
  title,
  category,
  badge,
}: InformationHeaderProps) {
  return (
    <header className="w-full border-b border-[#e9e1da]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-9 pt-8 sm:px-8 sm:pb-11 sm:pt-10 lg:px-10 lg:pb-12">

        {/* Breadcrumb and Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1 text-[12px] text-[#9b9087] sm:text-[13px]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#d20853]"
            >
              Welvors
            </Link>

            <span>›</span>
            <span>{category}</span>
            <span>›</span>
            <span>{title}</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#d20853] transition-colors hover:text-[#a90640]"
          >
            <ArrowLeft size={14} />
            Back to Welvors
          </Link>
        </div>

        {/* Badge */}
        <div className="mt-6">
          <span className="inline-flex rounded-full border border-[#efc6d5] bg-[#faeaf0] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[1.8px] text-[#d20853]">
            {category} · {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-5 font-serif text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-[#2b2826] sm:text-[42px] lg:text-[48px]">
          {title}
        </h1>
      </div>
    </header>
  );
}
