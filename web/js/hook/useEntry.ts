import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Action } from "web/js/redux/entry/action";
import { useFetch } from "web/js/hook/useFetch";
import { RootState } from "web/js/redux/reducer";
import { getSettings } from "web/js/helper/settings";

export function useEntry(q: string) {
  const getEntry = useFetch(Action.getWords);
  const entry = useSelector((state: RootState) => state.entry[q]);
  const isFetching = useSelector((state: RootState) => {
    const fetchState = state.entityFetchState.entry[q];
    const didRespond = fetchState?.body || fetchState?.error;
    return Boolean(fetchState) && !didRespond;
  });
  const settings = getSettings();

  useEffect(() => {
    if (entry || isFetching) {
      return;
    }

    if (q === "17199") {
      console.log(q, settings.api.url, entry, isFetching);
    }

    getEntry(`${settings.api.url}/entry/${q}`);
  }, [q, settings.api.url, entry, isFetching]);

  return entry;
}
