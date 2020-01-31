import React from "react";

import "./style.scss";

export function SectionTitle(
  props: React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { children, ...rest } = props;

  return (
    <h3 styleName="root" {...rest}>
      {children}
    </h3>
  );
}
