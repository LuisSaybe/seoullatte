import React from "react";

import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  marginSize?: MarginSizeName;
}

export function Section(props: Props) {
  const { children, marginSize, ...rest } = props;

  return (
    <div {...rest} styleName={`root ${marginSize ?? ""}`}>
      {children}
    </div>
  );
}
