
export type PackageId = "PREMIUM" | "VIP" | "VIP_ELITE";

export type DurationOption = {
  id: string;
  months: number;
  price: number;
  monthlyPrice: number;
  discount: number;
  highlighted?: boolean;
};

export type PackageBenefit = {
  title: string;
  description: string;
};

export type PackageCategory = {
  id: string;
  title: string;
  icon: string;
  benefits: PackageBenefit[];
};

export type PackagePlan = {
  id: PackageId;
  title: string;
  emoji: string;
  badge: string;
  tagline: string;
  discovery: string;
  startingPrice: number;
  gradient: string;
  durations: DurationOption[];
  weekly: {
    datePlans: number;
    boosts: number;
    compliments: number;
    coins: number;
  };
  categories: PackageCategory[];
};

const premiumCategories: PackageCategory[] = [
  {
    id: "MATCH_DISCOVERY",
    title: "Match & discovery",
    icon: "💗",
    benefits: [
      {
        title: "25 profiles a day",
        description: "Hand-picked, ID-verified matches daily",
      },
      {
        title: "AI compatibility score",
        description: "See your match % on every profile",
      },
      {
        title: "See who liked you",
        description: "All your Admirers, fully revealed",
      },
      {
        title: "Advanced filters",
        description: "Trust score, lifestyle, religion & intent",
      },
      {
        title: "3 rewinds a day",
        description: "Undo an accidental pass",
      },
      {
        title: "Priority visibility",
        description: "Your profile shows up earlier to others",
      },
    ],
  },
  {
    id: "PRIVACY",
    title: "Privacy",
    icon: "🔒",
    benefits: [
      {
        title: "SafeFace mode",
        description:
          "Show an AI avatar instead of your real photos",
      },
      {
        title: "Reveal on your terms",
        description:
          "Real photos only to people you choose",
      },
      {
        title: "Control who sees you",
        description:
          "Free & Premium, or Premium members only",
      },
    ],
  },
  {
    id: "STAND_OUT_INSTANTLY",
    title: "Stand out instantly",
    icon: "✨",
    benefits: [
      {
        title: "Premium badge on your profile",
        description:
          "Instantly shows you're serious about dating",
      },
      {
        title: "Blue verified tick + Trust %",
        description:
          "Builds trust before the first message",
      },
      {
        title: "AI match % on every card",
        description:
          "People see how well you fit them",
      },
      {
        title: "Fast-reply badge",
        description:
          "Shows you reply quickly — get more chats",
      },
      {
        title: "Serious-intent badge",
        description:
          "Attract people who want the same future",
      },
    ],
  },
  {
    id: "MEET_IN_REAL_LIFE",
    title: "Meet in real life",
    icon: "🎉",
    benefits: [
      {
        title: "Join Date Plans",
        description:
          "Meet someone today — coffee, dinner or a walk",
      },
      {
        title: "Post your own date plans",
        description:
          "Set the plan, pick who joins — you're in control",
      },
      {
        title: "Book verified singles events",
        description:
          "Mixers, speed dates & dinners with ID-verified guests",
      },
      {
        title: "Group treks & camping",
        description:
          "Hosted treks & camps in small verified groups",
      },
      {
        title: "Weekend trips & getaways",
        description:
          "Beach trips & road trips — stay, meals & travel planned",
      },
      {
        title: "Singles-only travel ✈️",
        description:
          "Travel solo, come back with a connection — every traveller verified & single",
      },
      {
        title: "Invite a match to an event",
        description:
          "Turn chats into a safe first meet",
      },
      {
        title: "Safety at every meetup",
        description:
          "Public venues, live location & SOS",
      },
    ],
  },
  {
    id: "REWARDS_FOR_SERIOUS_DATERS",
    title: "Rewards for serious daters",
    icon: "🎁",
    benefits: [
      {
        title: "250 welcome coins",
        description:
          "Start strong — send Roses & compliments on day 1",
      },
      {
        title: "Commitment Tag",
        description:
          "Found the one? Go exclusive and make it official",
      },
      {
        title: "Forever Love Programme",
        description:
          "Date 3 years, marry — honeymoon benefit up to ₹5 lakh",
      },
      {
        title: "Receive premium gifts",
        description:
          "Thoughtful gifts from people serious about you",
      },
      {
        title: "Refer & earn",
        description:
          "Bring serious friends, earn wallet coins",
      },
    ],
  },
];

