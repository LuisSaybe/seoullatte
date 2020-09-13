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
import { pop } from "web/js/redux/location/action";
import styles from "./style.scss";

export function Navigation(props: React.HTMLProps<HTMLElement>) {
  const { t } = useTranslation();
  const locations = useSelector((state: RootState) => state.location);
  const lastLocation = locations[locations.length - 2];
  const [shouldBlur, setShouldBlur] = React.useState(false);
  const ref = useRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
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
    if (shouldBlur) {
      ref.current.blur();
      setShouldBlur(false);
    }
  }, [shouldBlur, ref.current]);

  return (
    <nav {...props} styleName="root">
      <button
        styleName="hamburger-button"
        aria-label={t("hamburger menu")}
        onClick={onClick}
        type="button"
      >
        <div styleName="bar" />
        <div styleName="bar" />
        <div styleName="bar" />
      </button>
      {lastLocation && (
        <Anchor
          onClick={onClickReturn}
          pushLocation={false}
          to={lastLocation}
          styleName="return-button"
        >
          <BackSVG styleName="return-svg" />
        </Anchor>
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
              history.push(routes.entry(value.newValue));
            }
          }}
          onSuggestionSelected={() => {
            setSearchValue("");
            setShouldBlur(true);
          }}
          styleName="search-input-container"
        />
      </div>
      <Anchor styleName="settings-button" to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
