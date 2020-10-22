import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import { updateUserInterface } from "../../lib/redux/user-interface/action";
import { Anchor } from "../../components/anchor";
import { RootState } from "../../lib/redux/reducer";
import { DictionarySearchInput } from "../../components/dictionary-search-input";
import { BackSVG } from "../../components/back-svg";
import { appendLocation, pop } from "../../lib/redux/location/action";
import { HamburgerButton } from "../../components/hamburger-button";
import { Button } from "../../components/button";
import { EmptyPrefixRouter } from "../../lib/class/routes";
import styles from "./index.module.scss";

export function Navigation(props: React.HTMLProps<HTMLElement>) {
  const { className, ...rest } = props;
  const { t } = useTranslation();
  const locations = useSelector((state: RootState) => state.location);
  const lastLocation = locations[locations.length - 2];
  const [shouldBlurTime, setShouldBlurTime] = React.useState(new Date());
  const ref = useRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const router = useRouter();
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
    if (ref.current) {
      ref.current.blur();
    }
  }, [shouldBlurTime, ref.current]);

  return (
    <nav {...props} className={`${styles.root} ${className ?? ""}`}>
      <HamburgerButton
        onClick={onClick}
        className={styles["hamburger-button"]}
      />
      {lastLocation ? (
        <Anchor
          onClick={onClickReturn}
          pushLocation={false}
          to={lastLocation}
          className={styles["return-element"]}
        >
          <BackSVG className={styles["return-svg"]} />
        </Anchor>
      ) : (
        <Button className={styles["return-element"]} disabled>
          <BackSVG className={styles["return-svg"]} />
        </Button>
      )}
      <div className={styles["search-section"]}>
        <label className={styles.label} htmlFor="dictionary-search">
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
              const pathname = EmptyPrefixRouter.entry(value.newValue);
              dispatch(appendLocation(pathname));
              router.push(pathname);
            }
          }}
          onSuggestionSelected={() => {
            setSearchValue("");
            setShouldBlurTime(new Date());
          }}
          className={styles["search-input-container"]}
        />
      </div>
      <Anchor
        className={styles["settings-anchor"]}
        to={EmptyPrefixRouter.configuration()}
      >
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
