import type {
  EventHostDetails,
  EventOrganizerDetails,
} from "../types/event-details.types";

const DUMMY_IMAGE =
  "https://ik.imagekit.io/r0vb3de74/user-photos/upload_1794982915019_q9XzUtqnL.jpg?updatedAt=1794982920481";

export const EVENT_HOST: EventHostDetails = {
  id: "host-1",
  fullName: "Aditya Rao",
  profilePhoto: DUMMY_IMAGE,
  designation: "Lead host",
  hostedEvents: 32,
  rating: 4.8,
  languages: ["Hindi", "English", "Marathi"],
};

export const EVENT_ORGANIZER: EventOrganizerDetails = {
  id: "organizer-1",
  name: "The Social Club",
  logo: DUMMY_IMAGE,
  isVerified: true,
  totalEvents: 96,
  rating: 4.7,
};