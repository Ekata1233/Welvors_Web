
"use client";

import { useState } from "react";
import { ArrowRight, Smartphone } from "lucide-react";

import {
  sendLoginOtp,
  getApiErrorMessage,
} from "../services/login.service";

interface Props {
  onOtpSent: (phone: string) => void;
}

export default function LoginForm({ onOtpSent }: Props) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    const normalized = phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(normalized)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    const phoneNumber = `+91${normalized}`;

    try {
      setLoading(true);

      await sendLoginOtp({ phoneNumber });

      onOtpSent(phoneNumber);
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#d7446b]">
        <Smartphone size={26} />
      </div>

      <h2 className="font-serif text-[30px] font-bold text-[#302929] sm:text-[36px]">
        Welcome to Welvors
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#85776f]">
        Enter your mobile number to login or create your account.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <label
          htmlFor="login-phone"
          className="mb-2 block text-[12px] font-bold text-[#3d3533]"
        >
          Mobile number
        </label>

        <div className="flex overflow-hidden rounded-[14px] border border-[#eae3de] bg-white focus-within:border-[#d7446b]">
          <div className="flex items-center border-r border-[#eae3de] bg-[#fff8f9] px-4 text-[14px] font-bold text-[#302929]">
            🇮🇳 +91
          </div>

          <input
            id="login-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            value={phone}
            onChange={(e) => {
              setPhone(
                e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              );
              setError("");
            }}
            placeholder="Enter 10-digit number"
            className="h-[54px] min-w-0 flex-1 bg-transparent px-4 text-[14px] text-[#302929] outline-none"
            required
          />
        </div>

        {error && (
          <p
            role="alert"
            className="mt-3 text-[12px] text-red-600"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#ed5079] to-[#bc315f] px-5 py-4 text-[14px] font-bold text-white hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Sending OTP..." : "Continue"}
          {!loading && <ArrowRight size={18} />}
        </button>
      </form>

      <p className="mt-5 text-center text-[11px] leading-5 text-[#918680]">
        By continuing, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
}
