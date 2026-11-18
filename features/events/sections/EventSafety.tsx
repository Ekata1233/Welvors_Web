const SAFETY_FEATURES = [
  {
    id: "id-verified",
    icon: "🪪",
    title: "ID-verified",
    description: "Every guest",
    background: "#E3EFFC",
  },
  {
    id: "balanced",
    icon: "⚖️",
    title: "Balanced",
    description: "Age-matched crowd",
    background: "#FDE3E9",
  },
  {
    id: "hosted",
    icon: "👮",
    title: "Hosted",
    description: "Host on site",
    background: "#E4F6ED",
  },
];

export default function EventSafety() {
  return (
    <section className="w-full min-w-0 rounded-[24px] border border-[#EAE6E2] bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08),0_2px_5px_rgba(0,0,0,0.03)]">

      {/* Header */}
      <div className="flex items-center justify-between gap-2">

        <div className="min-w-0">
          <h2 className="text-[16px] leading-[20px] font-bold text-[#202020] md:text-[20px] md:leading-[24px]">
            Why Welvors events feel safe
          </h2>

          <p className="mt-[2px] text-[12px] leading-[16px] text-[#908B85] md:text-[14px]">
            Built for real, respectful meetups
          </p>
        </div>

        {/* Safety First Badge */}
        <span className="inline-flex h-[24px] shrink-0 items-center justify-center gap-1 rounded-full bg-[#E4F6ED] px-[10px] text-[11px] leading-none font-bold whitespace-nowrap text-[#16AE68] md:text-[13px]">
          🛡️ Safety first
        </span>

      </div>

      {/* Safety Features */}
      <div className="mt-[10px] grid grid-cols-3 gap-2 md:gap-[10px]">

        {SAFETY_FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="flex min-w-0 flex-col items-center justify-center rounded-[14px] bg-[#F7F7F5] px-2 py-2 text-center"
          >

            {/* Feature Icon */}
            <div
              style={{
                backgroundColor: feature.background,
              }}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] text-[18px] md:h-[36px] md:w-[36px] md:text-[21px]"
            >
              {feature.icon}
            </div>

            {/* Feature Title */}
            <h3 className="mt-1 text-[13px] leading-[16px] font-bold text-[#202020] md:text-[16px] md:leading-[19px]">
              {feature.title}
            </h3>

            {/* Feature Description */}
            <p className="mt-[2px] text-[11px] leading-[14px] text-[#908B85] md:text-[13px] md:leading-[16px]">
              {feature.description}
            </p>

          </div>
        ))}

      </div>

      {/* Safety Information */}
      <div className="mt-2 flex min-h-[34px] flex-wrap items-center gap-x-[6px] gap-y-1 rounded-[12px] bg-[#E4F6ED] px-3 py-[6px] text-[11px] leading-[16px] font-semibold text-[#078B49] md:text-[13px]">

        <span>
          🔒 Only mutual interest unlocks chat
        </span>

        <span>·</span>

        <span>
          📍 Live location &amp; SOS
        </span>

      </div>

    </section>
  );
}