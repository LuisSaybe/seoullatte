import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";
import { Navigation } from "web/js/component/navigation";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div styleName="root">
      <Navigation />
      <div styleName="content">
        {t(
          "Sorry, the page you are looking for does not exist or you do not have permission to see it",
        )}
      </div>
    </div>
  );
}
