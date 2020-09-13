import { Action } from "web/js/redux/location/action";

export function location(state: string[] = [], action): string[] {
  switch (action.type) {
    case Action.appendLocation: {
      return [...state, action.data];
    }

    case Action.popLocation: {
      return state.slice(0, state.length - 1);
    }
  }

  return state;
}
