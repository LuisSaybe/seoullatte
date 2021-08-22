import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { Subsection } from "web/js/component/subsection";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";

export function PastTense() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {/* prettier-ignore */}
        <Trans>
          To conjugate a predicate in the past tense, a <Anchor to={TopicRoute.ending}>pre-final ending</Anchor> ending is added to a predicate's stem.
        </Trans>
        &nbsp;
        {t("There are 2 steps to conjugate a predicate in the past tense.")}
      </Section>
      <Section>
        <Subsection>
          <div>
            &bull;&nbsp;
            {/* prettier-ignore */}
            <Trans>
              <Anchor to={TopicRoute.addingVowelToPredicateStem}>Add ㅓ or ㅏ</Anchor> to the predicate stem.
            </Trans>
          </div>
          <div>
            &bull;&nbsp;
            {/* prettier-ignore */}
            <Trans>
              Then add ㅆ as a <E q="56544" senseIndexes={[1]}>받침</E> to the final syllable.
            </Trans>
          </div>
        </Subsection>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {/* prettier-ignore */}
        <Trans>
          For example, in order to conjugate the verb <Anchor to={TopicRoute.irregularPredicate}>ㄷ-irregular</Anchor> verb <E q="29667">걷다</E>&nbsp;in the past tense:
        </Trans>
        <Subsection>
          걷다 + ({t("ㅓ or ㅏ")}) + ㅆ = 걸어 + ㅆ = 걸었
        </Subsection>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="49315">하루</E>&nbsp;
            <E q="91758">종일</E>&nbsp;
            <E q="29667">걸</E>
            <E q="68719">었</E>
            <E q="81522">더니</E>&nbsp;
            <E q="55175">무척</E>&nbsp;
            <E q="60291">피곤하</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="하루 종일 걸었더니 무척 피곤하다">
            하루 종일 걸었더니 무척 피곤하다
          </UtteranceButton>
          <i>{t("I am extremely tired from having walked all day.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {/* prettier-ignore */}
        <Trans>
          If the predicate is conjugated in the <Anchor to={TopicRoute.intimateSpeech}>intimate speech level</Anchor> then 어 is added as the final syllable.
        </Trans>
        &nbsp;
        {/* prettier-ignore */}
        <Trans>
          If the predicate is conjugated in the <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor> then 어요 is added as the final syllable.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="67075">어제</E>&nbsp;
            <E q="61190">본</E>&nbsp;
            <E q="71624">영화</E>
            <E q="85851">는</E>&nbsp;
            <E q="71212">재미있</E>
            <E q="68719">었</E>
            <E q="86094">어</E>
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
            <E q="61202">사무실</E>
            <E q="86572">에</E>&nbsp;
            <E q="69514">왔</E>
            <E q="86094">어</E>
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
          <E q="27500">갔</E>
          <E q="68838">었</E>
          <E q="85041">다</E>&nbsp;or&nbsp;
          <E q="86232">이</E>
          <E q="68838">었었</E>
          <E q="86571">어요</E>
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
            <E q="85851">는</E>&nbsp;
            <E q="30212">중학교</E>&nbsp;
            <E q="74123">때</E>&nbsp;
            <E q="20269">키</E>
            <E q="66341">가</E>&nbsp;
            <E q="66586">컸</E>
            <E q="68838">었</E>
            <E q="85041">다</E>
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
