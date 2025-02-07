import { authApi } from "../api";
import type {
  RegisterPayload,
  RegisterResponse,
  ApiResponse,
  RegisterResult,
} from "../types/authTypes";
import { RegisterErrorCode } from "../types/authTypes";
import { cookieManager } from "@/shared/utils/cookieManager";

interface RegisterService {
  register(payload: RegisterPayload): Promise<RegisterResult>;
  handleRegistrationError(error: Error): void;
}
export class RegisterServiceImpl implements RegisterService {
  async register(payload: RegisterPayload): Promise<RegisterResult> {
    try {
      const response = await authApi.register(payload);
      if (!response.data) {
        return {
          success: false,
          error: {
            code: RegisterErrorCode.SERVER_ERROR,
            message: "Invalid server response",
          },
        };
      }

      return {
        data: response.data,
        success: true,
      };
    } catch (error: any) {
      const { response } = error;
      if (response?.status === 409 && response.data?.error) {
        return {
          error: response.data.error,
          success: false,
        };
      }
      return {
        success: false,
        error: {
          code: RegisterErrorCode.SERVER_ERROR,
          message: "Server error occurred",
        },
      };
    }
  }
 

  handleRegistrationError(error: Error): void {
    console.error("Registration error:", error);
    throw error;
  }
}

export const registerService = new RegisterServiceImpl();