export const PACKAGES: PackagePlan[] = [
  {
    id: "PREMIUM",
    title: "Premium+",
    emoji: "🔥",
    badge: "SERIOUS PEOPLE ONLY",
    tagline:
      "For serious singles ready to commit. Verified matches, built for real relationships.",
    discovery: "You meet Free & Premium members",
    startingPrice: 500,
    gradient: "from-[#ed5276] to-[#bc2d5c]",
    durations: [
      {
        id: "premium-1",
        months: 1,
        price: 699,
        monthlyPrice: 699,
        discount: 0,
      },
      {
        id: "premium-3",
        months: 3,
        price: 1799,
        monthlyPrice: 600,
        discount: 14,
        highlighted: true,
      },
      {
        id: "premium-6",
        months: 6,
        price: 3299,
        monthlyPrice: 550,
        discount: 21,
      },
      {
        id: "premium-12",
        months: 12,
        price: 5999,
        monthlyPrice: 500,
        discount: 29,
      },
    ],
    weekly: {
      datePlans: 1,
      boosts: 1,
      compliments: 3,
      coins: 50,
    },
    categories: premiumCategories,
  },
  {
    id: "VIP",
    title: "VIP",
    emoji: "👑",
    badge: "EXCLUSIVE MEMBERSHIP",
    tagline:
      "A more exclusive dating experience with elevated access and meaningful connections.",
    discovery: "VIP & Elite members only",
    startingPrice: 1500,
    gradient: "from-[#eab34e] to-[#95660f]",
    durations: [
      {
        id: "vip-1",
        months: 1,
        price: 1999,
        monthlyPrice: 1999,
        discount: 0,
      },
      {
        id: "vip-3",
        months: 3,
        price: 5399,
        monthlyPrice: 1800,
        discount: 10,
        highlighted: true,
      },
      {
        id: "vip-6",
        months: 6,
        price: 9899,
        monthlyPrice: 1650,
        discount: 17,
      },
      {
        id: "vip-12",
        months: 12,
        price: 17999,
        monthlyPrice: 1500,
        discount: 25,
      },
    ],
    weekly: {
      datePlans: 3,
      boosts: 3,
      compliments: 10,
      coins: 500,
    },
    categories: [
      ...premiumCategories,
      {
        id: "VIP_EXCLUSIVE",
        title: "VIP exclusive",
        icon: "👑",
        benefits: [
          {
            title: "Private members-only pool",
            description:
              "Connect with VIP and Elite members",
          },
          {
            title: "Incognito mode",
            description:
              "Browse with greater control over your visibility",
          },
          {
            title: "VIP events & luxury dates",
            description:
              "Discover exclusive social experiences",
          },
          {
            title: "Networking with founders & leaders",
            description:
              "Meet ambitious, like-minded people",
          },
        ],
      },
    ],
  },
  {
    id: "VIP_ELITE",
    title: "VIP Elite",
    emoji: "💎",
    badge: "THE HIGHEST LEVEL",
    tagline:
      "An exceptional membership for people seeking premium connections and experiences.",
    discovery: "Elite & VIP members only",
    startingPrice: 2000,
    gradient: "from-[#454545] to-[#111111]",
    durations: [
      {
        id: "elite-1",
        months: 1,
        price: 3999,
        monthlyPrice: 3999,
        discount: 0,
      },
      {
        id: "elite-3",
        months: 3,
        price: 9999,
        monthlyPrice: 3333,
        discount: 17,
        highlighted: true,
      },
      {
        id: "elite-6",
        months: 6,
        price: 14999,
        monthlyPrice: 2500,
        discount: 37,
      },
      {
        id: "elite-12",
        months: 12,
        price: 23999,
        monthlyPrice: 2000,
        discount: 50,
      },
    ],
    weekly: {
      datePlans: 10,
      boosts: 10,
      compliments: 30,
      coins: 2000,
    },
    categories: [
      ...premiumCategories,
      {
        id: "VIP_EXCLUSIVE",
        title: "VIP exclusive",
        icon: "👑",
        benefits: [
          {
            title: "Private members-only pool",
            description:
              "Connect with VIP and Elite members",
          },
          {
            title: "Incognito mode",
            description:
              "Browse with greater control over your visibility",
          },
          {
            title: "VIP events & luxury dates",
            description:
              "Discover exclusive social experiences",
          },
        ],
      },
      {
        id: "ELITE_EXCLUSIVE",
        title: "Elite exclusive",
        icon: "💎",
        benefits: [
          {
            title: "Personal date concierge",
            description:
              "A more personalized dating experience",
          },
          {
            title: "International retreats",
            description:
              "Access exclusive travel experiences",
          },
        ],
      },
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    title: "Who you meet",
    values: [
      "Free & Premium members",
      "VIP & Elite only",
      "Elite & VIP only",
    ],
  },
  {
    title: "Date plans / week",
    values: ["1", "3", "10"],
  },
  {
    title: "Boosts / week",
    values: ["1", "3", "10"],
  },
  {
    title: "Compliments / week",
    values: ["3", "10", "30"],
  },
  {
    title: "Coins / week",
    values: ["50", "500", "2,000"],
  },
  {
    title: "See who liked you",
    values: [true, true, true],
  },
  {
    title: "AI match score",
    values: [true, true, true],
  },
  {
    title: "SafeFace photo privacy",
    values: [true, true, true],
  },
  {
    title: "Private members-only pool",
    values: [false, true, true],
  },
  {
    title: "Incognito mode",
    values: [false, true, true],
  },
  {
    title: "VIP events & luxury dates",
    values: [false, true, true],
  },
  {
    title: "Networking with founders & leaders",
    values: [false, true, true],
  },
  {
    title: "Personal date concierge",
    values: [false, false, true],
  },
  {
    title: "International retreats",
    values: [false, false, true],
  },
];

export const PACKAGE_FAQS = [
  {
    question: "Can I cancel anytime?",
    answer:
      "You can manage your membership according to the applicable subscription and cancellation terms.",
  },
  {
    question: "Can I pay with wallet coins?",
    answer:
      "Available payment methods depend on the options shown during checkout.",
  },
  {
    question: "What's the difference between Premium+ and VIP?",
    answer:
      "Premium+ focuses on serious dating and discovery. VIP adds a more exclusive membership pool and premium experiences.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Refund eligibility depends on the applicable Refund & Cancellation Policy.",
  },
];
