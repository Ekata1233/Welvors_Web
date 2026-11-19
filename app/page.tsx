import type { Metadata } from "next";

import HeroSection from "@/features/home/sections/HeroSection";
import HeroFeatureTicker from "@/features/home/components/HeroFeatureTicker";
import WhyWelvorsSection from "@/features/home/sections/WhyWelvorsSection";
import HowItWorksSection from "@/features/home/sections/HowItWorksSection";
import VerificationSection from "@/features/home/sections/VerificationSection";
import SafeFaceSection from "@/features/home/sections/SafeFaceSection";
import AICompatibilitySection from "@/features/home/sections/AICompatibilitySection";
import DatePlansSection from "@/features/home/sections/DatePlansSection";
import WelvorsEventsSection from "@/features/home/sections/WelvorsEventsSection";
import StandOutSection from "@/features/home/sections/StandOutSection";
import ForeverLoveSection from "@/features/home/sections/ForeverLoveSection";
import SafetyPrivacySection from "@/features/home/sections/SafetyPrivacySection";
import ReferEarnSection from "@/features/home/sections/ReferEarnSection";
import FAQSection from "@/features/home/sections/FAQSection";
import DownloadAppSection from "@/features/home/sections/DownloadAppSection";

export const metadata: Metadata = {
  title: "Welvors | Real People. Real Intent. Real Forever.",
  description:
    "Meet verified people, discover meaningful connections and experience real dates with Welvors.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#FDFCFC]">
      <HeroSection />

      <HeroFeatureTicker />

      <WhyWelvorsSection />

      <HowItWorksSection />

      <VerificationSection />
      <SafeFaceSection />
      <AICompatibilitySection />
      <DatePlansSection/>
      <WelvorsEventsSection/>
      <StandOutSection/>
      <ForeverLoveSection/>
      <ReferEarnSection/>
      <SafetyPrivacySection/>
      <FAQSection/>
      <DownloadAppSection/>
      
      
    </div>
  );
}
