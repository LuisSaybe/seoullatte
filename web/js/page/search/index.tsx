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
import { DEFAULT_PAGE_SIZE } from "web/js/helper/paging";
import { Anchor } from "web/js/component/anchor";
import { routes } from "web/js/routes";
import "./style.scss";

export function SearchPage() {
  const location = useLocation();
  const search = useFetch(Action.search);
  const settings = getSettings();
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page"));
  params.delete("page");
  const previousParams = new URLSearchParams(params);
  const nextParams = new URLSearchParams(params);
  previousParams.append("page", (page - 1).toString());
  nextParams.append("page", (page + 1).toString());
  params.append("from", (DEFAULT_PAGE_SIZE * page).toString());
  params.append("size", DEFAULT_PAGE_SIZE.toString());
  const query = decodeURIComponent(params.toString());
  const entries = useSelector((state: RootState) => state.entrySearch[query]);

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
        {entries && (
          <div styleName="next-previous-buttons">
            {page === 0 ? (
              <div />
            ) : (
              <Anchor
                button
                to={`${routes.search()}?${previousParams.toString()}`}
              >
                Previous
              </Anchor>
            )}
            {entries?.length === DEFAULT_PAGE_SIZE && (
              <Anchor button to={`${routes.search()}?${nextParams.toString()}`}>
                Next
              </Anchor>
            )}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
