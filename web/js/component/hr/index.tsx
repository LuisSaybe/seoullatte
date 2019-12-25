import React from "react";

import "./style.scss";

interface IInterface extends React.HTMLProps<HTMLHRElement> {
  styleName?: string;
}

export function Hr(props: IInterface) {
  return <hr styleName="root" {...props} />;
}
