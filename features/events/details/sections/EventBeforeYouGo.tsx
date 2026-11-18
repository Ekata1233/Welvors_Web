import { CalendarPlus } from "lucide-react";
import { EVENT_CALENDAR, EVENT_PREPARATION_ITEMS } from "../constants/event-details.constants";



export default function EventBeforeYouGo() {
  const calendar = EVENT_CALENDAR;

  const calendarParams = new URLSearchParams({
    action: "TEMPLATE",
    text: calendar.title,
    dates: `${calendar.startDate}/${calendar.endDate}`,
    details: calendar.description,
    location: calendar.location,
    ctz: "Asia/Kolkata",
  });

  const calendarUrl =
    `https://calendar.google.com/calendar/render?${calendarParams.toString()}`;

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <div className="mb-[14px]">

        <h2 className="text-[20px] leading-[26px] font-bold text-[#202020]">
          Before You Go 🗓️
        </h2>

        <p className="mt-1 text-[13px] leading-[18px] text-[#908B85]">
          Everything you need for Saturday
        </p>

      </div>

      {/* ================= MAIN PREPARATION CARD ================= */}

      <div className="rounded-[26px] border border-[#EAE6E2] bg-white p-[14px] shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        {/* ================= PREPARATION ITEMS ================= */}

        <div className="space-y-[3px]">

          {EVENT_PREPARATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[58px] items-center gap-3 rounded-[15px] px-2 py-[9px] transition-colors duration-300 hover:bg-[#FDE4E9]"
            >

              {/* Preparation Icon */}

              <div
                style={{
                  backgroundColor: item.background,
                }}
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] text-[21px]"
              >

                {item.icon}

              </div>

              {/* Preparation Details */}

              <div className="min-w-0 flex-1">

                {/* Title */}

                <h3 className="text-[14px] leading-[19px] font-bold text-[#202020]">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-[3px] text-[12px] leading-[18px] text-[#908B85] sm:text-[13px]">

                  {item.description}

                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ================= ADD TO CALENDAR ================= */}

        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[15px] border border-[#EAE6E2] bg-white px-4 py-3 text-[14px] font-bold text-[#202020] transition-all duration-300 hover:border-[#F5CBD6] hover:bg-[#FDE4E9] hover:text-[#D9436C]"
        >

          <CalendarPlus
            size={17}
            strokeWidth={2}
          />

          <span>
            Add to calendar
          </span>

        </a>

      </div>

    </section>
  );
}