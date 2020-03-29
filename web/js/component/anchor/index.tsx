import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

interface IInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  button?: boolean;
  icon?: boolean;
  box?: boolean;
}

export function Anchor(props: IInterface) {
  const { box, children, to, className, button, icon, ...rest } = props;
  let styleName = "root";

  if (props.button) {
    styleName += " button";
  }

  if (props.icon) {
    styleName += " icon";
  }

  if (props.box) {
    styleName += " box";
  }

  if (props.to) {
    return (
      <Link
        className={props.className}
        styleName={styleName}
        to={props.to}
        {...rest}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <a className={props.className} styleName={styleName} {...rest}>
      {props.children}
    </a>
  );
}
