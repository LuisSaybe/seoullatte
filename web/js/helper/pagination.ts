import _ from "lodash";

import { getEntityStoreHook } from "web/js/helper/reducer";

export function getPaginationReducer(type, paramId) {
  return function reducer(state, action) {
    switch (action.type) {
      case type: {
        const id = action.params[paramId];
        const previous = state[id];
        const pages = previous ? [...previous.pages] : [];
        pages[action.options.query.page] = action.body.entity.map(
          ({ _id }) => _id,
        );

        return _.merge({}, state, {
          [id]: {
            count: action.body.count,
            pages,
          },
        });
      }

      default:
        return state;
    }
  };
}

export function getPaginationStoreHook(key, paramId) {
  return getEntityStoreHook([key], getPaginationReducer(key, paramId));
}
