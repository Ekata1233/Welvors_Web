import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://dev-api.welvors.com/api";

export type WalletFilter = "ALL" | "IN" | "OUT";

export interface WalletInfo {
  balance: number;
  totalCredit: number;
  currency: string;
  formattedBalance: string;
  formattedTotalCredit: string;
}

export interface DatePlanInfo {
  balance: number;
  totalDatePlan: number;
  purchasedDatePlan: number;
  label: string;
}

export interface WalletTransactionApi {
  id: string;
  type: string;
  transactionId: string;
  source: string;
  status: string;
  direction: "IN" | "OUT";
  title: string;
  description: string;
  amount: number;
  formattedAmount: string;
  balanceBefore: number;
  balanceAfter: number;
  referenceId: string | null;
  createdAt: string;
}

export interface WalletData {
  wallet: WalletInfo;
  datePlans: DatePlanInfo;
  filter: WalletFilter;
  source: string | null;
  transactions: WalletTransactionApi[];
}

export interface WalletApiResponse {
  success: boolean;
  message: string;
  data: WalletData;
}

export async function purchasePackageWithWallet(priceId: string, token: string) {
  const { data } = await axios.post<{ success?: boolean; message?: string }>(
    `${API_BASE_URL}/user/package/wallet/purchase`,
    { priceId, paymentMethod: "WALLET" },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (data?.success === false) {
    throw new Error(data.message || "Wallet purchase failed.");
  }
}

export const getMyWallet = async (
  token: string,
  filter: WalletFilter = "ALL"
): Promise<WalletData> => {
  const response = await axios.get<WalletApiResponse>(
    `${API_BASE_URL}/user/my-wallet`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: filter === "ALL" ? undefined : { filter },
    }
  );

  if (!response.data.success) {
    throw new Error(
      response.data.message || "Failed to fetch wallet"
    );
  }

  return response.data.data;
};
