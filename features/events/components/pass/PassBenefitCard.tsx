import type { EventPassBenefit } from "../../types/event-pass.types";

type PassBenefitCardProps = {
  benefit: EventPassBenefit;
};

export default function PassBenefitCard({
  benefit,
}: PassBenefitCardProps) {
  return (
    <article className="flex min-w-0 flex-col rounded-[24px] border border-[#EAE6E2] bg-white p-3 shadow-[0_5px_15px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] md:p-4">

      {/* Icon */}
      <div
        style={{ backgroundColor: benefit.background }}
        className="flex h-[40px] w-[40px] items-center justify-center rounded-[14px] text-[20px] md:h-[44px] md:w-[44px] md:text-[22px]"
      >
        {benefit.icon}
      </div>

      {/* Title */}
      <h3 className="mt-[10px] text-[14px] leading-[19px] font-bold text-[#202020] md:text-[16px] md:leading-[21px]">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="mt-[3px] text-[12px] leading-[17px] text-[#908B85] md:text-[13px] md:leading-[18px]">
        {benefit.description}
      </p>

    </article>
  );
}