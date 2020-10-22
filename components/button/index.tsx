import React from "react";

import styles from "./index.module.scss";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`${styles.root} ${props.className ?? ""}`} />
  );
}
