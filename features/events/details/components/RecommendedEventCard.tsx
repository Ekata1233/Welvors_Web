import Link from "next/link";

import type {
  RecommendedEvent,
} from "../types/event-details.types";

type RecommendedEventCardProps = {
  event: RecommendedEvent;
};

export default function RecommendedEventCard({
  event,
}: RecommendedEventCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#EAE6E2] bg-white shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#F5CBD6] hover:bg-[#FDE4E9] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >

      {/* ================= EVENT IMAGE ================= */}

      <div className="aspect-[2.25/1] w-full shrink-0 overflow-hidden bg-[#F4F1ED]">

        <img
          src={event.imageUrl}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

      </div>

      {/* ================= EVENT INFORMATION ================= */}

      <div className="flex flex-1 flex-col px-[15px] pt-[17px] pb-[15px]">

        {/* Event Title */}

        <h3 className="text-[14px] leading-[20px] font-bold text-[#202020] sm:text-[16px] sm:leading-[22px]">

          {event.title}

        </h3>

        {/* ================= DATE AND LOCATION ================= */}

        <div className="mt-[5px] flex flex-wrap items-center gap-x-[4px] gap-y-1 text-[11px] leading-[17px] text-[#908B85] sm:text-[13px]">

          {/* Event Date */}

          <span className="inline-flex items-center gap-[4px] whitespace-nowrap">

            <span className="text-[13px]">
              🗓️
            </span>

            {event.date}

          </span>

          {/* Separator */}

          <span>·</span>

          {/* Event Location */}

          <span className="inline-flex items-center gap-[4px]">

            <span className="text-[13px]">
              📍
            </span>

            {event.location}

          </span>

        </div>

        {/* ================= EVENT PRICE ================= */}

        <p className="mt-[7px] text-[15px] leading-[21px] font-bold text-[#F34873] sm:text-[16px]">

          ₹{event.price.toLocaleString("en-IN")}

        </p>

      </div>

    </Link>
  );
}