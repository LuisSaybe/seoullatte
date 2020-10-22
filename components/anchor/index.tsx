import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { appendLocation } from "../../lib/redux/location/action";
import styles from "./index.module.scss";

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
  let derivedClassname = `${styles.root} ${className ?? ""}`;

  if (props.button) {
    derivedClassname += ` ${styles.button}`;
  }

  if (props.icon) {
    derivedClassname += ` ${styles.icon}`;
  }

  if (props.box) {
    derivedClassname += ` ${styles.box}`;
  }

  if (props.to) {
    return (
      <Link href={props.to}>
        <a {...rest} onClick={onClick} className={derivedClassname}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a className={derivedClassname} {...rest}>
      {props.children}
    </a>
  );
}

Anchor.defaultProps = {
  pushLocation: true,
};
