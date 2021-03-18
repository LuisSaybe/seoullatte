import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { Anchor } from "web/js/component/anchor";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";

export function PoliteSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          In order to to conjugate a&nbsp;
          <Anchor to={TopicRoute.predicate}>predicate</Anchor> into the polite
          speech level, first&nbsp;
          <Anchor to={TopicRoute.addingVowelToPredicateStem}>
            add ㅓ or ㅏ
          </Anchor>
          &nbsp; to the predicate's stem followed by <E q="86116">요</E>.
        </Trans>
        &nbsp;
        <Trans>
          The predicate <E q="86232">이다</E> and <E q="26878">아나다</E> are
          formed&nbsp;
          <Anchor to={TopicRoute.irregularPredicate}>irregularly</Anchor>
          &nbsp;in the polite speech level.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <div>
          {t("Predicate")}&nbsp;
          <E q="73443">끄다</E>
        </div>
        <Section>
          <Trans>
            1. The predicate 끄다 is&nbsp;
            <Anchor to={TopicRoute.irregularPredicate}>으 irregular</Anchor>
            &nbsp;and becomes ㄲ.
          </Trans>
        </Section>
        <div>
          {t(
            "2. The stem does not contain a vowel, and so 어요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 꺼요</div>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <div>
          {t("Predicate")}&nbsp;
          <E q="58272">먹다</E>
        </div>
        <Section>
          {t("1. The predicate 먹다 is regular and does not change.")}
        </Section>
        <div>
          {t(
            "2. The vowel pronounced closest to the end of the word is ㅓ and so 어요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 먹어요</div>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <div>
          {t("Predicate")}&nbsp;
          <E q="71290">아름답다</E>
        </div>
        <Section>
          <Trans>
            1. The predicate 아름답다 is&nbsp;
            <Anchor to={TopicRoute.irregularPredicate}>ㅂ irregular</Anchor>
            &nbsp;and becomes 아름다우.
          </Trans>
        </Section>
        <div>
          {t(
            "2. The vowel pronounced closest to the end of the word is ㅜ and so 어요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 아름다워요</div>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <div>
          {t("Predicate")}&nbsp;
          <E q="26816">나쁘다</E>
        </div>
        <Section>
          <Trans>
            1. The predicate 나쁘다 is&nbsp;
            <Anchor to={TopicRoute.irregularPredicate}>으 irregular</Anchor>
            &nbsp;and becomes 나ㅃ.
          </Trans>
        </Section>
        <div>
          {t(
            "2. The vowel pronounced closest to the end of the word is ㅏ and so 아요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 나빠요</div>
      </Section>
    </>
  );
}
