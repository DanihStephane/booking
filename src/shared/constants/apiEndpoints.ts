export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/login_check",
    REGISTER: "/register",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh-token",
    VERIFY_OTP: "/validate-otp",
    RESEND_OTP: "/resend-otp",
  },
  VEHICLES: {
    LIST: "/vehicles",
    DETAILS: (id: string) => `/vehicles/${id}`,
    CREATE: "/vehicles",
    UPDATE: (id: string) => `/vehicles/${id}`,
    DELETE: (id: string) => `/vehicles/${id}`,
  },
  BOOKINGS: {
    LIST: "/bookings",
    CREATE: "/bookings",
    DETAILS: (id: string) => `/bookings/${id}`,
    UPDATE: (id: string) => `/bookings/${id}`,
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
  USER: {
    PROFILE: "/user/profile",
    UPDATE_PROFILE: "/user/profile",
    CHANGE_PASSWORD: "/user/change-password",
  },
} as const;
