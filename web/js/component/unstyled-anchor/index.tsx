import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { appendLocation } from "web/js/redux/location/action";
import "./style.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  pushLocation?: boolean;
}

export function UnstyledAnchor(props: Props) {
  const { children, to, pushLocation, ...rest } = props;
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

  if (props.to) {
    return (
      <Link {...rest} to={props.to} onClick={onClick} styleName="root">
        {props.children}
      </Link>
    );
  }

  return (
    <a {...rest} onClick={onClick} styleName="root">
      {props.children}
    </a>
  );
}

UnstyledAnchor.defaultProps = {
  pushLocation: true,
};
