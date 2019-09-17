import i18n from 'i18next';
import fr from 'common/i18n/fr/translation.json';
import { SUPPORTED_LANGUAGE_IDS } from 'common/models';

i18n.init({
  preload: SUPPORTED_LANGUAGE_IDS,
  fallbackLng: 'en',
  initImmediate: false,
  resources: {
    fr: {
      translation: fr
    }
  },
  interpolation: {
    escapeValue: false
  }
});

export const T = i18n.t.bind(i18n);
