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
        {t(
          "There are two ideas which are prevalent throughout the Korean language.",
        )}
        &nbsp;
        {t(
          "Firstly, communication is largely context based. Information can be omitted when such information is understood from the context of the communication.",
        )}
        &nbsp;
        {t(
          "Secondly, the order of information is organized from general to specific.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Word order")}</SectionTitle>
        {t(
          "A simple Korean sentence is composed of a subject, an object and a predicate.",
        )}
        &nbsp;
        {t("The order in which they appear is subject, object and then verb.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Context based omission")}</SectionTitle>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Predicates")}</SectionTitle>
      </ArticleSection>
    </>
  );
}
