import type { EventDetails } from "../types/event-details.types";

const DUMMY_IMAGE =
  "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087";

export const DUMMY_EVENT_DETAILS: EventDetails = {
  id: "sunset-singles-trek",

  title: "Sunset Singles Trek",

  category: "Singles Event 💗",

  description:
    "Explore the hills, meet new people, and maybe find someone special.",

  images: Array(8).fill(DUMMY_IMAGE),

  price: 499,
  currency: "INR",

  isFavourite: false,

  date: "Sat, 14 Nov",
  time: "7 AM – 2 PM",
  duration: "7 hours",

  venue: "Sinhagad Fort",
  city: "Pune",

  totalGoing: 24,
  seatsLeft: 6,

  womenSeatsLeft: 6,
  menSeatsLeft: 0,
};



export const EVENT_EXPERIENCE_STEPS = [
  {
    id: 1,
    title: "Meetup & Check-in",
    time: "7:00 AM",
    image: DUMMY_IMAGE,
    description:
      "Scan your ticket QR at the base village, collect your name tag and water, and meet your host. A quick safety brief follows — arrive 10 min early.",
    tags: [
      "🎟️ Ticket QR",
      "🏷️ Name tag",
      "💧 Water",
    ],
  },
  {
    id: 2,
    title: "Icebreaker Games",
    time: "7:30 AM",
    image: DUMMY_IMAGE,
    description:
      "Get comfortable with everyone through fun icebreaker games hosted by your event host.",
    tags: [
      "🧊 Icebreakers",
      "👥 Meet new people",
      "🎮 Fun games",
    ],
  },
  {
    id: 3,
    title: "Trek Begins",
    time: "8:00 AM",
    image: DUMMY_IMAGE,
    description:
      "Begin your guided trek through scenic mountain trails with your group.",
    tags: [
      "🥾 Trekking",
      "⛰️ Mountain views",
      "🌿 Nature",
    ],
  },
  {
    id: 4,
    title: "Group Challenges",
    time: "10:30 AM",
    image: DUMMY_IMAGE,
    description:
      "Participate in exciting group challenges and team activities designed to bring everyone closer.",
    tags: [
      "🏆 Challenges",
      "🤝 Teamwork",
      "🎯 Activities",
    ],
  },
  {
    id: 5,
    title: "Social Connect",
    time: "12:00 PM",
    image: DUMMY_IMAGE,
    description:
      "Relax, enjoy conversations and spend quality time getting to know your fellow trekkers.",
    tags: [
      "💗 Connections",
      "💬 Conversations",
      "📸 Photos",
    ],
  },
  {
    id: 6,
    title: "Wrap Up",
    time: "2:00 PM",
    image: DUMMY_IMAGE,
    description:
      "Capture your final group memories, say goodbye and conclude your wonderful trekking experience.",
    tags: [
      "📸 Group photos",
      "👋 Goodbye",
      "💗 Memories",
    ],
  },
];

import type {
  EventPreparationItem,
  EventCalendarDetails,
} from "../types/event-details.types";

export const EVENT_PREPARATION_ITEMS: EventPreparationItem[] = [
  {
    id: 1,
    icon: "👕",
    title: "Dress code",
    description:
      "Comfy trek wear, grip shoes · something pink for the colour game",
    background: "#FDE8EF",
  },
  {
    id: 2,
    icon: "🎒",
    title: "Bring",
    description:
      "1L water, original ID, cap · breakfast is on us",
    background: "#FFF1DD",
  },
  {
    id: 3,
    icon: "💬",
    title: "Group chat opens Fri 7 AM",
    description:
      "Host shares meet-up point & ice-breaker teams",
    background: "#E7F1FF",
  },
  {
    id: 4,
    icon: "🔔",
    title: "2 reminders",
    description:
      "Night before at 8 PM · 1 hr before meet-up",
    background: "#F1E9FF",
  },
];

export const EVENT_CALENDAR: EventCalendarDetails = {
  title: "Sunset Singles Trek",

  description:
    "Explore the hills, meet new people, and maybe find someone special.",

  location:
    "Sinhagad Fort, Pune, Maharashtra",

  startDate: "20261114T013000Z",

  endDate: "20261114T083000Z",
};

import type {
  EventHighlightPhoto,
} from "../types/event-details.types";


export const EVENT_HIGHLIGHT_PHOTOS: EventHighlightPhoto[] =
  Array.from({ length: 17 }, (_, index) => ({
    id: String(index + 1),
    imageUrl: DUMMY_IMAGE,
    alt: `Sinhagad trek highlight ${index + 1}`,
  }));


  import type {
  EventSafetyItem,
} from "../types/event-details.types";

