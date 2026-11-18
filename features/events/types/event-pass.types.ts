export type EventPassBillingCycle =
  | "MONTHLY"
  | "QUARTERLY"
  | "YEARLY";

export type EventPassBenefit = {
  id: string;
  icon: string;
  title: string;
  description: string;
  background: string;
};

export type EventPassPlan = {
  id: string;
  name: string;
  billingCycle: EventPassBillingCycle;
  price: number;
  monthlyPrice: number;
  months: number;
  description: string;
  badge?: string;
};