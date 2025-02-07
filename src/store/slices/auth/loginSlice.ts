import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LoginState,
  LoginResponse,
  LoginError,
} from "@/features/auth/types/loginTypes";

const initialState: LoginState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<LoginError>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    },
    clearLoginState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, clearLoginState } =
  loginSlice.actions;
export default loginSlice.reducer;
