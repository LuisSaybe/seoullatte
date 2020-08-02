import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateUserInterface } from "web/js/redux/user-interface/action";
import { RootState } from "web/js/redux/reducer";
import "./style.scss";

interface IInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  button?: boolean;
  icon?: boolean;
  box?: boolean;
  canReturn?: boolean;
  resetReturnTo?: boolean;
}

export function Anchor(props: IInterface) {
  const {
    canReturn,
    box,
    children,
    to,
    className,
    button,
    icon,
    resetReturnTo,
    ...rest
  } = props;
  const dispatch = useDispatch();
  const locations = useSelector((state: RootState) => state.location);
  const onClick: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (
    e,
  ) => {
    if (canReturn) {
      dispatch(
        updateUserInterface({
          returnTo: locations[locations.length - 1].pathname,
        }),
      );
    }

    if (resetReturnTo) {
      dispatch(
        updateUserInterface({
          returnTo: null,
        }),
      );
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
        styleName={styleName}
        to={props.to}
        {...rest}
        onClick={onClick}
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
