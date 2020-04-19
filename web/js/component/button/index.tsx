import React from "react";

import "./style.scss";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  let content;
  const { children, ...rest } = props;

  return (
    <button styleName="root" {...rest}>
      {children}
    </button>
  );
}
