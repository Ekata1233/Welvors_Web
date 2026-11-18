const BENEFITS = [
  {
    icon: "🪪",
    title: "Everyone ID-verified",
  },
  {
    icon: "⚖️",
    title: "Balanced men & women",
  },
  {
    icon: "🧊",
    title: "Icebreakers by a host",
  },
  {
    icon: "🔒",
    title: "Interest only if mutual",
  },
];

export default function EventWhyJoin() {
  return (
    <section className="w-full space-y-3">

      {/* Section Heading */}
      <h2 className="text-[20px] leading-tight font-bold text-[#202020]">
        Why join this event 💗
      </h2>

      {/* Event Benefits */}
      <div className="grid grid-cols-2 gap-2">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="flex min-h-[44px] items-center gap-3 rounded-[14px] bg-[#FDF2F5] px-3 py-2"
          >
            <span className="shrink-0 text-[17px]">
              {benefit.icon}
            </span>

            <span className="text-[12px] leading-[17px] font-semibold text-[#202020] md:text-[14px]">
              {benefit.title}
            </span>
          </div>
        ))}
      </div>

      {/* Venue Preview Card */}
      <article className="flex min-h-[120px] overflow-hidden rounded-[22px] border border-[#EAE6E2] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.06)]">

        {/* Venue Image */}
        <div className="relative w-[105px] shrink-0 overflow-hidden sm:w-[125px]">
          <img
            src="https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087"
            alt="Sinhagad Fort"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Venue Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-center px-3 py-3">

          <h3 className="text-[16px] leading-tight font-bold text-[#202020]">
            ⛰️ Sinhagad Fort
          </h3>

          <p className="mt-1 text-[12px] font-semibold text-[#EE4D78]">
            📍 Pune · 7 AM – 2 PM
          </p>

          <p className="mt-1 text-[13px] leading-[18px] text-[#908B85]">
            Sunrise views from an old hill fort — a date
            spot you will want to revisit.
          </p>

          {/* Venue Tags */}
          <div className="mt-2 flex flex-wrap items-center gap-[6px]">

            {[
              "🌄 Sunrise trail",
              "👥 Mixed groups of 6",
              "📸 Group photos",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#F4F1ED] px-2 py-1 text-[11px] leading-none font-semibold whitespace-nowrap text-[#202020]"
              >
                {tag}
              </span>
            ))}

          </div>
        </div>
      </article>

    </section>
  );
}