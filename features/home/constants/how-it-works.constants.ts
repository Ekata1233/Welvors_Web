export const HOW_IT_WORKS_DURATION = 4000;

export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Verify",
    duration: "2 MIN",
    description:
      "ID, selfie and a live video. Done once, trusted everywhere.",
    image: "https://ik.imagekit.io/r0vb3de74/verify.png",
    features: [
      {
        icon: "🪪",
        label: "Govt ID",
      },
      {
        icon: "🔒",
        label: "Selfie",
      },
      {
        icon: "🎥",
        label: "Live video",
      },
    ],
  },
  {
    id: 2,
    title: "Match",
    duration: "DAILY",
    description:
      "25 curated profiles a day, each with a match percentage.",
    image: "https://ik.imagekit.io/r0vb3de74/match.png",
    features: [
      {
        icon: "🎯",
        label: "42 signals",
      },
      {
        icon: "💎",
        label: "Curated",
      },
      {
        icon: "💗",
        label: "Intent",
      },
    ],
  },
  {
    id: 3,
    title: "Meet",
    duration: "THIS WEEK",
    description:
      "Create a date plan, or join a hosted event. Skip the endless chat.",
    image: "https://ik.imagekit.io/r0vb3de74/meet.png",
    features: [
      {
        icon: "🗓️",
        label: "Date plans",
      },
      {
        icon: "👥",
        label: "Events",
      },
      {
        icon: "💕",
        label: "Real dates",
      },
    ],
  },
  {
    id: 4,
    title: "Commit",
    duration: "FOREVER",
    description:
      "Go exclusive with Forever Love and grow towards a ₹5 lakh honeymoon.",
    image: "https://ik.imagekit.io/r0vb3de74/commit.png",
    features: [
      {
        icon: "💑",
        label: "Go exclusive",
      },
      {
        icon: "🗓️",
        label: "Check-ins",
      },
      {
        icon: "🏝️",
        label: "Honeymoon",
      },
    ],
  },
];

export type HowItWorksStepData =
  (typeof HOW_IT_WORKS_STEPS)[number];