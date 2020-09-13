import React from "react";

import { Footer } from "web/js/component/footer";
import { Navigation } from "web/js/component/navigation";
import "./style.scss";

export function DefaultLayout(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div styleName="root">
      <Navigation />
      <div styleName="content">{props.children}</div>
      <Footer styleName="footer" />
    </div>
  );
}
