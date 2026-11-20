export type PackageName = "PREMIUM" | "VIP" | "VIP_ELITE";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PackageFeature {
  title: string;
  description: string | null;
  limit: number | null;
  resetPeriod: string;
}

export interface PackageCard {
  id: string;
  name: PackageName;
  slug: string;
  badgeLabel: string | null;
  discoveryPool: string | null;
  active: boolean;
  price: number;
  originalPrice: number;
  features: PackageFeature[];
  categoryCount: Record<string, number>;
  featureSummary: string;
}

export interface PackagePrice {
  id: string;
  billingCycle: string;
  months: number;
  price: number;
  originalPrice: number;
  discountPercent: number;
  isHighlighted: boolean;
  active: boolean;
}

export interface PackageLimit {
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

export interface PackageDetails {
  id: string;
  name: PackageName;
  slug: string;
  tagline: string | null;
  badgeLabel: string | null;
  discoveryPool: string | null;
  visibilityRule: string | null;
  description: string | null;
  isPopular: boolean;
  active: boolean;
  sortOrder: number;
  prices: PackagePrice[];
  limits: PackageLimit[];
}