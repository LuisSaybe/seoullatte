import { Language } from "../../helper/language";
import { UserInterface } from "../../interface/user-interface";
import { Action } from "../../redux/user-interface/action";

const initialState = {
  burgerMenuOpen: false,
  language: Language.en,
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
