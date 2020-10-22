import React from "react";

import styles from "./index.module.scss";

interface IInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input(props: IInterface) {
  const { error, ...rest } = props;
  const className =
    (error ? `${styles.root} ${styles.error}` : styles.root) +
    ` ${props.className ?? ""}`;
  return <input {...rest} className={className} />;
}
