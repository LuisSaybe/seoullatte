export class Event {
  _id = null;
	avatar = null;
  currency = null;
  organizationId = null;
  published = false;
  facebookUrl = null;
  instagramUrl = null;
  twitterUrl = null;
  hash = null;
  url = null;
  name = null;
  shortName = null;
  created = null;
  lastUserActivity = null;
  lastSystemActivity = null;
}

export class Item {
  _id = null;
  avatar = null;
  amount = null;
  description = null;
  organizationId = null;
  published = false;
  name = null;
  created = null;
  order = 0;
  maxiumumAvailable = null;
  lastUserActivity = null;
  lastSystemActivity = null;
}

export class Organization {
  _id = null;
  name = null;
  email = null;
  avatar = null;
  emailVerified = null;
  owner = null;
  stripe = null; // https://stripe.com/docs/connect/standard-accounts example shape
  read = [];
  write = [];
  created = null;
  lastUserActivity = null;
  lastSystemActivity = null;
}

export class Transaction {
  _id = null;
  eventId = null;
  userId = null;
  order = null;
  created = null;

  // stripe fields
  session = null; /* https://stripe.com/docs/api/checkout/sessions/retrieve */
  paymentIntent = null; /* https://stripe.com/docs/api/payment_intents/retrieve */
}

export class User {
  _id = null;
  email = null;
  avatar = null;
  emailVerified = false;
  lastLanguage = null;
  hashedPassword = null;
  created = null;
  lastUserActivity = null;
  lastSystemActivity = null;
}

export class PasswordRecovery {
  _id = null;
  userId = null;
  created = null;
}

export class OrganizationInvitation {
  _id = null;
  organization = null;
  userId = null;
  created = null;
}

export class Language {
  static en = 'en';
  static fr = 'fr';
  static ko = 'ko';
  static es = 'es';
}

export const SUPPORTED_LANGUAGE_IDS = [Language.en, Language.fr, Language.ko];
export const ITEM_PER_EVENT_LIMIT = 300;



export class Currency {
  static USD = 'usd';
  static CAD = 'cad';
  static GBP = 'gbp';
  static EUR = 'eur';
  static JPY = 'jpy';
  static KRW = 'krw';
}

export const CURRENCY_TO_APPLICATION_FEE = {
  [Currency.USD]: 100,
  [Currency.CAD]: 100,
  [Currency.GBP]: 100,
  [Currency.EUR]: 100,
  [Currency.JPY]: 100,
  [Currency.KRW]: 1000,
};
