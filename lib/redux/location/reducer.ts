import { Action } from "../../redux/location/action";

const MAXIMUM_HISTORY_LENGTH = 100;

export function location(state: string[] = [], action): string[] {
  switch (action.type) {
    case Action.appendLocation: {
      const next = [...state, action.data];
      const begin = Math.max(next.length - MAXIMUM_HISTORY_LENGTH, 0);
      return next.slice(begin, begin + MAXIMUM_HISTORY_LENGTH);
    }

    case Action.popLocation: {
      return state.slice(0, state.length - 1);
    }
  }

  return state;
}
