import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Action } from "web/js/redux/entry/action";
import { useFetch } from "web/js/hook/useFetch";
import { RootState } from "web/js/redux/reducer";

export function useEntry(q: string) {
  const [dispatchGetEntry] = useFetch(Action.getWords);
  const entry = useSelector((state: RootState) => state.entry[q]);

  useEffect(() => {
    if (!entry) {
      dispatchGetEntry(`https://api.seoullatte.com/entry/${q}`);
    }
  }, [dispatchGetEntry, entry, q]);

  return entry;
}
