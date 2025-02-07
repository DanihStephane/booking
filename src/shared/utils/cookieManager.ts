import Cookies from "js-cookie";
import { APP_CONFIG } from "@/shared/constants/appConfig";

interface CookieOptions {
  name: string;
  value: string;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const cookieManager = {
  set(options: CookieOptions) {
    Cookies.set(options.name, options.value, {
      expires: options.maxAge ? options.maxAge / (60 * 60 * 24) : undefined, // Convert seconds to days
      path: options.path || "/",
      domain: options.domain,
      secure: process.env.NODE_ENV === "production",
      sameSite: options.sameSite || "strict",
    });
  },

  get(name: string) {
    return Cookies.get(name);
  },

  delete(name: string) {
    Cookies.remove(name);
  },

  setAuthTokens(accessToken: string, refreshToken: string | null) {
    this.set({
      name: APP_CONFIG.AUTH.TOKEN_KEY,
      value: accessToken,
      maxAge: APP_CONFIG.AUTH.TOKEN_EXPIRY,
    });

    if (refreshToken) {
      this.set({
        name: APP_CONFIG.AUTH.REFRESH_TOKEN_KEY,
        value: refreshToken,
        maxAge: APP_CONFIG.AUTH.REFRESH_TOKEN_EXPIRY,
      });
    }
  },

  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  },

  clearAuthTokens() {
    this.delete(APP_CONFIG.AUTH.TOKEN_KEY);
    this.delete(APP_CONFIG.AUTH.REFRESH_TOKEN_KEY);
  },
};
