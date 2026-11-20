
"use client";
import WhyWelvorsTimeline from "../components/WhyWelvorsTimeline";
import WhyWelvorsCard from "../components/WhyWelvorsCard";
import WhyWelvorsDownload from "../components/WhyWelvorsDownload";

import {
  SWIPE_APP_STEPS,
  WELVORS_STEPS,
  WHY_WELVORS_FEATURES,
} from "../constants/why-welvors.constants";

/* ==========================================================
   WHY WELVORS SECTION
   ========================================================== */

export default function WhyWelvorsSection() {
  return (
    <section
      id="why-welvors"
      className="
        w-full
        scroll-mt-[90px]
        bg-white
        px-4
        pb-10
        pt-14
        sm:px-6
        sm:pt-20
        lg:px-8
        lg:pt-[100px]
      "
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* ==================================================
            SECTION HEADER
            ================================================== */}

        <div className="mb-8 lg:mb-10">

          <p
            className="
              mb-4
              text-[11px]
              font-bold
              uppercase
              tracking-[1.8px]
              text-[#cf4069]
              sm:text-xs
            "
          >
            Why Welvors
          </p>

          <h2
            className="
              font-serif
              text-[36px]
              font-medium
              leading-[1.08]
              tracking-[-1.5px]
              text-[#201c1d]
              sm:text-[48px]
              lg:text-[60px]
            "
          >
            Built for{" "}

            <em className="font-medium text-[#d0476b]">
              forever
            </em>

            ,

            <br />

            not for swiping.
          </h2>

        </div>

        {/* ==================================================
            COMPARISON TIMELINES
            ================================================== */}

        <div className="flex flex-col gap-3">

          <WhyWelvorsTimeline
            title="Swipe apps"
            description="Designed to keep you swiping"
            steps={SWIPE_APP_STEPS}
            variant="swipe"
          />

          <WhyWelvorsTimeline
            title="Welvors"
            description="Designed for real relationships"
            steps={WELVORS_STEPS}
            variant="welvors"
          />

        </div>

        {/* ==================================================
            FEATURE COMPARISON CARDS
            ================================================== */}

      

      </div>
    </section>
  );
}