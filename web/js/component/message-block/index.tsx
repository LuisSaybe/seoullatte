import React from "react";

import "./style.scss";

export class MessageBlockType {
  public static main = "main";
  public static success = "success";
  public static error = "error";
  public static warning = "warning";
}

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  type: MessageBlockType;
}

export function MessageBlock(props: IInterface) {
  const styleName = "root " + props.type;
  const { type, children, ...rest } = props;

  return (
    <div styleName={styleName} {...rest}>
      {children}
    </div>
  );
}
