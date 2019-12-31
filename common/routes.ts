export const TOKEN_PATH = "/token/password";
export const USER_PASSWORD_RECOVERY_PATH = "/user/password_recovery";
export const USER_PATH = "/user/:userId";
export const USER_EMAIL_PATH = "/user/email";

export const ACCOUNT_PATH = "/account";

export const STRIPE_SESSION_PATH = "/stripe/checkout/sessions/:sessionId";

export const USER_ID = "userId";
export const STRIPE_SESSION_ID = "sessionId";

export class Routes {
  private prefix = "";

  constructor(prefix = "") {
    this.prefix = prefix;
  }

  public configuration() {
    return `${this.prefix}/configuration`;
  }

  public home() {
    return `${this.prefix}/home`;
  }

  public landing() {
    return `${this.prefix}/`;
  }
}

export enum TopicRoute {
  hangul = "/hangul",
  noun = "/noun",
  predicate = "/predicate",
  irregularPredicate = "/irregular-predicate",
  ending = "/ending",
  formalAndInformalSpeech = "/formal-and-informal-speech",
  deferentialSpeech = "/deferential-speech",
  politeSpeech = "/polite-speech",
  plainSpeech = "/plain-speech",
  intimateSpeech = "/intimate-speech",
  familiarSpeech = "/familiar-speech",
  syllable = "/syllable",
  speechLevel = "/speech-level",
}
