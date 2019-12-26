import { useReducer } from "react";
import { reducer } from "web/js/helper/reducer";

export function useUserInterfaceSettings() {
  return useReducer(reducer, { language: null, burgerMenuOpen: false });
}
