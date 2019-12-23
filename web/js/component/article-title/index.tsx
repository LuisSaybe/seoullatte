import _ from "lodash";
import React from "react";

import "./style.scss";

export function ArticleTitle(
  props: React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { children, ...rest } = props;

  return (
    <h1 styleName="root" {...rest}>
      {children}
    </h1>
  );
}
