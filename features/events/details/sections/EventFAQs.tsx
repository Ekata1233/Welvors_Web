"use client";

import { useState } from "react";

import EventAccordion from "../components/EventAccordion";
import { EVENT_FAQS, EVENT_POLICIES } from "../constants/event-details.constants";



export default function EventFAQs() {
  const [activeFAQ, setActiveFAQ] =
    useState<string | null>(null);

  const [activePolicy, setActivePolicy] =
    useState<string | null>(null);

  /* ================= FAQ TOGGLE ================= */

  const handleFAQToggle = (id: string) => {
    setActiveFAQ((previous) =>
      previous === id ? null : id
    );
  };

  /* ================= POLICY TOGGLE ================= */

  const handlePolicyToggle = (id: string) => {
    setActivePolicy((previous) =>
      previous === id ? null : id
    );
  };

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <h2 className="mb-4 text-[20px] leading-[26px] font-bold text-[#202020]">

        FAQs &amp; Event Policies

      </h2>

      {/* ================= FAQ MAIN CARD ================= */}

      <div className="overflow-hidden rounded-[24px] border border-[#EAE6E2] bg-white p-[5px] shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)]">

        {EVENT_FAQS.map((faq, index) => (
          <div key={faq.id}>

            <EventAccordion
              id={faq.id}
              title={faq.question}
              description={faq.answer}
              isOpen={activeFAQ === faq.id}
              onToggle={() =>
                handleFAQToggle(faq.id)
              }
            />

            {/* FAQ Divider */}

            {index !== EVENT_FAQS.length - 1 && (
              <div className="mx-[14px] h-px bg-[#EFECE8]" />
            )}

          </div>
        ))}

      </div>

      {/* ================= EVENT POLICIES HEADING ================= */}

      <h3 className="mt-5 mb-3 text-[17px] leading-[23px] font-bold text-[#202020]">

        Event Policies

      </h3>

      {/* ================= EVENT POLICIES ================= */}

      <div className="space-y-[10px]">

        {EVENT_POLICIES.map((policy) => (
          <div
            key={policy.id}
            className="overflow-hidden rounded-[17px] border border-[#EAE6E2] bg-white p-[3px] shadow-[0_3px_10px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_5px_14px_rgba(0,0,0,0.06)]"
          >

            <EventAccordion
              id={policy.id}
              icon={policy.icon}
              title={policy.title}
              description={policy.description}
              isOpen={activePolicy === policy.id}
              onToggle={() =>
                handlePolicyToggle(policy.id)
              }
            />

          </div>
        ))}

      </div>

    </section>
  );
}