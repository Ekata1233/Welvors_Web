import {
  Gift,
  Heart,
  Sparkles,
  UsersRound,
  Wallet,
} from "lucide-react";

export default function ReferralRewardVisual() {
  return (
    <div className="relative mt-4 flex flex-col items-center justify-center overflow-hidden rounded-[24px] px-3 py-3 sm:mt-5 sm:px-4 lg:py-4">

      {/* Illustration */}
<div className="relative mx-auto aspect-[1.8/1] w-full max-w-[300px] sm:max-w-[340px]">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f9d9e3]/60 blur-[45px]" />

        {/* Outer circle */}
        <div className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#eab1c2]" />

        {/* Inner circle */}
        <div className="absolute left-1/2 top-1/2 aspect-square w-[43%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#fbe7ed]" />

        {/* Main gift */}
        <div className="absolute left-1/2 top-1/2 flex aspect-square w-[29%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30%] bg-gradient-to-br from-[#ed789b] to-[#cb345e] text-white shadow-[0_20px_45px_rgba(207,60,103,0.28)]">

          <Gift
            strokeWidth={1.5}
            className="h-[65%] w-[65%]"
          />

        </div>

        {/* Friend joined reward */}
        <div className="absolute left-[2%] top-[10%] -rotate-6 animate-[bounce_4s_ease-in-out_infinite] rounded-xl border border-[#f1dce3] bg-white px-3 py-2 shadow-lg sm:px-5 sm:py-3">

          <p className="text-lg font-bold text-[#d13f69] sm:text-2xl">
            +₹50
          </p>

          <p className="mt-1 text-[10px] text-[#897b7e] sm:text-xs">
            Friend joined!
          </p>

        </div>

        {/* Plan purchase reward */}
        <div className="absolute bottom-[7%] right-0 rotate-6 animate-[bounce_5s_ease-in-out_infinite] rounded-xl border border-[#d7eadf] bg-white px-3 py-2 shadow-lg sm:px-5 sm:py-3">

          <p className="text-lg font-bold text-[#28a36c] sm:text-2xl">
            +₹300
          </p>

          <p className="mt-1 text-[10px] text-[#897b7e] sm:text-xs">
            Plan purchased
          </p>

        </div>

        {/* Friends icon */}
        <div className="absolute bottom-[12%] left-[8%] flex h-11 w-11 -rotate-12 items-center justify-center rounded-2xl border-2 border-white bg-[#e0eee3] text-[#609975] shadow-md sm:h-14 sm:w-14">

          <UsersRound size={25} strokeWidth={1.7} />

        </div>

        {/* Floating heart */}
        <div className="absolute right-[12%] top-[9%] rotate-12 animate-[bounce_3.5s_ease-in-out_infinite] text-[#dc6287]">

          <Heart
            size={32}
            fill="#dc6287"
            strokeWidth={1}
          />

        </div>

        {/* Decorative sparkles */}
        <Sparkles
          size={22}
          className="absolute left-[32%] top-[2%] text-[#e5a0b5]"
        />

        <Sparkles
          size={18}
          className="absolute right-[18%] top-[44%] text-[#e5a0b5]"
        />

        <Sparkles
          size={20}
          className="absolute bottom-[2%] left-[38%] text-[#e5a0b5]"
        />

      </div>

      {/* Content */}
      <div className="relative mt-2 text-center">

       <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#f0d5de] bg-[#fff3f6] px-3 py-1.5 text-[11px] font-medium text-[#cc4169] sm:text-[12px]">
          Good things grow{" "}
          <span className="font-normal text-[#cf4169] italic">
            together.
          </span>
        </div>

        <p className="mx-auto mt-3 max-w-[340px] text-[13px] leading-relaxed text-[#897c7c] sm:text-[15px]">
          More friends. More meaningful connections.
          More rewards.
        </p>

        {/* Wallet information */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#f0d5de] bg-[#fff3f6] px-4 py-2 text-[11px] font-medium text-[#cc4169] sm:text-[13px]">

          <Wallet size={16} strokeWidth={1.8} />

          Rewards in your Welvors wallet

        </div>

      </div>

    </div>
  );
}