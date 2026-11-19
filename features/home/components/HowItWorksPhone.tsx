import {
  HOW_IT_WORKS_STEPS,
} from "../constants/how-it-works.constants";

type HowItWorksPhoneProps = {
  activeIndex: number;
};

export default function HowItWorksPhone({
  activeIndex,
}: HowItWorksPhoneProps) {
  return (
    <div
      className="
        relative
        isolate
        flex
        w-full
        items-center
        justify-center
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[85%]
          w-[75%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#bba5aa]/25
          blur-[70px]
        "
      />

      {/* PHONE MOCKUP CONTAINER */}

      <div
        className="
          relative
          h-[370px]
          w-full
          max-w-[300px]
          sm:h-[450px]
          md:h-[490px]
          lg:h-[570px]
          lg:max-w-[340px]
        "
      >
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <img
            key={step.id}
            src={step.image}
            alt={`Welvors ${step.title} screen`}
            draggable={false}
            aria-hidden={activeIndex !== index}
            className={`
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              select-none
              object-contain
              drop-shadow-[0_28px_32px_rgba(60,35,40,0.20)]
              transition-all
              duration-500
              ease-in-out
              motion-reduce:transition-none
              ${
                activeIndex === index
                  ? "z-10 translate-y-0 scale-100 opacity-100"
                  : "z-0 translate-y-3 scale-[0.97] opacity-0"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}