import React from "react";
import { useTranslation } from "react-i18next";

import { ArticlePage } from "web/js/component/article-page";
import "./style.scss";

export function BoundNoun() {
  const { t } = useTranslation();

  return <ArticlePage articleTitle={t("Bound Noun")}></ArticlePage>;
}
