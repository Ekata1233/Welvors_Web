"use client";

import { useState } from "react";

import PassHero from "./sections/pass/PassHero";
import PassBenefits from "./sections/pass/PassBenefits";
import PassSavingsCalculator from "./sections/pass/PassSavingsCalculator";
import PassPlanSelection from "./sections/pass/PassPlanSelection";
import PassTerms from "./sections/pass/PassTerms";
import PassCheckoutBar from "./sections/pass/PassCheckoutBar";

import { EVENT_PASS_PLANS } from "./constants/event-pass.constants";
import type { EventPassPlan } from "./types/event-pass.types";

export default function EventPassMain() {
  const [selectedPlan, setSelectedPlan] =
    useState<EventPassPlan>(EVENT_PASS_PLANS[1]);

  const handleCheckout = () => {
    console.log("Selected Event Pass:", {
      planId: selectedPlan.id,
      billingCycle: selectedPlan.billingCycle,
      amount: selectedPlan.price,
      months: selectedPlan.months,
    });

    // TODO: Integrate Event Pass purchase API.
    // TODO: Initialize Razorpay checkout.
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC]">

      {/* Full Width Hero */}
      <PassHero />

      {/* Main Content */}
<div className="mx-auto w-full max-w-[1120px] px-4 pt-6 pb-6 md:px-6 md:pt-7">
        <div className="space-y-7">

          <PassBenefits />

          <PassSavingsCalculator />

          <PassPlanSelection
            selectedPlan={selectedPlan}
            onSelect={setSelectedPlan}
          />

        </div>

        {/* Terms and Conditions */}
        <div className="mt-4">
          <PassTerms />
        </div>

      </div>

      {/* Fixed Bottom Button */}
      <PassCheckoutBar
        selectedPlan={selectedPlan}
        onCheckout={handleCheckout}
      />

    </div>
  );
}