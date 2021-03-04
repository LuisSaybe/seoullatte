import { LanguageNames } from "../interface/korean";

export class Sense {
  public root: Element;

  constructor(root: Element) {
    this.root = root;
  }

  public getWord(language: LanguageNames, fallback: LanguageNames) {
    let result = null;

    for (const translation of this.root.querySelectorAll("translation")) {
      const transLang = translation.querySelector("trans_lang");
      const definition = translation.querySelector("trans_word");

      if (transLang.textContent === fallback) {
        result = definition.textContent;
      }

      if (transLang.textContent === language) {
        result = definition.textContent;
        break;
      }
    }

    return result;
  }

  public getDefinition(language: LanguageNames, fallback: LanguageNames) {
    let result = null;

    for (const translation of this.root.querySelectorAll("translation")) {
      const transLang = translation.querySelector("trans_lang");
      const definition = translation.querySelector("trans_dfn");

      if (transLang.textContent === fallback) {
        result = definition.textContent;
      }

      if (transLang.textContent === language) {
        result = definition.textContent;
        break;
      }
    }

    return result;
  }
}
