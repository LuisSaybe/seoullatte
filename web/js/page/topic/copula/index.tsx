import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { UtteranceButton } from "web/js/component/utterance-button";
import { DialogGrid } from "web/js/component/dialog-grid";
import { MarginSizeName } from "web/js/interface/size";
import { Anchor } from "web/js/component/anchor";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function Copula() {
  const { t } = useTranslation();
  return (
    <>
      <Section>
        <Trans>
          The copula <E q="86232">이다</E> and&nbsp;
          <E q="26878">아니다</E> attach directly to a noun.
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
            <E q="15689">강아지</E>
            <E q="66341">가</E>&nbsp;
            <E q="18779">고양이</E>
            <E q="26878">아니다</E>
          </div>
          <UtteranceButton text="강아지가 고양이아니다" />
          <i>{t("A dog is not a cat.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17182">우리</E>
            <E q="30210">딸</E>
            <E q="86289">이</E>&nbsp;
            <E q="62521">중학생</E>
            <E q="86232">이에요</E>
          </div>
          <UtteranceButton text="우리딸이 중학생이에요" />
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
      <Section>
        <Trans>
          <E q="86232">이</E>
          <E q="80806">야</E> follows a noun which ends in a consonant in the
          intimate speech level.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="84999">소개할</E>
            <E q="80981">게</E>.&nbsp;
            <E q="67258">얘</E>
            <E q="85851">는</E>&nbsp;
            <E q="84426">내</E>&nbsp;
            <E q="70748">동생</E>
            <E q="86232">이</E>
            <E q="80806">야</E>
          </div>
          <UtteranceButton text="소개할게. 얘는 내 동생이야" />
          <i>{t("I will introduce (him). He is my younger brother.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "야 follows a noun which ends in a vowel in the intimate speech level.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="64390">너</E>&nbsp;
            <E q="62522">지금</E>&nbsp;
            <E q="60319">어디</E>
            <E q="80806">야</E>
          </div>
          <UtteranceButton text="너 지금 어디야?" />
          <i>{t("Where are you now?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "이에요 follows a noun which ends in a consonant in the polite speech level.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="27364">고향</E>
            <E q="86289">이</E>&nbsp;
            <E q="68893">대전</E>
            <E q="86232">이</E>
            <E q="86106">에요?</E>
          </div>
          <UtteranceButton text="고향이 대전이에요?" />
          <i>{t("Is your hometown Daejon?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "예요 follows a noun which ends in a vowel in the polite speech level.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="62818">선생님</E>,&nbsp;
            <E q="75802">종이</E>
            <E q="85761">로</E>&nbsp;
            <E q="15320">가려진</E>&nbsp;
            <E q="71687">이</E>
            <E q="65853">부분</E>
            <E senseIndexes={[1]} q="86111">
              은
            </E>
            &nbsp;
            <E q="84991">뭐</E>예요
          </div>
          <UtteranceButton text="선생님, 종이로 가려진 이 부분은 뭐예요?" />
          <i>{t("Teacher, what's this part blocked by the paper?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
