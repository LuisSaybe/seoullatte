import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Action } from "web/js/redux/entry/action";
import { useFetch } from "web/js/hook/useFetch";
import { RootState } from "web/js/redux/reducer";
import { getSettings } from "web/js/helper/settings";

export function useEntry(q: string) {
  const getEntry = useFetch(Action.getWords);
  const loading = useSelector((state: RootState) => {
    const data = state.entityFetchState.entry[q];
    return data?.fetchArguments && !data?.response;
  });
  const error = useSelector((state: RootState) => {
    const data = state.entityFetchState.entry[q];
    return data?.error;
  });
  const entry = useSelector((state: RootState) => state.entry[q]);
  const settings = getSettings();

  useEffect(() => {
    if (!entry && !loading && !error) {
      getEntry(`${settings.api.url}/entry/${q}`);
    }
  }, [getEntry, entry, q, settings.api.url, loading, error]);

  return entry;
}
