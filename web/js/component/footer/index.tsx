import React from "react";
import { useTranslation } from "react-i18next";

import { routes } from "web/js/routes";
import { Anchor } from "../anchor";
import "./style.scss";

export interface IIinterface {
  styleName?: string;
}

export function Footer(
  props: React.HTMLAttributes<HTMLDivElement> & IIinterface,
) {
  const { t } = useTranslation();
  const { children, ...rest } = props;
  return (
    <div {...rest}>
      <Anchor to={routes.aboutUs()}>{t("about us")}</Anchor>
    </div>
  );
}
