import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import "./style.scss";

export function PastTense() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "To conjugate a predicate in the past tense, either 았어 or 었어 is added to the predicate stem.",
        )}
        &nbsp;
        {t(
          "For predicates ending in a vowel, ㅆ becomes the conjugated predicate's 반침.",
        )}
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Section styleName="table">
          <span>{t("Predicate")}</span>
          <span>{t("Past Tense")}</span>
          <DefinitionPopup q="58272">먹다</DefinitionPopup>
          <span>먹었어</span>
          <DefinitionPopup q="92405">이쁘다</DefinitionPopup>
          <span>이뻤습니까</span>
          <DefinitionPopup q="27500">가다</DefinitionPopup>
          <span>갔다</span>
          <DefinitionPopup q="69514">오다</DefinitionPopup>
          <span>왔어요</span>
        </Section>
      </ArticleSection>
    </>
  );
}
