import React from "react";

import { MarginSizeName } from "../../lib/interface/size";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  marginSize?: MarginSizeName;
}

export function Section(props: Props) {
  const { marginSize, className, ...rest } = props;
  const marginSizeNameToStyle = {
    [MarginSizeName.small]: styles.small,
    [MarginSizeName.medium]: styles.medium,
    [MarginSizeName.large]: styles.large,
  };
  const marginStyle = marginSizeNameToStyle[marginSize];

  return (
    <div
      {...rest}
      className={`${styles.root} ${className ?? ""} ${
        marginStyle ?? MarginSizeName.small
      }`}
    />
  );
}
