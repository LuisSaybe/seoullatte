import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { getSettings } from "web/js/helper/settings";
import { Action } from "web/js/redux/entry-search/action";
import { DefaultLayout } from "web/js/component/default-layout";
import { useFetch } from "web/js/hook/useFetch";
import { RootState } from "web/js/redux/reducer";
import { SearchEntry } from "web/js/component/search-entry";
import { LoadingSVG } from "web/js/component/loading-svg";
import "./style.scss";

export function SearchPage() {
  const location = useLocation();
  const search = useFetch(Action.search);
  const settings = getSettings();
  const query = decodeURIComponent(location.search.substring(1));
  const entries = useSelector((state: RootState) => state.entrySearch[query]);

  console.log("query", query);

  useEffect(() => {
    if (!entries) {
      search(`${settings.api.url}/entry?${query}`);
    }
  }, [query, settings, entries]);

  return (
    <DefaultLayout>
      <div styleName="content">
        {!entries && <LoadingSVG styleName="loader" />}
        {entries?.map((q, index) => (
          <React.Fragment key={q}>
            {index > 0 && <div styleName="separator" />}
            <SearchEntry styleName="entry" q={q} />
          </React.Fragment>
        ))}
      </div>
    </DefaultLayout>
  );
}
