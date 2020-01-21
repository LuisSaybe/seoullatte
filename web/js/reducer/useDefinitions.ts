import { Definition } from "web/js/class/definition";
import { getEntityStoreHook } from "web/js/helper/reducer";
import { DispatchFetchId } from "web/js/interface/fetch";

function reducer(state, action) {
  switch (action.id) {
    case DispatchFetchId.GET_WORDS: {
      const entries = Object.keys(action.body).map((key) => [
        key,
        new Definition(action.body[key]),
      ]);

      return {
        ...state,
        ...Object.fromEntries(entries),
      };
    }

    case DispatchFetchId.VIEW_WORD: {
      return {
        ...state,
        [action.searchParams.get("q")]: new Definition(action.body),
      };
    }

    default:
      return state;
  }
}

export const useDefinitions = getEntityStoreHook(
  [DispatchFetchId.VIEW_WORD, DispatchFetchId.GET_WORDS],
  reducer,
);
