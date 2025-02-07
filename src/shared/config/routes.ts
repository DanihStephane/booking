export const ROUTES = {
  HOME: "/",
  BOOKING: {
    ROOT: "/booking",
    NEW: "/booking/new",
    CONFIRM: "/booking/confirm"
  },
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    OTP_VERIFICATION: "/auth/otp",
  },
  DASHBOARD: {
    ROOT: "/dashboard",
    VEHICLES: "/dashboard/vehicles",
    PRICING: "/dashboard/pricing",
    AGENCIES: "/dashboard/agencies",
    BOOKINGS: "/dashboard/bookings",
  },
  ADMIN: {
    ROOT: "/admin",
    USERS: "/admin/users",
    SETTINGS: "/admin/settings",
    USER_DETAIL: (userId: string) => `/admin/users/${userId}`,
  },
  CONTACT: "/contact",
  FAQ: "/faq",
  RESERVE: "/reserve",
  VEHICLES: "/vehicles",
} as const;

// Type-safe URL generator
export const generateUrl = {
  adminUserDetail: (userId: string): string => ROUTES.ADMIN.USER_DETAIL(userId),
};

// Path pattern matcher for dynamic routes
export const PATH_PATTERNS = {
  ADMIN_USER_DETAIL: "/admin/users/:userId",
};
