export enum Language {
  en = "en",
  fr = "fr",
  ko = "ko",
  es = "es",
}

export const SUPPORTED_LANGUAGE_IDS = [Language.en, Language.fr];

export const getLanguage = (navigator: Navigator) => {
  let result;

  if (navigator && !result) {
    if (navigator.languages) {
      result = navigator.languages[0];
    }

    if (navigator.language) {
      result = navigator.language;
    }
  }

  return result || Language.en;
};
