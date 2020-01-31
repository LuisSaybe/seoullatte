import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./style.scss";

interface IInterface {
  styleName?: string;
  className?: string;
  color?: Color;
}

export enum Color {
  MAIN = "main",
  WHITE = "white",
}

export function Spinner(props: IInterface) {
  const styleName = "root " + (props.color ? props.color : Color.MAIN);
  const { color, className, ...rest } = props;

  return (
    <FontAwesomeIcon
      className={className}
      styleName={styleName}
      icon={faSyncAlt}
      {...rest}
    />
  );
}
