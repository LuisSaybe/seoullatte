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
          "To conjugate a predicate in the past tense, a past tense marker is added to a predicate.",
        )}
        <div>
          {t(
            "For predicate stems ending in a vowel, ㅆ is added as the stem's 받침.",
          )}
        </div>
        <div>
          {t(
            "For predicates ending in a consonant, 었 or 았 is added to the predicate's stem.",
          )}
        </div>
        <div>
          {t(
            "When an additional 었 is added to the first paste tense marker, the predicate's meaning is becomes more remote than the recent past. For example, 갔었다 or 이었었어요",
          )}
        </div>
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
