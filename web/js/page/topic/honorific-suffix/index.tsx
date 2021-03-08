import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";
import { PoliteSpeech } from "../polite-speech";
import "./style.scss";

export function HonorificSuffix() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The honorifix <Anchor to={TopicRoute.ending}>pre-final ending</Anchor>
          &nbsp;
          <E q="80330">시</E> is added to a predicate stem ending in a&nbsp;
          <Anchor to={TopicRoute.hangul}>vowel</Anchor>.
        </Trans>
        &nbsp;
        <Trans>
          <E q="80329">으시</E> is added to a predicate stem ending in a&nbsp;
          <Anchor to={TopicRoute.hangul}>consonant</Anchor>.
        </Trans>
        &nbsp;
        {t(
          "When 시 is added to a predicate's stem, the subject associated with the predicate is honored.",
        )}
        &nbsp;
        {t(
          "A subject will often be honored consistent with their age or rank in society.",
        )}
        &nbsp;
        <Trans>
          As a result, the suffix 시 is often colocated with&nbsp;
          <Anchor to={TopicRoute.formalAndInformalSpeech}>formal speech</Anchor>
          &nbsp; and honorific nouns.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="61178">그런</E>&nbsp;
            <E q="62835">것</E>
            <E q="86355">을</E>&nbsp;
            <E q="73277">하</E>
            <E q="80330">신</E>&nbsp;
            <E q="27780">분</E>
            <E q="80344">은</E>&nbsp;
            <E q="30191">왼쪽</E>
            <E q="85784">으로</E>&nbsp;
            <E q="27500">가</E>
            <E q="86558">세요</E>
          </div>
          <UtteranceButton text="그런 것을 하신 분은 왼쪽으로 가세요">
            그런 것을 하신 분은 왼쪽으로 가세요
          </UtteranceButton>
          <i>
            {t(
              "Those who have already done it, please go towards to the left.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="71152">이분</E>
            <E q="80344">은</E>&nbsp;승규
            <E q="86290">의</E>&nbsp;
            <E q="62818">선생님</E>
            <E q="86232">이</E>
            <E q="80330">십</E>
            <E q="79397">니다</E>
          </div>
          <UtteranceButton text="이분은 승규 의 선생님이십니다">
            이분은 승규 의 선생님이십니다
          </UtteranceButton>
          <i>{t("This person is 승규's teacher.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          The honorific suffix is addded as 세요 or 으세요 in the&nbsp;
          <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor>.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="74396">어머님</E>,&nbsp;
            <E q="60630">날씨</E>&nbsp;
            <E q="66341">가</E>
            <E q="72146">추우</E>
            <E q="80139">니까</E>&nbsp;
            <E q="">따뜻하</E>게&nbsp;
            <E q="17174">입</E>
            <E q="86609">으세요</E>
          </div>
          <UtteranceButton text="어머님, 날씨 가추우니까 따뜻하게 입으세요.">
            어머님, 날씨 가추우니까 따뜻하게 입으세요.
          </UtteranceButton>
          <i>{t("Mother, because the weather is cold please dress warmly.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          When the honorific suffix 시 precedes the&nbsp;
          <Anchor to={TopicRoute.pastTense}>paste tense</Anchor> ending, the
          ending becomes 셨 or 으셨.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="68206">오늘</E>&nbsp;
            <E q="61173">정말</E>&nbsp;
            <E q="22629">고생</E>
            <E q="86289">이</E>&nbsp;
            <E q="69295">많</E>
            <E q="80329">으</E>
            <E q="68719">셨</E>
            <E q="86571">어요</E>?
          </div>
          <UtteranceButton text="오늘 정말 고생이 많으셨어요?">
            오늘 정말 고생이 많으셨어요?
          </UtteranceButton>
          <i>{t("Did you have suffer many hardships?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          Even though a subject may be honored, the predicate itself may be
          conjugated in&nbsp;
          <Anchor to={TopicRoute.formalAndInformalSpeech}>
            informal speech
          </Anchor>
          .
        </Trans>
        &nbsp;
        <Trans>
          In the following phrase, the predicate's subject is honored while the
          predicate itself is conjugated in the&nbsp;
          <Anchor to={TopicRoute.plainSpeech}>plain speech level</Anchor>.
        </Trans>
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
            <E q="76426">니</E>?
          </div>
          <UtteranceButton text="할아버지께서는 언제 돌아오시니?" />
          <i>{t("When does grandfather return?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
