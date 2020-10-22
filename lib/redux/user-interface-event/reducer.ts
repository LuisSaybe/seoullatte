import { Action } from "../../redux/user-interface-event/action";

interface State {
  clickEvent?: React.MouseEvent;
}

export function userInterfaceEvent(state: State = {}, action): State {
  switch (action.type) {
    case Action.setClickEvent: {
      return {
        ...state,
        clickEvent: action.data,
      };
    }
  }

  return state;
}
