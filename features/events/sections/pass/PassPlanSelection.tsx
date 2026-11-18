"use client";

import PassPlanCard from "../../components/pass/PassPlanCard";
import { EVENT_PASS_PLANS } from "../../constants/event-pass.constants";
import type { EventPassPlan } from "../../types/event-pass.types";

type PassPlanSelectionProps = {
  selectedPlan: EventPassPlan;
  onSelect: (plan: EventPassPlan) => void;
};

export default function PassPlanSelection({
  selectedPlan,
  onSelect,
}: PassPlanSelectionProps) {
  return (
    <section className="w-full min-w-0">

      <h2
        id="pass-selection-heading"
        className="mb-4 text-[22px] leading-[28px] font-bold text-[#202020]"
      >
        Choose your pass
      </h2>

      <div
        role="radiogroup"
        aria-labelledby="pass-selection-heading"
        className="space-y-3"
      >
        {EVENT_PASS_PLANS.map((plan) => (
          <PassPlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan.id === plan.id}
            onSelect={onSelect}
          />
        ))}
      </div>

    </section>
  );
}