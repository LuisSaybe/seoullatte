import { useReducer } from "react";

import { getLanguage } from "web/js/helper/language";
import { reducer } from "web/js/helper/reducer";

export function useUserInterfaceSettings() {
  return useReducer(reducer, {
    burgerMenuOpen: false,
    language: getLanguage(window.navigator),
  });
}
