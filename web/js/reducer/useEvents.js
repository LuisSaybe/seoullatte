import _ from 'lodash';

import { getEntityStoreHook } from 'web/js/helper/reducer';

import {
  GET_EVENT,
  GET_ORGANIZATION_EVENTS,
  LOGOUT,
  GET_EVENT_PURCHASE_DATA
} from 'web/js/reducer/useFetch';

function reducer(state, action) {
  switch (action.type) {
    case GET_EVENT: {
      return {
        ...state,
        [action.body._id]: action.body
      };
    }

    case GET_EVENT_PURCHASE_DATA: {
      return {
        ...state,
        [action.body.event._id]: action.body.event
      };
    }

    case GET_ORGANIZATION_EVENTS: {
      const events = _.keyBy(action.body.entity, '_id');
      return { ...state, ...events };
    }

    case LOGOUT: {
      return {};
    }

    default:
      return state;
  }
}

export const useEvents = getEntityStoreHook(
  [GET_EVENT, GET_ORGANIZATION_EVENTS, GET_EVENT_PURCHASE_DATA, LOGOUT],
  reducer
);
