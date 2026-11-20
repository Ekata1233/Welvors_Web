"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Heart } from "lucide-react";

import LoginForm from "./LoginForm";
import OtpVerification from "./OtpVerification";
import BasicInfoForm from "./BasicInfoForm";

import { getToken } from "../services/login.service";
import { useRouter } from "next/navigation";

type LoginStep = "phone" | "otp" | "basic-info" | "completed";

export default function LoginPage() {
  const [step, setStep] = useState<LoginStep>("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [initializing, setInitializing] = useState(true);

  const router = useRouter();
  const redirectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Read browser storage after the component mounts.
    const token = getToken();

    // State updates run in the async callback, avoiding
    // the synchronous set-state-in-effect lint warning.
    Promise.resolve().then(() => {
      setStep(token ? "basic-info" : "phone");
      setInitializing(false);
    });
  }, []);

  const handleOtpSent = (phone: string) => {
    setPhoneNumber(phone);
    setStep("otp");
  };

  const handleVerified = () => {
    setStep("basic-info");
  };

  const handleBasicInfoCompleted = () => {
    setStep("completed");

    redirectTimer.current = setTimeout(() => {
    router.replace("/");
  }, 2000);
  };

  useEffect(() => {
  return () => {
    if (redirectTimer.current) {
      clearTimeout(redirectTimer.current);
    }
  };
}, []);
  return (
    <main className="min-h-screen bg-[#f8f5f2]">
      <div className="mx-auto grid min-h-[calc(100vh-90px)] w-full max-w-[1200px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* LEFT CONTENT */}
        <div className="hidden lg:block">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f3d7df] bg-white px-4 py-2 text-[11px] font-bold text-[#d7446b]">
            <Heart size={15} fill="currentColor" />
            WELVORS
          </div>

          <h1 className="mt-7 font-serif text-[54px] font-bold leading-[1.13] text-[#302929]">
            Where meaningful
            <br />
            connections
            <br />
            <span className="italic text-[#d7446b]">begin.</span>
          </h1>

          <p className="mt-6 max-w-[430px] text-[16px] leading-8 text-[#85776f]">
            Meet genuine people, discover meaningful connections, and start your
            journey with Welvors.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Mobile number verification",
              "Create your personal profile",
              "Discover meaningful connections",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 text-[13px] font-semibold text-[#514844]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0f4] text-[#d7446b]">
                  <CheckCircle2 size={17} />
                </span>

                {text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full min-w-0">
          <div className="mx-auto w-full max-w-[480px] rounded-[24px] border border-[#eae3de] bg-white p-6 shadow-[0_16px_60px_rgba(64,40,47,0.06)] sm:p-9">
            {initializing ? (
              <div
                role="status"
                className="py-12 text-center text-[13px] text-[#85776f]"
              >
                Loading...
              </div>
            ) : step === "phone" ? (
              <LoginForm onOtpSent={handleOtpSent} />
            ) : step === "otp" ? (
              <OtpVerification
                phoneNumber={phoneNumber}
                onVerified={handleVerified}
                onBack={() => setStep("phone")}
              />
            ) : step === "basic-info" ? (
              <BasicInfoForm onCompleted={handleBasicInfoCompleted} />
            ) : (
  <div
    role="status"
    aria-live="polite"
    className="flex flex-col items-center justify-center py-10 text-center"
  >
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf8ef]">
      <CheckCircle2
        size={42}
        strokeWidth={2.5}
        className="text-[#22a55a]"
      />
    </div>

    <h2 className="mt-6 font-serif text-[28px] font-bold text-[#302929]">
      Profile Saved Successfully!
    </h2>

    <p className="mt-3 text-[13px] leading-6 text-[#85776f]">
      Your basic information has been saved successfully.
    </p>

    <p className="mt-4 text-[12px] font-semibold text-[#d7446b]">
      Redirecting to home page...
    </p>

    <div className="mt-5 h-1 w-32 overflow-hidden rounded-full bg-[#f7dce5]">
      <div className="h-full w-full animate-pulse rounded-full bg-[#d7446b]" />
    </div>
  </div>
)}
          </div>
        </div>
      </div>
    </main>
  );
}
