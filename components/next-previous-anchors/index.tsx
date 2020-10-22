import React from "react";
import { useTranslation } from "react-i18next";

import { Anchor } from "../../components/anchor";
import styles from "./index.module.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  previous?: string;
  next?: string;
}

export function NextPreviousAnchors(props: IInterface) {
  const { t } = useTranslation();
  const { next, previous, className, ...rest } = props;

  return (
    <div
      className={`${className ?? ""} ${styles.root} ${
        previous ? styles["has-previous"] : ""
      }`}
      {...rest}
    >
      {previous && (
        <Anchor button to={previous}>
          {t("previous")}
        </Anchor>
      )}
      {next && (
        <Anchor button to={next} className={styles.next}>
          {t("next")}
        </Anchor>
      )}
    </div>
  );
}
