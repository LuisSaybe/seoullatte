import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "web/i18n/fr/translation.json";
import { getLanguage, SUPPORTED_LANGUAGE_IDS } from "web/js/helper/language";

export function loadi18n(window: Window) {
  i18n.use(initReactI18next).init({
    initImmediate: false,
    keySeparator: false,
    lng: getLanguage(window.navigator),
    nsSeparator: false,
    preload: SUPPORTED_LANGUAGE_IDS,
    resources: {
      fr: {
        translation: fr,
      },
    },
    returnEmptyString: false,
  });
}
