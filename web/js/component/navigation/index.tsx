import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { routes } from "web/js/routes";

import { DispatchUserInterfaceSettingsContext } from "web/js/context";
import { UserInterfaceDispatchType } from "web/js/interface";

import { Anchor } from "web/js/component/anchor";
import { Button } from "web/js/component/button";
import "./style.scss";

interface IInterface extends React.HTMLProps<HTMLElement> {
  styleName?: string;
}

export function Navigation(props: IInterface) {
  const { t } = useTranslation();
  const dispatchUserInterfaceSettings = useContext(
    DispatchUserInterfaceSettingsContext,
  );
  const onClick = () => {
    dispatchUserInterfaceSettings({
      data: {
        burgerMenuOpen: true,
      },
      type: UserInterfaceDispatchType.MERGE,
    });
  };

  return (
    <nav className={props.className} styleName="root" {...props}>
      <Button onClick={onClick} type="button">
        {t("menu")}
      </Button>
      <Link to={routes.landing()} styleName="title-link">
        <h1 styleName="title"></h1>
      </Link>
      <Anchor button={true} to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
