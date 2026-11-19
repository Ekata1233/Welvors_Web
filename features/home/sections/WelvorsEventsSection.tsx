import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ==========================================================
   EVENT CATEGORIES
   ========================================================== */

const EVENT_CATEGORIES = [
  {
    id: 1,
    title: "Speed dating",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1792151978294-1-undefined_GhmATY5Wd.png?updatedAt=1793171156345",
  },
  {
    id: 2,
    title: "Supper clubs",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1792151521105-0-undefined_TtJBB3tMG.png?updatedAt=1793171155975",
  },
  {
    id: 3,
    title: "Treks",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
  },
  {
    id: 4,
    title: "Weekend trips",
    image: "https://ik.imagekit.io/r0vb3de74/package-programs/1795087390581-b67e55c5-e9ae-4c65-83bf-61049e778e02-WhatsApp_Image_2026-11-19_at_4.22.24_PM__1__gpvW56EPK.jpeg?updatedAt=1795087391665",
  },
  {
    id: 5,
    title: "Couples trips",
    image: "https://ik.imagekit.io/r0vb3de74/package-programs/1795087375827-c59c6a75-1817-42fd-9c83-5e675b2c31be-WhatsApp_Image_2026-11-19_at_4.22.24_PM_2u9tkFYxWw.jpeg?updatedAt=1795087376835",
  },
];

/* ==========================================================
   EVENT SAFETY FEATURES
   ========================================================== */

const EVENT_FEATURES = [
  {
    icon: "🪪",
    title: "ID-verified guests",
  },
  {
    icon: "⚖️",
    title: "Balanced crowd",
  },
  {
    icon: "🎤",
    title: "Host on site",
  },
  {
    icon: "🔒",
    title: "Chat only if mutual",
  },
  {
    icon: "📍",
    title: "Live location & SOS",
  },
  {
    icon: "🎟️",
    title: "Free waitlists",
  },
];

/* ==========================================================
   WELVORS EVENTS SECTION
   ========================================================== */

export default function WelvorsEventsSection() {
  return (
    <section
      id="welvors-events"
      className="
        w-full
        overflow-hidden
        bg-[#1c1818]
        py-14
        text-white
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          sm:px-8
          xl:px-0
        "
      >
        {/* ==============================================
            SECTION HEADING
            ============================================== */}

        <div className="mb-8 lg:mb-10">

          <p
            className="
              mb-4
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#f294ae]
              sm:text-[13px]
            "
          >
            Welvors Events
          </p>

          <h2
            className="
              font-serif
              text-[36px]
              font-semibold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#f8f4f2]
              sm:text-[44px]
              lg:text-[52px]
            "
          >
            Meet in person.{" "}

            <span className="italic text-[#d44770]">
              Everyone&apos;s verified.
            </span>
          </h2>

        </div>

        {/* ==============================================
            EVENT IMAGE CARDS
            ============================================== */}

        <div
          className="
            -mx-5
            flex
            items-start
            gap-3
            overflow-x-auto
            px-5
            pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:-mx-8
            sm:px-8
            lg:mx-0
            lg:grid
            lg:grid-cols-5
            lg:gap-[14px]
            lg:overflow-visible
            lg:px-0
            lg:pb-0
          "
        >
          {EVENT_CATEGORIES.map((event, index) => (
            <div
              key={event.id}
              className={`
                group
                relative
                h-[240px]
                w-[170px]
                shrink-0
                overflow-hidden
                rounded-[22px]
                bg-[#302828]
                sm:h-[290px]
                sm:w-[210px]
                lg:h-[328px]
                lg:w-full
                ${index % 2 !== 0 ? "mt-[22px]" : "mt-0"}
              `}
            >
              {/* EVENT IMAGE */}

              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                draggable={false}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />

              {/* IMAGE GRADIENT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/35
                  via-transparent
                  to-transparent
                "
              />

              {/* EVENT CATEGORY LABEL */}

              <div
                className="
                  absolute
                  bottom-[14px]
                  left-[14px]
                  z-10
                  rounded-full
                  bg-white/95
                  px-[13px]
                  py-[9px]
                  text-[12px]
                  font-semibold
                  leading-none
                  whitespace-nowrap
                  text-[#201c1c]
                  shadow-sm
                  sm:text-[14px]
                "
              >
                {event.title}
              </div>

            </div>
          ))}
        </div>

        {/* ==============================================
            EVENT SAFETY FEATURES
            ============================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-[14px]
          "
        >
          {EVENT_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="
                flex
                min-h-[105px]
                flex-col
                items-center
                justify-center
                gap-3
                rounded-[20px]
                border
                border-white/[0.10]
                bg-white/[0.045]
                px-3
                py-5
                text-center
                transition-colors
                duration-300
                hover:border-[#d44770]/50
                hover:bg-white/[0.08]
                lg:min-h-[118px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  text-[25px]
                  leading-none
                  sm:text-[28px]
                "
              >
                {feature.icon}
              </span>

              <p
                className="
                  text-[12px]
                  font-semibold
                  leading-snug
                  text-[#f8f4f2]
                  sm:text-[14px]
                "
              >
                {feature.title}
              </p>

            </div>
          ))}
        </div>

        {/* ==============================================
            EXPLORE EVENTS BUTTON
            ============================================== */}

        <div className="mt-8">

          <Link
            href="/events"
            className="
              group
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#d1476b]
              px-[26px]
              text-[15px]
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:bg-[#bd3459]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#f294ae]
            "
          >
            Explore events

            <ArrowRight
              size={19}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                motion-reduce:transform-none
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
}