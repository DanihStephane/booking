export enum RegisterErrorCode {
  EMAIL_EXISTS = "EMAIL_EXISTS",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  SERVER_ERROR = "SERVER_ERROR",
  INVALID_EMAIL = "INVALID_EMAIL",
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  token?: string;
}

export interface RegisterError {
  code: RegisterErrorCode;
  message: string;
  errors?: Record<string, string[]>;
}

export interface ApiResponse<T> {
  data?: T;
  error?: RegisterError;
  status: number;
}

// export a register state
export interface RegisterState {
  user: RegisterResponse | null;
  isLoading: boolean;
  error: RegisterError | null;
  isAuthenticated: boolean;
}

export type RegisterResult =
  | { success: true; data: RegisterResponse }
  | { success: false; error: RegisterError };

export interface RegisterService {
  register(payload: RegisterPayload): Promise<RegisterResult>;
}

export type RegisterApiResponse = ApiResponse<RegisterResponse>;

export enum VerifyOtpErrorCode {
  INVALID_OTP = "INVALID_OTP",
  EXPIRED_OTP = "EXPIRED_OTP",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface VerifyOtpError {
  code: VerifyOtpErrorCode;
  message: string;
  errors?: Record<string, string[]>;
}
export interface VerifyOtpResponse {
  id: string;
  email: string;
  name: string;
  token: string;
  isActive: boolean;
  isFirstLogin: boolean;
}

export type VerifyOtpResult =
  | { success: true; data: VerifyOtpResponse }
  | { success: false; error: VerifyOtpError };

export interface VerifyOtpError {
  code: VerifyOtpErrorCode;
  message: string;
  errors?: Record<string, string[]>;
}

export enum VerifyOtpErrorCode {
  VALIDATION_ERROR = "VALIDATION_ERROR",
  NETWORK_ERROR = "NETWORK_ERROR",
  // Add other error codes as needed
}

export interface ResendOtpResponse {
  message: string;
}

// First, define the error types
export enum ResendOtpErrorCode {
  INVALID_EMAIL = "INVALID_EMAIL",
  USER_NOT_FOUND = "NOT_FOUND",
  SERVER_ERROR = "SERVER_ERROR",
  // Add other relevant error codes
}

export interface ResendOtpError {
  code: ResendOtpErrorCode;
  message: string;
}
