import React, { forwardRef } from "react";

import "./style.scss";

export const UnstyledButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button ref={ref} {...props} styleName="root">
      {props.children}
    </button>
  );
});
