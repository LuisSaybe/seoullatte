import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function Desire() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          Desire is acheived in the by the usage of the auxiliary adjecive&nbsp;
          <DefinitionPopup q="62657">싶다</DefinitionPopup>
        </Trans>
        {t(
          "고 싶다 is added to a verb stem when a first person speak indicates their desire to perform the verb.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
      </ArticleSection>
    </>
  );
}
