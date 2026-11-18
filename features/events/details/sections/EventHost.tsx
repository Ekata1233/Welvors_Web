import Link from "next/link";

import {
  Check,
  ChevronRight,
  UserRound,
} from "lucide-react";

import {
  EVENT_HOST,
  EVENT_ORGANIZER,
} from "../constants/event-host.constants";

export default function EventHost() {
  const host = EVENT_HOST;
  const organizer = EVENT_ORGANIZER;

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <h2 className="mb-[14px] text-[20px] leading-[26px] font-bold text-[#202020]">
        Meet Your Event Host
      </h2>

      {/* ================= MAIN HOST CARD ================= */}

      <div className="rounded-[26px] border border-[#EAE6E2] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">

        {/* ================= HOST PROFILE ================= */}

        <div className="flex items-center gap-3">

          {/* Host Photo */}

          <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#F8BACC] bg-white p-[3px]">

            {host.profilePhoto ? (
              <img
                src={host.profilePhoto}
                alt={host.fullName}
                loading="lazy"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F4F1ED]">

                <UserRound
                  size={28}
                  className="text-[#908B85]"
                />

              </div>
            )}

          </div>

          {/* Host Information */}

          <div className="min-w-0 flex-1">

            {/* Host Name */}

            <h3 className="text-[17px] leading-[22px] font-bold text-[#202020]">
              {host.fullName}
            </h3>

            {/* Designation */}

            <p className="mt-[3px] text-[13px] leading-[18px] text-[#908B85]">

              {host.designation} · {host.hostedEvents} events hosted

            </p>

            {/* Rating Badge */}

            <div className="mt-[6px] inline-flex flex-wrap items-center gap-1 rounded-full bg-[#FDE4E9] px-[11px] py-[3px] text-[11px] leading-[15px] font-bold text-[#EE4D78]">

              <span>⭐</span>

              <span>
                {host.rating.toFixed(1)}
              </span>

              <span>·</span>

              <span>
                Speaks {host.languages.join(", ")}
              </span>

            </div>

          </div>

        </div>

        {/* ================= ORGANIZER CARD ================= */}

        <Link
  href={`/events/organizers/${organizer.id}`}
  className="group mt-[14px] flex items-center justify-between gap-3 rounded-[19px] border border-[#EAE6E2] bg-[#F8F7F5] p-[13px] transition-all duration-300 ease-in-out hover:border-[#F5DFE5] hover:bg-[#FDE4E9] focus-visible:bg-[#FDE4E9]"
>

          {/* Organizer Left Content */}

          <div className="flex min-w-0 items-center gap-3">

            {/* Organizer Emoji */}

            <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[14px] bg-white text-[22px] shadow-[0_3px_10px_rgba(0,0,0,0.04)]">

              🎉

            </div>

            {/* Organizer Information */}

            <div className="min-w-0">

              {/* Organised By Label */}

              <p className="text-[11px] leading-[15px] font-bold tracking-[0.7px] text-[#908B85]">

                ORGANISED BY

              </p>

              {/* Organizer Name */}

              <div className="mt-[2px] flex items-center gap-[5px]">

                <h4 className="truncate text-[15px] leading-[20px] font-bold text-[#202020]">

                  {organizer.name}

                </h4>

                {/* Verified Badge */}

                {organizer.isVerified && (
                  <span
                    aria-label="Verified organiser"
                    className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#338AFF]"
                  >

                    <Check
                      size={11}
                      strokeWidth={3}
                      className="text-white"
                    />

                  </span>
                )}

              </div>

              {/* Organizer Statistics */}

              <p className="mt-[2px] text-[12px] leading-[17px] text-[#908B85]">

                {organizer.isVerified
                  ? "Verified organiser"
                  : "Organiser"}{" "}

                · {organizer.totalEvents} events ·{" "}

                {organizer.rating.toFixed(1)} ★

              </p>

            </div>

          </div>

          {/* View Page */}

          <div className="flex shrink-0 items-center gap-[2px] text-[12px] font-bold whitespace-nowrap text-[#EE4D78]">

            <span>View page</span>

            <ChevronRight
              size={13}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-[3px]"
            />

          </div>

        </Link>

      </div>

    </section>
  );
}