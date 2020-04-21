export type LocationsContextType = Array<{ pathname: string }>;

export enum TopicRoute {
  hangul = "/hangul",
  noun = "/noun",
  predicate = "/predicate",
  counting = "/counting",
  copular = "/copular",
  desire = "/desire",
  particleLocationGoal = "/particle-location-goal",
  existenceAndPosession = "/existence-and-posession",
  boundNoun = "/bound-noun",
  prenoun = "/prenoun",
  addingVowelToPredicateStem = "/adding-vowel-to-predicate-stems",
  irregularPredicate = "/irregular-predicate",
  ending = "/ending",
  formalAndInformalSpeech = "/formal-and-informal-speech",
  deferentialSpeech = "/deferential-speech",
  politeSpeech = "/polite-speech",
  plainSpeech = "/plain-speech",
  intimateSpeech = "/intimate-speech",
  familiarSpeech = "/familiar-speech",
  questions = "/questions",
  syllable = "/syllable",
  speechLevel = "/speech-level",
  pastTense = "/past-tense",
  predicateAsModifiers = "/predicate-as-modifiers",
  subjectParticle = "/subject-particle",
  topicParticle = "/topic-particle",
  formingSentences = "/forming-sentences",
  negation = "/negation",
  addingUToPredicates = "/adding-u-to-predicates",
}
