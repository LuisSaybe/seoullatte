import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import "./style.scss";

export function Prenoun() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t("A prenoun is a noun which can be used to modify another noun")}
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
      </ArticleSection>
    </>
  );
}
