import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

export function HamburgerButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { t } = useTranslation();

  return (
    <button
      {...props}
      aria-label={t("hamburger menu")}
      type="button"
      styleName="root"
    >
      <div styleName="bar" />
      <div styleName="bar" />
      <div styleName="bar" />
    </button>
  );
}
