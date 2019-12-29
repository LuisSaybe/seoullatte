import { useReducer } from "react";

import { getLocalStorage, writeLocalStorage } from "web/js/storage";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE": {
      const copy = { ...action.data };
      delete copy.type;
      writeLocalStorage(copy);
      return getLocalStorage();
    }

    case "RESET": {
      writeLocalStorage();
      return getLocalStorage();
    }

    default:
      return state;
  }
}

export function useLocalStorage() {
  return useReducer(reducer, getLocalStorage());
}
