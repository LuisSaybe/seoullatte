import { Action } from "web/js/redux/entry/action";
import { Action as SearchAction } from "web/js/redux/entry-search/action";
import { Entry } from "web/js/class/entry";

export function entry(
  state: Record<string, Entry> = {},
  action,
): Record<string, Entry> {
  switch (action.type) {
    case Action.getWords: {
      if (action.body && action.body.length > 0) {
        const parts = new URL(action.response.url).pathname.split("/");
        const q = parts[parts.length - 1];
        return {
          ...state,
          [q]: new Entry(action.body[0]._source.xml),
        };
      }
    }

    case SearchAction.search: {
      if (action.body) {
        return {
          ...state,
          ...Object.fromEntries(
            action.body.map((entry) => [
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
