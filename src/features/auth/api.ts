import apiClient from "@/shared/utils/apiClient";
import type { ApiResponse } from "@/shared/types/api";
import type {
  RegisterPayload,
  RegisterResponse,
  ResendOtpResponse,
  VerifyOtpResponse,
  VerifyOtpResult,
} from "@/features/auth/types/authTypes";
import { API_ENDPOINTS } from "@/shared/constants/apiEndpoints";
import { APP_CONFIG } from "@/shared/constants/appConfig";
import { VerifyOtpFormData } from "./schemas/verifyOtpSchema";
import { LoginPayload, LoginResponse } from "./types/loginTypes";

export const authApi = {
  register: async (
    payload: RegisterPayload
  ): Promise<ApiResponse<RegisterResponse>> => {
    const { data } = await apiClient.post<ApiResponse<RegisterResponse>>(
      API_ENDPOINTS.AUTH.REGISTER,
      payload
    );
    return data;
  },
  verifyOtp: async (
    payload: VerifyOtpFormData,
    email: string
  ): Promise<ApiResponse<LoginResponse>> => {
    const { data } = await apiClient.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.VERIFY_OTP,
      {
        otpCode: payload.code,
        email: email,
      }
    );

    return data;
  },
  resendOtp: async (email: string): Promise<ApiResponse<ResendOtpResponse>> => {
    const { data } = await apiClient.post<ApiResponse<ResendOtpResponse>>(
      API_ENDPOINTS.AUTH.RESEND_OTP,
      { email }
    );
    return data;
  },

  login: async (payload: LoginPayload): Promise<ApiResponse<LoginResponse>> => {
    const { data } = await apiClient.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      payload
    );

    return data;
  },
  logout: async (): Promise<ApiResponse<void>> => {
    const { data } = await apiClient.post<ApiResponse<void>>(
      API_ENDPOINTS.AUTH.LOGOUT
    );
    return data;
  },
  refreshToken: async (): Promise<ApiResponse<string>> => {
    const { data } = await apiClient.post<ApiResponse<string>>(
      API_ENDPOINTS.AUTH.REFRESH_TOKEN
    );
    return data;
  },
};
