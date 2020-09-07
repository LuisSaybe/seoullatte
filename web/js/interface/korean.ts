export interface Topic {
  description: string;
  name: string;
  path: string;
  searchTerms: string;
  component: React.ComponentType;
  relatedEntries: number[];
  relatedPartOfSpeech: KoreaPartOfSpeech[];
}

export interface KoreanDefinitionIdentifier {
  q: string;
}

export interface DefinitionDisplayOptions {
  senseIndexes?: number[];
}

export enum WordGrade {
  none = '없음',
  beginner = '초급',
  intermediate = '중급',
  advanced = '고급'
}

export enum KoreaPartOfSpeech {
  noun = "명사",
  verb = "동사",
  adjective = "형용사",
  ending = "어미",
  determiner = "관형사",
  number = "수사",
  boundNoun = "의존 명사",
  affix = "접사",
  adverb = "부사",
  interjection = "감탄사",
  none = "품사 없음",
}

export enum LanguageNames {
  english = "영어",
  japanese = "일본어",
  french = "프랑스어",
  spanish = "스페인어",
  arabic = "아랍어",
  mongolian = "몽골어",
  vietnamese = "베트남어",
  thai = "타이어",
  indonesian = "인도네시아어",
  russian = "러시아어",
}

export const USER_AGENT_LANGUAGE_LANGUAGE_MAP = [
  {
    dictionaryLanguage: LanguageNames.english,
    codes: [
      "en",
      "en-bz",
      "en-ca",
      "en-ie",
      "en-jm",
      "en-nz",
      "en-ph",
      "en-za",
      "en-tt",
      "en-us",
      "en-gb",
      "en-zw",
    ],
  },
  {
    dictionaryLanguage: LanguageNames.japanese,
    codes: ["ja"],
  },
  {
    dictionaryLanguage: LanguageNames.french,
    codes: ["fr", "fr-be", "fr-ca", "fr-fr", "fr-lu", "fr-mc", "fr-ch"],
  },
  {
    dictionaryLanguage: LanguageNames.spanish,
    codes: [
      "es",
      "es-ar",
      "es-bo",
      "es-cl",
      "es-co",
      "es-cr",
      "es-do",
      "es-ec",
      "es-sv",
      "es-gt",
      "es-hn",
      "es-mx",
      "es-ni",
      "es-pi",
      "es-py",
      "es-pe",
      "es-pr",
      "es-es",
      "es-uy",
      "es-ve",
    ],
  },
  {
    dictionaryLanguage: LanguageNames.arabic,
    codes: [
      "ar",
      "ar-dz",
      "ar-bh",
      "ar-eg",
      "ar-iq",
      "ar-jo",
      "ar-kw",
      "ar-lb",
      "ar-ly",
      "ar-ma",
      "ar-om",
      "ar-qa",
      "ar-sa",
      "ar-sy",
      "ar-tn",
      "ar-ae",
      "ar-ye",
    ],
  },
  {
    dictionaryLanguage: LanguageNames.mongolian,
    codes: ["mn"],
  },
  {
    dictionaryLanguage: LanguageNames.vietnamese,
    codes: ["vi"],
  },
  {
    dictionaryLanguage: LanguageNames.thai,
    codes: ["th"],
  },
  {
    dictionaryLanguage: LanguageNames.indonesian,
    codes: ["id"],
  },
  {
    dictionaryLanguage: LanguageNames.russian,
    codes: ["ru", "ru-mo"],
  },
];
