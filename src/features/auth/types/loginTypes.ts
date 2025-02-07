export enum LoginErrorCode {
  BAD_CREDENTIALS = "BAD_CREDENTIALS",
  USER_NOT_ACTIVE = "USER_NOT_ACTIVE",
  SERVER_ERROR = "SERVER_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  email: string;
  name: string;
  token: string;
  isActive: boolean;
  isFirstLogin: boolean;
}

export interface LoginError {
  code: LoginErrorCode;
  message: string;
  errors?: Record<string, string[]>;
}

export interface LoginState {
  user: LoginResponse | null;
  isLoading: boolean;
  error: LoginError | null;
  isAuthenticated: boolean;
}

export type LoginResult =
  | { success: true; data: LoginResponse }
  | { success: false; error: LoginError };

export interface LoginService {
  login(payload: LoginPayload): Promise<LoginResult>;
}
