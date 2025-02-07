export const APP_CONFIG = {
    APP: {
      NAME: 'Hertz',
      VERSION: '1.0.0',
      ENVIRONMENT: process.env.NODE_ENV,
    },
    API: {
      BASE_URL: process.env.NEXT_PUBLIC_API_URL,
      TIMEOUT: 30000,
      RETRY_ATTEMPTS: 3,
    },
    AUTH: {
      TOKEN_KEY: 'auth_token',
      REFRESH_TOKEN_KEY: 'refresh_token',
      TOKEN_EXPIRY: 3600, // in seconds
      REFRESH_TOKEN_EXPIRY: 86400, // in seconds
    },
    PAGINATION: {
      DEFAULT_PAGE_SIZE: 10,
      PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
    },
    DATE_FORMAT: {
      DISPLAY: 'DD/MM/YYYY',
      API: 'YYYY-MM-DD',
      DATETIME: 'DD/MM/YYYY HH:mm',
    },
    THEME: {
      DEFAULT: 'light',
      STORAGE_KEY: 'theme_preference',
    },
    FEATURES: {
      ENABLE_NOTIFICATIONS: true,
      ENABLE_DARK_MODE: true,
      ENABLE_ANALYTICS: process.env.NODE_ENV === 'production',
    },
  } as const
  
  export type AppConfig = typeof APP_CONFIG
  