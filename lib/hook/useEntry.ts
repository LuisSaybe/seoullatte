import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Action } from "../redux/entry/action";
import { useFetch } from "../hook/useFetch";
import { RootState } from "../redux/reducer";
import { useSettings } from "./useSettings";

export function useEntry(q: string) {
  const getEntry = useFetch(Action.getWords);
  const settings = useSettings();
  const loading = useSelector((state: RootState) => {
    const data = state.entityFetchState.entry[q];
    return data?.fetchArguments && !data?.response;
  });
  const error = useSelector((state: RootState) => {
    const data = state.entityFetchState.entry[q];
    return data?.error;
  });
  const entry = useSelector((state: RootState) => state.entry[q]);

  useEffect(() => {
    if (!entry && !loading && !error) {
      getEntry(`${settings.api.url}/entry/${q}`);
    }
  }, [getEntry, entry, q, settings.api.url, loading, error]);

  return entry;
}
