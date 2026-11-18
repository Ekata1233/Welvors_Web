import PassBenefitCard from "../../components/pass/PassBenefitCard";
import { EVENT_PASS_BENEFITS } from "../../constants/event-pass.constants";

export default function PassBenefits() {
  return (
    <section className="w-full min-w-0">

      <h2 className="mb-4 text-[22px] leading-[28px] font-bold text-[#202020]">
        What you get
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {EVENT_PASS_BENEFITS.map((benefit) => (
          <PassBenefitCard
            key={benefit.id}
            benefit={benefit}
          />
        ))}
      </div>

    </section>
  );
}