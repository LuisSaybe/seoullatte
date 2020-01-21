import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function Copula() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          The copula <DefinitionPopup q="92101">이다</DefinitionPopup> attaches
          directly to a noun.
        </Trans>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
      </ArticleSection>
    </>
  );
}
