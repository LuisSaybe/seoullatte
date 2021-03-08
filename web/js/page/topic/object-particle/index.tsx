import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export function ObjectParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The object particle <E q="85764">를</E> is written after a noun ending
          in a vowel.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <span>
            <E q="67601">에스컬레이터</E>
            <E q="68853">에서</E>
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            &nbsp;
            <E q="63884">손잡이</E>
            <E q="85764">를</E>&nbsp;
            <E q="48064">꼭</E>&nbsp;
            <E q="70378">잡</E>
            <E q="86609">으세요</E>
          </span>
          <UtteranceButton text="에스컬레이터에서는 손잡이를 꼭 잡으세요" />
          <i>{t("On the escalator, please grab the hand rail.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          <E q="86355">을</E> is written after a noun ending in a consonant.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <span>
            <E q="27368">아침</E>
            <E q="80294">에는</E>&nbsp;
            <E q="23402">빵</E>
            <E q="86355">을</E>&nbsp;
            <E q="58272">먹</E>
            <E q="85037">는다</E>
          </span>
          <UtteranceButton text="아침에는 빵을 먹는다" />
          <i>{t("In the morning bread is eaten.")}</i>
          <span />
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "The object particle indicates that the noun it marks is the object of the verb in the clause.",
        )}
      </Section>
      <Section>
        {t(
          "The 을/를 particle can also be used to indicate that noun marked is where an action starts, finishes or occurs.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <span>
            <E q="60931">나</E>
            <E q="85851">는</E>&nbsp;
            <E q="85798">해안가</E>
            <E q="85764">를</E>&nbsp;
            <E q="29667">걸</E>
            <E q="80257">으며</E>&nbsp;
            <E q="56419">바닷바람</E>
            <E q="86355">을</E>&nbsp;
            <E q="50308">만끽했</E>
            <E q="85041">다</E>
          </span>
          <UtteranceButton text="나는 해안가를 걸으며 바닷바람을 만끽했다" />
          <i>{t("As I walk along the coast I delight in the sea breeze.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <span>
            지수
            <E q="85851">는</E>&nbsp;
            <E q="20187">거리</E>
            <E q="85764">를</E>&nbsp;
            <E q="14793">돌아다니</E>
            <E q="80266">면서</E>&nbsp;
            <E q="58107">쇼핑</E>
            <E q="86258">도</E>&nbsp;
            <E q="73277">하</E>
            <E q="78583">고</E>&nbsp;
            <E q="64484">구경</E>
            <E q="86258">도</E>&nbsp;
            <E q="73277">했</E>
            <E q="85041">다</E>
          </span>
          <UtteranceButton text="지수는 거리를 돌아다니면서 쇼핑도 하고 구경도 했다." />
          <i>
            {t(
              "지수 went shopping and sightseeing while walking around the streets.",
            )}
          </i>
        </DialogGrid>
      </Section>
    </>
  );
}
