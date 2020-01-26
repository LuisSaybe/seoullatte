import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function Counting() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "Korean numbers use to different systems for counting. A number is either a native Korean number or a Sino-Korean number",
        )}
        &nbsp;
        {t("Below we show list of both")}
        <Section>
          <SectionTitle>Native Korean Numbers</SectionTitle>
          <Section styleName="table">
            <span>하나</span>
            <span>1</span>
            <span>둘</span>
            <span>2</span>
            <span>열</span>
            <span>10</span>
            <span>스물</span>
            <span>20</span>
          </Section>
        </Section>
        <Section styleName="table"></Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
      </ArticleSection>
    </>
  );
}
