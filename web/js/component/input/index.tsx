import React from "react";

import "./style.scss";

interface IInterface {
  error?: boolean;
}

export function Input(props: IInterface & React.InputHTMLAttributes<HTMLInputElement>) {
  const { error, ...rest } = props;
  const inputStylename = error ? "root error" : "root";
  return <input styleName={inputStylename} { ...rest } />;
}
