import _ from 'lodash';

import { getEntityStoreHook } from 'web/js/helper/reducer';

import {
  GET_USER_ORGANIZATIONS,
  GET_ORGANIZATION,
  LOGOUT
} from 'web/js/reducer/useFetch';

function reducer(state, action) {
  switch (action.type) {
    case GET_USER_ORGANIZATIONS: {
      const map = _.keyBy(action.body.entity, '_id');
      return _.merge({}, state, map);
    }

    case GET_ORGANIZATION: {
      return {
        ...state,
        [action.body._id]: action.body
      };
    }

    case LOGOUT: {
      return {};
    }

    default:
      return state;
  }
}

export const useOrganizations = getEntityStoreHook(
  [GET_USER_ORGANIZATIONS, GET_ORGANIZATION],
  reducer
);
