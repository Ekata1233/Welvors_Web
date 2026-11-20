
"use client";

import { useState } from "react";
import { ArrowRight, UserRound } from "lucide-react";

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

interface Props {
  onCompleted: () => void;
}

export default function BasicInfoForm({
  onCompleted,
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [genderOption, setGenderOption] =
    useState<GenderOption | "">("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "mt-2 h-[52px] w-full rounded-[14px] border border-[#eae3de] bg-white px-4 text-[14px] text-[#302929] outline-none focus:border-[#d7446b]";

  const labelClass =
    "block text-[12px] font-bold text-[#3d3533]";

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    if (
      !fullName.trim() ||
      !email.trim() ||
      !birthDate ||
      !height ||
      !gender ||
      !genderOption
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const parsedHeight = Number(height);

    if (
      !Number.isFinite(parsedHeight) ||
      parsedHeight <= 0 ||
      parsedHeight > 300
    ) {
      setError("Enter a valid height.");
      return;
    }

    const selectedDate = new Date(
      `${birthDate}T00:00:00`
    );

    if (
      Number.isNaN(selectedDate.getTime()) ||
      selectedDate > new Date()
    ) {
      setError("Enter a valid date of birth.");
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
        <UserRound size={26} />
      </div>

      <h2 className="font-serif text-[30px] font-bold text-[#302929] sm:text-[36px]">
        Tell us about yourself
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#85776f]">
        Complete your basic information to get started.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name
          </label>

          <input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={inputClass}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="birthDate" className={labelClass}>
              Date of birth
            </label>

            <input
              id="birthDate"
              type="date"
              value={birthDate}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setBirthDate(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="height" className={labelClass}>
              Height (cm)
            </label>

            <input
              id="height"
              type="number"
              min={1}
              max={300}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 165"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="gender" className={labelClass}>
            Gender
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

        <div>
          <label htmlFor="genderOption" className={labelClass}>
            Gender option
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
            <option value="">Select option</option>

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
          <p
            role="alert"
            className="text-[12px] text-red-600"
          >
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
