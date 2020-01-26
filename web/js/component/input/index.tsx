import React from "react";

import "./style.scss";

interface IInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input(props: IInterface) {
  const { error, ...rest } = props;
  const inputStylename = error ? "root error" : "root";
  return <input styleName={inputStylename} {...rest} />;
}
