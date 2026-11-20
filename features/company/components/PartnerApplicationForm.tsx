
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type PartnerType =
  | "VENUE_PARTNER"
  | "EVENT_HOST"
  | "CITY_PARTNER";

interface PartnerFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  city: string;
  partnerType: PartnerType;
  message: string;
}

const initialData: PartnerFormData = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  city: "",
  partnerType: "VENUE_PARTNER",
  message: "",
};

const inputClass =
  "w-full min-w-0 rounded-lg border border-[#e2d5cc] bg-white px-3.5 py-3 text-[14px] text-[#302a29] outline-none transition-colors placeholder:text-[#a69a93] focus:border-[#d0476b] focus:ring-2 focus:ring-[#d0476b]/10";

const labelClass =
  "mb-1.5 block text-[13px] font-semibold text-[#302a29]";

export default function PartnerApplicationForm() {
  const [form, setForm] = useState<PartnerFormData>(
    initialData,
  );

  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const updateField = <K extends keyof PartnerFormData>(
    field: K,
    value: PartnerFormData[K],
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
    setNotice("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.city.trim() ||
      !form.message.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setError("Please enter a valid phone number.");
      return;
    }

    // TODO: Connect to your actual partner application API.
    // Do not show a fake successful submission.
    setNotice(
      "The form is ready, but online applications are not enabled yet. Please contact us by email.",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[18px] border border-[#e9e0d9] bg-white p-5 shadow-[0_10px_30px_rgba(38,22,25,0.04)] sm:p-7"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="partner-name" className={labelClass}>
            Your name
          </label>
          <input
            id="partner-name"
            type="text"
            autoComplete="name"
            required
            placeholder="Full name"
            value={form.fullName}
            onChange={(e) =>
              updateField("fullName", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Business */}
        <div>
          <label htmlFor="partner-business" className={labelClass}>
            Business / brand name
          </label>
          <input
            id="partner-business"
            type="text"
            placeholder="Optional"
            value={form.businessName}
            onChange={(e) =>
              updateField("businessName", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="partner-email" className={labelClass}>
            Email
          </label>
          <input
            id="partner-email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="partner-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="partner-phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+91"
            value={form.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="partner-city" className={labelClass}>
            City
          </label>
          <input
            id="partner-city"
            type="text"
            required
            placeholder="e.g. Pune"
            value={form.city}
            onChange={(e) =>
              updateField("city", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Partner type */}
        <div>
          <label htmlFor="partner-type" className={labelClass}>
            Partner type
          </label>
          <select
            id="partner-type"
            value={form.partnerType}
            onChange={(e) =>
              updateField(
                "partnerType",
                e.target.value as PartnerType,
              )
            }
            className={inputClass}
          >
            <option value="VENUE_PARTNER">
              Venue partner
            </option>
            <option value="EVENT_HOST">
              Event host
            </option>
            <option value="CITY_PARTNER">
              City partner
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="partner-message" className={labelClass}>
            Tell us about you
          </label>
          <textarea
            id="partner-message"
            rows={4}
            required
            placeholder="Your venue or experience, capacity, and why you'd be a great Welvors partner."
            value={form.message}
            onChange={(e) =>
              updateField("message", e.target.value)
            }
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-[13px] text-red-600">
          {error}
        </p>
      )}

      {notice && (
        <p role="status" className="mt-4 text-[13px] text-[#685f5b]">
          {notice}
          {" "}
          <a
            href="mailto:info@infynod.com"
            className="font-medium text-[#d20853] underline"
          >
            Email us
          </a>
        </p>
      )}

      <button
        type="submit"
        className="mt-6 w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#d0476b] to-[#bd2057] px-5 py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Submit application
      </button>

      <p className="mt-4 text-center text-[12px] leading-relaxed text-[#958b85]">
        By submitting, you agree that Welvors may contact you
        about this application. See our{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-[#d20853] underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
