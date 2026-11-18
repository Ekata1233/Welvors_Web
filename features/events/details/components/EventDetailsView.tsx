import EventAfterExperience from "../sections/EventAfterMeet";
import EventBeforeYouGo from "../sections/EventBeforeYouGo";
import EventExperience from "../sections/EventExperience";
import EventFAQs from "../sections/EventFAQs";
import EventHero from "../sections/EventHero";
import EventHighlights from "../sections/EventHighlights";
import EventHost from "../sections/EventHost";
import EventInclusions from "../sections/EventInclusions";
import EventMeeting from "../sections/EventMeetingPoint";
import EventOverview from "../sections/EventOverview";
import EventParticipants from "../sections/EventParticipants";
import EventReviews from "../sections/EventReviews";
import EventSafety from "../sections/EventSafetyDetails";
import EventWhyJoin from "../sections/EventWhyJoin";
import EventRecommendations from "../sections/RelatedEvents";

import type { EventDetails } from "../types/event-details.types";

type EventDetailsViewProps = {
  event: EventDetails;
};

export default function EventDetailsView({
  event,
}: EventDetailsViewProps) {
  return (
    <div className="min-h-screen w-full bg-[#FDFDFC]">

      {/* Full Width Hero */}

      <EventHero event={event} />

      {/* Main Event Details Container */}

      <div className="mx-auto w-full max-w-[1280px] space-y-7 px-4 pt-4 pb-8 md:px-8">

        {/* Event Overview */}
<EventOverview/>
        {/* Trending Banner */}

        {/* Why Join This Event */}
<EventWhyJoin/>
        {/* Your Experience Step by Step */}
<EventExperience/>
        {/* After The Event */}
<EventAfterExperience/>
        {/* Everything Included */}
<EventInclusions/>
        {/* Who's Joining */}
<EventParticipants/>
        {/* Meet Your Event Host */}
<EventHost/>
        {/* Meeting Point */}
<EventMeeting/>
        {/* Before You Go */}
<EventBeforeYouGo/>
        {/* Event Highlights */}
<EventHighlights/>
        {/* Safety Details */}
<EventSafety/>
        {/* Event Reviews */}
<EventReviews/>
        {/* FAQs and Policies */}
<EventFAQs/>
        {/* Related Events */}
<EventRecommendations/>
      </div>

      {/* Fixed Bottom Booking Bar */}

    </div>
  );
}