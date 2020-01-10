import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { DispatchUserInterfaceSettingsContext } from "web/js/context";
import { Operation } from "web/js/interface/reducer";
import { routes } from "web/js/routes";

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
      type: Operation.MERGE,
    });
  };

  return (
    <nav className={props.className} styleName="root" {...props}>
      <Button aria-label={t("hamburger menu")} onClick={onClick} type="button">
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Anchor button={true} to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </nav>
  );
}