export const EVENT_SAFETY_ITEMS: EventSafetyItem[] = [
  {
    id: 1,
    icon: "🛡️",
    title: "Verified Organizer",
    description: "Background-verified event partner",
    background: "#E7F5EC",
  },
  {
    id: 2,
    icon: "🪪",
    title: "Every guest ID-verified",
    description: "Only verified members can join",
    background: "#E8F0FF",
  },
  {
    id: 3,
    icon: "📍",
    title: "Live location for family",
    description: "Share your location with loved ones",
    background: "#FDE4E9",
  },
  {
    id: 4,
    icon: "🙋",
    title: "Host on site all day",
    description: "Support throughout the experience",
    background: "#FFF1DC",
  },
];

import type {
  EventReview,
  EventRatingSummary,
} from "../types/event-details.types";


export const EVENT_RATING_SUMMARY: EventRatingSummary = {
  averageRating: 4.8,

  totalReviews: 126,

  distribution: [
    {
      stars: 5,
      percentage: 82,
    },
    {
      stars: 4,
      percentage: 13,
    },
    {
      stars: 3,
      percentage: 4,
    },
    {
      stars: 2,
      percentage: 1,
    },
    {
      stars: 1,
      percentage: 0,
    },
  ],
};

export const EVENT_REVIEWS: EventReview[] = [
  {
    id: "1",
    name: "Priya",
    profilePhoto: DUMMY_IMAGE,
    eventPhoto: DUMMY_IMAGE,
    rating: 5,
    review:
      "Came alone, left with 4 new friends and one very good coffee date 😅",
  },
  {
    id: "2",
    name: "Siddharth",
    profilePhoto: DUMMY_IMAGE,
    eventPhoto: DUMMY_IMAGE,
    rating: 5,
    review:
      "The icebreakers actually worked. Zero awkwardness, great host.",
  },
  {
    id: "3",
    name: "Neha",
    profilePhoto: DUMMY_IMAGE,
    eventPhoto: DUMMY_IMAGE,
    rating: 5,
    review:
      "Felt safe the whole time. Everyone was verified and respectful.",
  },
];

import type {
  EventFAQItem,
  EventPolicyItem,
} from "../types/event-details.types";

export const EVENT_FAQS: EventFAQItem[] = [
  {
    id: "faq-1",
    question: "Can I attend alone?",
    answer:
      "Absolutely! You can join alone and meet new people through fun activities, icebreakers and group experiences.",
  },
  {
    id: "faq-2",
    question: "Is this event for singles?",
    answer:
      "Yes! This experience is designed for singles who want to meet new people and build meaningful connections.",
  },
  {
    id: "faq-3",
    question: "Will I be matched with someone?",
    answer:
      "After the event, you can express interest in someone through the Welvors app. If the interest is mutual, a match is created and you can start chatting.",
  },
  {
    id: "faq-4",
    question: "What should I carry?",
    answer:
      "Carry your original ID, 1L water, comfortable trekking shoes, a cap and any personal essentials.",
  },
  {
    id: "faq-5",
    question: "What is the age limit?",
    answer:
      "Participants must meet the age eligibility criteria specified for this event.",
  },
];

export const EVENT_POLICIES: EventPolicyItem[] = [
  {
    id: "policy-1",
    icon: "📅",
    title: "Cancellation Policy",
    description:
      "Cancellation eligibility and applicable charges depend on the booking terms of this event.",
  },
  {
    id: "policy-2",
    icon: "💰",
    title: "Refund Policy",
    description:
      "Eligible refunds will be processed according to the applicable event refund policy.",
  },
  {
    id: "policy-3",
    icon: "🔄",
    title: "Rescheduling Policy",
    description:
      "If the event is rescheduled, registered participants will be notified with the updated event details.",
  },
  {
    id: "policy-4",
    icon: "📋",
    title: "Event Rules",
    description:
      "Carry valid identification, follow the host's instructions, respect other participants and maintain appropriate personal boundaries throughout the event.",
  },
];

import type {
  RecommendedEvent,
} from "../types/event-details.types";

export const RECOMMENDED_EVENTS: RecommendedEvent[] = [
  {
    id: "coffee-connections",
    title: "Coffee & Connections",
    imageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    date: "Sun, 15 Nov",
    location: "Koregaon Park, Pune",
    price: 299,
  },
  {
    id: "weekend-singles-getaway",
    title: "Weekend Singles Getaway",
    imageUrl:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    date: "21–22 Nov",
    location: "Lonavala",
    price: 3499,
  },
  {
    id: "sunset-social-meetup",
    title: "Sunset Social Meetup",
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    date: "Fri, 20 Nov",
    location: "Vetal Tekdi, Pune",
    price: 399,
  },
  {
    id: "singles-adventure-camp",
    title: "Singles Adventure Camp",
    imageUrl:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    date: "28–29 Nov",
    location: "Pawna Lake",
    price: 1799,
  },
];