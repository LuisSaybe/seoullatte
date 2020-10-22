import React from "react";

import styles from "./style.module.scss";

export function DialogGrid(props) {
  const { className, ...rest } = props;
  return <div {...rest} className={`${styles.root} ${className ?? ""}`} />;
}
