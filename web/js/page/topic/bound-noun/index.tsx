import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function BoundNoun() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "A bound noun always appears in combination with a modifier which appears before the noun.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <DefinitionPopup q="73277">할</DefinitionPopup>
        &nbsp;
        <DefinitionPopup q="15615">수</DefinitionPopup>
        &nbsp;
        <DefinitionPopup q="89917">없어요</DefinitionPopup>
      </ArticleSection>
    </>
  );
}
