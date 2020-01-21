import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function ExistenceAndPosession() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          The verb <DefinitionPopup q="68796">있다</DefinitionPopup> describes
          either existence or posession.
        </Trans>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
      </ArticleSection>
    </>
  );
}
