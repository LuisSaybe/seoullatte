import React from "react";

import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export function Table(props: IInterface) {
  const { children, ...rest } = props;
  const style =
    typeof props.columns === "number"
      ? { gridTemplateColumns: new Array(props.columns).fill("1fr").join(" ") }
      : {};
  return (
    <div style={style} {...rest} styleName="root">
      {children}
    </div>
  );
}
