export type EventDetails = {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];

  price: number;
  currency: string;

  isFavourite: boolean;

  date: string;
  time: string;
  duration: string;

  venue: string;
  city: string;

  totalGoing: number;
  seatsLeft: number;

  womenSeatsLeft: number;
  menSeatsLeft: number;
};

export type EventParticipant = {
  id: string;
  name: string;
  profilePhoto: string | null;
  isVerified: boolean;
  isHidden: boolean;
};

export type EventSeatAvailability = {
  gender: "MEN" | "WOMEN";
  totalSeats: number;
  bookedSeats: number;
  waitlistCount: number;
};

export type EventHostDetails = {
  id: string;
  fullName: string;
  profilePhoto: string | null;
  designation: string;
  hostedEvents: number;
  rating: number;
  languages: string[];
};

export type EventOrganizerDetails = {
  id: string;
  name: string;
  logo: string | null;
  isVerified: boolean;
  totalEvents: number;
  rating: number;
};

export type EventLocationInfo = {
  icon: string;
  title: string;
  description: string;
};

export type EventLocationDetails = {
  venueName: string;
  address: string;
  mapImage: string;
  travelDuration: string;
  latitude: number;
  longitude: number;
  information: EventLocationInfo[];
};

export type EventPreparationItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  background: string;
};

export type EventCalendarDetails = {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
};

export type EventHighlightPhoto = {
  id: string;
  imageUrl: string;
  alt: string;
};

export type EventSafetyItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  background: string;
};

export type EventSafetyAction =
  | "SOS"
  | "SHARE_LOCATION"
  | "REPORT"
  | "SUPPORT";

  export type EventReview = {
  id: string;
  name: string;
  profilePhoto: string;
  eventPhoto: string;
  rating: number;
  review: string;
};

export type EventRatingDistribution = {
  stars: number;
  percentage: number;
};

export type EventRatingSummary = {
  averageRating: number;
  totalReviews: number;
  distribution: EventRatingDistribution[];
};

export type EventFAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type EventPolicyItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type RecommendedEvent = {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  location: string;
  price: number;
};