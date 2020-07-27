import { Action } from "web/js/redux/entry/action";

export function entry(
  state: Record<string, string> = {},
  action,
): Record<string, string> {
  switch (action.type) {
    case Action.getWords: {
      if (action.body && action.body.length > 0) {
        const parts = new URL(action.response.url).pathname.split("/");
        const q = parts[parts.length - 1];
        return {
          ...state,
          [q]: action.body[0]._source.xml,
        };
      }
    }
    default:
      return state;
  }
}
