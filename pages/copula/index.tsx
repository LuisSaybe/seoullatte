import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "../../components/section";
import { DefinitionPopup } from "../../components/definition-popup";
import { UtteranceButton } from "../../components/utterance-button";
import { useCanUseKoreanUtterance } from "../../lib/hook/useCanUseKoreanUtterance";
import styles from "./index.module.scss";

export default function Copula() {
  const { t } = useTranslation();
  const canUseKoreanUtterance = useCanUseKoreanUtterance();

  return (
    <>
      <Section>
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
      </Section>
      <Section>
        <Section className={styles["dialog-grid"]}>
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
      </Section>
    </>
  );
}
