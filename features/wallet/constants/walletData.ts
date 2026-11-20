
export type TransactionType = "IN" | "OUT";

export interface WalletTransaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  icon: string;
  iconBackground: string;
}

export interface SpendOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export const WALLET_USER = {
  name: "jhjh",
  initial: "J",
};

export const WALLET_BALANCE = {
  amount: 3240,
  conversion: "1 coin = ₹1",
};

export const SPEND_OPTIONS: SpendOption[] = [
  {
    id: "packages",
    icon: "💎",
    title: "Packages",
    description: "Premium+, VIP, Elite",
    href: "/packages",
  },
  {
    id: "events",
    icon: "🎟️",
    title: "Events",
    description: "Mixers, treks, trips",
    href: "/events",
  },
  {
    id: "roses",
    icon: "🌹",
    title: "Roses",
    description: "From 50 coins",
  },
  {
    id: "compliments",
    icon: "💌",
    title: "Compliments",
    description: "From 80 coins",
  },
  {
    id: "gifts",
    icon: "🎁",
    title: "Gifts",
    description: "Delivered to them",
  },
  {
    id: "boosts",
    icon: "🚀",
    title: "Boosts",
    description: "Top profile for 30 min",
  },
];

export const WALLET_TRANSACTIONS: WalletTransaction[] = [
  {
    id: "1",
    title: "Gift received from Aanya",
    date: "Today · 2:14 PM",
    amount: 500,
    type: "IN",
    icon: "🎁",
    iconBackground: "bg-[#ffe7ee]",
  },
  {
    id: "2",
    title: "Date Plans topped up · 3 plans",
    date: "Today · 3:20 PM",
    amount: 270,
    type: "OUT",
    icon: "📋",
    iconBackground: "bg-[#fff3df]",
  },
  {
    id: "3",
    title: "Rose sent",
    date: "Today · 11:02 AM",
    amount: 50,
    type: "OUT",
    icon: "🌹",
    iconBackground: "bg-[#ffe7ee]",
  },
  {
    id: "4",
    title: "Refer & Earn · Rahul joined",
    date: "Yesterday · 6:40 PM",
    amount: 50,
    type: "IN",
    icon: "🎁",
    iconBackground: "bg-[#e5f5eb]",
  },
  {
    id: "5",
    title: "Money added · UPI",
    date: "2 days ago · 1:05 PM",
    amount: 2100,
    type: "IN",
    icon: "➕",
    iconBackground: "bg-[#e5f5eb]",
  },
  {
    id: "6",
    title: "Boost activated",
    date: "3 days ago",
    amount: 300,
    type: "OUT",
    icon: "🚀",
    iconBackground: "bg-[#fff3df]",
  },
  {
    id: "7",
    title: "Refer & Earn · Sneha bought VIP",
    date: "4 days ago",
    amount: 300,
    type: "IN",
    icon: "🎁",
    iconBackground: "bg-[#e5f5eb]",
  },
  {
    id: "8",
    title: "Compliment sent",
    date: "5 days ago",
    amount: 80,
    type: "OUT",
    icon: "💌",
    iconBackground: "bg-[#ffe7ee]",
  },
  {
    id: "9",
    title: "Withdrawal to bank",
    date: "1 week ago",
    amount: 1500,
    type: "OUT",
    icon: "⬇️",
    iconBackground: "bg-[#fdebea]",
  },
];
