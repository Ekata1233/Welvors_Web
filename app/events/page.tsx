import type { Metadata } from "next";
import EventSearch from "@/features/events/sections/EventSearch";
import EventCategories from "@/features/events/sections/EventCategories";
import TrendingEvents from "@/features/events/sections/TrendingEvents";
import WeekendGetaways from "@/features/events/sections/WeekendGetaways";
import EventSafety from "@/features/events/sections/EventSafety";
import EventPassBanner from "@/features/events/sections/EventPassBanner";
import NearbyEvents from "@/features/events/sections/NearbyEvents";

export const metadata: Metadata = {
  title: "Explore Events | Welvors",
  description:
    "Discover exciting events and meaningful connections.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFC]">

      <div className="mx-auto max-w-[1280px] space-y-10 px-4 py-4 md:px-6">

        <EventSearch />

        {/* Event Categories */}
 <EventCategories />
        {/* Trending Events */}
<TrendingEvents/>
        {/* Weekend Getaways */}
<WeekendGetaways/>
        {/* Event Safety */}
<EventSafety/>
        {/* Event Pass Banner */}
<EventPassBanner/>
        {/* Nearby Events */}
<NearbyEvents/>
      </div>

    </div>
  );
}