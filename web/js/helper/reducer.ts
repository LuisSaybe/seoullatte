import { Reducer, useContext, useEffect, useReducer } from "react";

import { FetchStateContext } from "web/js/context";

export const getEntityStoreHook = (
  keys: string[],
  reducer: Reducer<any, any>,
) => {
  return () => {
    const [state, dispatch] = useReducer(reducer, {});
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
