/* ==========================================================
   MOBILE MOCKUP IMAGES
   ========================================================== */

const STAND_OUT_IMAGES = {
  roses: "https://ik.imagekit.io/r0vb3de74/Pink%20Roses%20Dating%20App%20Mockup-1%20(1).png",
  admirers: "https://ik.imagekit.io/r0vb3de74/Admirers%20Dating%20App%20Mockup-2.png",
  compliments: "https://ik.imagekit.io/r0vb3de74/Warm%20Golden%20Compliments%20Purchase%20Screen-3.png",
};

/* ==========================================================
   FEATURES
   ========================================================== */

const STAND_OUT_FEATURES = [
  {
    id: 1,
    value: "3×",
    icon: "🌹",
    title: "Roses",
    description: "more matches",
    isNumber: true,
  },
  {
    id: 2,
    value: "4×",
    icon: "💌",
    title: "Compliments",
    description: "more replies",
    isNumber: true,
  },
  {
    id: 3,
    value: "10×",
    icon: "⚡",
    title: "Boost",
    description: "more views",
    isNumber: true,
  },
  {
    id: 4,
    value: "👀",
    icon: "",
    title: "Admirers",
    description: "see who likes you",
    isNumber: false,
  },
  {
    id: 5,
    value: "🎁",
    icon: "",
    title: "Gifts",
    description: "delivered to their door",
    isNumber: false,
  },
];

/* ==========================================================
   PHONE MOCKUP
   ========================================================== */

type PhoneMockupProps = {
  image: string;
  alt: string;
  className: string;
};

function PhoneMockup({
  image,
  alt,
  className,
}: PhoneMockupProps) {
  return (
    <div className={`absolute ${className}`}>
      <img
        src={image}
        alt={alt}
        loading="lazy"
        draggable={false}
        className="
          block
          h-full
          w-full
          select-none
          object-contain
          drop-shadow-[0_24px_24px_rgba(44,22,29,0.16)]
        "
      />
    </div>
  );
}

/* ==========================================================
   STAND OUT SECTION
   ========================================================== */

export default function StandOutSection() {
  return (
    <section
      id="stand-out"
      className="
        relative
        overflow-hidden
        bg-white
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ================================================
            SECTION HEADING
            ================================================ */}

        <div className="relative z-10">
          <p
            className="
              mb-4
              text-[12px]
              font-semibold
              uppercase
              tracking-[2px]
              text-[#cc3e65]
            "
          >
            Stand out
          </p>

          <h2
            className="
              font-serif
              text-[36px]
              font-semibold
              leading-[1.12]
              tracking-[-1.5px]
              text-[#201c1d]
              sm:text-[46px]
              lg:text-[54px]
            "
          >
            Like someone?{" "}

            <span className="italic text-[#d44770]">
              Show it.
            </span>
          </h2>
        </div>

        {/* ================================================
            MOBILE MOCKUP PREVIEW
            ================================================ */}

        <div
          className="
            relative
            isolate
            mx-auto
            mt-8
            mb-8
            aspect-[1.35/1]
            w-full
            max-w-[780px]
            sm:mt-10
            sm:mb-10
            lg:mt-9
            lg:mb-12
          "
        >
          {/* SOFT BACKGROUND SHADOW */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-[8%]
              top-[10%]
              bottom-[0%]
              -z-10
              rounded-full
              bg-[radial-gradient(ellipse,rgba(91,51,62,0.17)_0%,rgba(91,51,62,0.08)_45%,transparent_75%)]
              blur-[35px]
              sm:blur-[55px]
            "
          />

          {/* LEFT PHONE - ROSES */}

          <PhoneMockup
            image={STAND_OUT_IMAGES.roses}
            alt="Welvors Roses"
            className="
              left-[3%]
              top-[5%]
              z-[1]
              h-[90%]
              w-[34%]
              -rotate-[7deg]
            "
          />

          {/* RIGHT PHONE - COMPLIMENTS */}

          <PhoneMockup
            image={STAND_OUT_IMAGES.compliments}
            alt="Welvors Compliments"
            className="
              right-[3%]
              top-[5%]
              z-[2]
              h-[90%]
              w-[34%]
              rotate-[7deg]
            "
          />

          {/* CENTER PHONE - ADMIRERS */}

          <PhoneMockup
            image={STAND_OUT_IMAGES.admirers}
            alt="Welvors Admirers"
            className="
              left-[31%]
              top-0
              z-10
              h-full
              w-[38%]
            "
          />
        </div>

        {/* ================================================
            FEATURE CARDS
            ================================================ */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-2
            gap-3
            sm:gap-4
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {STAND_OUT_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="
                group
                flex
                min-h-[130px]
                flex-col
                items-center
                justify-center
                rounded-[22px]
                border
                border-[#e9e2de]
                bg-white/60
                px-3
                py-5
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#e9b4c3]
                hover:shadow-[0_12px_30px_rgba(91,51,62,0.08)]
                sm:min-h-[148px]
                lg:py-6
              "
            >
              {/* VALUE OR EMOJI */}

              <div
                className={
                  feature.isNumber
                    ? "mb-2 font-serif text-[38px] leading-none text-[#d44770] sm:text-[44px]"
                    : "mb-2 text-[32px] leading-none sm:text-[38px]"
                }
              >
                {feature.value}
              </div>

              {/* FEATURE TITLE */}

              <h3
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  text-[14px]
                  font-bold
                  text-[#201c1d]
                  sm:text-[16px]
                "
              >
                {feature.icon && (
                  <span className="text-[14px]">
                    {feature.icon}
                  </span>
                )}

                {feature.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-2
                  text-[12px]
                  leading-relaxed
                  text-[#948b88]
                  sm:text-[14px]
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}