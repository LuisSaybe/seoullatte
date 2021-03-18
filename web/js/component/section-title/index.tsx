import React from "react";

import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  marginSize?: MarginSizeName;
}

export function SectionTitle(props: Props) {
  const { children, marginSize, ...rest } = props;

  return (
    <div {...rest} styleName={`root ${marginSize ?? ""}`}>
      {children}
    </div>
  );
}
