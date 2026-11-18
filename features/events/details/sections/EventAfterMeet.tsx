const AFTER_EVENT_STEPS = [
  {
    id: 1,
    icon: "🤝",
    title: "Meet in person",
    description:
      "Trek, play the games, chat with anyone you like.",
  },
  {
    id: 2,
    icon: "💗",
    title: 'Tap "Interested" in the app',
    description:
      "Pick the people you'd like to see again. Only you know.",
  },
  {
    id: 3,
    icon: "💬",
    title: "If they pick you too, chat opens",
    description:
      "It's a match — start talking right away.",
  },
];

export default function EventAfterExperience() {
  return (
    <section className="w-full rounded-[24px] bg-linear-to-br from-[#FDE4E9] to-[#FFF3F6] p-4">

      {/* ================= SECTION HEADING ================= */}
      <div className="mb-4 flex flex-wrap items-center gap-3">

        <h2 className="text-[16px] leading-[22px] font-bold text-[#202020]">
          After the event 💌
        </h2>

        <span className="text-[12px] font-semibold text-[#908B85]">
          3 simple steps
        </span>

      </div>

      {/* ================= VERTICAL TIMELINE ================= */}
      <div className="space-y-[14px]">

        {AFTER_EVENT_STEPS.map((step, index) => {
          const isLast =
            index === AFTER_EVENT_STEPS.length - 1;

          return (
            <div
              key={step.id}
              className="relative flex min-h-[46px] items-center gap-3"
            >

              {/* Vertical Connecting Line */}
              {!isLast && (
                <div className="absolute top-1/2 bottom-[-38px] left-[16px] border-l-2 border-dashed border-[#EE4D78]" />
              )}

              {/* Step Number */}
              <div className="relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-[#EE4D78] to-[#C8325B] text-[14px] leading-none font-bold text-white shadow-sm">
                {step.id}
              </div>

              {/* Step Icon */}
              <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[15px] bg-white text-[22px] shadow-[0_4px_12px_rgba(238,77,120,0.08)]">
                {step.icon}
              </div>

              {/* Step Content */}
              <div className="min-w-0 flex-1">

                <h3 className="text-[14px] leading-[19px] font-bold text-[#202020]">
                  {step.title}
                </h3>

                <p className="mt-[2px] text-[12px] leading-[17px] text-[#908B85]">
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* ================= PRIVACY INFORMATION ================= */}
      <div className="mt-4 flex min-h-[36px] items-center justify-center rounded-[15px] bg-white/95 px-3 py-2">

        <p className="text-center text-[12px] leading-[17px] font-semibold text-[#202020]">
          🔒 Not mutual? Nobody is told. No awkward moments.
        </p>

      </div>

    </section>
  );
}