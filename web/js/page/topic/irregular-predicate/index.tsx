import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import "./style.scss";

export function IrregularPredicate() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "Some predicates conjugate irregularly depending on their suffixes, we go through all irregular conjugations in this section.",
      )}
      <ArticleSection>
        <ArticleTitle>{t("ㄷ Irregular Predicates")}</ArticleTitle>
        {t(
          "If a predicate is ㄷ-irregular, then ㄷ will become ㄹ when joined with a suffix that starts with a vowel.",
        )}
        <ArticleSection>
          <Section styleName="table">
            <span>{t("Predicate")}</span>
            <span>{t("Conjugation")}</span>
            <span>{t("Irregular")}</span>
            <DefinitionPopup q="69471">묻다</DefinitionPopup>
            <span>물어</span>
            <span>yes</span>
            <DefinitionPopup q="57289">닫다</DefinitionPopup>
            <span>닫아</span>
            <span>no</span>
          </Section>
        </ArticleSection>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅂ Irregular Predicates")}</ArticleTitle>
        {t(
          "If a predicate is ㅂ-irregular, then ㅂ will become 오 or 우 when joined with a suffix that starts with a vowel.",
        )}
        <Section styleName="table">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="71290">아름답다</DefinitionPopup>
          <span>아름다워</span>
          <span>yes</span>
          <DefinitionPopup q="17174">입다</DefinitionPopup>
          <span>입어</span>
          <span>no</span>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅅ Irregular Predicates")}</ArticleTitle>
        {t(
          "If a predicate is ㅅ-irregular, then ㅅ will be deleted when joined with a suffix that starts with a vowel.",
        )}
        <Section styleName="table">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="62354">낫다</DefinitionPopup>
          <span>나아요</span>
          <span>yes</span>
          <DefinitionPopup q="71461">웃다</DefinitionPopup>
          <span>웃어요</span>
          <span>no</span>
        </Section>
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
