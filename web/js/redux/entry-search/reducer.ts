import { Action } from "web/js/redux/entry-search/action";

const initialState = {};

export function entrySearch(
  state: Record<string, string[]> = initialState,
  action,
): Record<string, string[]> {
  switch (action.type) {
    case Action.search: {
      if (action.data.response?.ok) {
        const search = decodeURIComponent(
          new URLSearchParams(
            new URL(decodeURI(action.data.response.url)).search,
          ).toString(),
        );

        return {
          ...state,
          [search]: action.data.body.hits.map((entry) => entry._id),
        };
      }

      return state;
    }
  }
  return state;
}
