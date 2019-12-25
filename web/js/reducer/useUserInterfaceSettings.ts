import { useReducer } from "react";
import { UserInterfaceDispatchType } from "../interface";

function reducer(state, action) {
  switch (action.type) {
    case UserInterfaceDispatchType.SET: {
      return { ...action.data };
    }

    case UserInterfaceDispatchType.MERGE: {
      return { ...state, ...action.data };
    }

    default:
      return state;
  }
}

export function useUserInterfaceSettings() {
  return useReducer(reducer, { language: null, burgerMenuOpen: false });
}
