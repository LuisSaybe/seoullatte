import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export default function ObjectParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The object particle <DefinitionPopup q="85764">를</DefinitionPopup> is
          written after a noun ending in a vowel.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <span>
            <DefinitionPopup q="67601">에스컬레이터</DefinitionPopup>
            <DefinitionPopup q="68853">에서</DefinitionPopup>
            <DefinitionPopup q="85851" senseIndexes={[1]}>
              는
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="63884">손잡이</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="48064">꼭</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70378">잡</DefinitionPopup>
            <DefinitionPopup q="86609">으세요</DefinitionPopup>
          </span>
          <UtteranceButton text="에스컬레이터에서는 손잡이를 꼭 잡으세요" />
          <i>{t("On the escalator, please grab the hand rail.")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <Trans>
          <DefinitionPopup q="85764">을</DefinitionPopup> is written after a
          noun ending in a consonant.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <span>
            <DefinitionPopup q="27368">아침</DefinitionPopup>
            <DefinitionPopup q="80294">에는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="23402">빵</DefinitionPopup>
            <DefinitionPopup q="85764">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="58272">먹</DefinitionPopup>
            <DefinitionPopup q="85037">는다</DefinitionPopup>
          </span>
          <UtteranceButton text="아침에는 빵을 먹는다" />
          <i>{t("In the morning bread is eaten.")}</i>
          <span />
        </DialogGrid>
      </Section>
      <Section>
        {t(
          "The object particle indicates that the noun it marks is the object of the verb in the clause.",
        )}
      </Section>
      <Section>
        {t(
          "The 을/를 particle can also be used to indicate that noun marked is where an action starts, finishes or occurs.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <span>
            <DefinitionPopup q="60931">나</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="85798">해안가</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="29667">걸</DefinitionPopup>
            <DefinitionPopup q="80257">으며</DefinitionPopup>&nbsp;
            <DefinitionPopup q="56419">바닷바람</DefinitionPopup>
            <DefinitionPopup q="86355">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="50308">만끽했</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </span>
          <UtteranceButton text="나는 해안가를 걸으며 바닷바람을 만끽했다" />
          <i>{t("As I walk along the coast I delight in the sea breeze.")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <span>
            지수
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="20187">거리</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="14793">돌아다니</DefinitionPopup>
            <DefinitionPopup q="80266">면서</DefinitionPopup>&nbsp;
            <DefinitionPopup q="58107">쇼핑</DefinitionPopup>
            <DefinitionPopup q="86258">도</DefinitionPopup>&nbsp;
            <DefinitionPopup q="73277">하</DefinitionPopup>
            <DefinitionPopup q="78583">고</DefinitionPopup>&nbsp;
            <DefinitionPopup q="64484">구경</DefinitionPopup>
            <DefinitionPopup q="86258">도</DefinitionPopup>&nbsp;
            <DefinitionPopup q="73277">했</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
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
