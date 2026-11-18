import type { EventPassPlan } from "../../types/event-pass.types";

type PassPlanCardProps = {
  plan: EventPassPlan;
  isSelected: boolean;
  onSelect: (plan: EventPassPlan) => void;
};

export default function PassPlanCard({
  plan,
  isSelected,
  onSelect,
}: PassPlanCardProps) {
  return (
    <label
      className={`relative flex min-h-[88px] w-full cursor-pointer items-center justify-between gap-3 rounded-[22px] border-[1.5px] px-4 py-4 transition-all duration-200 ${
        isSelected
          ? "border-[#7952F4] bg-[#F9F7FD] shadow-[0_6px_20px_rgba(107,66,215,0.10)]"
          : "border-[#EAE6E2] bg-white hover:border-[#7952F4]"
      }`}
    >

      {/* Plan Badge */}
      {plan.badge && (
        <span className="absolute -top-[10px] left-[54px] rounded-full bg-[#6942D7] px-[10px] py-[3px] text-[11px] leading-[14px] font-bold text-white">
          {plan.badge}
        </span>
      )}

      {/* Left Section */}
      <div className="flex min-w-0 items-center gap-[14px]">

        {/* Radio Button */}
        <input
          type="radio"
          name="event-pass-plan"
          value={plan.id}
          checked={isSelected}
          onChange={() => onSelect(plan)}
          className="sr-only"
        />

        <span
          className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border-2 ${
            isSelected
              ? "border-[#6942D7] bg-[#6942D7]"
              : "border-[#D5D0C8] bg-white"
          }`}
        >
          {isSelected && (
            <span className="h-[10px] w-[10px] rounded-full bg-white" />
          )}
        </span>

        {/* Plan Details */}
        <div className="min-w-0">

          <h3 className="text-[16px] leading-[22px] font-bold text-[#202020] md:text-[17px]">
            {plan.name}
          </h3>

          <p className="mt-1 text-[12px] leading-[18px] text-[#908B85] md:text-[13px]">
            {plan.description}
          </p>

        </div>

      </div>

      {/* Right Pricing Section */}
      <div className="shrink-0 text-right">

        <p className="text-[19px] leading-[24px] font-bold text-[#202020] md:text-[20px]">
          ₹{plan.price.toLocaleString("en-IN")}
        </p>

        <p className="mt-1 text-[12px] leading-[18px] text-[#908B85]">
          {plan.months === 1
            ? "/month"
            : `₹${plan.monthlyPrice}/month`}
        </p>

      </div>

    </label>
  );
}