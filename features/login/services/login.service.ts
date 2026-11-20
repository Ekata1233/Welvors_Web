
import axios from "axios";

import type {
  ApiResponse,
  SendOtpPayload,
  VerifyOtpPayload,
  VerifyOtpResponse,
  BasicInfoPayload,
} from "../types/login.types";

const API_BASE_URL = "https://dev-api.welvors.com/api";

const TOKEN_KEY = "welvors_access_token";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

/* -------------------------------------------------------------------------- */
/*                                TOKEN STORAGE                               */
/* -------------------------------------------------------------------------- */

export const saveToken = (token: string): void => {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;

  return sessionStorage.getItem(TOKEN_KEY);
};

export const removeToken = (): void => {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(TOKEN_KEY);
};

/* -------------------------------------------------------------------------- */
/*                                 SEND OTP                                   */
/* -------------------------------------------------------------------------- */

export const sendLoginOtp = async (
  payload: SendOtpPayload
): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>(
    "/user/send-otp",
    payload
  );

  if (!response.data.success) {
    throw new Error(
      response.data.message || "Failed to send OTP"
    );
  }

  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                VERIFY OTP                                  */
/* -------------------------------------------------------------------------- */

export const verifyLoginOtp = async (
  payload: VerifyOtpPayload
): Promise<VerifyOtpResponse> => {
  const response = await api.post<VerifyOtpResponse>(
    "/user/verify-otp",
    payload
  );

  if (!response.data.success) {
    throw new Error(
      response.data.message || "OTP verification failed"
    );
  }

  const result = response.data;

  // Supports common response structures.
  const token =
    result.data?.accessToken ||
    result.data?.access_token ||
    result.data?.token ||
    result.accessToken ||
    result.access_token ||
    result.token;

  if (!token) {
    throw new Error(
      "OTP verified, but authentication token was not found in the API response."
    );
  }

  saveToken(token);

  return result;
};

/* -------------------------------------------------------------------------- */
/*                             UPDATE BASIC INFO                              */
/* -------------------------------------------------------------------------- */

export const updateBasicInfo = async (
  payload: BasicInfoPayload
): Promise<ApiResponse> => {
  const token = getToken();

  if (!token) {
    throw new Error(
      "Your login session is missing. Please verify your mobile number again."
    );
  }

  const response = await api.patch<ApiResponse>(
    "/user/profile/basic-info",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.data.success) {
    throw new Error(
      response.data.message || "Failed to update basic information"
    );
  }

  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                ERROR MESSAGE                               */
/* -------------------------------------------------------------------------- */

export const getApiErrorMessage = (
  error: unknown
): string => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message;

    if (typeof message === "string" && message) {
      return message;
    }

    if (!error.response) {
      return "Unable to connect to the server. Please try again.";
    }

    return `Request failed (${error.response.status}).`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
};
