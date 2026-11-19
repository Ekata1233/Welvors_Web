
const FOREVER_LOVE_IMAGE = "https://ik.imagekit.io/r0vb3de74/Forever%20Love%20Programme%20App%20Mockup.png";

const DESTINATIONS = [
  { icon: "🏝️", name: "Maldives" },
  { icon: "🗼", name: "Paris" },
  { icon: "🌺", name: "Bali" },
];

const JOURNEY_STEPS = [
  {
    period: "DAY 1",
    title: "Commit",
  },
  {
    period: "MONTHLY",
    title: "Check-ins",
  },
  {
    period: "3 YEARS",
    title: "Together",
  },
  {
    period: "MARRIAGE",
    title: "Honeymoon",
  },
];

export default function ForeverLoveSection() {
  return (
    <section
      id="forever-love"
      className="overflow-hidden bg-[#f5f2ef] px-4 py-8 sm:px-6 sm:py-12 lg:py-14"
    >
      <div className="relative isolate mx-auto max-w-[1280px] overflow-hidden rounded-[24px] bg-[#241517] px-6 py-8 text-white sm:rounded-[30px] sm:p-10 lg:p-[54px]">

        {/* BACKGROUND GRADIENT */}

        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                ellipse at 75% 100%,
                rgba(132, 76, 55, 0.18),
                transparent 55%
              ),
              linear-gradient(
                135deg,
                #201214 0%,
                #29191b 55%,
                #211315 100%
              )
            `,
          }}
        />

        {/* BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute -right-[180px] -top-[300px] -z-10 h-[520px] w-[600px] rotate-[35deg] rounded-[100px] bg-white/[0.055] blur-[3px]" />

        <div className="pointer-events-none absolute -bottom-[320px] right-[5%] -z-10 h-[550px] w-[800px] -rotate-[20deg] rounded-[45%] bg-white/[0.025] blur-[6px]" />

        <div className="pointer-events-none absolute left-[10%] top-[14%] -z-10 h-[420px] w-[620px] -rotate-[25deg] rounded-[35%] bg-black/[0.07] blur-[4px]" />

        {/* SECTION HEADING */}

        <div className="relative z-10">
          <p className="mb-4 text-[11px] font-semibold tracking-[2px] text-[#f6c675] sm:text-[13px]">
            FOREVER LOVE PROGRAMME
          </p>

          <h2 className="font-serif text-[34px] font-semibold leading-[1.15] tracking-[-1px] text-[#fffafa] sm:text-[42px] lg:text-[50px]">
            Date for 3 years. Marry.{" "}
            <span className="italic text-[#d44870]">
              Win a honeymoon.
            </span>
          </h2>
        </div>

        {/* MAIN CONTENT */}

        <div className="relative mt-8 grid items-center gap-10 lg:mt-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* LEFT CONTENT */}

          <div className="order-2 lg:order-1">

            {/* REWARD AMOUNT */}

            <p className="mb-1 text-sm text-[#c6b6b5]">
              Worth up to
            </p>

            <h3 className="font-serif text-[48px] font-semibold leading-none tracking-[-1px] text-[#f6c675] sm:text-[64px] lg:text-[76px]">
              ₹5,00,000
            </h3>

            {/* DESTINATIONS */}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {DESTINATIONS.map((destination) => (
                <div
                  key={destination.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.10] px-4 py-2 text-[12px] font-semibold text-[#fff7f7] sm:text-sm"
                >
                  <span>{destination.icon}</span>
                  <span>{destination.name}</span>
                </div>
              ))}
            </div>

            {/* RELATIONSHIP TIMELINE */}

            <div className="relative mt-10">

              {/* CONNECTING LINE */}

              <div className="absolute left-0 right-0 top-[10px] h-[2px] bg-white/20" />

              <div className="relative grid grid-cols-4 gap-2 sm:gap-4">
                {JOURNEY_STEPS.map((step, index) => {
                  const isLast =
                    index === JOURNEY_STEPS.length - 1;

                  return (
                    <div key={step.period}>

                      {/* TIMELINE CIRCLE */}

                      <div
                        className={`relative mb-3 h-[22px] w-[22px] rounded-full border-[3px] bg-[#29191b] ${
                          isLast
                            ? "border-[#f5b544]"
                            : "border-[#d44870]"
                        }`}
                      />

                      {/* PERIOD */}

                      <p
                        className={`text-[9px] font-bold tracking-[0.5px] sm:text-[12px] ${
                          isLast
                            ? "text-[#f6c675]"
                            : "text-[#ae9c9d]"
                        }`}
                      >
                        {step.period}
                      </p>

                      {/* TITLE */}

                      <p className="mt-1 text-[11px] font-semibold text-white sm:text-[16px]">
                        {step.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TERMS */}

            <p className="mt-5 text-[12px] text-[#b6a5a6] sm:text-sm">
              Limited to 10 couples a year · terms apply
            </p>

          </div>

          {/* RIGHT SIDE PHONE MOCKUP */}

          <div className="relative order-1 flex items-center justify-center lg:order-2">

            {/* PHONE BACKGROUND GLOW */}

            <div className="pointer-events-none absolute bottom-[5%] left-1/2 h-[75%] w-[85%] -translate-x-1/2 rounded-full bg-[#b37a53]/10 blur-[70px]" />

            {/* PHONE IMAGE */}

            <img
              src={FOREVER_LOVE_IMAGE}
              alt="Welvors Forever Love Programme"
              draggable={false}
              className="relative z-10 block h-[380px] w-auto max-w-full select-none object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)] sm:h-[480px] lg:h-[595px]"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
