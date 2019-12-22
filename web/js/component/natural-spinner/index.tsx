import React from "react";

import { Spinner } from "web/js/component/spinner";

import "./style.scss";

interface IInterface {
  styleName?: string;
  className?: string;
  children?: React.ReactNode;
}

export function NaturalSpinner(props: IInterface) {
  const { children, ...rest } = props;

  return (
    <div styleName="root" {...rest}>
      <Spinner />
    </div>
  );
}
