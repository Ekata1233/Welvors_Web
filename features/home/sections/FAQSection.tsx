
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

/* ========================================================
   FAQ DATA
   ======================================================== */

const FAQS = [
  {
    id: 1,
    question: "Is Welvors for casual dating?",
    answer:
      "Welvors is designed for meaningful connections and intentional dating. Meet people who share your relationship goals, values and interests.",
  },
  {
    id: 2,
    question: "How long does verification take?",
    answer:
      "Verification time depends on the type of verification and the information submitted. You can track your verification status directly in the Welvors app.",
  },
  {
    id: 3,
    question: "Who can see my photos?",
    answer:
      "Photo visibility depends on your profile privacy settings. You can manage your privacy preferences within the Welvors app.",
  },
  {
    id: 4,
    question: "Can NRIs use Welvors?",
    answer:
      "Please contact our support team to confirm availability in your country and the applicable registration requirements.",
  },
];

/* ========================================================
   FAQ SECTION
   ======================================================== */

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId((previous) => (previous === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">

        {/* Section Heading */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#ce426a] sm:text-[13px]">
            FAQ
          </p>

          <h2 className="mt-3 font-serif text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#211c1d] sm:text-[44px] lg:text-[52px]">
            Quick answers.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-[#6a6260] sm:text-[18px] lg:text-[20px]">
            More at{" "}
            <a
              href="mailto:support@welvors.com"
              className="transition-colors hover:text-[#ce426a]"
            >
              support@welvors.com
            </a>
          </p>
        </div>

        {/* FAQ Container */}
<div className="mt-8 w-full rounded-[22px] border border-[#eee7e4] bg-white px-4 py-2 sm:mt-10 sm:rounded-[24px] sm:px-6">
          {FAQS.map((faq, index) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className={
                  index !== FAQS.length - 1
                    ? "border-b border-[#eee7e4]"
                    : ""
                }
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex min-h-[58px] w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[14px] font-semibold leading-relaxed text-[#211c1d] sm:text-[16px]">
                    {faq.question}
                  </span>

                  <Plus
                    size={19}
                    strokeWidth={1.6}
                    className={`shrink-0 text-[#958d89] transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 text-[#ce426a]"
                        : "rotate-0"
                    }`}
                  />
                </button>

                {/* Animated Answer */}
                <div
                  id={`faq-answer-${faq.id}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-6 text-[14px] leading-[1.8] text-[#756d69] sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
