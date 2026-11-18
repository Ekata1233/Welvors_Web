import { EVENT_LOCATION } from "../constants/event-location.constants";

export default function EventMeeting() {
  const location = EVENT_LOCATION;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${location.venueName}, ${location.address}`
  )}`;

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <h2 className="mb-[14px] text-[20px] leading-[26px] font-bold text-[#202020]">
        Where Are We Meeting? 📍
      </h2>

      {/* ================= MAIN MEETING CARD ================= */}

      <div className="rounded-[26px] border border-[#EAE6E2] bg-white p-[14px] shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        {/* ================= VENUE DETAILS ================= */}

        <div className="flex items-center gap-[14px]">

          {/* Map Preview */}

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${location.venueName} on Google Maps`}
            className="group relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-[19px] bg-[#EAEFE5]"
          >

            <img
              src={location.mapImage}
              alt={`Map of ${location.venueName}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Map Pin */}

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

              <span className="text-[24px] drop-shadow-md">
                📍
              </span>

            </div>

          </a>

          {/* Venue Information */}

          <div className="min-w-0 flex-1">

            {/* Venue Name */}

            <h3 className="text-[17px] leading-[22px] font-bold text-[#202020]">
              {location.venueName}
            </h3>

            {/* Venue Address */}

            <p className="mt-[4px] text-[13px] leading-[18px] text-[#908B85]">
              {location.address}
            </p>

            {/* Travel Duration */}

            <div className="mt-[7px] inline-flex items-center gap-[5px] rounded-full border border-[#EAE6E2] bg-white px-[10px] py-[3px]">

              <span className="text-[12px]">
                🚗
              </span>

              <span className="text-[11px] leading-[15px] font-bold text-[#202020]">
                {location.travelDuration}
              </span>

            </div>

          </div>

        </div>

        {/* ================= MEETING INFORMATION ================= */}

        <div className="mt-[14px] grid grid-cols-2 gap-[9px]">

          {location.information.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[50px] min-w-0 items-center gap-3 rounded-[15px] bg-[#F8F8F6] px-3 py-[9px] transition-colors duration-300 hover:bg-[#FDE4E9]"
            >

              {/* Information Icon */}

              <span className="shrink-0 text-[17px]">
                {item.icon}
              </span>

              {/* Information Details */}

              <div className="min-w-0 flex-1">

                <h4 className="text-[12px] leading-[17px] font-bold text-[#202020] sm:text-[13px]">
                  {item.title}
                </h4>

                <p className="mt-[1px] text-[11px] leading-[15px] text-[#908B85] sm:text-[12px]">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ================= GET DIRECTIONS BUTTON ================= */}

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-[6px] rounded-[15px] bg-[#202020] px-4 py-3 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-[#383838]"
        >

          <span>🧭</span>

          Get Directions

        </a>

      </div>

    </section>
  );
}