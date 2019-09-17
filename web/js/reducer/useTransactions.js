import _ from 'lodash';

import { getEntityStoreHook } from 'web/js/helper/reducer';

import {
  GET_ITEM_TRANSACTIONS,
  GET_USER_TRANSACTIONS,
  LOGOUT
} from 'web/js/reducer/useFetch';

function reducer(state, action) {
  switch (action.type) {
    case GET_USER_TRANSACTIONS:
    case GET_ITEM_TRANSACTIONS: {
      const entities = _.keyBy(action.body.entity, '_id');
      return {
        ...state,
        ...entities
      };
    }

    case LOGOUT: {
      return {};
    }

    default:
      return state;
  }
}

export const useTransactions = getEntityStoreHook(
  [GET_ITEM_TRANSACTIONS, GET_USER_TRANSACTIONS, LOGOUT],
  reducer
);
