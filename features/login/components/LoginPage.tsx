
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Heart } from "lucide-react";

import LoginForm from "./LoginForm";
import OtpVerification from "./OtpVerification";
import BasicInfoForm from "./BasicInfoForm";

import { logoutUser } from "../services/login.service";

type LoginStep =
  | "phone"
  | "otp"
  | "checking"
  | "basic-info"
  | "completed";

export default function LoginPage() {
  const router = useRouter();

  const [step, setStep] = useState<LoginStep>("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  const redirectTimer = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  /* ---------------------------------------------------------------------- */
  /* OTP SENT                                                               */
  /* ---------------------------------------------------------------------- */

  const handleOtpSent = (phone: string) => {
    setPhoneNumber(phone);
    setStep("otp");
  };

  /* ---------------------------------------------------------------------- */
  /* OTP VERIFIED                                                           */
  /* ---------------------------------------------------------------------- */

//

  const handleVerified = async (
    isExistingUser: boolean
  ) => {
    if (isExistingUser) {
      // Existing user -> Direct Home.
      setStep("checking");
      router.replace("/");
      return;
    }

    // New user -> Basic Info.
    setStep("basic-info");
  };

  /* ---------------------------------------------------------------------- */
  /* BASIC INFO COMPLETED                                                   */
  /* ---------------------------------------------------------------------- */

  const handleBasicInfoCompleted = () => {
    setStep("completed");

    redirectTimer.current = setTimeout(() => {
      router.replace("/");
    }, 1200);
  };

  /* ---------------------------------------------------------------------- */
  /* START AGAIN                                                            */
  /* ---------------------------------------------------------------------- */

  const handleStartAgain = () => {
    if (redirectTimer.current) {
      clearTimeout(redirectTimer.current);
    }

    logoutUser();

    setPhoneNumber("");
    setStep("phone");
  };

  /* ---------------------------------------------------------------------- */
  /* CLEANUP                                                                */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    return () => {
      if (redirectTimer.current) {
        clearTimeout(redirectTimer.current);
      }
    };
  }, []);

  /* ---------------------------------------------------------------------- */
  /* UI                                                                     */
  /* ---------------------------------------------------------------------- */

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
            <span className="italic text-[#d7446b]">
              begin.
            </span>
          </h1>

          <p className="mt-6 max-w-[430px] text-[16px] leading-8 text-[#85776f]">
            Meet genuine people, discover meaningful connections,
            and start your journey with Welvors.
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

            {step === "phone" ? (
              <LoginForm
                onOtpSent={handleOtpSent}
              />
            ) : step === "otp" ? (
              <OtpVerification
                phoneNumber={phoneNumber}
                onVerified={handleVerified}
                onBack={() => setStep("phone")}
              />
            ) : step === "checking" ? (
              <div
                role="status"
                className="py-12 text-center"
              >
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#f7dce5] border-t-[#d7446b]" />

                <h2 className="mt-5 text-lg font-bold text-[#302929]">
                  Login Successful!
                </h2>

                <p className="mt-2 text-sm text-[#85776f]">
                  Redirecting to home page...
                </p>

                <button
                  type="button"
                  onClick={() => router.replace("/")}
                  className="mt-5 text-sm font-semibold text-[#d7446b]"
                >
                  Go to Home
                </button>
              </div>
            ) : step === "basic-info" ? (
              <BasicInfoForm
                onCompleted={handleBasicInfoCompleted}
              />
            ) : (
              <div
                role="status"
                className="py-10 text-center"
              >
                <CheckCircle2
                  size={48}
                  className="mx-auto text-green-600"
                />

                <h2 className="mt-5 text-2xl font-bold text-[#302929]">
                  Profile Saved Successfully!
                </h2>

                <p className="mt-3 text-sm text-[#85776f]">
                  Redirecting to home page...
                </p>

                <button
                  type="button"
                  onClick={() => router.replace("/")}
                  className="mt-5 text-sm font-semibold text-[#d7446b]"
                >
                  Go to Home
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
