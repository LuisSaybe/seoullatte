import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useCanUseKoreanUtterance } from "web/js/hook/useCanUseKoreanUtterance";
import { Section } from "web/js/component/section";
import "./style.scss";

export default function Copula() {
  const { t } = useTranslation();
  const canUseKoreanUtterance = useCanUseKoreanUtterance();

  return (
    <>
      <ArticleSection>
        <Trans>
          The copula <DefinitionPopup q="92101">이다</DefinitionPopup> and&nbsp;
          <DefinitionPopup q="26878">아니다</DefinitionPopup> attach directly to
          a noun.
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
        <Section styleName="dialog-grid">
          <div>
            <DefinitionPopup q="15689">강아지</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="18779">고양이</DefinitionPopup>
            <DefinitionPopup q="26878">아니다</DefinitionPopup>
          </div>
          {canUseKoreanUtterance ? (
            <UtteranceButton text="강아지가 고양이아니다" />
          ) : (
            <div></div>
          )}
          <i>{t("A dog is not a cat.")}</i>
          <span></span>
          <div>
            <DefinitionPopup q="17182">우리</DefinitionPopup>
            <DefinitionPopup q="30210">딸</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62521">중학생</DefinitionPopup>
            <DefinitionPopup q="92101">이에요</DefinitionPopup>
          </div>
          {canUseKoreanUtterance ? (
            <UtteranceButton text="우리딸이 중학생이에요" />
          ) : (
            <div></div>
          )}
          <i>{t("Our daughter is a student.")}</i>
        </Section>
      </ArticleSection>
    </>
  );
}
