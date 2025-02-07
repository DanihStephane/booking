import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  RegisterState,
  RegisterResponse,
  RegisterError,
} from "@/features/auth/types/authTypes";

const initialState: RegisterState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart: (state) => {
      console.log("registerStart triggered");
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, action: PayloadAction<RegisterResponse>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    registerFailure: (state, action: PayloadAction<RegisterError>) => {
      state.isLoading = false;
      state.error = action.payload || null;
      state.isAuthenticated = false;
      state.user = null;
    },
    reinitializeStates: (state) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  reinitializeStates,
  logout,
} = registerSlice.actions;
export default registerSlice.reducer;
