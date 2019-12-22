import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ApplicationContext } from "web/js/context";
import { routes } from "web/js/routes";

import { Anchor } from "web/js/component/anchor";
import "./style.scss";

export function Header(props) {
  const { t } = useTranslation();
  const { userId } = useContext(ApplicationContext);
  let rightContent = null;

  if (userId === null) {
    rightContent = (
      <>
        <Anchor button={true} to={routes.configuration()}>
          {t("Settings")}
        </Anchor>
      </>
    );
  } else {
    rightContent = (
      <div styleName="actions">
        <Anchor to={routes.home()} button>
          {t("Home")}
        </Anchor>
        <Anchor to={routes.landing()} button onClick={props.onLogoutClick}>
          {t("Logout")}
        </Anchor>
      </div>
    );
  }

  return (
    <div styleName="root">
      <Link to={routes.landing()} styleName="title-link">
        <h1 styleName="title"></h1>
      </Link>
      {rightContent}
    </div>
  );
}

Header.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};
