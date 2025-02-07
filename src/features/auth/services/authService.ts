import { cookieManager } from "@/shared/utils/cookieManager";
import store from "@/store/store";
import { logout } from "@/store/slices/auth/registerSlice";
import { toast } from "sonner";
import { APP_CONFIG } from "@/shared/constants/appConfig";
import { MESSAGES } from "@/shared/constants/messages";
//import { useTranslations } from 'next-intl'
import { API_ENDPOINTS } from "@/shared/constants/apiEndpoints";

export const authService = {
  async checkAuthStatus(): Promise<boolean> {
    try {
      const token = await cookieManager.get(APP_CONFIG.AUTH.TOKEN_KEY);

      if (!token) {
        this.handleSessionExpired();
        return false;
      }

      const isExpired = cookieManager.isTokenExpired(token);

      if (isExpired) {
        this.handleSessionExpired();
        return false;
      }

      return true;
    } catch {
      this.handleSessionExpired();
      return false;
    }
  },

  handleSessionExpired(): void {
    // const t = useTranslations('auth');
     /* cookieManager.clearAuthTokens()
      store.dispatch(logout())
      toast.error('expired')
      window.location.href = '/' */
  },
};
