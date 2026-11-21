import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://dev-api.welvors.com/api";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface CreateWalletOrderPayload {
  purpose: "WALLET";
  amount: number;
}

export interface RazorpayOrderData {
  id?: string;
  orderId?: string;
  razorpay_order_id?: string;
  amount?: number;
  currency?: string;
  key?: string;
  keyId?: string;
  [key: string]: unknown;
}

export interface CreateWalletOrderResponse {
  success?: boolean;
  message?: string;
  data?: RazorpayOrderData;
  order?: RazorpayOrderData;
  id?: string;
  orderId?: string;
  razorpay_order_id?: string;
  amount?: number;
  currency?: string;
  [key: string]: unknown;
}

export interface VerifyWalletPaymentPayload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface VerifyWalletPaymentResponse {
  success?: boolean;
  message?: string;
  data?: unknown;
  [key: string]: unknown;
}

/* -------------------------------------------------------------------------- */
/*                                API CLIENT                                  */
/* -------------------------------------------------------------------------- */

const walletApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

/* -------------------------------------------------------------------------- */
/*                                CREATE ORDER                                */
/* -------------------------------------------------------------------------- */

export const createWalletOrder = async (
  amount: number,
  token: string
): Promise<CreateWalletOrderResponse> => {
  const payload: CreateWalletOrderPayload = {
    purpose: "WALLET",
    amount,
  };

  const response =
    await walletApi.post<CreateWalletOrderResponse>(
      "/payment/create-order",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                               VERIFY PAYMENT                               */
/* -------------------------------------------------------------------------- */

export const verifyWalletPayment = async (
  payload: VerifyWalletPaymentPayload,
  token: string
): Promise<VerifyWalletPaymentResponse> => {
  const response =
    await walletApi.post<VerifyWalletPaymentResponse>(
      "/payments/verify",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};