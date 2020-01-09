import { Definition } from "web/js/class/definition";
import { getEntityStoreHook } from "web/js/helper/reducer";
import { DispatchFetchId } from "web/js/interface";

function reducer(state, action) {
  switch (action.id) {
    case DispatchFetchId.VIEW_WORD: {
      return {
        ...state,
        [action.searchParams.get("q")]: new Definition(
          new DOMParser().parseFromString(action.body, "application/xml"),
        ),
      };
    }

    default:
      return state;
  }
}

export const useDefinitions = getEntityStoreHook(
  [DispatchFetchId.VIEW_WORD],
  reducer,
);
