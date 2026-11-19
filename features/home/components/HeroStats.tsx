const HERO_STATS = [
  {
    icon: "🪪",
    value: "100%",
    label: "ID-verified profiles",
  },
  {
    icon: "🧠",
    value: "42",
    label: "signals in every match score",
  },
  {
    icon: "💌",
    value: "25",
    label: "curated profiles a day",
  },
  {
    icon: "🏝️",
    value: "₹5 lakh",
    label: "Forever Love honeymoon",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.06] lg:grid-cols-4">

      {HERO_STATS.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex min-w-0 items-center gap-2 p-3 sm:gap-3 sm:p-5
            ${index % 2 === 0 ? "border-r border-white/10" : ""}
            ${index < 2 ? "border-b border-white/10 lg:border-b-0" : ""}
            ${index === 1 ? "lg:border-r lg:border-white/10" : ""}
          `}
        >

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white/10 text-lg sm:h-11 sm:w-11">

            {stat.icon}

          </div>

          <div className="min-w-0">

            <h3 className="font-serif text-[21px] leading-tight font-bold text-white sm:text-[26px]">

              {stat.value}

            </h3>

            <p className="mt-1 text-[10px] leading-relaxed text-[#C6B8BB] sm:text-[12px]">

              {stat.label}

            </p>

          </div>

        </div>
      ))}

    </div>
  );
}