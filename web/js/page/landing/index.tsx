import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { routes } from "web/js/routes";

import "./style.scss";

export function Landing() {
  const { t } = useTranslation();

  return (
    <div styleName="root">
      <Link to={routes.hangul()}>{t("test")}</Link>
    </div>
  );
}
