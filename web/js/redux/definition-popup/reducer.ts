import { Action } from "web/js/redux/definition-popup/action";

interface State {
  openElements: Set<HTMLElement>;
}

const initialState: State = {
  openElements: new Set(),
};

export function definitionPopup(state = initialState, action): State {
  switch (action.type) {
    case Action.setRefOpen: {
      const openElements = new Set(state.openElements);

      if (action.data.open) {
        openElements.add(action.data.element);
      } else {
        openElements.delete(action.data.element);
      }

      return {
        ...state,
        openElements,
      };
    }

    case Action.setAllRefsClosed: {
      return {
        ...state,
        openElements: new Set(),
      };
    }

    default:
      return state;
  }
}
