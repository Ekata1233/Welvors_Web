import EventCard from "../components/EventCard";
import { NEARBY_EVENTS } from "../constants/event.constants";

export default function NearbyEvents() {
  return (
    <section className="w-full min-w-0 px-2 md:px-6">

      {/* Section Heading */}
      <div className="mb-4">

        <h2 className="text-[22px] leading-[28px] font-bold tracking-[-0.4px] text-[#202020] md:text-[24px] md:leading-[30px]">
          Near you this week
        </h2>

        <p className="mt-1 text-[14px] leading-[20px] text-[#908B85] md:text-[15px]">
          {NEARBY_EVENTS.length} events within 10 km
        </p>

      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">

        {NEARBY_EVENTS.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </section>
  );
}