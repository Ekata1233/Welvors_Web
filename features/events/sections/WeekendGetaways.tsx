import GetawayCard from "../components/GetawayCard";
import { WEEKEND_GETAWAYS } from "../constants/event.constants";

export default function WeekendGetaways() {
  return (
    <section className="w-full min-w-0 px-2 md:px-6">

      {/* Section Heading */}
      <div className="mb-4">

        <h2 className="text-[24px] leading-[30px] font-bold tracking-[-0.5px] text-[#202020]">
          Weekend getaways
        </h2>

        <p className="mt-[3px] text-[15px] leading-[20px] font-normal text-[#908B85]">
          Stay, meals & travel included — just show up
        </p>

      </div>

      {/* Weekend Getaway Cards */}
      <div
        className="
          grid
          grid-flow-col
          auto-cols-[90%]
          gap-4
          overflow-x-auto
          overscroll-x-contain
          snap-x
          snap-mandatory
          pb-6
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:auto-cols-[65%]
          md:auto-cols-[46%]
          xl:grid-flow-row
          xl:grid-cols-3
          xl:overflow-visible
          xl:snap-none
        "
      >
        {WEEKEND_GETAWAYS.map((getaway) => (
          <div
            key={getaway.id}
            className="min-w-0 snap-start"
          >
            <GetawayCard getaway={getaway} />
          </div>
        ))}
      </div>

    </section>
  );
}