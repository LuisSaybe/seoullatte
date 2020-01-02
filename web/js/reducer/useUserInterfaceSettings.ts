import { useReducer } from "react";

import { getLanguage } from "common/helpers";
import { reducer } from "web/js/helper/reducer";

export function useUserInterfaceSettings() {
  return useReducer(reducer, {
    burgerMenuOpen: false,
    language: getLanguage(window.navigator),
  });
}
