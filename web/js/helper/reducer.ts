import { Reducer, useContext, useEffect, useReducer } from "react";

import { FetchStateContext } from "web/js/context";
import { StandardReducerOperation } from "../interface";

export function reducer(state, action) {
  switch (action.type) {
    case StandardReducerOperation.SET: {
      return { ...action.data };
    }

    case StandardReducerOperation.MERGE: {
      return { ...state, ...action.data };
    }

    default:
      return state;
  }
}

export const getEntityStoreHook = (
  keys: string[],
  entityReducer: Reducer<any, any>,
) => {
  return () => {
    const [state, dispatch] = useReducer(entityReducer, {});
    const fetchState = useContext(FetchStateContext);

    for (const type of keys) {
      const data = fetchState[type];

      useEffect(() => {
        if (data?.response?.ok) {
          dispatch(data);
        }
      }, [data]);
    }

    return [state, dispatch];
  };
};
