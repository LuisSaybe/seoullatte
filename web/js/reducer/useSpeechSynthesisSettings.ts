import { useReducer } from "react";

import { reducer } from "web/js/helper/reducer";

export function useSpeechSynthesisSettings() {
  return useReducer(reducer, {});
}
