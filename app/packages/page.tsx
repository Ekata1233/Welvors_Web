import type { Metadata } from "next";

import PackagesPage from "@/features/packages/components/PackagesPage";
import { getPackageCards, PackageCardApi } from "@/features/packages/services/package.service";



export const metadata: Metadata = {
  title: "Packages | Welvors",
  description:
    "Explore Premium+, VIP and VIP Elite membership packages on Welvors.",
};

export default async function Page() {
  // Explicit TypeScript type
  let cards: PackageCardApi[] = [];

  try {
    cards = await getPackageCards();
  } catch (error) {
    console.error("Package cards API error:", error);
  }

  return <PackagesPage cards={cards} />;
}