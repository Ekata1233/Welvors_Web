"use client";

import { useState } from "react";
import { Check, UserRound } from "lucide-react";

import {
  EVENT_PARTICIPANTS,
  EVENT_SEAT_AVAILABILITY,
} from "../constants/event-participants.constants";

type ViewingGender = "WOMEN" | "MEN";

export default function EventParticipants() {
  const [viewingAs, setViewingAs] =
    useState<ViewingGender>("WOMEN");

  const participants = EVENT_PARTICIPANTS;

  const seatAvailability = EVENT_SEAT_AVAILABILITY;

  const totalGoing = seatAvailability.reduce(
    (total, seat) => total + seat.bookedSeats,
    0
  );

  const remainingParticipants = Math.max(
    0,
    totalGoing - participants.length
  );

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <div className="mb-[14px]">

        <h2 className="text-[20px] leading-[26px] font-bold text-[#202020]">
          Who&apos;s Joining? 👀
        </h2>

        <p className="mt-1 text-[13px] leading-[18px] text-[#908B85]">
          All ID-verified · 🔒 = profile hidden until the event
        </p>

      </div>

      {/* ================= PARTICIPANT AVATARS ================= */}

      <div className="flex w-full flex-wrap items-center gap-[5px]">

        {participants.map((participant) => (
          <div
            key={participant.id}
            className="relative shrink-0"
          >

            {/* Profile Image */}

            <div className="relative flex h-[44px] w-[44px] items-center justify-center overflow-hidden rounded-full border border-[#F3B7C7] bg-[#F4F1ED] p-[2px]">

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">

                {participant.profilePhoto ? (
                  <img
                    src={participant.profilePhoto}
                    alt={
                      participant.isHidden
                        ? "Private participant"
                        : participant.name
                    }
                    loading="lazy"
                    className={`h-full w-full object-cover ${
                      participant.isHidden
                        ? "scale-125 blur-[7px]"
                        : ""
                    }`}
                  />
                ) : (
                  <UserRound
                    size={22}
                    className="text-[#B0AAA5]"
                  />
                )}

                {/* Hidden Profile Overlay */}

                {participant.isHidden && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">

                    <span className="text-[13px]">
                      🔒
                    </span>

                  </div>
                )}

              </div>

            </div>

            {/* Blue Verification Badge */}

            {participant.isVerified && (
              <div className="absolute right-0 bottom-0 z-10 flex h-[14px] w-[14px] items-center justify-center rounded-full border-[1.5px] border-white bg-[#338AFF]">

                <Check
                  size={9}
                  strokeWidth={3}
                  className="text-white"
                />

              </div>
            )}

          </div>
        ))}

        {/* Remaining Participants */}

        {remainingParticipants > 0 && (
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#F3B7C7] bg-white p-[2px]">

            <div className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-[#EE5A82] to-[#C5345D] text-[13px] font-bold text-white">

              +{remainingParticipants}

            </div>

          </div>
        )}

      </div>

      {/* ================= SEAT AVAILABILITY CARD ================= */}

      <div className="mt-4 rounded-[28px] border border-[#EAE6E2] bg-white p-[18px] shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        {/* Gender Selection */}

        <div className="mb-4 flex items-center justify-between gap-3">

          <span className="text-[12px] font-semibold text-[#908B85] sm:text-[13px]">
            Demo · viewing as
          </span>

          <div className="flex shrink-0 items-center gap-1">

            {/* Woman Button */}

            <button
              type="button"
              aria-pressed={viewingAs === "WOMEN"}
              onClick={() => setViewingAs("WOMEN")}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-3 py-[7px] text-[12px] font-bold transition-all duration-200 ${
                viewingAs === "WOMEN"
                  ? "bg-white text-[#202020] shadow-[0_2px_8px_rgba(0,0,0,0.10)]"
                  : "text-[#908B85]"
              }`}
            >
              <span>👩</span>
              Woman
            </button>

            {/* Man Button */}

            <button
              type="button"
              aria-pressed={viewingAs === "MEN"}
              onClick={() => setViewingAs("MEN")}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-3 py-[7px] text-[12px] font-bold transition-all duration-200 ${
                viewingAs === "MEN"
                  ? "bg-white text-[#202020] shadow-[0_2px_8px_rgba(0,0,0,0.10)]"
                  : "text-[#908B85]"
              }`}
            >
              <span>👨</span>
              Man
            </button>

          </div>

        </div>

        {/* ================= GENDER-WISE SEATS ================= */}

        <div className="space-y-3">

          {seatAvailability.map((seat) => {
            const isWomen = seat.gender === "WOMEN";

            const seatsLeft = Math.max(
              0,
              seat.totalSeats - seat.bookedSeats
            );

            const isFull = seatsLeft === 0;

            return (
              <div
                key={seat.gender}
                className="flex min-h-[36px] items-center justify-between gap-2"
              >

                {/* Left Side */}

                <div className="flex min-w-0 items-center gap-3">

                  {/* Gender Icon */}

                  <div
                    className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[12px] text-[18px] ${
                      isWomen
                        ? "bg-[#FDE5EC]"
                        : "bg-[#E7EEFF]"
                    }`}
                  >
                    {isWomen ? "👩" : "👨"}
                  </div>

                  {/* Booked Seats */}

                  <span className="text-[12px] font-bold whitespace-nowrap text-[#202020] sm:text-[14px]">

                    {isWomen ? "Women" : "Men"} ·{" "}
                    {seat.bookedSeats}/{seat.totalSeats}

                  </span>

                </div>

                {/* Right Side */}

                <div className="flex shrink-0 items-center gap-3">

                  {/* Seat Status */}

                  <span className="text-[12px] font-semibold whitespace-nowrap text-[#202020] sm:text-[13px]">

                    {isFull
                      ? `${seat.waitlistCount} on waitlist`
                      : `${seatsLeft} ${
                          seatsLeft === 1 ? "seat" : "seats"
                        } left`}

                  </span>

                  {/* Status Badge */}

                  <span
                    className={`rounded-full px-[10px] py-[5px] text-[11px] leading-[15px] font-bold ${
                      isFull
                        ? "bg-[#FFF0DC] text-[#B9610B]"
                        : "bg-[#E5F6EE] text-[#148344]"
                    }`}
                  >
                    {isFull ? "Full" : "Open"}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

        {/* ================= GENDER BALANCE INFORMATION ================= */}

        <div className="mt-3 flex items-center gap-2 rounded-[15px] border border-[#F8D9AD] bg-[#FDF7EB] px-3 py-[10px]">

          <span className="shrink-0 text-[14px]">
            ⚖️
          </span>

          <p className="text-[12px] leading-[18px] text-[#383431] sm:text-[13px]">

            Seats are capped by gender so every event stays
            balanced. When one side is full, you join the
            waitlist — never a lopsided room.

          </p>

        </div>

      </div>

    </section>
  );
}