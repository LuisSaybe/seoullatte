import { Action } from "web/js/redux/entry/action";
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
    default:
      return state;
  }
}
