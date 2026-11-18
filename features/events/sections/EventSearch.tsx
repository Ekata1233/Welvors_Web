"use client";

import { useState, useSyncExternalStore } from "react";
import {
  MapPin,
  ChevronDown,
  Ticket,
  Search,
  ListFilter,
} from "lucide-react";

import EventFilter from "../components/EventFilter";
import LocationSelector from "../components/LocationSelector";

import {
  DEFAULT_EVENT_FILTERS,
  DEFAULT_EVENT_CITY,
} from "../constants/event.constants";

import type { EventFilters } from "../types/event.types";

const LOCATION_STORAGE_KEY = "welvors_event_city";
const LOCATION_CHANGE_EVENT = "welvors-location-change";

function subscribeToLocation(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LOCATION_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LOCATION_CHANGE_EVENT, callback);
  };
}

function getStoredCity() {
  try {
    return (
      localStorage.getItem(LOCATION_STORAGE_KEY) ||
      DEFAULT_EVENT_CITY
    );
  } catch {
    return DEFAULT_EVENT_CITY;
  }
}

function getServerCity() {
  return DEFAULT_EVENT_CITY;
}

export default function EventSearch() {
  // Search state
  const [search, setSearch] = useState("");

  // Filter state
  const [isFilterOpen, setIsFilterOpen] =
    useState(false);

  const [appliedFilters, setAppliedFilters] =
    useState<EventFilters>({
      ...DEFAULT_EVENT_FILTERS,
    });

  // Location modal state
  const [isLocationOpen, setIsLocationOpen] =
    useState(false);

  // Remember selected city
  const storedCity = useSyncExternalStore(
    subscribeToLocation,
    getStoredCity,
    getServerCity
  );

  const [cityOverride, setCityOverride] =
    useState<string | null>(null);

  const selectedCity = cityOverride ?? storedCity;

  // Apply selected filters
  const handleApplyFilters = (
    filters: EventFilters
  ) => {
    setAppliedFilters(filters);
    setIsFilterOpen(false);

    console.log("Applied filters:", filters);
  };

  // Update selected location
  const handleSelectLocation = (city: string) => {
    setCityOverride(city);

    try {
      localStorage.setItem(
        LOCATION_STORAGE_KEY,
        city
      );

      window.dispatchEvent(
        new Event(LOCATION_CHANGE_EVENT)
      );
    } catch {
      console.warn("Unable to save selected city.");
    }

    setIsLocationOpen(false);

    console.log("Selected city:", city);
  };

  return (
    <section className="w-full space-y-5">

      {/* Location and My Tickets */}
      <div className="flex items-center justify-between gap-4 px-2 md:px-6">

        {/* Location */}
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isLocationOpen}
          onClick={() => setIsLocationOpen(true)}
          className="flex cursor-pointer flex-col items-start"
        >
          <span className="text-[14px] font-medium text-[#908B85]">
            Exploring in
          </span>

          <div className="flex items-center gap-2">

            <MapPin
              size={17}
              className="text-[#EE4D78]"
            />

            <span className="text-[20px] font-bold leading-tight text-[#202020]">
              {selectedCity}
            </span>

            <ChevronDown
              size={13}
              strokeWidth={3}
              className="text-[#202020]"
            />

          </div>
        </button>

        {/* My Tickets */}
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-[#EAE6E2] bg-white px-5 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition hover:bg-gray-50"
        >
          <Ticket
            size={17}
            className="fill-[#EE4D78] text-[#EE4D78]"
          />

          <span className="whitespace-nowrap text-[15px] font-bold text-[#202020]">
            My Tickets
          </span>

          <span className="flex h-[22px] min-w-[24px] items-center justify-center rounded-full bg-[#EE4D78] px-1.5 text-[13px] font-bold text-white">
            2
          </span>

        </button>

      </div>

      {/* Heading */}
      <div className="px-2 md:px-6">
        <h1 className="text-[24px] leading-tight font-bold tracking-[-0.7px] text-[#202020] md:text-[30px]">
          Meet{" "}
          <span className="text-[#EE4D78]">
            someone
          </span>{" "}
          new this weekend
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex h-[62px] w-full items-center gap-4 rounded-[26px] border border-[#EAE6E2] bg-white py-2 pr-2 pl-5 shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.03)]">

        <Search
          size={23}
          strokeWidth={2.4}
          className="shrink-0 text-[#908B85]"
        />

        <input
          type="search"
          aria-label="Search events and getaways"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events & getaways"
          className="min-w-0 flex-1 bg-transparent text-[16px] font-semibold text-[#202020] outline-none placeholder:text-[#908B85] md:text-[18px]"
        />

        {/* Filter Button */}
        <button
          type="button"
          aria-label="Filter events"
          aria-haspopup="dialog"
          aria-expanded={isFilterOpen}
          onClick={() => setIsFilterOpen(true)}
          className="flex h-[46px] w-[46px] shrink-0 cursor-pointer items-center justify-center rounded-[16px] bg-[#202020] transition hover:bg-[#353535]"
        >
          <ListFilter
            size={19}
            strokeWidth={2}
            className="text-[#A39D94]"
          />
        </button>

      </div>

      {/* Event Filter Modal */}
      {isFilterOpen && (
        <EventFilter
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApply={handleApplyFilters}
          initialFilters={appliedFilters}
          resultCount={10}
        />
      )}

      {/* Location Selector Modal */}
      {isLocationOpen && (
        <LocationSelector
          isOpen={isLocationOpen}
          selectedCity={selectedCity}
          onClose={() => setIsLocationOpen(false)}
          onSelect={handleSelectLocation}
        />
      )}

    </section>
  );
}