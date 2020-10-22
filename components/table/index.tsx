import React from "react";

import styles from "./style.module.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export function Table(props: IInterface) {
  const { children, className, columns, ...rest } = props;
  const style =
    typeof columns === "number"
      ? { gridTemplateColumns: new Array(props.columns).fill("1fr").join(" ") }
      : {};
  return (
    <div
      {...rest}
      style={style}
      className={`${styles.root} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
