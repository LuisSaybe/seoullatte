import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { Subsection } from "web/js/component/subsection";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";

import "./style.scss";

export function PastTense() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          To conjugate a predicate in the past tense, a&nbsp;
          <Anchor to={TopicRoute.ending}>pre-final ending</Anchor>
          &nbsp;ending is added to a predicate's stem.
        </Trans>
      </Section>
      <div>{t("There are 2 steps to conjugate a predicate.")}</div>
      <Section>
        <Subsection>
          <div>
            &bull;&nbsp;
            <Trans>
              <Anchor to={TopicRoute.addingVowelToPredicateStem}>
                Add ㅓ or ㅏ
              </Anchor>
              &nbsp; to the predicate stem.
            </Trans>
          </div>
          <div>
            &bull;&nbsp;
            <Trans>
              Then add ㅆ as a&nbsp;
              <Anchor to={TopicRoute.addingUToPredicates}>받침</Anchor>
              &nbsp;to the final syllable.
            </Trans>
          </div>
        </Subsection>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="49315">하루</DefinitionPopup>&nbsp;
            <DefinitionPopup q="91758">종일</DefinitionPopup>&nbsp;
            <DefinitionPopup q="29667">걸</DefinitionPopup>
            <DefinitionPopup q="68719">었</DefinitionPopup>
            <DefinitionPopup q="81522">더니</DefinitionPopup>&nbsp;
            <DefinitionPopup q="55175">무척</DefinitionPopup>&nbsp;
            <DefinitionPopup q="60291">피곤하</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="하루 종일 걸었더니 무척 피곤하다">
            하루 종일 걸었더니 무척 피곤하다
          </UtteranceButton>
          <i>{t("I am extremely tired from having walked all day.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          If the predicate is conjugated in the&nbsp;
          <Anchor to={TopicRoute.intimateSpeech}>intimate speech level</Anchor>
          &nbsp;then 어 is added as the final syllable.
        </Trans>
        &nbsp;
        <Trans>
          If the predicate is conjugated in the&nbsp;
          <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor>
          &nbsp;then 어요 is added as the final syllable.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="67075">어제</DefinitionPopup>&nbsp;
            <DefinitionPopup q="61190">본</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71624">영화</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71212">재미있</DefinitionPopup>
            <DefinitionPopup q="68719">었</DefinitionPopup>
            <DefinitionPopup q="86094">어</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="어제 본 영화는 재미있었어?">
            어제 본 영화는 재미있었어?
          </UtteranceButton>
          <i>{t("As for the movie you saw yesterday, was it interesting?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "The past tense may also be used to describe a recently completed action.",
        )}
        &nbsp;
        {t(
          "For example, if an office worker is already inside the office after arriving, this office worker can say the following phrase.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="61202">사무실</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="69514">왔</DefinitionPopup>
            <DefinitionPopup q="86094">어</DefinitionPopup>
          </div>
          <UtteranceButton text="사무실에 왔어">사무실에 왔어</UtteranceButton>
          <i>{t("I came to the office.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          When an additional 었 is added to the first past tense ending, the
          predicate's meaning is more remote than the recent past. For
          example,&nbsp;
          <DefinitionPopup q="27500">갔</DefinitionPopup>
          <DefinitionPopup q="68838">었</DefinitionPopup>
          <DefinitionPopup q="85041">다</DefinitionPopup>&nbsp;or&nbsp;
          <DefinitionPopup q="92101">이</DefinitionPopup>
          <DefinitionPopup q="68838">었었</DefinitionPopup>
          <DefinitionPopup q="86571">어요</DefinitionPopup>
        </Trans>
        &nbsp;
        {t(
          "This can be used when recounting events which are in the distant past and no longer immediately relevant.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            유민이
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="30212">중학교</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74123">때</DefinitionPopup>&nbsp;
            <DefinitionPopup q="20269">키</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66586">컸</DefinitionPopup>
            <DefinitionPopup q="68838">었</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="유민이는 중학교 때 키가 컸었다">
            유민이는 중학교 때 키가 컸었다
          </UtteranceButton>
          <i>{t("유민이 was tall when (she) was in middle school.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
