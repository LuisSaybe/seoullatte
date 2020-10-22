import React from "react";

import styles from "./index.module.scss";

export function Subsection(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={`${styles.root} ${className ?? ""}`}>
      {children}
    </div>
  );
}
