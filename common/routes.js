export const TOKEN_PATH = '/token/password';
export const USER_PASSWORD_RECOVERY_PATH = '/user/password_recovery';
export const USER_PATH = '/user/:userId';
export const USER_EMAIL_PATH = '/user/email';

export const ACCOUNT_PATH = '/account';

export const STRIPE_SESSION_PATH = '/stripe/checkout/sessions/:sessionId';

export const USER_ID = 'userId';
export const STRIPE_SESSION_ID = 'sessionId';

export class Routes {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  configuration() {
    return `${this.prefix}/configuration`;
  }

  home() {
    return `${this.prefix}/home`;
  }

  hangul() {
    return `${this.prefix}/hangul`;
  }

  login(email = null, to = null) {
    let url = `${this.prefix}/login`;
    const parts = [];

    if (to !== null) {
      parts.push(`to=${to}`);
    }

    if (email !== null) {
      parts.push(`email=${email}`);
    }

    if (parts.length > 0) {
      url += `?${parts.join('&')}`;
    }

    return url;
  }

  landing() {
    return `${this.prefix}/`;
  }

  account() {
    return `${this.prefix}/account`;
  }

  signup() {
    return `${this.prefix}/signup`;
  }

  forgotPassword() {
    return `${this.prefix}/forgot-password`;
  }

  oauthRedirect() {
    return `${this.prefix}/oauth/redirect`;
  }
}
