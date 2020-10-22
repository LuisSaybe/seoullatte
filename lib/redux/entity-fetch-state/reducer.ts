import { Action } from "../entry/action";
import { EntityFetchState } from "../../interface/entity-fetch-state";

export function entityFetchState(
  state: EntityFetchState = {
    entry: {},
  },
  action,
): EntityFetchState {
  switch (action.type) {
    case Action.getWords: {
      const url = new URL(action.data.fetchArguments.params);
      const q = url.pathname.split("/")[2];

      return {
        ...state,
        entry: {
          ...state.entry,
          [q]: action.data,
        },
      };
    }
    default:
      return state;
  }
}
