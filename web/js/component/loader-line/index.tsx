import React from "react";

import "./style.scss";

export function LoaderLine(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} styleName="root">
      <div styleName="blue-line"></div>
    </div>
  );
}
