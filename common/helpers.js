import { Language } from 'common/models';
import { T } from 'common/i18n';

import { Currency } from 'common/models';

export const CURRENCY_AND_LABELS = [
  [ T('US Dollar'), Currency.USD ],
  [ T('Canadian Dollar'), Currency.CAD ],
  [ T('British Pounds'), Currency.GBP ],
  [ T('Euro'), Currency.EUR ],
  [ T('Japanese Yen'), Currency.JPY ],
  [ T('Korean Won'), Currency.KRW ]
].map(([ label, id ]) => ({ label, id }));

export const getMinimumChargeAmount = (currency) => {
  if (currency === Currency.KRW) {
    return 3000;
  }

  if (currency === Currency.JPY) {
    return 400;
  }

  return 3;
};

export const OBJECT_ID_REGEX_PORTION = '[a-f0-9]{24}';
export const getHashSelections = () => {
  const result = ['_', '-'];

  for (let index = 'a'.charCodeAt(0); index <= 'z'.charCodeAt(0); index++) {
    const letter = String.fromCharCode(index);
    result.push(letter, letter.toLocaleUpperCase());
  }

  for (let index = '0'.charCodeAt(0); index <= '9'.charCodeAt(0); index++) {
    result.push(String.fromCharCode(index));
  }

  return result;
};

export const getUserLanguage = (user = null, navigator = null) => {
  let result = null;

  if (user !== null  && user.lastLanguage !== null) {
    result = user.lastLanguage;
  }

  if (navigator !== null && result === null) {
    if (navigator.languages) {
      result = navigator.languages[0];
    }

    if (navigator.language) {
      result = navigator.language;
    }
  }

  if (result !== null) {
    return result;
  }

	return Language.en;
};

export const getNavigatorLanguage = (navigator = null) => {
	return getUserLanguage(null, navigator);
};
