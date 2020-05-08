import React from "react";

import "./style.scss";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} styleName="root" />;
}
