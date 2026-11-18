import type { EventCategory, EventFilters, Getaway, NearbyEvent, TrendingEvent } from "../types/event.types";

export const DEFAULT_EVENT_FILTERS: EventFilters = {
  when: "any",
  budget: "any",
  type: "all",
  sortBy: "recommended",
};

export const EVENT_FILTER_GROUPS = [
  {
    key: "when",
    label: "WHEN",
    options: [
      { label: "Any day", value: "any" },
      { label: "Weekend", value: "weekend" },
      { label: "Weekdays", value: "weekdays" },
    ],
  },
  {
    key: "budget",
    label: "BUDGET",
    options: [
      { label: "Any", value: "any" },
      { label: "Under ₹1,000", value: "under_1000" },
      { label: "₹1,000–3,000", value: "1000_3000" },
      { label: "₹3,000+", value: "above_3000" },
    ],
  },
  {
    key: "type",
    label: "TYPE",
    options: [
      { label: "All", value: "all" },
      { label: "Events", value: "events" },
      { label: "Trips & getaways", value: "trips" },
    ],
  },
  {
    key: "sortBy",
    label: "SORT BY",
    options: [
      { label: "Recommended", value: "recommended" },
      { label: "Price: low to high", value: "price_asc" },
      { label: "Price: high to low", value: "price_desc" },
    ],
  },
] satisfies {
  key: keyof EventFilters;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}[];

export const DEFAULT_EVENT_CITY = "Mumbai";

export const POPULAR_EVENT_CITIES = [
  {
    id: "mumbai",
    name: "Mumbai",
    icon: "🌆",
  },
  {
    id: "pune",
    name: "Pune",
    icon: "🏛️",
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    icon: "🌳",
  },
  {
    id: "delhi",
    name: "Delhi NCR",
    icon: "🕌",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    icon: "🏰",
  },
  {
    id: "chennai",
    name: "Chennai",
    icon: "🏖️",
  },
  {
    id: "nashik",
    name: "Nashik",
    icon: "⛰️",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    icon: "🏙️",
  },
];


const DUMMY_CATEGORY_IMAGE =
  "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087";
export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: "singles-meetup",
    name: "Singles Meetup",
    description:
      "Speed dating, singles parties, and curated meetups.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "💗",
  },
  {
    id: "trekking",
    name: "Trekking",
    description:
      "Explore mountains and trails with new people.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "🥾",
  },
  {
    id: "travel",
    name: "Travel & Trips",
    description:
      "Discover new destinations and travel together.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "✈️",
  },
  {
    id: "couples",
    name: "Couples",
    description:
      "Romantic getaways and experiences for two.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "💕",
  },
  {
    id: "nightlife",
    name: "Parties & Nightlife",
    description:
      "Music, dancing, parties, and exciting nights.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "🎉",
  },
  {
    id: "creative",
    name: "Creative Activities",
    description:
      "Art, pottery, workshops, and creative experiences.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "🎨",
  },
  {
    id: "camping",
    name: "Camping & Adventure",
    description:
      "Camping, bonfires, and outdoor adventures.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "🏕️",
  },
  {
    id: "games",
    name: "Games & Fun",
    description:
      "Board games, gaming nights, bowling, and more.",
    image: DUMMY_CATEGORY_IMAGE,
    icon: "🎮",
  },
];



export const TRENDING_EVENTS: TrendingEvent[] = [
  {
    id: "rooftop-singles-night",
    title: "Rooftop Singles Night",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1792151976991-0-undefined_99cxcXDhu.png?updatedAt=1793171156302",
    date: "SAT 19",
    time: "7–10 PM",
    duration: "3 hrs",
    location: "The Rooftop Lounge, Bandra",
    category: "SIGNATURE MIXER",
    price: 1250,
    originalPrice: 1549,
    discountPercentage: 19,
    spotsLeft: 8,
    availabilityLabel: "spots left",
    isFavourite: false,
  },
  {
    id: "speed-dating",
    title: "Speed Dating · 25–32",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1792151976991-0-undefined_99cxcXDhu.png?updatedAt=1793171156302",
    date: "SUN 20",
    time: "6–8 PM",
    duration: "2 hrs",
    location: "Cafe Zoe, Lower Parel",
    category: "SPEED DATES",
    price: 999,
    originalPrice: 1099,
    discountPercentage: 9,
    spotsLeft: 12,
    availabilityLabel: "spots left",
    isFavourite: false,
  },
  {
    id: "candlelight-supper",
    title: "Candlelight Supper Club",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1792151976991-0-undefined_99cxcXDhu.png?updatedAt=1793171156302",
    date: "FRI 25",
    time: "8–11 PM",
    duration: "3 hrs",
    location: "Masque, Mahalaxmi",
    category: "DINNER DATES",
    price: 2400,
    originalPrice: 2999,
    discountPercentage: 20,
    spotsLeft: 6,
    availabilityLabel: "seats left",
    isFavourite: false,
  },
];

