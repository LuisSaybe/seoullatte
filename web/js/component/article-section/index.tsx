import _ from "lodash";
import React from "react";

import "./style.scss";

export function ArticleSection(props: React.HTMLAttributes<HTMLElement>) {
  const { children, ...rest } = props;

  return (
    <section styleName="root" {...rest}>
      {children}
    </section>
  );
}
