import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

export function Error() {
  const { t } = useTranslation();

  return (
    <div styleName="root">
      <div>{t("Sorry we are not able to load your data")}</div>
    </div>
  );
}
