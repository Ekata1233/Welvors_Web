export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;

  handler: (
    response: RazorpayPaymentResponse
  ) => void | Promise<void>;

  theme?: {
    color?: string;
  };

  modal?: {
    ondismiss?: () => void;
  };

  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
}

export interface RazorpayInstance {
  open: () => void;
  on: (
    event: string,
    callback: (response: unknown) => void
  ) => void;
}

declare global {
  interface Window {
    Razorpay?: new (
      options: RazorpayOptions
    ) => RazorpayInstance;
  }
}