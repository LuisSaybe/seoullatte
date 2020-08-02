import { Action } from "web/js/redux/entry-search/action";

const initialState = {};

export function entrySearch(
  state: Record<string, string[]> = initialState,
  action,
): Record<string, string[]> {
  switch (action.type) {
    case Action.search: {
      if (action.response?.ok) {
        const query = new URLSearchParams(
          new URL(action.response.url).search,
        ).get("query");

        return {
          ...state,
          [query]: action.body.map((entry) => entry._id),
        };
      }

      return state;
    }
  }
  return state;
}
