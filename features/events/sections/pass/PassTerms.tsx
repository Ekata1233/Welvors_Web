import { EVENT_PASS_TERMS } from "../../constants/event-pass.constants";

export default function PassTerms() {
  return (
    <section
      aria-label="Event pass terms"
      className="w-full rounded-[22px] bg-[#F4F2EF] p-4"
    >
      <div className="space-y-[10px]">

        {EVENT_PASS_TERMS.map((term) => (
          <div
            key={term.text}
            className="flex items-start gap-[6px] text-[12px] leading-[18px] text-[#65615D] md:text-[13px]"
          >
            <span className="shrink-0">
              {term.icon}
            </span>

            <span>{term.text}</span>
          </div>
        ))}

      </div>
    </section>
  );
}