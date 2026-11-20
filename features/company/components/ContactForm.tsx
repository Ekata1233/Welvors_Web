
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type ContactTopic =
  | "General enquiry"
  | "Member support"
  | "Privacy & data"
  | "Partnerships"
  | "Careers"
  | "Other";

interface ContactFormData {
  fullName: string;
  email: string;
  topic: ContactTopic;
  message: string;
}

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  topic: "General enquiry",
  message: "",
};

const inputClass =
  "w-full min-w-0 rounded-lg border border-[#e2d5cc] bg-white px-3.5 py-3 text-[14px] text-[#302a29] outline-none transition-colors placeholder:text-[#a69a93] focus:border-[#d0476b] focus:ring-2 focus:ring-[#d0476b]/10";

const labelClass =
  "mb-1.5 block text-[13px] font-semibold text-[#302a29]";

export default function ContactForm() {
  const [form, setForm] =
    useState<ContactFormData>(initialForm);

  const [error, setError] = useState("");

  const updateField = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const subject = encodeURIComponent(
      `Welvors Contact: ${form.topic}`,
    );

    const body = encodeURIComponent(
      `Name: ${form.fullName}\n` +
      `Email: ${form.email}\n` +
      `Topic: ${form.topic}\n\n` +
      `Message:\n${form.message}`,
    );

    const mailtoUrl =
      `mailto:support@welvors.com?subject=${subject}&body=${body}`;

    // Opens the user's email application.
    // This does not submit to a backend.
    window.open(mailtoUrl, "_self");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[18px] border border-[#e9e0d9] bg-white p-5 shadow-[0_10px_30px_rgba(38,22,25,0.04)] sm:p-7"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
        {/* Full name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Your name
          </label>

          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            value={form.fullName}
            onChange={(event) =>
              updateField("fullName", event.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>

          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Topic */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-topic" className={labelClass}>
            Topic
          </label>

          <select
            id="contact-topic"
            value={form.topic}
            onChange={(event) =>
              updateField(
                "topic",
                event.target.value as ContactTopic,
              )
            }
            className={inputClass}
          >
            <option value="General enquiry">
              General enquiry
            </option>
            <option value="Member support">
              Member support
            </option>
            <option value="Privacy & data">
              Privacy &amp; data
            </option>
            <option value="Partnerships">
              Partnerships
            </option>
            <option value="Careers">
              Careers
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>

          <textarea
            id="contact-message"
            rows={4}
            required
            placeholder="How can we help?"
            value={form.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-4 text-[13px] text-red-600"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#d0476b] to-[#bd2057] px-5 py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Send message
      </button>

      <p className="mt-4 text-center text-[12px] leading-relaxed text-[#958b85]">
        By sending, you agree that Welvors may contact you
        about this message. See our{" "}
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
