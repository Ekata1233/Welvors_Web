"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  X,
  LocateFixed,
  ChevronRight,
  Check,
  MapPin,
  LoaderCircle,
} from "lucide-react";

import {
  POPULAR_EVENT_CITIES,
} from "../constants/event.constants";

type LocationSelectorProps = {
  isOpen: boolean;
  selectedCity: string;
  onClose: () => void;
  onSelect: (city: string) => void;
};

export default function LocationSelector({
  isOpen,
  selectedCity,
  onClose,
  onSelect,
}: LocationSelectorProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [search, setSearch] = useState("");
  const [city, setCity] = useState(selectedCity);
  const [isLocating, setIsLocating] = useState(false);
  const [locationMessage, setLocationMessage] =
    useState("");

  // Open and close dialog
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

  // Filter cities
  const filteredCities = POPULAR_EVENT_CITIES.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.trim().toLowerCase())
  );

  // Detect current location
  const handleCurrentLocation = () => {
    setLocationMessage("");

    if (!navigator.geolocation) {
      setLocationMessage(
        "Location is not supported by your browser."
      );
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLocating(false);

        setLocationMessage(
          "Location detected. Please select your city below."
        );
      },
      () => {
        setIsLocating(false);

        setLocationMessage(
          "Unable to access your location. Please select your city manually."
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  // Confirm selected city
  const handleConfirm = () => {
    onSelect(city);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="location-dialog-title"
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

        {/* Modal Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2
            id="location-dialog-title"
            className="text-[24px] font-bold"
          >
            Select location
          </h2>

          <button
            type="button"
            aria-label="Close location selector"
            onClick={onClose}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#F5F3F1] text-[#65615D] transition hover:bg-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search City */}
        <div className="flex h-[54px] items-center gap-3 rounded-[16px] border border-[#EAE6E2] bg-white px-4 focus-within:border-[#EE4D78]">

          <Search
            size={22}
            className="shrink-0 text-[#908B85]"
          />

          <input
            type="search"
            aria-label="Search your city"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search your city"
            className="min-w-0 flex-1 bg-transparent text-[16px] font-medium outline-none placeholder:text-[#908B85]"
          />

        </div>

        {/* Current Location */}
        <button
          type="button"
          onClick={handleCurrentLocation}
          disabled={isLocating}
          className="my-5 flex w-full cursor-pointer items-center gap-3 rounded-xl py-2 text-left disabled:opacity-60"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F4]">

            {isLocating ? (
              <LoaderCircle
                size={24}
                className="animate-spin text-[#EE4D78]"
              />
            ) : (
              <LocateFixed
                size={24}
                className="text-[#EE4D78]"
              />
            )}

          </div>

          <div className="flex-1">
            <p className="text-[16px] font-bold text-[#D0476B]">
              {isLocating
                ? "Detecting location..."
                : "Use current location"}
            </p>

            <p className="mt-0.5 text-[13px] text-[#908B85]">
              Discover events near you
            </p>
          </div>

          <ChevronRight
            size={20}
            className="text-[#D0476B]"
          />
        </button>

        {/* Location Status */}
        {locationMessage && (
          <p
            role="status"
            className="mb-4 rounded-lg bg-[#FFF0F4] p-3 text-sm text-[#D0476B]"
          >
            {locationMessage}
          </p>
        )}

        <div className="mb-5 border-t border-[#EAE6E2]" />

        {/* Popular Cities */}
        <h3 className="mb-4 text-[13px] font-bold tracking-[0.7px] text-[#908B85]">
          {search.trim()
            ? "SEARCH RESULTS"
            : "POPULAR CITIES"}
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

          {filteredCities.map((item) => {
            const isSelected = city === item.name;

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setCity(item.name)}
                className={`relative flex min-h-[106px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[16px] border p-3 transition-all ${
                  isSelected
                    ? "border-[#EE4D78] bg-[#FFF0F4]"
                    : "border-[#EAE6E2] bg-white hover:border-[#EE4D78]"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#EE4D78] text-white">
                    <Check size={13} />
                  </span>
                )}

                <span className="text-[32px]">
                  {item.icon}
                </span>

                <span
                  className={`text-[14px] font-semibold ${
                    isSelected
                      ? "text-[#D0476B]"
                      : "text-[#202020]"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}

        </div>

        {/* Empty State */}
        {filteredCities.length === 0 && (
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <MapPin
              size={32}
              className="text-[#908B85]"
            />

            <p className="font-semibold">
              No cities found
            </p>

            <p className="text-sm text-[#908B85]">
              Try searching for another city.
            </p>
          </div>
        )}

        {/* Selected Location */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-[#908B85]">
            Selected location
          </span>

          <span className="flex items-center gap-1 font-bold">
            <MapPin
              size={16}
              className="text-[#EE4D78]"
            />
            {city}
          </span>
        </div>

        {/* Confirm Location */}
        <button
          type="button"
          onClick={handleConfirm}
          className="mt-5 flex h-[62px] w-full cursor-pointer items-center justify-center rounded-[20px] bg-linear-to-r from-[#ED507D] to-[#C53361] text-[18px] font-bold text-white transition hover:opacity-90"
        >
          Confirm location
        </button>

      </div>
    </dialog>
  );
}