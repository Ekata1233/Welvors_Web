
"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  LockKeyhole,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import {
  PACKAGES,
  COMPARISON_ROWS,
  PACKAGE_FAQS,
  type PackageId,
  type PackagePlan,
  type PackageCategory,
} from "../constants/packageData";
import { PackageCardApi } from "../services/package.service";

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
  return (
    <div className="mt-7 grid grid-cols-3 gap-1.5 rounded-[17px] border border-[#e9e1dc] bg-white p-1.5 sm:gap-2">
      {PACKAGES.map((pkg) => {
        const active = pkg.id === selected;

        // Match API package using name.
        const apiCard = cards.find(
          (card) =>
            card.name === pkg.id &&
            card.active === true
        );

        // Use API price when available.
        const displayPrice =
          apiCard?.price ?? pkg.startingPrice;

        return (
          <button
            key={pkg.id}
            type="button"
            onClick={() => onSelect(pkg.id)}
            className={`flex min-w-0 items-center gap-2 rounded-[12px] px-2 py-3 text-left transition-all sm:gap-3 sm:px-4 ${
              active
                ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-sm`
                : "text-[#403837] hover:bg-[#fbf6f3]"
            }`}
          >
            <span className="text-[19px] sm:text-[23px]">
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
                from {money(displayPrice)}/mo
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

function PackageHero({ pkg }: { pkg: PackagePlan }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-gradient-to-br ${pkg.gradient} p-5 text-white sm:p-7`}
    >
      <div className="pointer-events-none absolute -right-12 -top-14 h-44 w-44 rounded-full bg-white/10 sm:h-52 sm:w-52" />

      <span className="relative inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold tracking-wide text-[#d7446b]">
        {pkg.badge}
      </span>

      <div className="relative mt-5 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] border border-white/30 bg-white/15 text-[25px] sm:h-14 sm:w-14">
          {pkg.emoji}
        </div>

        <div>
          <h2 className="font-serif text-[28px] font-bold leading-tight sm:text-[35px]">
            {pkg.title}
          </h2>

          <p className="mt-1 max-w-[390px] text-[11px] leading-[1.6] text-white/90 sm:text-[12px]">
            {pkg.tagline}
          </p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center gap-2 rounded-[10px] border border-white/25 bg-white/10 px-3 py-3 text-[11px] font-semibold sm:px-4">
        <Check size={14} className="shrink-0" />
        {pkg.discovery}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               WEEKLY BENEFITS                              */
/* -------------------------------------------------------------------------- */

function WeeklyBenefits({ pkg }: { pkg: PackagePlan }) {
  const benefits = [
    {
      icon: "🗓️",
      value: pkg.weekly.datePlans,
      title: "Date plans",
    },
    {
      icon: "🚀",
      value: pkg.weekly.boosts,
      title: "Boosts",
    },
    {
      icon: "💝",
      value: pkg.weekly.compliments,
      title: "Compliments",
    },
    {
      icon: "🪙",
      value: pkg.weekly.coins,
      title: "Coins",
    },
  ];

  return (
    <section className="mt-5">
      <SectionEyebrow>Included every week</SectionEyebrow>

      <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex min-h-[116px] flex-col items-center justify-center rounded-[15px] border border-[#ece4df] bg-white px-2 py-3 text-center"
          >
            <span className="text-[22px]">{benefit.icon}</span>

            <span className="mt-1 font-serif text-[27px] font-bold leading-none text-[#df416c]">
              {benefit.value.toLocaleString("en-IN")}
            </span>

            <span className="mt-1.5 text-[11px] text-[#817671]">
              {benefit.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                FEATURE CARD                                */
/* -------------------------------------------------------------------------- */

function FeatureCard({
  category,
}: {
  category: PackageCategory;
}) {
  return (
    <div className="rounded-[17px] border border-[#eae3de] bg-white p-4 sm:p-5">
      <h3 className="mb-4 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[1px] text-[#d7446b]">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff2f5] text-[15px]">
          {category.icon}
        </span>

        {category.title}
      </h3>

      <div className="space-y-3.5">
        {category.benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-2.5">
            <span className="mt-[2px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#e54670] text-white">
              <Check size={11} strokeWidth={3} />
            </span>

            <div className="min-w-0">
              <p className="text-[12px] font-bold leading-[1.45] text-[#3d3533]">
                {benefit.title}
              </p>

              <p className="mt-0.5 text-[10px] leading-[1.7] text-[#918680] sm:text-[11px]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               FEATURE GRID                                 */
/* -------------------------------------------------------------------------- */

function FeatureSections({ pkg }: { pkg: PackagePlan }) {
  const leftCategories = [
    "MATCH_DISCOVERY",
    "PRIVACY",
    "STAND_OUT_INSTANTLY",
  ];

  const left = pkg.categories.filter((category) =>
    leftCategories.includes(category.id)
  );

  const right = pkg.categories.filter(
    (category) => !leftCategories.includes(category.id)
  );

  return (
    <div className="mt-4 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
      <div className="flex min-w-0 flex-col gap-3">
        {left.map((category) => (
          <FeatureCard key={category.id} category={category} />
        ))}
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        {right.map((category) => (
          <FeatureCard key={category.id} category={category} />
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
}: {
  pkg: PackagePlan;
}) {
  const initialDuration =
    pkg.durations.find((duration) => duration.highlighted) ??
    pkg.durations[0];

  const [selectedDuration, setSelectedDuration] = useState(
    initialDuration.id
  );

  const [showNotice, setShowNotice] = useState(false);

  const selected =
    pkg.durations.find(
      (duration) => duration.id === selectedDuration
    ) ?? initialDuration;

  return (
    <aside className="rounded-[19px] border border-[#eae3de] bg-white p-4 shadow-[0_12px_28px_rgba(55,35,30,0.055)] sm:p-5">
      <p className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#948882]">
        Pick your duration
      </p>

      <div className="mt-4 space-y-2.5">
        {pkg.durations.map((duration) => {
          const active = selected.id === duration.id;

          return (
            <button
              key={duration.id}
              type="button"
              onClick={() => {
                setSelectedDuration(duration.id);
                setShowNotice(false);
              }}
              className={`relative flex w-full items-center justify-between gap-2 rounded-[12px] border px-3 py-3.5 text-left transition ${
                active
                  ? "border-[#e74470] bg-[#fff7f9]"
                  : "border-[#e9e3de] bg-white hover:border-[#e6b8c4]"
              }`}
            >
              {duration.discount > 0 && (
                <span className="absolute -top-2 right-2 rounded-full bg-[#d83d68] px-2 py-0.5 text-[9px] font-extrabold text-white">
                  SAVE {duration.discount}%
                </span>
              )}

              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border ${
                    active
                      ? "border-[#e74470]"
                      : "border-[#d9d0cb]"
                  }`}
                >
                  {active && (
                    <span className="h-[8px] w-[8px] rounded-full bg-[#e74470]" />
                  )}
                </span>

                <span className="min-w-0">
                  <span className="block text-[12px] font-bold text-[#453b39]">
                    {durationText(duration.months)}
                  </span>

                  <span className="block text-[10px] text-[#9b8f89]">
                    {money(duration.monthlyPrice)}/mo
                  </span>
                </span>
              </span>

              <span className="shrink-0 text-[14px] font-bold text-[#39302f]">
                {money(duration.price)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 border-t border-dashed border-[#e9e1dd] pt-4">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#827772]">
            Total
          </span>

          <span className="font-serif text-[26px] font-bold text-[#332b29]">
            {money(selected.price)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowNotice(true)}
          className={`mt-3 flex w-full items-center justify-center rounded-full bg-gradient-to-r ${pkg.gradient} px-3 py-3.5 text-[12px] font-bold text-white transition-opacity hover:opacity-90`}
        >
          Buy {pkg.title} · {money(selected.price)}
        </button>

        {showNotice && (
          <p
            role="status"
            className="mt-3 rounded-lg bg-[#fff3f6] p-3 text-center text-[11px] leading-5 text-[#b6325b]"
          >
            Checkout will be connected when the purchase API is integrated.
          </p>
        )}

        <p className="mt-3 text-center text-[10px] leading-5 text-[#958984]">
Membership duration: {durationText(selected.months)} · Terms apply        </p>
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
/*                              COMPARISON TABLE                              */
/* -------------------------------------------------------------------------- */

function ComparisonTable() {
  return (
    <section className="mt-14 sm:mt-20">
      <SectionEyebrow>Compare</SectionEyebrow>

      <h2 className="mt-2 font-serif text-[29px] font-bold leading-tight text-[#302929] sm:text-[36px]">
        Which package is right for you?
      </h2>

      <div className="mt-5 overflow-x-auto rounded-[17px] border border-[#e9e2dd] bg-white">
        <table className="w-full min-w-[630px] border-collapse text-[11px] sm:text-[12px]">
          <thead>
            <tr>
              <th className="w-[31%] p-2.5 text-left" />

              {PACKAGES.map((pkg) => (
                <th key={pkg.id} className="p-2">
                  <div
                    className={`rounded-[11px] bg-gradient-to-r ${pkg.gradient} px-2 py-3 text-center text-white`}
                  >
                    <span className="block text-[12px] font-bold">
                      {pkg.emoji} {pkg.title}
                    </span>

                    <span className="mt-0.5 block text-[10px] font-normal text-white/85">
                      from {money(pkg.startingPrice)}/mo
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {COMPARISON_ROWS.map((row, index) => (
              <tr
                key={row.title}
                className={
                  index % 2 === 0
                    ? "bg-[#f8f5f2]"
                    : "bg-white"
                }
              >
                <td className="border-t border-[#eee8e4] px-3 py-3 font-semibold text-[#554b48] sm:px-4">
                  {row.title}
                </td>

                {row.values.map((value, valueIndex) => (
                  <td
                    key={`${row.title}-${valueIndex}`}
                    className="border-t border-[#eee8e4] px-2 py-3 text-center text-[#6f6460]"
                  >
                    {typeof value === "boolean" ? (
                      value ? (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#e2f4e9] text-[#299a5a]">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="text-[#b6aaa4]">—</span>
                      )
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

function PackageFAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  return (
    <section className="mt-14 w-full sm:mt-20">
      <SectionEyebrow>FAQ</SectionEyebrow>

      <h2 className="mt-2 font-serif text-[29px] font-bold text-[#302929] sm:text-[36px]">
        Good to know.
      </h2>

      <div className="mt-5 w-full overflow-hidden rounded-[17px] border border-[#e9e2dd] bg-white px-4 sm:px-5">
        {PACKAGE_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border-b border-[#eee9e5] last:border-b-0"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-[12px] font-semibold text-[#554b48] sm:text-[13px]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={16}
                  className={`shrink-0 text-[#a69a94] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <p className="pb-4 pr-7 text-[12px] leading-6 text-[#827772]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
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

  const pkg =
    PACKAGES.find((item) => item.id === selectedPackage) ??
    PACKAGES[0];

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
          Every package is verified-only. Upgrade, renew or cancel
          anytime.
        </p>

        <PackageTabs
  selected={selectedPackage}
  onSelect={setSelectedPackage}
  cards={cards}
/>

        <div className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_290px] xl:grid-cols-[minmax(0,1fr)_310px]">
          <div className="min-w-0">
            <PackageHero pkg={pkg} />

            <WeeklyBenefits pkg={pkg} />

            <FeatureSections pkg={pkg} />
          </div>

          <div className="min-w-0 lg:sticky lg:top-[95px]">
            <DurationPanel key={pkg.id} pkg={pkg} />
          </div>
        </div>

        <ComparisonTable />

        <PackageFAQ />
      </div>
    </div>
  );
}
