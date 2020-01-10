import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";

import { ArticleTitle } from "web/js/component/article-title";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function PlainSpeech() {
  const { t } = useTranslation();

  return (
    <ArticleSection>
      <Section>
        {t(
          "The plain speech level is conjugated differently based on 2 critera: whether the sentence is declarative, interrogative, imperative or proposotive.",
        )}
        &nbsp;
        {t(
          "The plain speech level is also conjugated based on whether the predicate is a copula, adjective or verb.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("For declarative sentences")}</SectionTitle>
        {t("If the predicate is an adjective then 다 is added to the stem.")}
        &nbsp;
        {t(
          "Otherwise 는다 is added to the stem when the predicate ends in a consonant or 은다 when the predicate ends in a vowel.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("For imperative sentences")}</SectionTitle>
        {t("라 is added to the stem.")}
      </Section>
      <Section>
        <SectionTitle>{t("For proposotive sentences")}</SectionTitle>
        {t("자 is added to the stem.")}
      </Section>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
      </ArticleSection>
    </ArticleSection>
  );
}
