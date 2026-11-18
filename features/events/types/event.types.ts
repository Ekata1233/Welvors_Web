export type EventFilters = {
  when: string;
  budget: string;
  type: string;
  sortBy: string;
};

export type EventCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
};

export type TrendingEvent = {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  category: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  spotsLeft: number;
  availabilityLabel?: string;
  isFavourite?: boolean;
};

export type Getaway = {
  id: string;
  title: string;
  image: string;
  date: string;
  duration: string;
  durationIcon?: string;
  route: string[];
  pickupDetails: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  spotsLeft: number;
  includes: string[];
  isFavourite?: boolean;
};

export type NearbyEvent = {
  id: string;
  title: string;
  image: string;
  badge: string;
  badgeType: "verified" | "urgent";
  date: string;
  time: string;
  duration: string;
  venue: string;
  distance: number;
  transportDetails: string;
  guestDetails: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  isFavourite?: boolean;
};