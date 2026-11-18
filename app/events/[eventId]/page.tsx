import type { Metadata } from "next";

import EventDetailsView from "@/features/events/details/components/EventDetailsView";

import {
  DUMMY_EVENT_DETAILS,
} from "@/features/events/details/constants/event-details.constants";

export const metadata: Metadata = {
  title: "Event Details | Welvors",
  description:
    "Explore real-world experiences, meet new people and join Welvors events.",
};

type EventDetailsPageProps = {
  params: Promise<{
    eventId: string;
  }>;
};

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  return (
    <EventDetailsContent params={params} />
  );
}

async function EventDetailsContent({
  params,
}: EventDetailsPageProps) {
  const { eventId } = await params;

  const event = {
    ...DUMMY_EVENT_DETAILS,
    id: eventId,
  };

  return <EventDetailsView event={event} />;
}