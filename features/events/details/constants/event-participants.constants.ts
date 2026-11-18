import type {
  EventParticipant,
  EventSeatAvailability,
} from "../types/event-details.types";

const DUMMY_IMAGE =
  "https://ik.imagekit.io/r0vb3de74/events/gallery/1788534320484-1-undefined_MNJFIzTvM.png?updatedAt=1793171156087";

export const EVENT_PARTICIPANTS: EventParticipant[] =
  Array.from({ length: 18 }, (_, index) => ({
    id: String(index + 1),
    name: `Participant ${index + 1}`,
    profilePhoto: DUMMY_IMAGE,
    isVerified: true,
    isHidden: [3, 7, 11, 15].includes(index),
  }));

export const EVENT_SEAT_AVAILABILITY: EventSeatAvailability[] = [
  {
    gender: "WOMEN",
    totalSeats: 15,
    bookedSeats: 9,
    waitlistCount: 0,
  },
  {
    gender: "MEN",
    totalSeats: 15,
    bookedSeats: 15,
    waitlistCount: 4,
  },
];