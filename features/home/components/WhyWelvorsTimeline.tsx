import type {
  WhyWelvorsStep,
} from "../constants/why-welvors.constants";

type WhyWelvorsTimelineProps = {
  title: string;
  description: string;
  steps: WhyWelvorsStep[];
  variant: "swipe" | "welvors";
};

/* ==========================================================
   WHY WELVORS TIMELINE
   ========================================================== */

export default function WhyWelvorsTimeline({
  title,
  description,
  steps,
  variant,
}: WhyWelvorsTimelineProps) {
  const isWelvors = variant === "welvors";

  return (
    <div
      className={`
        grid
        w-full
        grid-cols-1
        items-center
        gap-5
        rounded-[20px]
        border
        px-4
        py-5
        md:grid-cols-[200px_minmax(0,1fr)]
        md:gap-3
        md:px-6
        lg:grid-cols-[230px_minmax(0,1fr)]
        lg:rounded-[24px]
        ${
          isWelvors
            ? "border-transparent bg-gradient-to-r from-[#291419] to-[#391a22] text-white shadow-[0_20px_45px_rgba(55,20,30,0.16)]"
            : "border-[#eee8e5] bg-[#f5f2f0] text-[#211d1e]"
        }
      `}
    >
      {/* TIMELINE HEADING */}

      <div className="min-w-0">
        <h3 className="text-[17px] font-bold lg:text-[20px]">
          {title}
        </h3>

        <p
          className={`
            mt-1
            text-xs
            leading-relaxed
            lg:text-sm
            ${
              isWelvors
                ? "text-[#b6a7aa]"
                : "text-[#918987]"
            }
          `}
        >
          {description}
        </p>
      </div>

      {/* TIMELINE STEPS */}

      <div className="relative grid w-full grid-cols-5">

        {/* CONNECTING LINE */}

        <div
          aria-hidden="true"
          className={`
            absolute
            left-[10%]
            right-[10%]
            top-[18px]
            h-[2px]
            sm:top-[22px]
            lg:top-[25px]
            ${
              isWelvors
                ? "bg-gradient-to-r from-[#d74c76] via-[#ee8873] to-[#f1ba64]"
                : "border-t-2 border-dashed border-[#c9bfba]"
            }
          `}
        />

        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.label}
              className="
                group
                relative
                z-10
                flex
                min-w-0
                flex-col
                items-center
                gap-2
                text-center
                sm:gap-3
              "
            >
              {/* STEP ICON */}

              <div
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-[17px]
                  transition-transform
                  duration-300
                  motion-safe:group-hover:-translate-y-1
                  sm:h-11
                  sm:w-11
                  sm:text-[20px]
                  lg:h-[50px]
                  lg:w-[50px]
                  lg:text-[22px]
                  ${
                    isWelvors
                      ? isLast
                        ? "border-transparent bg-gradient-to-br from-[#ffe0a0] to-[#eda747] shadow-[0_0_0_6px_rgba(239,178,89,0.18)]"
                        : "border-white/10 bg-[#4c2a34]"
                      : isLast
                        ? "border-[#ee9bb2] bg-white text-[#d0476b]"
                        : "border-dashed border-[#e9e4e1] bg-white"
                  }
                `}
              >
               <span
  aria-hidden="true"
  className={`
    inline-flex items-center justify-center
    ${
      !isWelvors && isLast
        ? "motion-safe:animate-[spin_2s_linear_infinite_reverse] text-[26px] leading-none text-[#d0476b]"
        : !isWelvors
          ? "opacity-60 grayscale"
          : ""
    }
  `}
>
  {step.icon}
</span>
              </div>

              {/* STEP LABEL */}

              <span
                className={`
                  text-[10px]
                  font-semibold
                  leading-tight
                  sm:text-xs
                  lg:text-sm
                  ${
                    isWelvors
                      ? isLast
                        ? "text-[#f4c576]"
                        : "text-[#f8eeee]"
                      : isLast
                        ? "text-[#d0476b]"
                        : "text-[#958c88]"
                  }
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}