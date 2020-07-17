import { getLanguage } from "web/js/helper/language";

import { UserInterface } from "web/js/interface/user-interface";
import { Action } from "web/js/redux/user-interface/action";

const initialState = {
  returnTo: null,
  burgerMenuOpen: false,
  language: getLanguage(window.navigator),
  speechSynthesisSettings: {
    voices: [],
  },
};

export function userInterface(
  state: UserInterface = initialState,
  action,
): UserInterface {
  switch (action.type) {
    case Action.update: {
      return { ...state, ...action.data };
    }
  }
  return state;
}
