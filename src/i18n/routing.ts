import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { ROUTES } from "@/shared/config/routes";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "fr",
  pathnames: {
    [ROUTES.HOME]: "/",
    [ROUTES.CONTACT]: {
      en: "/contact-us",
      fr: "/nous-contacter",
    },
    [ROUTES.AUTH.OTP_VERIFICATION]: {
      en: "/validate_otp",
      fr: "/validation_otp",
    },
    [ROUTES.FAQ]: {
      en: "/faq",
      fr: "/faq",
    },
    [ROUTES.RESERVE]: {
      en: "/reserve",
      fr: "/reserver",
    },
    [ROUTES.VEHICLES]: {
      en: "/vehicles",
      fr: "/vehicles",
    },
    [ROUTES.AUTH.LOGIN]: {
      en: "/login",
      fr: "/connexion",
    },
    [ROUTES.AUTH.REGISTER]: {
      en: "/register",
      fr: "/inscription",
    },

    /*  [ROUTES.DASHBOARD.ROOT]: {
      en: '/validate_otp',
      fr: '/validation_otp'
    },
    [ROUTES.DASHBOARD.ROOT]: {
      en: '/dashboard',
      fr: '/tableau-de-bord'
    } */
    [ROUTES.DASHBOARD.ROOT]: {
      en: '/dashboard',
      fr: '/tableau-de-bord'
    },
    [ROUTES.DASHBOARD.VEHICLES]: {
      en: '/dashboard/vehicles',
      fr: '/tableau-de-bord/vehicules'
    },
    [ROUTES.DASHBOARD.PRICING]: {
      en: '/dashboard/pricing',
      fr: '/tableau-de-bord/tarifs'
    },
    [ROUTES.DASHBOARD.AGENCIES]: {
      en: '/dashboard/agencies',
      fr: '/tableau-de-bord/agences'
    },
    [ROUTES.DASHBOARD.BOOKINGS]: {
      en: '/dashboard/bookings',
      fr: '/tableau-de-bord/reservations'
    },
    [ROUTES.BOOKING.ROOT]: {
      en: '/booking',
      fr: '/booking'
    }

  },

});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
