import React from "react";

import { ContentLoader } from "web/js/component/content-loader";
import "./style.scss";

export function LoadingArticle() {
  return <ContentLoader styleName="loader-text" textBlocks={11} />;
}
