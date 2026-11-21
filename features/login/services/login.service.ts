
import axios from "axios";
import { getApiBaseUrl } from "@/lib/api";

import type {
  ApiResponse,
  SendOtpPayload,
  VerifyOtpPayload,
  VerifyOtpResponse,
  BasicInfoPayload,
} from "../types/login.types";

const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 15000,
});

const TOKEN_KEY = "welvors_access_token";
const USER_KEY = "welvors_user";

export const AUTH_EVENT = "welvors-auth-change";

export interface AuthUser {
  fullName: string;
  email?: string;
}

export interface UserDetails {
  id: string;
  fullName: string;
  email: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  height: number | null;
  gender: string | null;
  genderOption: string | null;
  accountStatus: string;
  onboardingStep: string | null;
  onboardingCompleted: boolean;
  basicInfoCompleted: boolean;
}

export interface VerifyLoginResult {
  isExistingUser: boolean;
}

const notifyAuthChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT));
  }
};

/* -------------------------------------------------------------------------- */
/* TOKEN                                                                      */
/* -------------------------------------------------------------------------- */

export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;

  return sessionStorage.getItem(TOKEN_KEY);
};

export const saveToken = (token: string) => {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(TOKEN_KEY, token);
  notifyAuthChange();
};

export const removeToken = () => {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(TOKEN_KEY);
  notifyAuthChange();
};

/* -------------------------------------------------------------------------- */
/* USER                                                                       */
/* -------------------------------------------------------------------------- */

export const getAuthUser = (): AuthUser | null => {
  if (typeof window === "undefined") return null;

  const value = sessionStorage.getItem(USER_KEY);

  if (!value) return null;

  try {
    return JSON.parse(value) as AuthUser;
  } catch {
    return null;
  }
};

export const saveAuthUser = (user: AuthUser) => {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  notifyAuthChange();
};

export const removeAuthUser = () => {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(USER_KEY);
  notifyAuthChange();
};

/* -------------------------------------------------------------------------- */
/* GET USER ID FROM JWT                                                       */
/* -------------------------------------------------------------------------- */

