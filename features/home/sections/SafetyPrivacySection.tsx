const SAFETY_FEATURES = [
  {
    id: 1,
    icon: "🛡️",
    title: "Zero fake profiles",
  },
  {
    id: 2,
    icon: "🔐",
    title: "Documents stay private",
  },
  {
    id: 3,
    icon: "🚩",
    title: "One-tap report & block",
  },
  {
    id: 4,
    icon: "🆘",
    title: "SOS at meetups",
  },
];

export default function SafetyPrivacySection() {
  return (
    <section
      id="safety-privacy"
      className="w-full bg-[#f5f2ef] py-[48px] sm:py-[60px] lg:py-[72px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}

        <div>
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[1.8px]
              text-[#c83258]
              sm:text-[12px]
            "
          >
            Safety & Privacy
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-[34px]
              font-semibold
              leading-[1.15]
              tracking-[-1.2px]
              text-[#1d1919]
              sm:text-[42px]
              lg:text-[50px]
            "
          >
            Relax. Be yourself.
          </h2>
        </div>

        {/* SAFETY FEATURE CARDS */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
            sm:mt-9
            sm:gap-4
            lg:grid-cols-4
            lg:gap-4
          "
        >
          {SAFETY_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="
                flex
                min-h-[125px]
                flex-col
                items-center
                justify-center
                gap-4
                rounded-[18px]
                border
                border-[#e7e0dc]
                bg-white
                px-3
                py-5
                text-center
                sm:min-h-[145px]
                sm:rounded-[22px]
                sm:gap-5
                lg:min-h-[150px]
                lg:px-5
                lg:py-7
              "
            >
              {/* FEATURE ICON */}

              <span
                aria-hidden="true"
                className="
                  block
                  select-none
                  text-[30px]
                  leading-none
                  sm:text-[34px]
                  lg:text-[36px]
                "
              >
                {feature.icon}
              </span>

              {/* FEATURE TITLE */}

              <h3
                className="
                  text-[13px]
                  font-semibold
                  leading-[1.4]
                  text-[#211d1d]
                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}