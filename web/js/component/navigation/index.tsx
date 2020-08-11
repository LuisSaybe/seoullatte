import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { updateUserInterface } from "web/js/redux/user-interface/action";
import { routes } from "web/js/routes";
import { Anchor } from "web/js/component/anchor";
import { Button } from "web/js/component/button";
import { RootState } from "web/js/redux/reducer";
import { DictionarySearchInput } from "web/js/component/dictionary-search-input";
import styles from "./style.scss";

export function Navigation(props: React.HTMLProps<HTMLElement>) {
  const { t } = useTranslation();
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

  return (
    <nav {...props} styleName="root">
      <Button aria-label={t("hamburger menu")} onClick={onClick} type="button">
        <div styleName="bar" />
        <div styleName="bar" />
        <div styleName="bar" />
      </Button>
      <div styleName="search-section">
        <label styleName="label" htmlFor="dictionary-search">
          {t("Search")}
        </label>
        <DictionarySearchInput
          id="dictionary-search"
          inputClassname={styles.searchInput}
          value={searchValue}
          onChange={(_, value) => {
            if (value.method === "type") {
              setSearchValue(value.newValue);
            } else if (value.method === "click") {
              history.push(routes.entry(value.newValue));
            }
          }}
          onSuggestionSelected={() => {
            setSearchValue("");
          }}
          styleName="search-input-container"
        />
      </div>
      <Anchor button={true} to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
