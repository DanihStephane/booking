import { authApi } from "../api";
import type {
  LoginPayload,
  LoginResponse,
  LoginResult,
} from "../types/loginTypes";
import { LoginErrorCode } from "../types/loginTypes";
import { cookieManager } from "@/shared/utils/cookieManager";

interface LoginService {
  login(payload: LoginPayload): Promise<LoginResult>;
  validateLoginData(data: LoginPayload): boolean;
  handleLoginSuccess(response: LoginResponse): void;
  handleLoginError(error: Error): void;
}

export class LoginServiceImpl implements LoginService {
  async login(payload: LoginPayload): Promise<LoginResult> {
    try {
      const response = await authApi.login(payload);
      
      if (!response.data) {
        return {
          success: false,
          error: {
            code: LoginErrorCode.SERVER_ERROR,
            message: "Invalid server response",
          },
        };
      }

      if (response.data?.token) {
        cookieManager.setAuthTokens(response.data.token, null);
      }

      return {
        data: response.data,
        success: true,
      };
    } catch (error: any) {
      const { response } = error;
      if (response?.status && [400,401].includes(response.status) && response.data?.error) {
        return {
          error: response.data.error,
          success: false,
        };
      }

      return {
        success: false,
        error: {
          code: LoginErrorCode.SERVER_ERROR,
          message: "Server error occurred",
        },
      };
    }
  }

  validateLoginData(data: LoginPayload): boolean {
    const { email, password } = data;
    return Boolean(email && password);
  }

  handleLoginSuccess(response: LoginResponse): void {
    if (response.token) {
      cookieManager.setAuthTokens(response.token, null);
    }
  }

  handleLoginError(error: Error): void {
    console.error("Login error:", error);
    throw error;
  }
}

export const loginService = new LoginServiceImpl();
