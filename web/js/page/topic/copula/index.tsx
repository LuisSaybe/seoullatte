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
          The copula <DefinitionPopup q="92101">이다</DefinitionPopup> and&nbsp;
          <DefinitionPopup q="26878">아니다</DefinitionPopup> attache directly
          to a noun.
        </Trans>
        &nbsp;
        {t("이다 and 아니다 are antonyms.")}
        &nbsp;
        {t(
          "이다 indicates that the subject of the clause is equivalent to the noun it attaches to.",
        )}
        &nbsp;
        {t(
          "아니다 indicates that the subject of the clause is not equivalent to the noun it attaches to.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <div>
          <DefinitionPopup q="15689">깅아지</DefinitionPopup>
          <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
          <DefinitionPopup q="18779">고양이</DefinitionPopup>
          <DefinitionPopup q="26878">아니다</DefinitionPopup>
        </div>
        <div>
          <DefinitionPopup q="17182">우리</DefinitionPopup>
          <DefinitionPopup q="30210">딸</DefinitionPopup>&nbsp;
          <DefinitionPopup q="62521">중학생</DefinitionPopup>
          <DefinitionPopup q="92101">이에요</DefinitionPopup>
        </div>
      </ArticleSection>
    </>
  );
}
