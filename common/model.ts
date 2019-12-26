import * as Hangul from "hangul-js";

import { BRIGHT_VOWELS } from "common/enum";
import { IPredicate } from "common/interface";

export enum Language {
  en = "en",
  fr = "fr",
  ko = "ko",
  es = "es",
}

export const SUPPORTED_LANGUAGE_IDS = [Language.en, Language.fr];

export class Predicate implements IPredicate {
  public name;
  public speechLevel;

  public toString() {
    const letters = Hangul.disassemble(this.name);

    for (let index = letters.length - 1; index > -1; index--) {
      const letter = letters[0];

      if (BRIGHT_VOWELS.includes(letter)) {
      }
    }
  }
}
