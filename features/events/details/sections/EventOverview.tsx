export default function EventOverview() {
  return (
    <section className="w-full space-y-3">

      {/* ================= EVENT OVERVIEW ================= */}
      <div className="grid grid-cols-2 overflow-hidden rounded-[24px] border border-[#EAE6E2] bg-white shadow-[0_5px_18px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.03)]">

        {/* Event Date */}
        <div className="flex min-w-0 items-center gap-3 border-r border-b border-[#EAE6E2] p-3 md:p-4">

          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-[#FFE4EB] text-[20px] md:h-[48px] md:w-[48px]">
            🗓️
          </div>

          <div className="min-w-0">
            <h3 className="text-[13px] leading-[20px] font-bold text-[#202020] md:text-[16px]">
              Sat, 14 Nov
            </h3>

            <p className="text-[11px] leading-[18px] font-medium text-[#908B85] md:text-[14px]">
              Saturday · in 2 weeks
            </p>
          </div>

        </div>

        {/* Event Time */}
        <div className="flex min-w-0 items-center gap-3 border-b border-[#EAE6E2] p-3 md:p-4">

          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-[#FFE4EB] text-[20px] md:h-[48px] md:w-[48px]">
            ⏰
          </div>

          <div className="min-w-0">
            <h3 className="text-[13px] leading-[20px] font-bold text-[#202020] md:text-[16px]">
              7 AM – 2 PM
            </h3>

            <p className="text-[11px] leading-[18px] font-medium text-[#908B85] md:text-[14px]">
              7 hours
            </p>
          </div>

        </div>

        {/* Event Location */}
        <div className="flex min-w-0 items-center gap-3 border-r border-[#EAE6E2] p-3 md:p-4">

          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-[#FFE4EB] text-[20px] md:h-[48px] md:w-[48px]">
            📍
          </div>

          <div className="min-w-0">
            <h3 className="text-[13px] leading-[20px] font-bold text-[#202020] md:text-[16px]">
              Sinhagad Fort
            </h3>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sinhagad+Fort+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] leading-[18px] font-semibold text-[#D93665] transition hover:underline md:text-[14px]"
            >
              Tap for map ↗
            </a>
          </div>

        </div>

        {/* Event Participants */}
        <div className="flex min-w-0 items-center gap-3 p-3 md:p-4">

          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-[#FFE4EB] text-[20px] md:h-[48px] md:w-[48px]">
            👥
          </div>

          <div className="min-w-0">
            <h3 className="text-[13px] leading-[20px] font-bold text-[#202020] md:text-[16px]">
              24 Going
            </h3>

            <p className="text-[11px] leading-[18px] font-medium text-[#908B85] md:text-[14px]">
              6 womens seats left
            </p>
          </div>

        </div>

      </div>

      {/* ================= TRENDING BANNER ================= */}
      <div className="flex min-h-[72px] w-full items-center justify-between gap-2 rounded-[22px] border border-[#FFD9B5] bg-linear-to-r from-[#FFF3E6] to-white px-3 py-3 md:px-4">

        {/* Trending Details */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Fire Icon */}
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[13px] bg-white text-[21px] shadow-[0_4px_12px_rgba(234,145,54,0.12)]">
            🔥
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="text-[13px] leading-[20px] font-bold text-[#202020] md:text-[16px]">
              Trending in Pune
            </h3>

            <p className="text-[11px] leading-[18px] font-normal text-[#908B85] md:text-[14px]">
              One of the most-saved events this week
            </p>
          </div>

        </div>

        {/* Save Count */}
        <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#FFE5CF] px-3 py-[5px] text-[11px] leading-none font-bold whitespace-nowrap text-[#C75B0B] md:text-[13px]">
          148 saves
        </span>

      </div>

    </section>
  );
}