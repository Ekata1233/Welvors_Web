import { Suspense } from "react";
import type { Metadata } from "next";

import LegalPage from "@/features/information/components/LegalPage";
import InformationSkeleton from "@/features/information/components/InformationSkeleton";

export const metadata: Metadata = {
  title: "Privacy Policy | Welvors",
  description:
    "Learn how Welvors protects your privacy and personal information.",
};

export default function Page() {
  return (
    <Suspense fallback={<InformationSkeleton />}>
      <LegalPage
        pageType="PRIVACY_POLICY"
        badge="Privacy"
      />
    </Suspense>
  );
}