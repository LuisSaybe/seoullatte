import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.scss";

export function HamburgerButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { t } = useTranslation();

  return (
    <button
      {...props}
      aria-label={t("hamburger menu")}
      type="button"
      className={`${styles.root} ${props.className ?? ""}`}
    >
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </button>
  );
}
