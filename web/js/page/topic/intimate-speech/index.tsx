import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import "./style.scss";

export function IntimateSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection></ArticleSection>
    </>
  );
}
