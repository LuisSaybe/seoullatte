import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { updateUserInterface } from "web/js/redux/user-interface/action";
import { routes } from "web/js/routes";
import { Anchor } from "web/js/component/anchor";
import { Button } from "web/js/component/button";
import { RootState } from "web/js/redux/reducer";
import "./style.scss";

export function Navigation(props: React.HTMLProps<HTMLElement>) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
    <nav className={props.className} styleName="root" {...props}>
      <Button aria-label={t("hamburger menu")} onClick={onClick} type="button">
        <div styleName="bar" />
        <div styleName="bar" />
        <div styleName="bar" />
      </Button>
      <Anchor button={true} to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