export const WEEKEND_GETAWAYS: Getaway[] = [
  {
    id: "rajmachi-fireflies-trek",
    title: "Rajmachi Fireflies Trek",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    date: "26–27 Oct",
    duration: "2D · 1N",
    durationIcon: "▣",
    route: ["Mumbai", "Lonavala", "Mumbai"],
    pickupDetails: "Pickup 5 AM · Dadar",
    price: 3499,
    originalPrice: 3899,
    discountPercentage: 10,
    spotsLeft: 7,
    includes: ["Camp stay", "Meals", "Bus"],
    isFavourite: true,
  },
  {
    id: "goa-singles-retreat",
    title: "Goa Singles Retreat",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    date: "8–11 Nov",
    duration: "4D · 3N",
    durationIcon: "▣",
    route: ["Mumbai", "North Goa", "Mumbai"],
    pickupDetails: "Overnight bus · Fri 8 PM",
    price: 12999,
    originalPrice: 14449,
    discountPercentage: 10,
    spotsLeft: 6,
    includes: ["Villa", "Brunch", "Beach party"],
    isFavourite: false,
  },
  {
    id: "sunrise-at-kalsubai",
    title: "Sunrise at Kalsubai",
    image: "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    date: "Sat, 2 Nov",
    duration: "9 PM – 11 AM · 14 hrs",
    durationIcon: "🌙",
    route: ["Mumbai", "Kalsubai", "Mumbai"],
    pickupDetails: "Pickup 9 PM · Dadar",
    price: 1899,
    originalPrice: 2099,
    discountPercentage: 10,
    spotsLeft: 9,
    includes: ["Guide", "Breakfast", "Bus"],
    isFavourite: false,
  },
];

export const NEARBY_EVENTS: NearbyEvent[] = [
  {
    id: "pottery-pinot",
    title: "Pottery & Pinot for Singles",
    image:
      "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    badge: "✓ Verified only",
    badgeType: "verified",
    date: "Thu, 24 Oct",
    time: "7:30–9:30 PM",
    duration: "2 hrs",
    venue: "Clay Studio, Khar",
    distance: 3.2,
    transportDetails: "Nearest station within 10 min walk",
    guestDetails: "Verified guests · age 24–32 · host on site",
    price: 1499,
    originalPrice: 1649,
    discountPercentage: 9,
    isFavourite: false,
  },
  {
    id: "jazz-night",
    title: "Jazz Night Mixer",
    image:
      "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    badge: "🔥 Filling fast",
    badgeType: "urgent",
    date: "Fri, 25 Oct",
    time: "8–11 PM",
    duration: "3 hrs",
    venue: "The Piano Bar, Colaba",
    distance: 9,
    transportDetails: "Nearest station within 10 min walk",
    guestDetails: "Verified guests · age 25–33 · host on site",
    price: 1100,
    originalPrice: 1399,
    discountPercentage: 21,
    isFavourite: false,
  },
  {
    id: "book-lovers",
    title: "Book Lovers Speed Dates",
    image:
      "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    badge: "✓ Verified only",
    badgeType: "verified",
    date: "Sat, 26 Oct",
    time: "5–7 PM",
    duration: "2 hrs",
    venue: "Kitab Khana, Fort",
    distance: 8,
    transportDetails: "Nearest station within 10 min walk",
    guestDetails: "Verified guests · age 23–30 · host on site",
    price: 799,
    originalPrice: 899,
    discountPercentage: 11,
    isFavourite: false,
  },
  {
    id: "sunday-brunch",
    title: "Long-table Sunday Brunch",
    image:
      "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087",
    badge: "🔥 4 seats left",
    badgeType: "urgent",
    date: "Sun, 27 Oct",
    time: "1–4 PM",
    duration: "3 hrs",
    venue: "Bombay Canteen, Lower Parel",
    distance: 5,
    transportDetails: "Nearest station within 10 min walk",
    guestDetails: "Verified guests · age 25–34 · host on site",
    price: 1800,
    originalPrice: 2249,
    discountPercentage: 20,
    isFavourite: false,
  },
];