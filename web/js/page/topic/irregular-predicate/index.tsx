import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import "./style.scss";

export function IrregularPredicate() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "Some predicates conjugate irregularly depending on their affixes, we go through all irregular conjugations in this section.",
      )}
      <ArticleSection>
        <ArticleTitle>{t("ㄷ Irregular Predicates")}</ArticleTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅂ Irregular Predicates")}</ArticleTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅅ Irregular Predicates")}</ArticleTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("르 Irregular Predicates")}</ArticleTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㄹ Irregular Predicates")}</ArticleTitle>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("으 Irregular Predicates")}</ArticleTitle>
      </ArticleSection>
    </>
  );
}
