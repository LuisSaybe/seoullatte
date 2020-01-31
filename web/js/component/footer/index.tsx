import React from "react";
import { useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { routes } from "web/js/routes";
import "./style.scss";

export function Footer(props: React.HTMLAttributes<HTMLDivElement>) {
  const { t } = useTranslation();
  const { children, ...rest } = props;
  return (
    <div {...rest}>
      <Anchor to={routes.aboutUs()}>{t("about us")}</Anchor>
    </div>
  );
}
