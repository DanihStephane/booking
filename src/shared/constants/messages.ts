export const MESSAGES = {
    AUTH: {
      REGISTER: {
        SUCCESS: 'auth.register.success',
        EMAIL_EXISTS: 'auth.register.errors.emailExists',
        VALIDATION_ERROR: 'auth.register.errors.validation',
        SERVER_ERROR: 'auth.register.errors.server',
        UNEXPECTED: 'auth.register.errors.unexpected'
      },
      LOGIN: {
        SUCCESS: 'auth.login.success',
        INVALID_CREDENTIALS: 'auth.login.errors.invalidCredentials'
      },
      SESSION: {
        EXPIRED: 'auth.session.expired'
      }
    }
  } as const