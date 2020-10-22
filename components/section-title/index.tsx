import React from "react";

import styles from "./style.module.scss";

export function SectionTitle(
  props: React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { className, ...rest } = props;
  return <h3 className={`${styles.root} ${className ?? ""}`} {...rest} />;
}
