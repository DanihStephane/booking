import { AppDispatch } from "@/store/store";
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "@/store/slices/auth/loginSlice";

import { LoginPayload, LoginErrorCode } from "../types/loginTypes";
import { loginService } from "../services/loginService";

export const loginUseCase = async (
  payload: LoginPayload,
  dispatch: AppDispatch
) => {
  dispatch(loginStart());
  

  const response = await loginService.login(payload);

  if (
    !response.success &&
    response.error?.code === LoginErrorCode.BAD_CREDENTIALS
  ) {
    dispatch(loginFailure(response.error));
    return;
  }

  if (
    !response.success &&
    response.error?.code === LoginErrorCode.SERVER_ERROR
  ) {
    dispatch(loginFailure(response.error));
    return;
  }
  if (response.success && response.data) {
    loginService.handleLoginSuccess(response.data);
    dispatch(loginSuccess(response.data));
  }
};
