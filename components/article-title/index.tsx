import React from "react";

import styles from "./index.module.scss";

export function ArticleTitle(
  props: React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { children, className, ...rest } = props;

  return (
    <h1 {...rest} className={`${styles.root} ${className ?? ""}`}>
      {children}
    </h1>
  );
}
