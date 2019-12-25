import React from "react";

import { Spinner } from "web/js/component/spinner";

import "./style.scss";

interface IInterface extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: string;
}

export function NaturalSpinner(props: IInterface) {
  const { className, children, ...rest } = props;

  return (
    <div className={className} styleName="root" {...rest}>
      <Spinner />
    </div>
  );
}
