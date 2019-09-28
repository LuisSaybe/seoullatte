import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from 'common/i18n/fr/translation.json';
import { SUPPORTED_LANGUAGE_IDS } from 'common/models';

i18n
.use(initReactI18next)
.init({
  preload: SUPPORTED_LANGUAGE_IDS,
  fallbackLng: 'en',
  initImmediate: false,
  returnEmptyString: false,
  resources: {
    fr: {
      translation: fr
    }
  },
  interpolation: {
    escapeValue: false
  },
  react: {
    hashTransKey: function(defaultValue) {
      console.log('defaultValue', defaultValue);
      return defaultValue;
    },
  }
});

export default i18n;
