import { Currency } from 'common/models';

export const hasMinorUnits = currency => {
  return currency === Currency.EUR ||
    currency === Currency.USD ||
    currency === Currency.CAD ||
    currency === Currency.GBP;
};
