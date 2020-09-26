export class Routes {
  private prefix = "";

  constructor(prefix = "") {
    this.prefix = prefix;
  }

  public configuration() {
    return `${this.prefix}/configuration`;
  }

  public landing() {
    return `${this.prefix}`;
  }

  public aboutUs() {
    return `${this.prefix}/about-us`;
  }

  public entry(q: string) {
    return `${this.prefix}/dictionary/${q}`;
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
