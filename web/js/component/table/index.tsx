import React from "react";

import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

export function Table(props: IInterface) {
  const { children, columns, ...rest } = props;
  const style =
    typeof columns === "number"
      ? { gridTemplateColumns: new Array(props.columns).fill("1fr").join(" ") }
      : {};
  return (
    <div style={style} {...rest} styleName="root">
      {children}
    </div>
  );
}
