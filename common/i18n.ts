import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "common/i18n/fr/translation.json";
import { SUPPORTED_LANGUAGE_IDS } from "common/model";

i18n.use(initReactI18next).init({
  initImmediate: false,
  keySeparator: "___",
  lng: "en",
  preload: SUPPORTED_LANGUAGE_IDS,
  resources: {
    fr: {
      translation: fr,
    },
  },
  returnEmptyString: false,
});

export default i18n;
