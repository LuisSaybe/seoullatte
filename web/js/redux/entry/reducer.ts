import { Action } from "web/js/redux/entry/action";
import { Action as SearchAction } from "web/js/redux/entry-search/action";
import { Entry } from "web/js/class/entry";

export function entry(
  state: Record<string, Entry> = {},
  action,
): Record<string, Entry> {
  switch (action.type) {
    case Action.getWords: {
      if (action.data.body && action.data.body.length > 0) {
        const parts = new URL(action.data.response.url).pathname.split("/");
        const q = parts[parts.length - 1];
        return {
          ...state,
          [q]: new Entry(action.data.body[0]._source.xml),
        };
      }

      return state;
    }

    case SearchAction.search: {
      if (action.data.body) {
        return {
          ...state,
          ...Object.fromEntries(
            action.data.body.hits.map((entry) => [
              entry._id,
              new Entry(entry._source.xml),
            ]),
          ),
        };
      }

      return state;
    }
    default:
      return state;
  }
}
