import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function FormingSentences() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t("A Korean clause contains a subject and an inflected predicate.")}
        &nbsp;
        {t(
          "In the case of transitive verb, a direct object will also be present.",
        )}
      </ArticleSection>
    </>
  );
}
