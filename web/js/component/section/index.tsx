import React from "react";

import "./style.scss";

export function Section(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, ...rest } = props;

  return (
    <div {...rest} styleName="root">
      {children}
    </div>
  );
}
