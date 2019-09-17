import { useContext, useReducer, useEffect } from 'react';

import { FetchStateContext } from 'web/js/context';
import { safe } from 'web/js/helper';

export const getEntityStoreHook = (keys, reducer) => {
  return function() {
    const [ state, dispatch ] = useReducer(reducer, {});
    const fetchState = useContext(FetchStateContext);

    for (const type of keys) {
      const data = fetchState[type];

      useEffect(() => {
        if (safe(() => data.response.ok)) {
          dispatch(data);
        }
      }, [ data ]);
    }

    return [ state, dispatch ];
  };
};
