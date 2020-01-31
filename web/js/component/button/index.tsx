import React from "react";

import "./style.scss";

import { Color, Spinner } from "web/js/component/spinner";

interface IInterface {
  error?: boolean;
  loading?: boolean;
}

export function Button(
  props: IInterface & React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  let content;
  let styleName = "root";
  const { loading, children, error, ...rest } = props;

  if (props.error) {
    styleName += " error";
  } else {
    styleName += " main";
  }

  if (loading) {
    content = (
      <>
        <div styleName="children">{props.children}</div>
        <Spinner color={Color.WHITE} />
      </>
    );
    styleName += " loading";
  } else {
    content = children;
  }

  return (
    <button styleName={styleName} {...rest}>
      {content}
    </button>
  );
}
