import React from "react";

import styles from "./index.module.scss";

export function TopicTitleMedium(
  props: React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { className, ...rest } = props;
  return <h2 className={`${styles.root} ${className ?? ""}`} {...rest} />;
}
