export type WhyWelvorsStep = {
  icon: string;
  label: string;
};

export type WhyWelvorsFeature = {
  icon: string;
  category: string;
  title: string;
  comparison: string;
};

/* ==========================================================
   SWIPE APP STEPS
   ========================================================== */

export const SWIPE_APP_STEPS: WhyWelvorsStep[] = [
  { icon: "👆", label: "Swipe" },
  { icon: "💬", label: '"Hey"' },
  { icon: "⌛", label: "Endless chat" },
  { icon: "👻", label: "Ghosted" },
  { icon: "⟲", label: "Repeat" },
];

/* ==========================================================
   WELVORS STEPS
   ========================================================== */

export const WELVORS_STEPS: WhyWelvorsStep[] = [
  { icon: "🪪", label: "Verified" },
  { icon: "🎯", label: "Same intent" },
  { icon: "🗓️", label: "Date plan" },
  { icon: "☕", label: "Meet" },
  { icon: "💞", label: "Forever" },
];

/* ==========================================================
   FEATURE COMPARISON
   ========================================================== */

export const WHY_WELVORS_FEATURES: WhyWelvorsFeature[] = [
  {
    icon: "🪪",
    category: "Who you meet",
    title: "ID + live video verified",
    comparison: "Anyone with a phone",
  },
  {
    icon: "🎯",
    category: "Intent",
    title: "Relationship goals on every profile",
    comparison: '"Let’s see where it goes"',
  },
  {
    icon: "🙈",
    category: "Your photos",
    title: "SafeFace avatar till you reveal",
    comparison: "Public to everyone",
  },
  {
    icon: "🧠",
    category: "Matching",
    title: "42 signals: values, family, lifestyle",
    comparison: "Looks and distance",
  },
  {
    icon: "🗓️",
    category: "Meeting",
    title: "Date plans and hosted events",
    comparison: 'Weeks of "hey" and "hmm"',
  },
  {
    icon: "💞",
    category: "Staying together",
    title: "Up to ₹5 lakh honeymoon",
    comparison: "Nothing after the match",
  },
];