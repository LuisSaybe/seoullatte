import { Language } from "common/model";

export const OBJECT_ID_REGEX_PORTION = "[a-f0-9]{24}";
export const getHashSelections = () => {
  const result = ["_", "-"];

  for (let index = "a".charCodeAt(0); index <= "z".charCodeAt(0); index++) {
    const letter = String.fromCharCode(index);
    result.push(letter, letter.toLocaleUpperCase());
  }

  for (let index = "0".charCodeAt(0); index <= "9".charCodeAt(0); index++) {
    result.push(String.fromCharCode(index));
  }

  return result;
};

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
