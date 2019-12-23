import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { routes } from "web/js/routes";

import { Anchor } from "web/js/component/anchor";
import "./style.scss";

export function Header() {
  const { t } = useTranslation();

  return (
    <div styleName="root">
      <Link to={routes.landing()} styleName="title-link">
        <h1 styleName="title"></h1>
      </Link>
      <Anchor button={true} to={routes.configuration()}>
        {t("Settings")}
      </Anchor>
    </div>
  );
}
