import { Entry } from "web/js/class/entry";

import { Action } from "web/js/redux/entry/action";

type State = Record<string, string>;

export function entry(state: State = {}, action): State {
  switch (action.type) {
    case Action.getWords: {
      if (action.body) {
        return { ...state, ...action.body };
      }
    }
    default:
      return state;
  }
}
