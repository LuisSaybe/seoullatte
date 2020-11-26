import { Action } from "web/js/redux/entry/action";
import { Action as SearchAction } from "web/js/redux/entry-search/action";
import { EntityFetchState } from "web/js/interface/entity-fetch-state";

export function entityFetchState(
  state: EntityFetchState = {
    entry: {},
    entrySearch: {},
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

    case SearchAction.search: {
      const search = decodeURIComponent(
        new URLSearchParams(
          new URL(decodeURI(action.data.fetchArguments.params)).search,
        ).toString(),
      );

      console.log("search", search);

      return {
        ...state,
        entrySearch: {
          ...state.entry,
          [search]: action.data,
        },
      };
    }

    default:
      return state;
  }
}
