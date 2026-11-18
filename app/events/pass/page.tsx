import type { Metadata } from "next";

import EventPassMain from "@/features/events/EventPassMain";

export const metadata: Metadata = {
  title: "Events Pass | Welvors",
  description:
    "Go out more. Pay less. Meet better. Enjoy exclusive benefits, discounted events and free meetups with Welvors Events Pass.",
};

export default function EventPassPage() {
  return <EventPassMain />;
}