
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  LockKeyhole,
  Wallet,
} from "lucide-react";

import { getApiErrorMessage, getToken } from "@/features/login/services/login.service";
import { loadRazorpayScript } from "@/features/wallet/services/razorpayCheckout";
import { createPackageOrder, verifyPayment } from "@/features/wallet/services/walletPayment.service";
import type { RazorpayPaymentResponse } from "@/features/wallet/types/razorpay";

import type { PackageCardApi } from "../services/package.service";
import {
  getPackageDetails,
  type PackageDetailsApi,
} from "../services/packageDetails.service";

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

type PackageId = "PREMIUM" | "VIP" | "VIP_ELITE";

type PackageStyle = {
  id: PackageId;
  title: string;
  emoji: string;
  gradient: string;
  accent: string;
  selectedBg: string;
  selectedBorder: string;
  softBg: string;
  badgeText: string;
  buttonGradient: string;
};

type ApiFeatureCategory = {
  id: string;
  title: string;
  icon: string;
  benefits: {
    id: string;
    title: string;
    description: string | null;
  }[];
};

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

function money(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function durationText(months: number) {
  return `${months} ${months === 1 ? "month" : "months"}`;
}

function getPackageStyle(id: PackageId): PackageStyle {
  switch (id) {
    case "VIP":
      return {
        id,
        title: "VIP",
        emoji: "👑",
        gradient: "from-[#dfa443] to-[#93670f]",
        accent: "#b78016",
        selectedBg: "#fffaf0",
        selectedBorder: "#c38a25",
        softBg: "#fff6e8",
        badgeText: "#ad7514",
        buttonGradient: "from-[#e4a63f] to-[#93670f]",
      };

    case "VIP_ELITE":
      return {
        id,
        title: "VIP Elite",
        emoji: "💎",
        gradient: "from-[#393939] to-[#080808]",
        accent: "#202020",
        selectedBg: "#f4f4f4",
        selectedBorder: "#292929",
        softBg: "#f5f5f5",
        badgeText: "#202020",
        buttonGradient: "from-[#383838] to-[#080808]",
      };

    default:
      return {
        id: "PREMIUM",
        title: "Premium+",
        emoji: "🔥",
        gradient: "from-[#ed527b] to-[#b82e5b]",
        accent: "#df4770",
        selectedBg: "#fff5f8",
        selectedBorder: "#e74470",
        softBg: "#fff2f5",
        badgeText: "#d7446b",
        buttonGradient: "from-[#ed527b] to-[#bd305e]",
      };
  }
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-[1.7px] text-[#d7446b]">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PACKAGE TABS                                */
/* -------------------------------------------------------------------------- */

function PackageTabs({
  selected,
  onSelect,
  cards,
}: {
  selected: PackageId;
  onSelect: (id: PackageId) => void;
  cards: PackageCardApi[];
}) {
  const activeCards = cards.filter(
    (card) =>
      card.active &&
      ["PREMIUM", "VIP", "VIP_ELITE"].includes(card.name)
  );

  return (
    <div className="mt-7 grid grid-cols-3 gap-1.5 rounded-[17px] border border-[#e9e1dc] bg-white p-1.5 sm:gap-2">
      {activeCards.map((card) => {
        const pkg = getPackageStyle(card.name as PackageId);
        const active = pkg.id === selected;

        return (
          <button
            key={card.id}
            type="button"
            onClick={() => onSelect(pkg.id)}
            className={`flex min-w-0 items-center gap-2 rounded-[12px] px-2 py-3 text-left transition-all sm:gap-3 sm:px-4 ${
              active
                ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-[0_7px_16px_rgba(40,25,20,0.13)]`
                : "text-[#403837] hover:bg-[#fbf6f3]"
            }`}
          >
            <span className="shrink-0 text-[19px] sm:text-[23px]">
              {pkg.emoji}
            </span>

            <span className="min-w-0">
              <span className="block truncate text-[11px] font-bold sm:text-[14px]">
                {pkg.title}
              </span>

              <span
                className={`block truncate text-[9px] sm:text-[11px] ${
                  active ? "text-white/85" : "text-[#978b85]"
                }`}
              >
                from {money(card.price ?? 0)}/mo
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 HERO CARD                                  */
/* -------------------------------------------------------------------------- */

function PackageHero({
  pkg,
  details,
}: {
  pkg: PackageStyle;
  details: PackageDetailsApi | null;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-gradient-to-br ${pkg.gradient} p-5 text-white sm:p-7`}
    >
      <div className="pointer-events-none absolute -right-12 -top-14 h-44 w-44 rounded-full bg-white/10 sm:h-52 sm:w-52" />

      {details?.badgeLabel && (
        <span
          className="relative inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold tracking-wide"
          style={{ color: pkg.badgeText }}
        >
          {details.badgeLabel}
        </span>
      )}

      <div className="relative mt-5 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] border border-white/30 bg-white/15 text-[25px] sm:h-14 sm:w-14">
          {pkg.emoji}
        </div>

        <div className="min-w-0">
          <h2 className="font-serif text-[28px] font-bold leading-tight sm:text-[35px]">
            {pkg.title}
          </h2>

          <p className="mt-1 max-w-[390px] text-[11px] leading-[1.6] text-white/90 sm:text-[12px]">
            {details?.tagline}
          </p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center gap-2 rounded-[10px] border border-white/25 bg-white/10 px-3 py-3 text-[11px] font-semibold sm:px-4">
        <span>{details?.visibilityRule}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               WEEKLY BENEFITS                              */
/* -------------------------------------------------------------------------- */

function WeeklyBenefits({
  details,
  pkg,
}: {
  details: PackageDetailsApi | null;
  pkg: PackageStyle;
}) {
  const weeklyItems = (details?.limits ?? [])
    .filter(
      (item) =>
        item.enabled === true &&
        item.limit !== null &&
        item.limit > 0 &&
        item.feature != null
    )
    .map((item) => {
      const code = item.feature.code.toUpperCase();
      const title = item.feature.title.toLowerCase();

      let emoji = "✨";
      let label = item.feature.title;

      if (code.includes("DATE_PLAN") || title.includes("date plan")) {
        emoji = "🗓️";
        label = "Date plans";
      } else if (code.includes("BOOST") || title.includes("boost")) {
        emoji = "🚀";
        label = "Boosts";
      } else if (
        code.includes("COMPLIMENT") ||
        title.includes("compliment")
      ) {
        emoji = "💝";
        label = "Compliments";
      } else if (code.includes("COIN") || title.includes("coin")) {
        emoji = "🪙";
        label = "Coins";
      }

      return {
        id: item.id,
        emoji,
        label,
        value: item.limit as number,
      };
    });

  return (
    <section className="mt-8 min-w-0">
      <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[1px] text-[#948882]">
        INCLUDED EVERY WEEK
      </h3>

      <div className="w-full min-w-0 overflow-hidden">
        <div className="flex w-full gap-3 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-2 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {weeklyItems.map((item) => (
            <div
              key={item.id}
              className="
                flex min-h-[115px] min-w-0
                flex-[0_0_46%]
                sm:flex-[0_0_30%]
                lg:flex-[0_0_23%]
                snap-start flex-col items-center justify-center
                rounded-[14px] border border-[#eadfd9]
                bg-white px-3 py-3 text-center
              "
            >
              <div className="text-[28px] leading-none">
                {item.emoji}
              </div>

              <div
                className="mt-2 font-serif text-[30px] font-bold leading-none sm:text-[34px]"
                style={{ color: pkg.accent }}
              >
                {item.value}
              </div>

              <div className="mt-2 text-[12px] text-[#85776f]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              FEATURE CARD                                  */
/* -------------------------------------------------------------------------- */

function FeatureCard({
  category,
  pkg,
}: {
  category: ApiFeatureCategory;
  pkg: PackageStyle;
}) {
  return (
    <div className="rounded-[17px] border border-[#eae3de] bg-white p-4 sm:p-5">
      <h3
        className="mb-4 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[1px]"
        style={{ color: pkg.accent }}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg text-[15px]"
          style={{ backgroundColor: pkg.softBg }}
        >
          {category.icon}
        </span>

        {category.title}
      </h3>

      <div className="space-y-3.5">
        {category.benefits.map((benefit) => (
          <div key={benefit.id} className="flex gap-2.5">
            <span
              className="mt-[2px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: pkg.accent }}
            >
              <Check size={11} strokeWidth={3} />
            </span>

            <div className="min-w-0">
              <p className="text-[12px] font-bold leading-[1.45] text-[#3d3533]">
                {benefit.title}
              </p>

              {benefit.description && (
                <p className="mt-0.5 text-[10px] leading-[1.7] text-[#918680] sm:text-[11px]">
                  {benefit.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              FEATURE GRID                                  */
/* -------------------------------------------------------------------------- */

function FeatureSections({
  details,
  pkg,
}: {
  details: PackageDetailsApi | null;
  pkg: PackageStyle;
}) {
  const featureLimits = (details?.limits ?? []).filter(
    (item) =>
      item.enabled === true &&
      item.limit === null &&
      item.feature != null
  );

  const categoryIcons: Record<string, string> = {
    MATCH_DISCOVERY: "💗",
    PRIVACY: "🔒",
    STAND_OUT_INSTANTLY: "✨",
    MEET_IN_REAL_LIFE: "🎉",
    REWARDS_FOR_SERIOUS_DATERS: "🎁",
    ELITE_ACCESS: "🔐",
    PREMIUM_EXPERIENCES: "✨",
    NETWORKING_GROWTH: "🤝",
    VIP_PERKS: "🎁",
    STATUS_PRIVACY: "🏅",
    EVERYTHING_IN_VIP_AND_MORE: "💎",
    ABSOLUTE_PRIVACY: "🔒",
    SMARTER_CURATED_MATCHES: "🎯",
    STATUS_THAT_SPEAKS_FIRST: "👑",
    WHITE_GLOVE_DATING: "🛎️",
    THE_WORLD_CURATED: "🌍",
    AN_EXECUTIVE_CIRCLE: "💼",
  };

  // Group features by API category
  const categoryMap = new Map<string, ApiFeatureCategory>();

  featureLimits.forEach((item) => {
    const categoryId = item.feature.category;

    if (!categoryMap.has(categoryId)) {
      categoryMap.set(categoryId, {
        id: categoryId,
        title: categoryId.replace(/_/g, " "),
        icon: categoryIcons[categoryId] ?? "✨",
        benefits: [],
      });
    }

    categoryMap.get(categoryId)!.benefits.push({
      id: item.id,
      title: item.feature.title,
      description: item.feature.description,
    });
  });

  const categories = Array.from(categoryMap.values());

  /*
   * FIX:
   * Distribute feature cards across two columns.
   *
   * Instead of using fixed category names, assign each
   * category to the currently shorter column.
   *
   * This works for Premium, VIP and VIP Elite.
   */
  const left: ApiFeatureCategory[] = [];
  const right: ApiFeatureCategory[] = [];

  let leftWeight = 0;
  let rightWeight = 0;

  categories.forEach((category) => {
    // Approximate card height based on benefit count.
    const weight = category.benefits.length + 2;

    if (leftWeight <= rightWeight) {
      left.push(category);
      leftWeight += weight;
    } else {
      right.push(category);
      rightWeight += weight;
    }
  });

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
      <div className="flex min-w-0 flex-col gap-3">
        {left.map((category) => (
          <FeatureCard
            key={category.id}
            category={category}
            pkg={pkg}
          />
        ))}
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        {right.map((category) => (
          <FeatureCard
            key={category.id}
            category={category}
            pkg={pkg}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PRICE PANEL                                 */
/* -------------------------------------------------------------------------- */

function DurationPanel({
  pkg,
  details,
}: {
  pkg: PackageStyle;
  details: PackageDetailsApi | null;
}) {
  const [selectedDuration, setSelectedDuration] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "opening" | "checkout" | "verifying" | "verified"
  >("idle");
  const [pendingPayment, setPendingPayment] = useState<RazorpayPaymentResponse | null>(null);
  const [needsLogin, setNeedsLogin] = useState(false);
  const [orderError, setOrderError] = useState("");

  const durations = [...(details?.prices ?? [])]
    .filter((item) => item.active === true)
    .sort((a, b) => a.months - b.months);

  const defaultDuration =
    durations.find((item) => item.isHighlighted) ??
    durations[0];

  const selected =
    durations.find((item) => item.id === selectedDuration) ??
    defaultDuration;

  const busy = paymentStatus !== "idle" && paymentStatus !== "verified";

  const confirmPayment = async (payment: RazorpayPaymentResponse, token: string) => {
    setPendingPayment(payment);
    setPaymentStatus("verifying");
    setOrderError("");

    try {
      const result = await verifyPayment(payment, token);
      if (result.success !== true) {
        throw new Error(result.message || "Payment verification was not confirmed.");
      }
      setPendingPayment(null);
      setPaymentStatus("verified");
    } catch (error) {
      setPaymentStatus("idle");
      setOrderError(getApiErrorMessage(error));
    }
  };

  const handleBuy = async () => {
    if (!selected?.id || busy || paymentStatus === "verified") return;

    setOrderError("");
    const token = getToken();
    setNeedsLogin(!token);
    if (!token) return;

    if (pendingPayment) {
      await confirmPayment(pendingPayment, token);
      return;
    }

    setPaymentStatus("opening");
    try {
      if (!(await loadRazorpayScript()) || !window.Razorpay) {
        throw new Error("Unable to load Razorpay Checkout.");
      }

      const result = await createPackageOrder(selected.id, token);
      if (result.success !== true || !result.data) {
        throw new Error(result.message || "Unable to create the payment order.");
      }

      const { razorpayOrderId, razorpayKeyId, amount, currency } = result.data;
      if (!razorpayOrderId?.startsWith("order_") || !razorpayKeyId ||
          typeof amount !== "number" || !Number.isSafeInteger(amount) || amount <= 0 || !currency) {
        throw new Error("The server returned incomplete Razorpay order details.");
      }

      let paymentReceived = false;
      const checkout = new window.Razorpay({
        key: razorpayKeyId,
        order_id: razorpayOrderId,
        amount,
        currency,
        name: "Welvors",
        description: `${pkg.title} · ${durationText(selected.months)}`,
        theme: { color: pkg.accent },
        handler: async ({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) => {
          if (paymentReceived) return;
          paymentReceived = true;
          await confirmPayment({ razorpay_payment_id, razorpay_order_id, razorpay_signature }, token);
        },
        modal: {
          ondismiss: () => {
            if (!paymentReceived) setPaymentStatus("idle");
          },
        },
      });
      checkout.on("payment.failed", () => {
        if (!paymentReceived) setOrderError("Payment failed. You can retry in Razorpay Checkout.");
      });
      setPaymentStatus("checkout");
      checkout.open();
    } catch (error) {
      setOrderError(getApiErrorMessage(error));
      setPaymentStatus("idle");
    }
  };

  return (
    <aside className="rounded-[19px] border border-[#eae3de] bg-white p-4 shadow-[0_12px_28px_rgba(55,35,30,0.055)] sm:p-5">
      <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#948882]">
        PICK YOUR DURATION
      </p>

      <div className="mt-4 space-y-2.5">
        {durations.map((duration) => {
          const active = selected?.id === duration.id;

          return (
            <button
              key={duration.id}
              type="button"
              disabled={busy || pendingPayment !== null}
              onClick={() => {
                if (active) return;
                setSelectedDuration(duration.id);
                setPaymentStatus("idle");
                setNeedsLogin(false);
                setOrderError("");
              }}
              className="relative flex w-full items-center justify-between gap-2 rounded-[12px] border px-3 py-3.5 text-left transition"
              style={{
                borderColor: active
                  ? pkg.selectedBorder
                  : "#e9e3de",
                backgroundColor: active
                  ? pkg.selectedBg
                  : "#ffffff",
              }}
            >
              {(duration.isHighlighted ||
                duration.discountPercent > 0) && (
                <span
                  className="absolute -top-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-extrabold text-white"
                  style={{ backgroundColor: pkg.accent }}
                >
                  {duration.isHighlighted
                    ? "POPULAR"
                    : `SAVE ${duration.discountPercent}%`}
                </span>
              )}

              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border"
                  style={{
                    borderColor: active
                      ? pkg.accent
                      : "#d9d0cb",
                  }}
                >
                  {active && (
                    <span
                      className="h-[8px] w-[8px] rounded-full"
                      style={{ backgroundColor: pkg.accent }}
                    />
                  )}
                </span>

                <span className="min-w-0">
                  <span className="block text-[12px] font-bold text-[#453b39]">
                    {durationText(duration.months)}
                  </span>

                  <span className="block text-[10px] text-[#9b8f89]">
                    {money(duration.price)}/mo
                  </span>
                </span>
              </span>

              <span className="shrink-0 text-[14px] font-bold text-[#39302f]">
                {money(duration.originalPrice)}
              </span>
            </button>
          );
        })}

        {durations.length === 0 && (
          <p className="py-4 text-center text-[11px] text-[#958984]">
            No duration options available.
          </p>
        )}
      </div>

      <div className="mt-5 border-t border-dashed border-[#e9e1dd] pt-4">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#827772]">
            Total
          </span>

          <span className="font-serif text-[26px] font-bold text-[#332b29]">
            {selected ? money(selected.originalPrice) : "—"}
          </span>
        </div>

        <button
          type="button"
          disabled={!selected?.id || busy || paymentStatus === "verified"}
          onClick={handleBuy}
          className={`mt-3 flex w-full items-center justify-center rounded-full bg-gradient-to-r ${pkg.buttonGradient} px-3 py-3.5 text-[12px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {paymentStatus === "opening" && "Opening checkout…"}
          {paymentStatus === "checkout" && "Checkout open"}
          {paymentStatus === "verifying" && "Verifying payment…"}
          {paymentStatus === "verified" && "Payment verified"}
          {paymentStatus === "idle" && (pendingPayment
            ? "Retry verification"
            : `Buy ${pkg.title} · ${selected ? money(selected.originalPrice) : "—"}`)}
        </button>

        {paymentStatus === "verified" && (
          <p
            role="status"
            className="mt-3 rounded-lg bg-[#fff3f6] p-3 text-center text-[11px] leading-5 text-[#b6325b]"
          >
            Your package payment was verified.
          </p>
        )}

        {needsLogin && (
          <p role="status" className="mt-3 text-center text-xs text-[#b6325b]">
            <Link href="/login" className="font-bold underline">Log in</Link>{" "}
            to create a payment order.
          </p>
        )}

        {orderError && (
          <p role="alert" className="mt-3 text-center text-xs text-[#b6325b]">
            {orderError}
          </p>
        )}

        <p className="mt-3 text-center text-[10px] leading-5 text-[#958984]">
          Membership duration:{" "}
          {selected ? durationText(selected.months) : "—"} · Terms apply
        </p>
      </div>

      <div className="mt-4 space-y-2 border-t border-[#eee8e4] pt-4 text-[10px] text-[#817671]">
        <p className="flex items-center gap-2">
          <LockKeyhole size={13} className="text-[#dc9b35]" />
          Secure payment · UPI, cards, netbanking
        </p>

        <p className="flex items-center gap-2">
          <Wallet size={13} className="text-[#dc9b35]" />
          Pay with wallet coins too
        </p>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

function PackageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-14 w-full sm:mt-20">
      <SectionEyebrow>FAQ</SectionEyebrow>

      <h2 className="mt-2 font-serif text-[29px] font-bold text-[#302929] sm:text-[36px]">
        Good to know.
      </h2>

      <div className="mt-5 w-full overflow-hidden rounded-[17px] border border-[#e9e2dd] bg-white px-4 sm:px-5">
        <div className="border-b border-[#eee9e5]">
          <button
            type="button"
            aria-expanded={openIndex === 0}
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
          >
            <span className="text-[12px] font-semibold text-[#554b48] sm:text-[13px]">
              Can I upgrade my package?
            </span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-[#a69a94] transition-transform ${
                openIndex === 0 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 0 && (
            <p className="pb-4 pr-7 text-[12px] leading-6 text-[#827772]">
              You can choose another available membership package.
              Upgrade activation and billing depend on the purchase rules.
            </p>
          )}
        </div>

        <div className="border-b border-[#eee9e5]">
          <button
            type="button"
            aria-expanded={openIndex === 1}
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
          >
            <span className="text-[12px] font-semibold text-[#554b48] sm:text-[13px]">
              What happens when my membership expires?
            </span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-[#a69a94] transition-transform ${
                openIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 1 && (
            <p className="pb-4 pr-7 text-[12px] leading-6 text-[#827772]">
              Package benefits remain available during the active
              membership period. After expiry, you can renew
              or purchase another package.
            </p>
          )}
        </div>

        <div>
          <button
            type="button"
            aria-expanded={openIndex === 2}
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
          >
            <span className="text-[12px] font-semibold text-[#554b48] sm:text-[13px]">
              How do I select a membership duration?
            </span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-[#a69a94] transition-transform ${
                openIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === 2 && (
            <p className="pb-4 pr-7 text-[12px] leading-6 text-[#827772]">
              Select your preferred package, choose an available
              duration, and review the total price before purchase.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function PackagesPage({
  cards,
}: {
  cards: PackageCardApi[];
}) {
  const [selectedPackage, setSelectedPackage] =
    useState<PackageId>("PREMIUM");

  const [packageDetails, setPackageDetails] =
    useState<PackageDetailsApi | null>(null);

  const [loading, setLoading] = useState(false);

  const pkg = getPackageStyle(selectedPackage);

  const selectedApiCard = cards.find(
    (card) =>
      card.name === selectedPackage &&
      card.active === true
  );

  useEffect(() => {
    if (!selectedApiCard?.id) {
      return;
    }

    let cancelled = false;

    const loadDetails = async () => {
      try {
        setLoading(true);

        const result = await getPackageDetails(
          selectedApiCard.id
        );

        if (!cancelled) {
          setPackageDetails(result);
        }
      } catch (error) {
        console.error("Package details API error:", error);

        if (!cancelled) {
          setPackageDetails(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadDetails();

    return () => {
      cancelled = true;
    };
  }, [selectedApiCard?.id]);

  const selectedDetails =
    packageDetails?.name === selectedPackage
      ? packageDetails
      : null;

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#302929]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-9 sm:px-8 sm:pt-12 lg:px-10">
        <SectionEyebrow>Packages</SectionEyebrow>

        <h1 className="mt-2 font-serif text-[36px] font-bold leading-tight tracking-[-1px] sm:text-[46px]">
          Choose your{" "}
          <span className="italic text-[#d7446b]">
            package.
          </span>
        </h1>

        <p className="mt-3 max-w-[460px] text-[13px] leading-6 text-[#827772]">
          Every package is verified-only. Upgrade, renew or cancel anytime.
        </p>

        <PackageTabs
          selected={selectedPackage}
          onSelect={setSelectedPackage}
          cards={cards}
        />

        <div className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_290px] xl:grid-cols-[minmax(0,1fr)_310px]">
          <div className="min-w-0">
            <PackageHero
              pkg={pkg}
              details={selectedDetails}
            />

            {loading ? (
              <div className="mt-8 rounded-[17px] border border-[#eae3de] bg-white p-8 text-center text-[12px] text-[#827772]">
                Loading package benefits...
              </div>
            ) : (
              <>
                <WeeklyBenefits
                  details={selectedDetails}
                  pkg={pkg}
                />

                <FeatureSections
                  details={selectedDetails}
                  pkg={pkg}
                />
              </>
            )}
          </div>

          <div className="min-w-0 lg:sticky lg:top-[95px]">
            <DurationPanel
              key={pkg.id}
              pkg={pkg}
              details={selectedDetails}
            />
          </div>
        </div>

        <PackageFAQ />
      </div>
    </div>
  );
}
