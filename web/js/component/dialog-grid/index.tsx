import React from "react";

import "./style.scss";

export const DialogGrid: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  return <div {...props} styleName="root" />;
};
