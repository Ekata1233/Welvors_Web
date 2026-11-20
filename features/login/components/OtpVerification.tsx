
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import {
  verifyLoginOtp,
  sendLoginOtp,
  getApiErrorMessage,
} from "../services/login.service";

interface OtpVerificationProps {
  phoneNumber: string;
  onVerified: (isExistingUser: boolean) => void | Promise<void>;
  onBack: () => void;
}

export default function OtpVerification({
  phoneNumber,
  onVerified,
  onBack,
}: OtpVerificationProps) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const result = await verifyLoginOtp({
        phoneNumber,
        otp,
      });

      await onVerified(result.isExistingUser);
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setMessage("");

    try {
      setResending(true);

      await sendLoginOtp({ phoneNumber });

      setOtp("");
      setMessage("A new OTP has been sent.");
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-[12px] font-semibold text-[#85776f] hover:text-[#d7446b]"
      >
        <ArrowLeft size={16} />
        Change number
      </button>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#d7446b]">
        <ShieldCheck size={28} />
      </div>

      <h2 className="font-serif text-[30px] font-bold text-[#302929] sm:text-[36px]">
        Verify your number
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#85776f]">
        Enter the 6-digit verification code sent to{" "}
        <span className="font-bold text-[#302929]">
          {phoneNumber}
        </span>
      </p>

      <form onSubmit={handleVerify} className="mt-8">
        <label
          htmlFor="otp"
          className="mb-2 block text-[12px] font-bold text-[#3d3533]"
        >
          Verification code
        </label>

        <input
          id="otp"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          value={otp}
          onChange={(e) => {
            setOtp(
              e.target.value.replace(/\D/g, "").slice(0, 6)
            );
            setError("");
          }}
          placeholder="000000"
          className="h-[60px] w-full rounded-[14px] border border-[#eae3de] bg-white px-4 text-center text-[25px] font-bold tracking-[12px] text-[#302929] outline-none focus:border-[#d7446b]"
          required
        />

        {error && (
          <p
            role="alert"
            className="mt-3 text-[12px] text-red-600"
          >
            {error}
          </p>
        )}

        {message && (
          <p
            role="status"
            className="mt-3 text-[12px] text-green-700"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#ed5079] to-[#bc315f] px-5 py-4 text-[14px] font-bold text-white hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify & Continue"}

          {!loading && <ArrowRight size={18} />}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[12px] text-[#85776f]">
          Didn&apos;t receive the code?
        </p>

        <button
          type="button"
          onClick={handleResend}
          disabled={resending}
          className="mt-2 text-[12px] font-bold text-[#d7446b] disabled:opacity-50"
        >
          {resending ? "Sending..." : "Resend OTP"}
        </button>
      </div>
    </div>
  );
}
