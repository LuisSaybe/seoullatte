import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import { BackSVG } from "../../components/back-svg";
import { HamburgerButton } from "../../components/hamburger-button";
import { SettingsSVG } from "../../components/settings-svg";
import { pop } from "../../lib/redux/location/action";
import { updateUserInterface } from "../../lib/redux/user-interface/action";
import { RootState } from "../../lib/redux/reducer";
import { Anchor } from "../../components/anchor";
import { InformationSVG } from "../../components/information-svg";
import { EmptyPrefixRouter } from "lib/class/routes";
import styles from "./style.module.scss";

export function Footer(props: React.HTMLAttributes<HTMLElement>) {
  const { className, ...rest } = props;
  const { t } = useTranslation();
  const burgerMenuOpen = useSelector(
    (state: RootState) => state.userInterface.burgerMenuOpen,
  );
  const locations = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();
  const onHamburgerMenuClick = () => {
    dispatch(
      updateUserInterface({
        burgerMenuOpen: !burgerMenuOpen,
      }),
    );
  };
  const onClickReturn = () => {
    dispatch(pop());
  };

  return (
    <footer {...rest} className={`${styles.root} ${className ?? ""}`}>
      <Anchor
        className={styles["about-us-anchor"]}
        to={EmptyPrefixRouter.aboutUs()}
      >
        {t("about us")}
      </Anchor>
      {locations.length > 1 ? (
        <Link href={locations[locations.length - 2]}>
          <a className={styles["back-element"]} onClick={onClickReturn}>
            <BackSVG className={styles["back-svg"]} />
          </a>
        </Link>
      ) : (
        <button
          disabled={locations.length < 2}
          className={styles["back-element"]}
          type="button"
        >
          <BackSVG className={styles["back-svg"]} />
        </button>
      )}
      <HamburgerButton
        className={styles["hamburger-button"]}
        onClick={onHamburgerMenuClick}
      />
      <Link href={EmptyPrefixRouter.aboutUs()}>
        <a className={styles["information-anchor"]}>
          <InformationSVG className={styles["information-svg"]} />
        </a>
      </Link>
      <Link href={EmptyPrefixRouter.configuration()}>
        <a className={styles["settings-anchor"]}>
          <SettingsSVG className={styles["settings-svg"]} />
        </a>
      </Link>
    </footer>
  );
}
