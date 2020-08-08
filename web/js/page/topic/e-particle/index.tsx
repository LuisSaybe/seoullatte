import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export default function EParticle() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t("The particle 에 attaches to nouns and can have several meanings.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Location")}</SectionTitle>
        <span styleName="text">
          {t(
            "The particle 에 attaches to a noun to indicate that the target noun is the location of interest related to the predicate which follows it.",
          )}
        </span>
        <Section>
          <DefinitionPopup q="60319">어디</DefinitionPopup>
          <DefinitionPopup q="86572">에</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="68796">있</DefinitionPopup>
          <DefinitionPopup q="86571">어요</DefinitionPopup>?
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Objective")}</SectionTitle>
        {t(
          "The particle 에 attaches to a noun which indicates that the noun was the objective of the predicate.",
        )}
        <Section>
          <DefinitionPopup q="60931">나</DefinitionPopup>
          <DefinitionPopup q="85853">는</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="20233">시험</DefinitionPopup>
          <DefinitionPopup q="86572" senseIndexes={[6]}>
            에
          </DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="85306">합격한</DefinitionPopup>
          <DefinitionPopup q="85033">다</DefinitionPopup>
        </Section>
      </ArticleSection>
    </>
  );
}
