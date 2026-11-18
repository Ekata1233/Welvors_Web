"use client";

import type { EventPassPlan } from "../../types/event-pass.types";

type PassCheckoutBarProps = {
  selectedPlan: EventPassPlan;
  onCheckout: () => void;
};

export default function PassCheckoutBar({
  selectedPlan,
  onCheckout,
}: PassCheckoutBarProps) {
  const billingPeriod =
    selectedPlan.months === 1
      ? "month"
      : selectedPlan.months === 12
        ? "year"
        : `${selectedPlan.months} months`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-linear-to-t from-white via-white/95 to-white/0 px-4 pt-5 pb-[max(8px,env(safe-area-inset-bottom))]">

      <div className="mx-auto w-full max-w-[1080px]">

        {/* Checkout Button */}
        <button
          type="button"
          onClick={onCheckout}
          className="flex h-[58px] w-full cursor-pointer items-center justify-center rounded-[20px] bg-linear-to-r from-[#8057F7] to-[#5735C1] px-4 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(105,66,215,0.30)] transition hover:brightness-105 active:scale-[0.99] md:h-[64px] md:text-[17px]"
        >
          Get Pass · ₹
          {selectedPlan.price.toLocaleString("en-IN")}
          {" / "}
          {billingPeriod}
        </button>

        {/* Secure Payment Label */}
        <p className="mt-2 text-center text-[10px] leading-[16px] text-[#908B85] md:text-[12px]">
          🔒 Secured by Razorpay · for real-world events only
        </p>

      </div>

    </div>
  );
}