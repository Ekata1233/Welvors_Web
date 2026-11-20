"use client";

import { useState } from "react";
import { X, Loader2, Wallet } from "lucide-react";
import axios from "axios";

import {
  createWalletOrder,
  verifyWalletPayment,
} from "../services/walletPayment.service";

import type {
  RazorpayOptions,
  RazorpayPaymentResponse,
} from "../types/razorpay";

interface AddMoneyModalProps {
   open: boolean;
  onClose: () => void;
  getToken: () => string | null;
  onPaymentSuccess?: () => void | Promise<void>;
}

const QUICK_AMOUNTS = [100, 200, 500, 1000, 2000, 5000, 10000, 50000];

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ??
      error.message ??
      "Payment request failed"
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    if (existing) {
      existing.addEventListener(
        "load",
        () => resolve(Boolean(window.Razorpay)),
        { once: true }
      );

      existing.addEventListener(
        "error",
        () => resolve(false),
        { once: true }
      );

      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

export default function AddMoneyModal({
  open,
  onClose,
  getToken,
  onPaymentSuccess,
}: AddMoneyModalProps) {
  const [amount, setAmount] = useState("297");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "IDLE" | "VERIFYING" | "SUCCESS"
  >("IDLE");

  if (!open) return null;

  const handlePayment = async () => {
     const token = getToken();

  if (!token) {
    setError("Please log in to add money.");
    return;
  }

    const numericAmount = Number(amount);

    if (
      !Number.isFinite(numericAmount) ||
      !Number.isInteger(numericAmount) ||
      numericAmount <= 0
    ) {
      setError("Please enter a valid whole rupee amount.");
      return;
    }

    if (!token) {
      setError("Please log in to add money.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const loaded = await loadRazorpayScript();

      if (!loaded || !window.Razorpay) {
        throw new Error(
          "Unable to load Razorpay checkout."
        );
      }

      /* 1. Create order */

      const orderResponse = await createWalletOrder(
        numericAmount,
        token
      );

      if (orderResponse.success === false) {
        throw new Error(
          orderResponse.message ??
            "Unable to create payment order."
        );
      }

      const orderData =
        orderResponse.data ??
        orderResponse.order ??
        orderResponse;

      const orderId =
        orderData.razorpay_order_id ??
        orderData.orderId ??
        orderData.id;

      if (
        typeof orderId !== "string" ||
        !orderId.startsWith("order_")
      ) {
        throw new Error(
          "Invalid Razorpay order ID returned by API."
        );
      }

      const razorpayKey =
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!razorpayKey) {
        throw new Error(
          "Razorpay public key is not configured."
        );
      }

      /* 2. Open Razorpay */

      const options: RazorpayOptions = {
        key: razorpayKey,

        // Razorpay expects amount in paise.
        // Prefer the server-returned amount when available.
        amount:
          typeof orderData.amount === "number"
            ? orderData.amount
            : numericAmount * 100,

        currency:
          typeof orderData.currency === "string"
            ? orderData.currency
            : "INR",

        name: "Welvors",

        description: "Add money to Welvors Wallet",

        order_id: orderId,

        theme: {
          color: "#d7446b",
        },

        handler: async (
          response: RazorpayPaymentResponse
        ) => {
          setStatus("VERIFYING");
          setLoading(true);

          try {
            /* 3. Verify payment */

            const verifyResponse =
              await verifyWalletPayment(
                {
                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_signature:
                    response.razorpay_signature,
                },
                token
              );

            if (verifyResponse.success !== true) {
              throw new Error(
                verifyResponse.message ??
                  "Payment verification was not confirmed."
              );
            }

            setStatus("SUCCESS");

            await onPaymentSuccess?.();
          } catch (verifyError) {
            setError(
              getErrorMessage(verifyError) +
                " If money was deducted, check your wallet before retrying."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on(
        "payment.failed",
        (failure: unknown) => {
          const failureMessage =
            typeof failure === "object" &&
            failure !== null &&
            "error" in failure
              ? "Payment failed. Please try again."
              : "Payment failed.";

          setError(failureMessage);
          setLoading(false);
        }
      );

      razorpay.open();
      setLoading(false);
    } catch (paymentError) {
      setError(getErrorMessage(paymentError));
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (loading || status === "VERIFYING") return;

    setError("");
    setStatus("IDLE");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-money-title"
        className="w-full max-w-[420px] rounded-[24px] bg-white p-5 shadow-2xl sm:p-6"
      >
        <div className="flex items-center justify-between">
          <h2
            id="add-money-title"
            className="font-serif text-[26px] font-bold text-[#302929]"
          >
            Add money
          </h2>

          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3f0]"
          >
            <X size={18} />
          </button>
        </div>

        {status === "SUCCESS" ? (
          <div className="py-7 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[30px]">
              ✓
            </div>

            <h3 className="mt-4 text-[21px] font-bold text-[#292525]">
              Payment successful
            </h3>

            <p className="mt-2 text-[13px] text-[#827772]">
              Your payment has been verified.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full rounded-full bg-[#d7446b] py-3 font-bold text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="mt-2 text-[13px] leading-6 text-[#827772]">
              Add coins to your Welvors wallet securely
              using Razorpay.
            </p>

            <div className="mt-6 grid grid-cols-4 gap-2">
              {QUICK_AMOUNTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    setAmount(String(value));
                    setError("");
                  }}
                  className={`rounded-[12px] border px-2 py-3 text-[12px] font-bold transition ${
                    amount === String(value)
                      ? "border-[#d7446b] bg-[#fff0f4] text-[#d7446b]"
                      : "border-[#e9e1dc] text-[#554c48] hover:border-[#d7446b]"
                  }`}
                >
                  ₹{value}
                </button>
              ))}
            </div>

            <label
              htmlFor="wallet-amount"
              className="mt-6 block text-[12px] font-bold text-[#514844]"
            >
              Enter amount
            </label>

            <div className="mt-2 flex items-center rounded-[13px] border border-[#e9e1dc] px-4">
              <span className="text-[20px] font-bold text-[#302929]">
                ₹
              </span>

              <input
                id="wallet-amount"
                type="number"
                min="1"
                step="1"
                value={amount}
                disabled={loading}
                onChange={(event) => {
                  setAmount(event.target.value);
                  setError("");
                }}
                className="h-[52px] w-full bg-transparent px-3 text-[20px] font-bold text-[#302929] outline-none"
                placeholder="Enter amount"
              />
            </div>

            <div className="mt-5 flex items-center justify-between rounded-[13px] bg-[#f8f5f2] p-4">
              <div className="flex items-center gap-2">
                <Wallet
                  size={18}
                  className="text-[#d7446b]"
                />

                <span className="text-[12px] text-[#665e5a]">
                  Coins you will receive
                </span>
              </div>

              <span className="text-[14px] font-bold text-[#302929]">
                {Number(amount) > 0
                  ? Number(amount).toLocaleString("en-IN")
                  : 0}{" "}
                coins
              </span>
            </div>

            {error && (
              <p
                role="alert"
                className="mt-4 rounded-[10px] bg-red-50 px-3 py-3 text-[12px] text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="button"
              disabled={loading}
              onClick={handlePayment}
              className="mt-6 flex h-[49px] w-full items-center justify-center gap-2 rounded-full bg-[#d7446b] text-[13px] font-bold text-white transition hover:bg-[#bd365d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                  {status === "VERIFYING"
                    ? "Verifying payment..."
                    : "Processing..."}
                </>
              ) : (
                <>
                  Proceed to pay ₹
                  {Number(amount) > 0
                    ? Number(amount).toLocaleString("en-IN")
                    : 0}
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[11px] text-[#99908b]">
              Secure payment powered by Razorpay
            </p>
          </>
        )}
      </div>
    </div>
  );
}
