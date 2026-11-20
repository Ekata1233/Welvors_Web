
export type Gender =
  | "MEN"
  | "WOMEN"
  | "NON_BINARY"
  | "PREFER_NOT_TO_SAY"
  | "OTHER";

export type GenderOption =
  | "STRAIGHT"
  | "GAY"
  | "LESBIAN"
  | "AROMATIC"
  | "ASEXUAL"
  | "BISEXUAL"
  | "DEMISEXUAL"
  | "PANSEXUAL"
  | "QUEER"
  | "NOT_LISTED";

export interface SendOtpPayload {
  phoneNumber: string;
}

export interface VerifyOtpPayload {
  phoneNumber: string;
  otp: string;
}

export interface BasicInfoPayload {
  fullName: string;
  email: string;
  birth_date: string;
  height: number;
  gender: Gender;
  gender_option: GenderOption;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface VerifyOtpData {
  token?: string;
  accessToken?: string;
  access_token?: string;
  user?: {
    id?: string;
    onboarding_completed?: boolean;
  };
}


export interface VerifyOtpResponse {
  success: boolean;
  message?: string;

  data?: {
    accessToken?: string;
    access_token?: string;
    token?: string;

    isExistingUser?: boolean;

    user?: {
      id: string;
      full_name?: string | null;
      email?: string | null;
      phone_number?: string | null;
      account_status?: string;
    };
  };

  accessToken?: string;
  access_token?: string;
  token?: string;
}


export const GENDER_OPTIONS: {
  label: string;
  value: Gender;
}[] = [
  { label: "Man", value: "MEN" },
  { label: "Woman", value: "WOMEN" },
  { label: "Non-binary", value: "NON_BINARY" },
  { label: "Prefer not to say", value: "PREFER_NOT_TO_SAY" },
  { label: "Other", value: "OTHER" },
];

export const ORIENTATION_OPTIONS: {
  label: string;
  value: GenderOption;
}[] = [
  { label: "Straight", value: "STRAIGHT" },
  { label: "Gay", value: "GAY" },
  { label: "Lesbian", value: "LESBIAN" },
  { label: "Aromantic", value: "AROMATIC" },
  { label: "Asexual", value: "ASEXUAL" },
  { label: "Bisexual", value: "BISEXUAL" },
  { label: "Demisexual", value: "DEMISEXUAL" },
  { label: "Pansexual", value: "PANSEXUAL" },
  { label: "Queer", value: "QUEER" },
  { label: "Not listed", value: "NOT_LISTED" },
];
