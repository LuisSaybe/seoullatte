import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function EParticle() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          The particle <DefinitionPopup q="86572">에</DefinitionPopup> attaches
          to nouns and can have several meanings.
        </Trans>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Location")}</SectionTitle>
        {t(
          "The particle 에 attaches to a noun to indicate that the target noun is the location of interest related to the following predicate which follows it.",
        )}
      </ArticleSection>
    </>
  );
}
