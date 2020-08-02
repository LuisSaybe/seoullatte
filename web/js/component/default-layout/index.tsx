import React from "react";

import { Navigation } from "../navigation";
import "./style.scss";

export function DefaultLayout(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div styleName="root">
        <Navigation />
        <div {...props} styleName="content" />
      </div>
    </>
  );
}
