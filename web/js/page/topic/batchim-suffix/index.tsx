import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useNavigateToHash } from "web/js/hook/useNavigateToHash";
import { useCanUseKoreanUtterance } from "web/js/hook/useCanUseKoreanUtterance";
import { Section } from "web/js/component/section";
import { MarginSizeName } from "web/js/interface/size";
import { Anchor } from "web/js/component/anchor";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";
import { DialogGrid } from "web/js/component/dialog-grid";

export function BatchimSuffix() {
  const { t } = useTranslation();
  const navigate = useNavigateToHash();
  const canUseKoreanUtterance = useCanUseKoreanUtterance();

  useEffect(() => {
    navigate();
  }, [navigate]);

  return (
    <>
      <Section>
        <Trans>
          If a word's final letter is a consonant this letter is reffered to as
          a&nbsp;
          <E senseIndexes={[1]} q="56544">
            받침
          </E>
          .
        </Trans>
        &nbsp;
        <Trans>
          For example, the word <E q="29724">방</E>
          &nbsp;has a 받침 since it ends in the consonant ㅇ while&nbsp;
          <E q="27369">여자</E> does not have a 받침 since the final letter ㅏ
          is a vowel.
        </Trans>
        &nbsp;
        {t("Some suffixes change based on whether a word has a 받침 or not.")}
        &nbsp;
        {t(
          "For example, the honorific suffix 시 will become 으시 when added to a predicate stem that has a 받침.",
        )}
      </Section>
      <Section>
        {t(
          "The predicate stem of 괜찮다 has a 받침 so when combined with the honorific suffix 시, a 으시 will be placed after the predicate stem.",
        )}
        &nbsp;
        <Trans>
          Note that <E q="80329">으시</E>
          &nbsp;becomes&nbsp;
          <E q="86609">으세요</E> in the&nbsp;
          <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor>.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60097">괜찮</E>
            <E q="86609">으세요</E>
            {t("?")}
          </div>
          {canUseKoreanUtterance ? (
            <UtteranceButton text="괜찮으세요?" />
          ) : (
            <div />
          )}
          <i>{t("Are (you) ok?")}</i>
          <span></span>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "In contrast the the predicate stem for 돌아오다 does not have a 받침, so when combined with the honorific suffix 시 the predicate becomes 돌아오시.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="74121">할아버지</E>
            <E q="73012">께서</E>
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            &nbsp;
            <E q="17860">언제</E>
            &nbsp;
            <E q="66268">돌아오</E>
            <E q="80330" senseIndexes={[1]}>
              시
            </E>
            <E q="76426">니</E>
            {t("?")}
          </div>
          <UtteranceButton text="할아버지께서는 언제 돌아오시니?" />
          <i>{t("When does grandfather return?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
