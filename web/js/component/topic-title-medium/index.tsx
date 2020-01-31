import React from "react";

import "./style.scss";

export function TopicTitleMedium(
  props: React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { className, children, ...rest } = props;

  return (
    <h2 className={className} styleName="root" {...rest}>
      {children}
    </h2>
  );
}
