import type {
  HowItWorksStepData,
} from "../constants/how-it-works.constants";

type HowItWorksStepProps = {
  step: HowItWorksStepData;
  isActive: boolean;
  animationKey: number;
  onClick: () => void;
};

/* ==========================================================
   HOW IT WORKS STEP
   ========================================================== */

export default function HowItWorksStep({
  step,
  isActive,
  animationKey,
  onClick,
}: HowItWorksStepProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[22px]
        border
        transition-all
        duration-500
        ease-in-out
        motion-reduce:transition-none
        ${
          isActive
            ? "border-[#e9e2de] bg-white shadow-[0_12px_35px_rgba(48,29,35,0.07)]"
            : "border-transparent bg-transparent hover:bg-white/50"
        }
      `}
    >
      {/* STEP HEADER */}

      <button
        type="button"
        onClick={onClick}
        aria-expanded={isActive}
        className="
          flex
          w-full
          cursor-pointer
          items-center
          gap-3
          px-4
          py-4
          text-left
          sm:gap-4
          sm:px-5
          sm:py-5
        "
      >
        {/* STEP NUMBER */}

        <span
          className={`
            flex
            h-[44px]
            w-[44px]
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            border
            text-[17px]
            font-bold
            transition-colors
            duration-300
            ${
              isActive
                ? "border-[#d0476b] bg-[#d0476b] text-white"
                : "border-[#e9e3df] bg-white text-[#938b86]"
            }
          `}
        >
          {step.id}
        </span>

        {/* STEP TITLE */}

        <span className="flex flex-wrap items-center gap-3">
          <span
            className="
              text-[19px]
              font-bold
              text-[#211d20]
              sm:text-[21px]
            "
          >
            {step.title}
          </span>

          {/* DURATION BADGE */}

          <span
            className="
              rounded-full
              bg-[#faebef]
              px-2.5
              py-1
              text-[10px]
              font-bold
              tracking-[0.8px]
              text-[#c3385e]
              sm:text-[11px]
            "
          >
            {step.duration}
          </span>
        </span>
      </button>

      {/* ==================================================
          EXPANDABLE CONTENT
          ================================================== */}

      <div
        inert={!isActive}
        aria-hidden={!isActive}
        className={`
          grid
          transition-all
          duration-500
          ease-in-out
          motion-reduce:transition-none
          ${
            isActive
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="
              pb-5
              pl-[72px]
              pr-4
              sm:pl-[80px]
              sm:pr-5
            "
          >
            {/* DESCRIPTION */}

            <p
              className="
                text-[13px]
                leading-relaxed
                text-[#6a6260]
                sm:text-[15px]
              "
            >
              {step.description}
            </p>

            {/* FEATURE CHIPS */}

            <div className="mt-3 flex flex-wrap gap-2">
              {step.features.map((feature) => (
                <span
                  key={feature.label}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-[#f5f2ef]
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    text-[#30292a]
                    sm:text-[12px]
                  "
                >
                  <span aria-hidden="true">
                    {feature.icon}
                  </span>

                  {feature.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          ANIMATED PROGRESS BAR
          ================================================== */}

      {isActive && (
        <div
          key={animationKey}
          aria-hidden="true"
          className="
            welvors-how-it-works-progress
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-[3px]
            w-full
            origin-left
            bg-linear-to-r
            from-[#d94770]
            via-[#ee765d]
            to-[#eeaa3c]
          "
        />
      )}
    </div>
  );
}