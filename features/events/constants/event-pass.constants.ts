import type {
  EventPassBenefit,
  EventPassPlan,
} from "../types/event-pass.types";

export const EVENT_PASS_BENEFITS: EventPassBenefit[] = [
  {
    id: "free-meetup",
    icon: "🎟️",
    title: "1 free meetup / month",
    description: "Any speed-dating or mixer up to ₹699",
    background: "#FDE4EB",
  },
  {
    id: "discount",
    icon: "💸",
    title: "15% off everything",
    description: "Events, treks & weekend trips",
    background: "#EFE9FD",
  },
  {
    id: "zero-fees",
    icon: "🧾",
    title: "₹0 convenience fee",
    description: "Saves ₹70 on every ticket",
    background: "#E4F6ED",
  },
  {
    id: "early-access",
    icon: "⚡",
    title: "48h early access",
    description: "Book before seats go public",
    background: "#E4F0FC",
  },
  {
    id: "priority-waitlist",
    icon: "🏅",
    title: "Priority waitlist",
    description: "First offer when a seat opens",
    background: "#FFF0DC",
  },
  {
    id: "flexi-cancel",
    icon: "♻️",
    title: "1 flexi-cancel / month",
    description: "100% Event Credit, even last-minute",
    background: "#FCE9EA",
  },
];

export const EVENT_PASS_PLANS: EventPassPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    billingCycle: "MONTHLY",
    price: 499,
    monthlyPrice: 499,
    months: 1,
    description: "Billed every month",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    billingCycle: "QUARTERLY",
    price: 1299,
    monthlyPrice: 433,
    months: 3,
    description: "₹1,299 every 3 months",
    badge: "Popular",
  },
  {
    id: "yearly",
    name: "Yearly",
    billingCycle: "YEARLY",
    price: 3999,
    monthlyPrice: 333,
    months: 12,
    description: "₹3,999 every year",
    badge: "Save 33%",
  },
];

export const EVENT_PASS_TERMS = [
  {
    icon: "🔁",
    text: "Auto-renews · cancel anytime from My Wallet",
  },
  {
    icon: "🎟️",
    text: "Free meetup doesn't roll over to next month",
  },
  {
    icon: "🚫",
    text: "2 no-shows in a month pauses Pass benefits for 30 days",
  },
  {
    icon: "🧾",
    text: "GST invoice emailed every billing cycle",
  },
];