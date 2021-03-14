import { getLanguage } from "web/js/helper/language";
import { getPrefersColorScheme } from "web/js/helper/user-interface";
import {
  PrefersColorSchemeSetting,
  UserInterface,
} from "web/js/interface/user-interface";
import { Action } from "web/js/redux/user-interface/action";

const initialState = {
  burgerMenuOpen: false,
  language: getLanguage(window.navigator),
  speechSynthesisSettings: {
    voices: [],
  },
  prefersColorScheme:
    getPrefersColorScheme() ?? PrefersColorSchemeSetting.light,
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
