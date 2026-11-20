import { Suspense } from "react";
import LegalPage from "@/features/information/components/LegalPage";
import InformationSkeleton from "@/features/information/components/InformationSkeleton";

export default function Page() {
  return (
    <Suspense fallback={<InformationSkeleton />}>
      <LegalPage
        pageType="CHILD_SAFETY_STANDARDS"
        badge="Child Safety"
      />
    </Suspense>
  );
}