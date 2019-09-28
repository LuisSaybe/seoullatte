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
