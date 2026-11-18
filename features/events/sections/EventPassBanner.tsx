import Link from "next/link";

export default function EventPassBanner() {
  return (
    <Link
      href="/events/pass"
      className="group relative flex w-full min-w-0 cursor-pointer items-center justify-between gap-3 overflow-hidden rounded-[26px] bg-[linear-gradient(15deg,#29166B_0%,#4327A3_45%,#8962F5_100%)] px-4 py-4 sm:px-5"
    >

      {/* Left Section */}
      <div className="flex min-w-0 items-center gap-3 md:gap-5">

        {/* Ticket Icon */}
        <div className="flex shrink-0 items-center justify-center text-[28px] leading-none md:w-[46px] md:text-[34px]">
          🎫
        </div>

        {/* Pass Details */}
        <div className="min-w-0">

          {/* Label */}
          <p className="text-[11px] leading-[16px] font-bold tracking-[1.2px] text-white/75 transition-colors duration-200 group-hover:text-[#EE4D78] md:text-[13px]">
            EVENTS PASS
          </p>

          {/* Heading */}
          <h2 className="mt-[2px] text-[15px] leading-[21px] font-bold text-white transition-colors duration-200 group-hover:text-[#EE4D78] md:text-[19px] md:leading-[25px]">
            ₹0 fees · 15% off every event
          </h2>

          {/* Description */}
          <p className="mt-[2px] text-[12px] leading-[18px] font-normal text-white/85 transition-colors duration-200 group-hover:text-[#EE4D78] md:text-[15px] md:leading-[20px]">
            1 free meetup a month · from ₹333/mo
          </p>

        </div>

      </div>

      {/* Get Pass Button */}
      <span className="inline-flex h-[36px] shrink-0 items-center justify-center rounded-[14px] bg-white px-3 text-[12px] font-bold whitespace-nowrap text-[#43278E] md:h-[42px] md:rounded-[16px] md:px-[15px] md:text-[15px]">
        Get Pass
      </span>

    </Link>
  );
}