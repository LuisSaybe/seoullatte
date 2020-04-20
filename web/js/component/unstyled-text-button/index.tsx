import React, { forwardRef } from "react";

import { UnstyledButton } from "web/js/component/unstyled-button";
import "./style.scss";

export const UnstyledTextButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <UnstyledButton ref={ref} {...props} styleName="root">
      {props.children}
    </UnstyledButton>
  );
});
