import _ from "lodash";

import { getEntityStoreHook } from "web/js/helper/reducer";

import { DispatchFetchType } from "web/js/interface";

function reducer(state, action) {
  switch (action.type) {
    case DispatchFetchType.GET_USER: {
      return _.merge({}, state, {
        [action.params.userId]: action.body,
      });
    }

    case DispatchFetchType.UPDATE_USER: {
      return _.merge({}, state, {
        [action.params.userId]: action.originalBody,
      });
    }

    case DispatchFetchType.LOGOUT: {
      return {};
    }

    default:
      return state;
  }
}

export const useUsers = getEntityStoreHook(
  [
    DispatchFetchType.GET_USER,
    DispatchFetchType.UPDATE_USER,
    DispatchFetchType.LOGOUT,
  ],
  reducer,
);
