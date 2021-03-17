import {
  LanguageNames,
  USER_AGENT_LANGUAGE_LANGUAGE_MAP,
} from "web/js/interface/korean";

export enum Language {
  en = "en",
  fr = "fr",
  ko = "ko",
  es = "es",
}

export const SUPPORTED_LANGUAGE_IDS = [Language.en, Language.fr];

export const getLanguage = (navigator: Navigator): string => {
  let result;

  if (navigator && !result) {
    if (navigator.languages) {
      result = navigator.languages[0];
    }

    if (navigator.language) {
      result = navigator.language;
    }
  }

  /* todo: refactor to exclude korean concepts */

  const dictionaryLanguage = USER_AGENT_LANGUAGE_LANGUAGE_MAP.find(
    ({ codes }) => codes.includes(result?.toLocaleLowerCase()),
  );

  if (dictionaryLanguage?.dictionaryLanguage === LanguageNames.english) {
    return Language.en;
  }

  if (dictionaryLanguage?.dictionaryLanguage === LanguageNames.french) {
    return Language.fr;
  }

  if (dictionaryLanguage?.dictionaryLanguage === LanguageNames.spanish) {
    return Language.es;
  }

  return result || Language.en;
};
