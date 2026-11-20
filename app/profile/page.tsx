
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Heart,
  Mail,
  Phone,
  Ruler,
  ShieldCheck,
  UserRound,
  RefreshCw,
} from "lucide-react";

import {
  isAuthenticated,
  getUserDetails,
  getApiErrorMessage,
  type UserDetails,
} from "@/features/login/services/login.service";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const fetchProfile = async () => {
      if (!isAuthenticated()) {
        router.replace("/login");
        return;
      }

      try {
        const result = await getUserDetails();

        if (!cancelled) {
          setUser(result);
          setError("");
        }
      } catch (err) {
        if (!cancelled) {
          setError(getApiErrorMessage(err));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void fetchProfile();

    return () => {
      cancelled = true;
    };
  }, [router, reloadKey]);

  const formatDate = (value: string | null) => {
    if (!value) return "Not provided";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f5f2]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#f7dce5] border-t-[#D0476B]" />

          <p className="mt-4 text-sm text-[#85776f]">
            Loading your profile...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-[#f8f5f2] px-5">
        <p
          role="alert"
          className="text-center text-sm text-red-600"
        >
          {error}
        </p>

        <button
          type="button"
          onClick={() => {
            setLoading(true);
            setReloadKey((prev) => prev + 1);
          }}
          className="flex items-center gap-2 rounded-full bg-[#D0476B] px-6 py-3 font-semibold text-white"
        >
          <RefreshCw size={17} />
          Retry
        </button>
      </main>
    );
  }

  if (!user) return null;

  const fields = [
    {
      label: "Full Name",
      value: user.fullName,
      icon: UserRound,
    },
    {
      label: "Email Address",
      value: user.email,
      icon: Mail,
    },
    {
      label: "Mobile Number",
      value: user.phoneNumber,
      icon: Phone,
    },
    {
      label: "Date of Birth",
      value: formatDate(user.birthDate),
      icon: CalendarDays,
    },
    {
      label: "Height",
      value:
        user.height !== null
          ? `${user.height} cm`
          : null,
      icon: Ruler,
    },
    {
      label: "Gender",
      value: user.gender,
      icon: UserRound,
    },
    {
      label: "Gender Option",
      value: user.genderOption,
      icon: Heart,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f2] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-[900px]">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mb-6 flex items-center gap-2 text-[13px] font-semibold text-[#85776f] transition hover:text-[#D0476B]"
        >
          <ArrowLeft size={17} />
          Back to Home
        </button>

        <div className="overflow-hidden rounded-[24px] border border-[#eae3de] bg-white shadow-[0_16px_60px_rgba(64,40,47,0.06)]">
          <div className="bg-gradient-to-r from-[#fff0f4] to-[#fff9f5] px-6 py-9 sm:px-10">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#f8dce5] text-[#D0476B] shadow-sm">
                <UserRound size={38} />
              </div>

              <div className="min-w-0">
                <h1 className="break-words font-serif text-[28px] font-bold text-[#302929] sm:text-[34px]">
                  {user.fullName || "Welvors User"}
                </h1>

                <p className="mt-1 break-all text-[13px] text-[#85776f]">
                  {user.email || "No email provided"}
                </p>

                {user.basicInfoCompleted && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#D0476B]">
                    <ShieldCheck size={15} />
                    Basic Profile Completed
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <h2 className="font-serif text-[24px] font-bold text-[#302929]">
              My Profile
            </h2>

            <p className="mt-2 text-[13px] text-[#85776f]">
              Your personal information saved with Welvors.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fields.map((field) => {
                const Icon = field.icon;

                return (
                  <div
                    key={field.label}
                    className="rounded-[15px] border border-[#eee7e3] bg-[#fffdfc] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        size={17}
                        className="text-[#D0476B]"
                      />

                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#918680]">
                        {field.label}
                      </span>
                    </div>

                    <p className="mt-3 break-words text-[14px] font-semibold text-[#302929]">
                      {field.value || "Not provided"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#eee7e3] bg-[#fffdfc] px-6 py-5 sm:px-10">
            <p className="text-[12px] text-[#918680]">
              Your profile information is retrieved from your
              Welvors account.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
