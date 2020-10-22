import React, { forwardRef } from "react";

import { UnstyledButton } from "../../components/unstyled-button";
import styles from "./index.module.scss";

export const UnstyledTextButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <UnstyledButton
      ref={ref}
      {...props}
      className={`${styles.root} ${props.className ?? ""}`}
    >
      {props.children}
    </UnstyledButton>
  );
});
