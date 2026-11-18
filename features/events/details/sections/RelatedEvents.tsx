import Link from "next/link";

import RecommendedEventCard from "../components/RecommendedEventCard";
import { RECOMMENDED_EVENTS } from "../constants/event-details.constants";



export default function EventRecommendations() {
  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADER ================= */}

      <div className="mb-[16px] flex items-center justify-between gap-3">

        {/* Section Title */}

        <h2 className="text-[20px] leading-[26px] font-bold text-[#202020]">

          Explore More Experiences

        </h2>

        {/* See All */}

        <Link
          href="/events"
          className="shrink-0 whitespace-nowrap text-[14px] font-bold text-[#F34873] transition-colors duration-300 hover:text-[#C5345D]"
        >

          See all

        </Link>

      </div>

      {/* ================= RECOMMENDED EVENTS ================= */}

      <div className="grid grid-cols-2 gap-[12px] lg:grid-cols-4 lg:gap-[15px]">

        {RECOMMENDED_EVENTS.map((event) => (
          <RecommendedEventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </section>
  );
}