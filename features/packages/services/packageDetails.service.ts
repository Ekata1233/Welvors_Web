import axios from "axios";

export type PackageId = "PREMIUM" | "VIP" | "VIP_ELITE";
export interface PackageDetailsApi {
  id: string;
  name: PackageId;
  slug: string;
  tagline: string | null;
  badgeLabel: string | null;
  discoveryPool: string | null;
  visibilityRule: string | null;
  description: string | null;
  isPopular: boolean;
  active: boolean;
  sortOrder: number;
   prices: PackagePriceApi[];
  limits: PackageFeatureLimitApi[];
}
export interface PackagePriceApi {
  id: string;
  billingCycle: string;
  months: number;
  price: number;
  originalPrice: number;
  discountPercent: number;
  isHighlighted: boolean;
  active: boolean;
}


export interface PackageFeatureLimitApi {
  id: string;
  featureId: string;

  feature: {
    id: string;
    code: string;
    title: string;
    category: string;
    description: string | null;
  };

  enabled: boolean;
  unlimited: boolean;
  limit: number | null;
  resetPeriod: string;
}
interface PackageDetailsResponse {
  success: boolean;
  data: PackageDetailsApi;
  message?: string;
}


export async function getPackageDetails(
  packageId: string
): Promise<PackageDetailsApi> {
  const response = await axios.get<PackageDetailsResponse>(
    `https://dev-api.welvors.com/api/package/get/${encodeURIComponent(packageId)}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const result = response.data;

  if (!result.success || !result.data) {
    throw new Error(
      result.message || "Invalid package details API response"
    );
  }

  return result.data;
}