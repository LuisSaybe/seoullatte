import React from "react";

import { Navigation } from "web/js/component/navigation";
import { Footer } from "web/js/component/footer";
import "./style.scss";

export function DefaultLayout(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div styleName="root">
      <div styleName="content">
        <Navigation styleName="navigation" />
        {props.children}
      </div>
      <Footer styleName="footer" />
    </div>
  );
}
