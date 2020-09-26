import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { BackSVG } from "web/js/component/back-svg";
import { HamburgerButton } from "web/js/component/hamburger-button";
import { SettingsSVG } from "web/js/component/settings-svg";
import { pop } from "web/js/redux/location/action";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { RootState } from "web/js/redux/reducer";
import { routes } from "web/js/routes";
import { Anchor } from "web/js/component/anchor";
import { InformationSVG } from "web/js/component/information-svg";
import "./style.scss";

export function Footer(props: React.HTMLAttributes<HTMLElement>) {
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
    <footer {...props} styleName="root">
      <Anchor styleName="about-us-anchor" to={routes.aboutUs()}>
        {t("about us")}
      </Anchor>
      {locations.length > 1 ? (
        <Link
          onClick={onClickReturn}
          styleName="back-element"
          to={locations[locations.length - 2]}
        >
          <BackSVG styleName="back-svg" />
        </Link>
      ) : (
        <button
          disabled={locations.length < 2}
          styleName="back-element"
          type="button"
        >
          <BackSVG styleName="back-svg" />
        </button>
      )}
      <HamburgerButton
        styleName="hamburger-button"
        onClick={onHamburgerMenuClick}
      />
      <Link to={routes.aboutUs()} styleName="information-anchor">
        <InformationSVG styleName="information-svg" />
      </Link>
      <Link to={routes.configuration()} styleName="settings-anchor">
        <SettingsSVG styleName="settings-svg" />
      </Link>
    </footer>
  );
}
