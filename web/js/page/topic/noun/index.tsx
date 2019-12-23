import React from "react";
import { useTranslation } from "react-i18next";

import { ArticlePage } from "web/js/component/article-page";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import "./style.scss";

export function Noun() {
  const { t } = useTranslation();

  return (
    <ArticlePage articleTitle={t("Nouns")}>
      <ArticleSection></ArticleSection>
    </ArticlePage>
  );
}
