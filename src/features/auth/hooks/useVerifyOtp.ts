import { authApi } from "../api";
import { VerifyOtpFormData } from "../schemas/verifyOtpSchema";
import { VerifyOtpErrorCode } from "../types/authTypes";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "@/store/slices/auth/loginSlice";
import { cookieManager } from "@/shared/utils/cookieManager";
import { LoginResponse } from "../types/loginTypes";

interface VerifyOtpError {
  code: VerifyOtpErrorCode;
  message: string;
}

export const useVerifyOtp = () => {
  const { isLoading, error, isAuthenticated, user } = useAppSelector(
    (state) => state.login
  );

  const dispach = useDispatch();

  const verifyOtp = async (data: VerifyOtpFormData, email: string) => {
    dispach(loginStart());
    try {
      const response = await authApi.verifyOtp(data, email);
      if (response.status === 200 && response.data) {
        cookieManager.setAuthTokens(response.data.token, null);
        dispach(loginSuccess(response.data as LoginResponse));
      }
    } catch (err: any) {
      console.error(err);
      dispach(loginFailure(err));
    }
  };

  const resetAccessToken = () => {
    //  cookieManager.delete(APP_CONFIG.AUTH.TOKEN_KEY);
    // disapach(reinitializeStates());
  };

  return {
    isLoading,
    error,
    isAuthenticated,
    user,
    verifyOtp,
    resetAccessToken,
  };
};
