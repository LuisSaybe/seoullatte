import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useCanUseKoreanUtterance } from "web/js/hook/useCanUseKoreanUtterance";
import { DialogGrid } from "web/js/component/dialog-grid";
import "./style.scss";
import { MarginSizeName } from "web/js/interface/size";
import { Anchor } from "web/js/component/anchor";
import { TopicRoute } from "web/js/interface/route";

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
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
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
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
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
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          이다 and 아니다 are conjugated irregularly in the&nbsp;
          <Anchor to={TopicRoute.politeSpeech}>polite</Anchor> and&nbsp;
          <Anchor to={TopicRoute.intimateSpeech}>intimate</Anchor> speech level.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          <DefinitionPopup q="92101">이</DefinitionPopup>
          <DefinitionPopup q="80806">야</DefinitionPopup> follows a noun which
          ends in a consonant in the intimate speech level.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="84999">소개할</DefinitionPopup>
            <DefinitionPopup q="80981">게</DefinitionPopup>.&nbsp;
            <DefinitionPopup q="67258">얘</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="84426">내</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70748">동생</DefinitionPopup>
            <DefinitionPopup q="92101">이</DefinitionPopup>
            <DefinitionPopup q="80806">야</DefinitionPopup>
          </div>
          <UtteranceButton text="소개할게. 얘는 내 동생이야" />
          <i>I will introduce (him). He is my younger brother.</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "야 follows a noun which ends in a vowel in the intimate speech level.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="64390">너</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62522">지금</DefinitionPopup>&nbsp;
            <DefinitionPopup q="60319">어디</DefinitionPopup>
            <DefinitionPopup q="80806">야</DefinitionPopup>
          </div>
          <UtteranceButton text="너 지금 어디야?" />
          <i>Where are you now?</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "이에요 follows a noun which ends in a consonant in the polite speech level.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="27364">고향</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68893">대전</DefinitionPopup>
            <DefinitionPopup q="92101">이</DefinitionPopup>
            <DefinitionPopup q="86106">에요?</DefinitionPopup>
          </div>
          <UtteranceButton text="고향이 대전이에요?" />
          <i>Is your hometown Daejon?</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "예요 follows a noun which ends in a vowel in the polite speech level.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="62818">선생님</DefinitionPopup>,&nbsp;
            <DefinitionPopup q="75802">종이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="85761">로</DefinitionPopup>&nbsp;
            <DefinitionPopup q="15320">가려진</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71687">이</DefinitionPopup>
            <DefinitionPopup q="65853">부분</DefinitionPopup>
            <DefinitionPopup senseIndexes={[1]} q="86111">
              은
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="84991">뭐</DefinitionPopup>예요
          </div>
          <UtteranceButton text="선생님, 종이로 가려진 이 부분은 뭐예요?" />
          <i>Teacher, what's this part blocked by the paper?</i>
        </DialogGrid>
      </Section>
    </>
  );
}
