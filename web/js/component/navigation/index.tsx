import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { updateUserInterface } from "web/js/redux/user-interface/action";
import { routes } from "web/js/routes";
import { Anchor } from "web/js/component/anchor";
import { RootState } from "web/js/redux/reducer";
import { DictionarySearchInput } from "web/js/component/dictionary-search-input";
import { BackSVG } from "web/js/component/back-svg";
import { appendLocation, pop } from "web/js/redux/location/action";
import { HamburgerButton } from "web/js/component/hamburger-button";
import { Button } from "web/js/component/button";
import { LoaderLine } from "web/js/component/loader-line";
import styles from "./style.scss";

export function Navigation(props: React.HTMLProps<HTMLElement>) {
  const { t } = useTranslation();
  const locations = useSelector((state: RootState) => state.location);
  const lastLocation = locations[locations.length - 2];
  const [shouldBlurTime, setShouldBlurTime] = React.useState(null);
  const ref = useRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const isLoading = useSelector((state: RootState) => {
    const result = state.entityFetchState.entrySearch[`query=${searchValue}`];
    return result && !(result.body || result.error);
  });

  const burgerMenuOpen = useSelector(
    (state: RootState) => state.userInterface.burgerMenuOpen,
  );
  const onClick = () => {
    dispatch(
      updateUserInterface({
        burgerMenuOpen: !burgerMenuOpen,
      }),
    );
  };
  const onClickReturn = () => {
    dispatch(pop());
  };

  useEffect(() => {
    if (ref.current && shouldBlurTime) {
      ref.current.blur();
    }
  }, [shouldBlurTime, ref.current]);

  return (
    <nav {...props} styleName="root">
      <HamburgerButton onClick={onClick} styleName="hamburger-button" />
      {lastLocation ? (
        <Anchor
          onClick={onClickReturn}
          pushLocation={false}
          to={lastLocation}
          styleName="return-element"
        >
          <BackSVG styleName="return-svg" />
        </Anchor>
      ) : (
        <Button styleName="return-element" disabled>
          <BackSVG styleName="return-svg" />
        </Button>
      )}
      <div styleName="search-section">
        <label styleName="label" htmlFor="dictionary-search">
          {t("Search")}
        </label>
        <DictionarySearchInput
          ref={ref}
          id="dictionary-search"
          inputClassname={styles.searchInput}
          value={searchValue}
          onChange={(_, value) => {
            if (value.method === "type") {
              setSearchValue(value.newValue);
            } else if (value.method === "click" || value.method === "enter") {
              const pathname = routes.entry(value.newValue);
              dispatch(appendLocation(pathname));
              history.push(pathname);
            }
          }}
          onSuggestionSelected={() => {
            setSearchValue("");
            setShouldBlurTime(new Date());
          }}
          styleName="search-input-container"
        />
        <LoaderLine styleName={`loading-line ${isLoading ? "loading" : ""}`} />
      </div>
      <Anchor button styleName="settings-anchor" to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
