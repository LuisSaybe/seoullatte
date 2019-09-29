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

export const SUPPORTED_LANGUAGE_IDS = [Language.en, Language.fr];
