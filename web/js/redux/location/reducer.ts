import { Action } from "web/js/redux/location/action";

export function location(state: Location[] = [], action): Location[] {
  switch (action.type) {
    case Action.appendLocation: {
      const nextState = [...state, action.data];
      return nextState.slice(nextState.length - 2);
    }
  }
  return state;
}
