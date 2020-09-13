import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { appendLocation } from "web/js/redux/location/action";
import "./style.scss";

interface IInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  button?: boolean;
  icon?: boolean;
  box?: boolean;
  pushLocation?: boolean;
}

export function Anchor(props: IInterface) {
  const {
    box,
    children,
    to,
    className,
    button,
    icon,
    pushLocation,
    ...rest
  } = props;
  const dispatch = useDispatch();
  const onClick: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (
    e,
  ) => {
    if (pushLocation) {
      dispatch(appendLocation(to));
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };
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
        to={props.to}
        {...rest}
        onClick={onClick}
        styleName={styleName}
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

Anchor.defaultProps = {
  pushLocation: true,
};
