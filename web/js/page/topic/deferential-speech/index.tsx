import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function DeferentialSpeech() {
  const { t } = useTranslation();

  return (
    <ArticleSection>
      <div>
        {t(
          "The following endings are added to a predicate depending on whether the clause is declarative, interrogative, imperative or proposotive.",
        )}
      </div>
      <SectionTitle>
        {t("For predicates stems ending in a consonant")}
      </SectionTitle>
      <div styleName="table">
        <span>{t("Declarative")}</span>
        <span>{t("Interrogative")}</span>
        <span>{t("Imperative")}</span>
        <span>{t("Proposotive")}</span>
        <span>습니다</span>
        <span>습니까</span>
        <span>십시오</span>
        <span>읍시다</span>
      </div>
      <SectionTitle>{t("For predicates stems ending in a vowel")}</SectionTitle>
      <div styleName="table">
        <span>{t("Declarative")}</span>
        <span>{t("Interrogative")}</span>
        <span>{t("Imperative")}</span>
        <span>{t("Proposotive")}</span>
        <span>ㅂ니다</span>
        <span>ㅂ니까</span>
        <span>ㅂ시오</span>
        <span>ㅂ시다</span>
      </div>
      <Section>
        {t("ㅂ becomes the 받침 of the last syllable in the predicate.")}
      </Section>
      <SectionTitle>{t("Examples")}</SectionTitle>
      <div styleName="table-example">
        <span>{t("Predicate")}</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>먹다</span>
        <span>먹습니다</span>
        <span>먹습니까</span>
        <span>먹읍시오</span>
        <span>먹읍시다</span>
        <span>이다</span>
        <span>입니다</span>
        <span>입니까</span>
        <span>입시오</span>
        <span>입시다</span>
      </div>
    </ArticleSection>
  );
}