export const getLoggedInUserId = (): string | null => {
  const token = getToken();

  if (!token) return null;

  try {
    const payloadPart = token.split(".")[1];

    if (!payloadPart) return null;

    const base64 = payloadPart
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const decoded = atob(
      base64.padEnd(
        Math.ceil(base64.length / 4) * 4,
        "="
      )
    );

    const payload = JSON.parse(decoded) as {
      userId?: string;
      exp?: number;
    };

    if (
      typeof payload.exp === "number" &&
      payload.exp * 1000 <= Date.now()
    ) {
      return null;
    }

    return payload.userId || null;
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return Boolean(getToken() && getLoggedInUserId());
};

/* -------------------------------------------------------------------------- */
/* LOGOUT                                                                     */
/* -------------------------------------------------------------------------- */

export const logoutUser = async () => {
  if (typeof window === "undefined") return;

  const token = getToken();

  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);

  notifyAuthChange();

  if (!token) return;

  try {
    await api.post("/user/logout", undefined, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch {
    // Local sign-out is already complete even if the server cannot be reached.
    console.warn("Could not confirm server logout.");
  }
};

/* -------------------------------------------------------------------------- */
/* SEND OTP                                                                   */
/* -------------------------------------------------------------------------- */

export const sendLoginOtp = async (
  payload: SendOtpPayload
): Promise<ApiResponse> => {
  const { data } = await api.post<ApiResponse>(
    "/user/send-otp",
    payload
  );

  if (!data.success) {
    throw new Error(
      data.message || "Failed to send OTP."
    );
  }

  return data;
};

/* -------------------------------------------------------------------------- */
/* VERIFY OTP                                                                 */
/* -------------------------------------------------------------------------- */

export const verifyLoginOtp = async (
  payload: VerifyOtpPayload
): Promise<VerifyLoginResult> => {
  const { data } = await api.post<VerifyOtpResponse>(
    "/user/verify-otp",
    payload
  );

  if (!data.success) {
    throw new Error(
      data.message || "OTP verification failed."
    );
  }

  const token =
    data.data?.accessToken ??
    data.data?.access_token ??
    data.data?.token ??
    data.accessToken ??
    data.access_token ??
    data.token;

  if (!token) {
    throw new Error("Access token not returned.");
  }

  // Save the authenticated session.
  saveToken(token);

  // Validate the account and populate the signed-in user details.
  await getUserDetails();

  const user = data.data?.user;
  const isExistingUser =
    user?.next_step === "INTERESTED_IN" ||
    user?.next_step === "COMPLETED" ||
    (user?.profile_completion ?? 0) > 5;

  return {
    isExistingUser,
  };
};

/* -------------------------------------------------------------------------- */
/* FETCH USER DETAILS                                                         */
/* -------------------------------------------------------------------------- */

export const getUserDetails = async (): Promise<UserDetails> => {
  const token = getToken();
  const userId = getLoggedInUserId();

  if (!token || !userId) {
    throw new Error("Please login again.");
  }

  const { data: response } = await api.get(
    `/user/details/${encodeURIComponent(userId)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.success === false) {
    throw new Error(
      response.message || "Unable to fetch user details."
    );
  }

  const outer = response.data ?? {};
  const raw = outer.user ?? outer;

  const fullName = raw.full_name ?? raw.fullName ?? "";
  const email = raw.email ?? null;
  const birthDate = raw.birth_date ?? raw.birthDate ?? null;
  const height =
    raw.height == null ? null : Number(raw.height);
  const gender = raw.gender ?? null;
  const genderOption =
    raw.gender_option ?? raw.genderOption ?? null;

  const basicInfoCompleted = Boolean(
    fullName &&
    email &&
    birthDate &&
    height !== null &&
    Number.isFinite(height) &&
    height > 0 &&
    gender &&
    genderOption
  );

  const user: UserDetails = {
    id: raw.id ?? userId,
    fullName,
    email,
    phoneNumber:
      raw.phone_number ?? raw.phoneNumber ?? null,
    birthDate,
    height,
    gender,
    genderOption,
    accountStatus:
      raw.account_status ?? raw.accountStatus ?? "",
    onboardingStep:
      raw.onboarding_step ?? raw.onboardingStep ?? null,
    onboardingCompleted:
      raw.onboarding_completed === true,
    basicInfoCompleted,
  };

  if (user.id !== userId) {
    throw new Error("User details do not match the session.");
  }

  if (user.accountStatus !== "ACTIVE") {
    throw new Error("Your account is not active.");
  }

  saveAuthUser({
    fullName: user.fullName,
    email: user.email ?? undefined,
  });

  return user;
};

/* -------------------------------------------------------------------------- */
/* UPDATE BASIC INFO                                                          */
/* -------------------------------------------------------------------------- */

export const updateBasicInfo = async (
  payload: BasicInfoPayload
): Promise<ApiResponse> => {
  const token = getToken();

  if (!token) {
    throw new Error("Please login again.");
  }

  const { data } = await api.patch<ApiResponse>(
    "/user/profile/basic-info",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!data.success) {
    throw new Error(
      data.message || "Unable to update basic information."
    );
  }

  const saved = (data.data ?? {}) as {
    full_name?: string;
    email?: string;
  };

  saveAuthUser({
    fullName: saved.full_name ?? payload.fullName,
    email: saved.email ?? payload.email,
  });

  return data;
};

/* -------------------------------------------------------------------------- */
/* ERROR HANDLING                                                             */
/* -------------------------------------------------------------------------- */

export const getApiErrorMessage = (
  error: unknown
): string => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message;

    if (typeof message === "string") {
      return message;
    }

    if (error.code === "ECONNABORTED") {
      return "Request timed out. Please try again.";
    }

    if (!error.response) {
      return "Unable to connect to the server.";
    }

    return `Request failed (${error.response.status}).`;
  }

  return error instanceof Error
    ? error.message
    : "Something went wrong.";
};
