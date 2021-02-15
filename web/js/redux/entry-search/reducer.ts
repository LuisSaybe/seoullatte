import { Action } from "web/js/redux/entry-search/action";

export function entrySearch(
  state: Record<string, string[]> = {},
  action,
): Record<string, string[]> {
  switch (action.type) {
    case Action.search: {
      if (action.data.response?.ok) {
        const urlSearch = new URL(action.data.response.url).search.substring(1);

        return {
          ...state,
          [urlSearch]: action.data.body.hits.map((entry) => entry._id),
        };
      }

      return state;
    }
  }
  return state;
}
