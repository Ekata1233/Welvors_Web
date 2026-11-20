
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  UserRound,
} from "lucide-react";

import {
  updateBasicInfo,
  getApiErrorMessage,
} from "../services/login.service";

import {
  GENDER_OPTIONS,
  ORIENTATION_OPTIONS,
  type BasicInfoPayload,
  type Gender,
  type GenderOption,
} from "../types/login.types";

interface BasicInfoFormProps {
  onCompleted: () => void;
}

export default function BasicInfoForm({
  onCompleted,
}: BasicInfoFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [genderOption, setGenderOption] =
    useState<GenderOption | "">("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date();
  const maxBirthDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const inputClass =
    "h-[52px] w-full rounded-[13px] border border-[#eae3de] bg-white px-4 text-[13px] text-[#302929] outline-none focus:border-[#d7446b]";

  const labelClass =
    "mb-2 block text-[12px] font-bold text-[#3d3533]";

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!birthDate) {
      setError("Date of birth is required.");
      return;
    }

    if (birthDate > maxBirthDate) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    const parsedHeight = Number(height);

    if (
      !Number.isFinite(parsedHeight) ||
      parsedHeight <= 0
    ) {
      setError("Enter a valid height in centimeters.");
      return;
    }

    if (!gender) {
      setError("Please select your gender.");
      return;
    }

    if (!genderOption) {
      setError("Please select your gender option.");
      return;
    }

    const payload: BasicInfoPayload = {
      fullName: fullName.trim(),
      email: email.trim(),
      birth_date: birthDate,
      height: parsedHeight,
      gender,
      gender_option: genderOption,
    };

    try {
      setLoading(true);

      await updateBasicInfo(payload);

      onCompleted();
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f4] text-[#d7446b]">
        <UserRound size={27} />
      </div>

      <div className="mb-2 inline-flex rounded-full bg-[#fff0f4] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#d7446b]">
        Step 1 · Basic Information
      </div>

      <h2 className="mt-3 font-serif text-[30px] font-bold text-[#302929] sm:text-[36px]">
        Tell us about yourself
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#85776f]">
        Let&apos;s start with a few basic details to create your
        Welvors profile.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        {/* FULL NAME */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className={inputClass}
            required
          />
        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address *
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={inputClass}
            required
          />
        </div>

        {/* DOB */}
        <div>
          <label htmlFor="birthDate" className={labelClass}>
            Date of birth *
          </label>

          <div className="relative">
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={maxBirthDate}
              className={`${inputClass} pr-12`}
              required
            />

            <CalendarDays
              size={18}
              className="pointer-events-none absolute right-11 top-1/2 -translate-y-1/2 text-[#d7446b]"
            />
          </div>

          <p className="mt-1.5 text-[10px] text-[#918680]">
            Select your date of birth from the calendar.
          </p>
        </div>

        {/* HEIGHT */}
        <div>
          <label htmlFor="height" className={labelClass}>
            Height (cm) *
          </label>

          <input
            id="height"
            type="number"
            min="1"
            max="300"
            step="1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 170"
            className={inputClass}
            required
          />
        </div>

        {/* GENDER */}
        <div>
          <label htmlFor="gender" className={labelClass}>
            Gender *
          </label>

          <select
            id="gender"
            value={gender}
            onChange={(e) =>
              setGender(e.target.value as Gender | "")
            }
            className={inputClass}
            required
          >
            <option value="">Select gender</option>

            {GENDER_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* GENDER OPTION */}
        <div>
          <label htmlFor="genderOption" className={labelClass}>
            Gender option *
          </label>

          <select
            id="genderOption"
            value={genderOption}
            onChange={(e) =>
              setGenderOption(
                e.target.value as GenderOption | ""
              )
            }
            className={inputClass}
            required
          >
            <option value="">Select gender option</option>

            {ORIENTATION_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p role="alert" className="text-[12px] text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#ed5079] to-[#bc315f] px-5 py-4 text-[14px] font-bold text-white hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save & Continue"}

          {!loading && <ArrowRight size={18} />}
        </button>
      </form>
    </div>
  );
}
