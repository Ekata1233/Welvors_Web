import axios from "axios";
import { getApiBaseUrl } from "@/lib/api";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface CreateWalletOrderPayload {
  purpose: "WALLET";
  amount: number;
}

interface CreatePackageOrderPayload {
  purpose: "PACKAGE";
  packagePriceId: string;
}

export interface RazorpayOrderData {
  razorpayOrderId?: string;
  razorpayKeyId?: string;
  id?: string;
  orderId?: string;
  razorpay_order_id?: string;
  amount?: number;
  currency?: string;
  key?: string;
  keyId?: string;
  [key: string]: unknown;
}

export interface CreateWalletOrderResponse extends RazorpayOrderData {
  success?: boolean;
  message?: string;
  data?: RazorpayOrderData;
  order?: RazorpayOrderData;
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
  baseURL: getApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

/* -------------------------------------------------------------------------- */
/*                                CREATE ORDER                                */
/* -------------------------------------------------------------------------- */

const createPaymentOrder = async (
  payload: CreateWalletOrderPayload | CreatePackageOrderPayload,
  token: string
): Promise<CreateWalletOrderResponse> => {
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

export const createWalletOrder = (amount: number, token: string) =>
  createPaymentOrder({ purpose: "WALLET", amount }, token);

export const createPackageOrder = (packagePriceId: string, token: string) =>
  createPaymentOrder({ purpose: "PACKAGE", packagePriceId }, token);

/* -------------------------------------------------------------------------- */
/*                               VERIFY PAYMENT                               */
/* -------------------------------------------------------------------------- */

export const verifyPayment = async (
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

export const verifyWalletPayment = verifyPayment;
