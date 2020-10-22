import React, { forwardRef } from "react";

import styles from "./index.module.scss";

export const UnstyledButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`${styles.root} ${props.className ?? ""}`}
    >
      {props.children}
    </button>
  );
});
