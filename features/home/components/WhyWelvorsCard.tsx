import type {
  WhyWelvorsFeature,
} from "../constants/why-welvors.constants";

type WhyWelvorsCardProps = {
  feature: WhyWelvorsFeature;
};

/* ==========================================================
   WHY WELVORS FEATURE CARD
   ========================================================== */

export default function WhyWelvorsCard({
  feature,
}: WhyWelvorsCardProps) {
  return (
    <article
      className="
        group
        flex
        min-h-[98px]
        min-w-0
        items-start
        gap-3
        rounded-[20px]
        border
        border-[#eee9e6]
        bg-white
        p-4
        transition-all
        duration-300
        hover:border-[#f4c5d3]
        hover:bg-[#fff3f6]
        hover:shadow-[0_8px_20px_rgba(208,71,107,0.08)]
        motion-safe:hover:-translate-y-1
        sm:gap-4
      "
    >
      {/* FEATURE ICON */}

      <div
        aria-hidden="true"
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-[13px]
          bg-[#f9ebef]
          text-[19px]
          transition-colors
          group-hover:bg-[#f7dce5]
          lg:h-[44px]
          lg:w-[44px]
          lg:text-xl
        "
      >
        {feature.icon}
      </div>

      {/* FEATURE CONTENT */}

      <div className="min-w-0">

        <p
          className="
            mb-1
            text-[11px]
            font-bold
            uppercase
            tracking-[0.6px]
            text-[#968d89]
          "
        >
          {feature.category}
        </p>

        <h3
          className="
            text-[14px]
            font-bold
            leading-relaxed
            text-[#201c1d]
            lg:text-[15px]
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-1
            text-xs
            leading-relaxed
            text-[#9b9390]
            line-through
            lg:text-[13px]
          "
        >
          {feature.comparison}
        </p>

      </div>
    </article>
  );
}