export type PackageCardName = "PREMIUM" | "VIP" | "VIP_ELITE";

export interface PackageCardFeature {
  title: string;
  description: string | null;
  limit: number | null;
  resetPeriod: string;
}

export interface PackageCardApi {
  id: string;
  name: PackageCardName;
  slug: string;
  badgeLabel: string | null;
  discoveryPool: string | null;
  active: boolean;
  price: number;
  originalPrice: number;
  features: PackageCardFeature[];
  categoryCount: Record<string, number>;
  featureSummary: string;
}

interface PackageCardsResponse {
  success: boolean;
  data: PackageCardApi[];
  message?: string;
}

export async function getPackageCards(): Promise<PackageCardApi[]> {
  const response = await fetch(
    "https://api.welvors.com/api/package/get/cards",
    {
      next: { revalidate: 300 },
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch packages: ${response.status}`);
  }

  const result: PackageCardsResponse = await response.json();

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error("Invalid package cards API response");
  }

  return result.data;
}