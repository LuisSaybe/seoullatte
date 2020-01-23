import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function FormingSentences() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>{t(".")}</ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Location")}</SectionTitle>
        {t(
          "The particle 에 attaches to a noun to indicate that the target noun is the location of interest related to the following predicate which follows it.",
        )}
      </ArticleSection>
    </>
  );
}
