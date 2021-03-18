import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function Batchim() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          A&nbsp;
          <E q="56544" senseIndexes={[1]}>
            받침
          </E>
          &nbsp;refers to the final consonant of a word.
        </Trans>
        &nbsp;
        <Trans>
          For example, the word <E q="29724">방</E>
          &nbsp;has a&nbsp;
          <E q="56544" senseIndexes={[1]}>
            받침
          </E>
          &nbsp;since it ends in the consonant ㅇ while&nbsp;
          <E q="27369">여자</E> does not have a 받침 since the final letter ㅏ
          is a vowel.
        </Trans>
      </Section>
      <Section>
        {t(
          "Certain pronounciation and grammar rules take into consideration whether or not a word ends in a consonant or vowel.",
        )}
        &nbsp;
        {t(
          "We give some simple examples here which will be explored in more detail in later sections.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          The ending <E q="80137">으니까</E> is added to a predicate stem ending
          in a consonant while <E q="80139">니까</E> is added to a predicate
          stem ending in a vowel.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="72379">약</E>
            <E q="86355">을</E>&nbsp;
            <E q="58272">먹</E>
            <E q="80137">으니까</E>&nbsp;
            <E q="75798" senseIndexes={[2]}>
              좀
            </E>
            &nbsp;
            <E q="62354">나</E>
            <E q="71830">은 것 같</E>
            <E q="86568">아요</E>
          </div>
          <UtteranceButton text="약을 먹으니까 좀 나은 것 같아요" />
          <i>{t("I seem to feel better because I ate the medicine.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="64390">너</E>
            <E q="85851">는</E>&nbsp;
            <E q="31670">학생</E>
            <E q="86289">이</E>
            <E q="80139">니까</E>&nbsp;
            <E q="36672">공부</E>
            <E q="85764">를</E>&nbsp;
            <E q="67512">열심히</E>&nbsp;
            <E q="73277">해</E>
            <E q="86255">야 한</E>
            <E q="85033">다</E>
          </div>
          <UtteranceButton text="너는 학생이니까 공부를 열심히 해야 한다." />
          <i>{t("You must study hard because you are a student.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
