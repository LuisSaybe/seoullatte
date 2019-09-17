import _ from 'lodash';

import { getEntityStoreHook } from 'web/js/helper/reducer';

import {
  GET_USER,
  UPDATE_USER,
  LOGOUT
} from 'web/js/reducer/useFetch';

function reducer(state, action) {
  switch (action.type) {
    case GET_USER: {
      return _.merge({}, state, {
        [action.params.userId]: action.body
      });
    }

    case UPDATE_USER: {
      return _.merge({}, state, {
        [action.params.userId]: action.originalBody
      });
    }

    case LOGOUT: {
      return {};
    }

    default:
      return state;
  }
}

export const useUsers = getEntityStoreHook(
  [GET_USER, UPDATE_USER, LOGOUT],
  reducer
);
