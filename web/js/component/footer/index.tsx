import React from "react";
import { useTranslation } from "react-i18next";

import { routes } from "web/js/routes";
import { Anchor } from "../anchor";
import "./style.scss";

export interface IIinterface extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: string;
}

export function Footer(props: IIinterface) {
  const { t } = useTranslation();
  const { children, ...rest } = props;
  return (
    <div {...rest}>
      <Anchor to={routes.aboutUs()}>{t("about us")}</Anchor>
    </div>
  );
}
