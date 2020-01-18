export type LocationsContextType = Array<{ pathname: string }>;

export enum TopicRoute {
  hangul = "/hangul",
  noun = "/noun",
  predicate = "/predicate",
  suffixes = "/suffixes",
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
  pastTense = "/past-tense",
  predicateAsModifiers = "/predicate-as-modifiers",
  subjectAndTopicMarker = "/subject-and-topic",
}
