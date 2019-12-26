import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

export function Prenoun() {
  const { t } = useTranslation();

  return <>{t("A prenoun noun is")}</>;
}
