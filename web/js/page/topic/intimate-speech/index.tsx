import React from "react";
import { useTranslation } from "react-i18next";

import { ArticlePage } from "web/js/component/article-page";
import { ArticleSection } from "web/js/component/article-section";
import "./style.scss";

export function IntimateSpeech() {
  const { t } = useTranslation();

  return (
    <ArticlePage articleTitle={t("Initimate Speech Level")}>
      <ArticleSection></ArticleSection>
    </ArticlePage>
  );
}
