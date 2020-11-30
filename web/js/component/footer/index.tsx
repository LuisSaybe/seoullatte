import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { BackSVG } from "web/js/component/back-svg";
import { HamburgerButton } from "web/js/component/hamburger-button";
import { SettingsSVG } from "web/js/component/settings-svg";
import { pop } from "web/js/redux/location/action";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { RootState } from "web/js/redux/reducer";
import { routes } from "web/js/routes";
import { Anchor } from "web/js/component/anchor";
import { InformationSVG } from "web/js/component/information-svg";
import { AndroidLogo } from "web/js/component/android-logo";
import { UnstyledAnchor } from "web/js/component/unstyled-anchor";
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
      <a
        styleName="google-play-anchor"
        href="https://play.google.com/store/apps/details?id=com.seoullatte.twa"
      >
        <AndroidLogo styleName="google-play-image" />
      </a>
      {locations.length > 1 ? (
        <UnstyledAnchor
          onClick={onClickReturn}
          styleName="back-element"
          to={locations[locations.length - 2]}
        >
          <BackSVG styleName="back-svg" />
        </UnstyledAnchor>
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
      <UnstyledAnchor to={routes.aboutUs()} styleName="information-anchor">
        <InformationSVG styleName="information-svg" />
      </UnstyledAnchor>
      <UnstyledAnchor to={routes.configuration()} styleName="settings-anchor">
        <SettingsSVG styleName="settings-svg" />
      </UnstyledAnchor>
    </footer>
  );
}
