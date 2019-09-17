export const TOKEN_PATH = '/token/password';
export const USER_PASSWORD_RECOVERY_PATH = '/user/password_recovery';
export const USER_PATH = '/user/:userId';
export const USER_EMAIL_PATH = '/user/email';
export const USER_ORGANIZATIONS_PATH = '/user/:userId/organization';
export const USER_TRANSACTIONS_PATH = '/user/:userId/transaction';
export const USER_AVATAR_PATH = '/user/:userId/avatar';

export const ACCOUNT_PATH = '/account';

export const ORGANIZATION_AVATAR_PATH = '/organization/:organizationId/avatar';
export const ORGANIZATION_PATH = '/organization/:organizationId';
export const ORGANIZATIONS_PATH = '/organization';
export const INVITE_USER_TO_ORGANIZATION = '/organization/:organizationId/user/:userId';
export const ORGANIZATION_EVENTS_PATH = '/organization/:organizationId/event';
export const ORGANIZATION_STRIPE_CONNECT_PATH = '/organization/:organizationId/stripe/connect/:code';

export const EVENT_PATH = '/event/:eventId';
export const EVENT_ITEMS_PATH = '/event/:eventId/item';
export const EVENT_AVATAR_PATH = '/event/:eventId/avatar';
export const EVENT_STRIPE_CHECKOUT_SESSION_PATH = '/event/:eventId/checkout-session';
export const EVENT_INFORMATION_PATH = '/event/:hash/information';

export const ITEM_PATH = '/item/:itemId';
export const ITEM_AVATAR_PATH = '/item/:itemId/avatar';

export const STRIPE_SESSION_PATH = '/stripe/checkout/sessions/:sessionId';

export const ITEM_ID = 'itemId';
export const ORGANIZATION_ID = 'organizationId';
export const EVENT_ID = 'eventId';
export const USER_ID = 'userId';
export const STRIPE_SESSION_ID = 'sessionId';

export class Routes {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  organizationEvents(organizationId) {
    return `${this.prefix}/organization/${organizationId}/event`;
  }

  event(eventId) {
    let url = `${this.prefix}/event`;

    if (typeof eventId !== 'undefined') {
      url += '/' + eventId;
    }

    return url;
  }

  itemPersist(eventId, itemId) {
    let url = `${this.prefix}/event/${eventId}/item`;

    if (typeof itemId !== 'undefined') {
      url += '/' + itemId;
    }

    return url + '/persist';
  }

  eventPublic(hash) {
    return `${this.prefix}/e/${hash}`;
  }

  home() {
    return `${this.prefix}/home`;
  }

  userTransactions(userId) {
    return `${this.prefix}/user/${userId}/transaction`;
  }

  organization(id = null) {
    let url = `${this.prefix}/organization`;

    if (id !== null) {
      url += '/' + id;
    }

    return url;
  }

  eventPersist(id) {
    let result = `${this.prefix}/event`;

    if (typeof id !== 'undefined') {
      result += '/' + id;
    }

    return result + '/persist';
  }

  organizationPersist(id = null) {
    let result = `${this.prefix}/organization/persist`;

    if (id !== null) {
      result += '/' + id;
    }

    return result;
  }

  transactions() {
    return `${this.prefix}/transaction`;
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
