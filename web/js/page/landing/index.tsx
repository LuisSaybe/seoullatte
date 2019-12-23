import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { TopicRoute } from "common/routes";
import "./style.scss";

export function Landing() {
  const { t } = useTranslation();

  return (
    <div styleName="root">
      <Link to={TopicRoute.hangul}>{t("Hangul")}</Link>
    </div>
  );
}
