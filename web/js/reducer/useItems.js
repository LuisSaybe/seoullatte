import _ from 'lodash';

import { getEntityStoreHook } from 'web/js/helper/reducer';
import {
  GET_ITEM,
  GET_EVENT_ITEMS,
  LOGOUT,
  GET_EVENT_PURCHASE_DATA
} from 'web/js/reducer/useFetch';

function reducer(state, action) {
  switch (action.type) {
    case GET_ITEM: {
      return _.merge({}, state, {
        [action.body._id]: action.body
      });
    }

    case GET_EVENT_ITEMS: {
      const entities = _.keyBy(action.body.entity, '_id');
      return {
        ...state,
        ...entities
      };
    }

    case GET_EVENT_PURCHASE_DATA: {
      const entities = _.keyBy(action.body.items, '_id');
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

export const useItems = getEntityStoreHook(
  [GET_ITEM, GET_EVENT_ITEMS, GET_EVENT_PURCHASE_DATA, LOGOUT],
  reducer
);
