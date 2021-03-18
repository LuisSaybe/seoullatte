import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";

export function Questions() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          Most question are formed by using&nbsp;
          <Anchor to={TopicRoute.determiner}>determiners</Anchor>
          &nbsp;and pronouns.
        </Trans>
      </Section>
      <SectionTitle>{t("Asking about the identity of an object")}</SectionTitle>
      <Section>
        <Trans>
          <E q="17199">무엇</E> is a pronoun used a placeholder for any object.
          무엇 is often contracted to&nbsp;
          <E q="67416">뭣</E> or&nbsp;
          <E q="84991">뭐</E>.
        </Trans>
        &nbsp;
        {t("For example, when inquiring what someone is eating:")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17199">무엇</E>
            <E q="86355">을</E>&nbsp;
            <E q="58272">먹</E>
            <E q="76230">냐</E>
            {"?"}
          </div>
          <UtteranceButton text="무엇을 먹냐?">무엇을 먹냐?</UtteranceButton>
          <i>{t("What do (you) eat?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          In the same fashion, the pronouns&nbsp;
          <E q="62078">누구</E>,&nbsp;
          <E q="60319">어디</E>,&nbsp;
          <E q="17860">언제</E> can be used to ask questions.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="62078">누구</E>
            <E q="86558">세요</E>
            {"?"}
          </div>
          <UtteranceButton text="누구세요?">누구세요?</UtteranceButton>
          <i>{t("Who are (you)?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60319">어디</E>
            <E q="86572">에</E>&nbsp;
            <E q="27500">가</E>
            <E q="86558">세요</E>
            {t("?")}
          </div>
          <UtteranceButton text="어디에 가세요?">
            어디에 가세요?
          </UtteranceButton>
          <i>{t("Where are (you) going?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17860">언제</E>
            <E q="70055">부터</E>&nbsp;
            <E q="66567">시작할</E>
            <E q="86335">까</E>
            {"?"}
          </div>
          <UtteranceButton text="언제부터 시작할까?">
            언제부터 시작할까?
          </UtteranceButton>
          <i>{t("From when shall (I) start?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Asking about methods")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        <Trans>
          When one wishes to inquire about a method or manner the adverb&nbsp;
          <E q="70482">어떻</E>
          <E q="66938">게</E> is used.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="68898">인천</E>
            <E q="86572">에</E>&nbsp;
            <E q="70482">어떻</E>
            <E q="66938">게</E>&nbsp;
            <E q="27500">가</E>
            <E q="87438">나요</E>
            {t("?")}
          </div>
          <UtteranceButton text="인천에 어떻게 가나요?">
            인천에 어떻게 가나요?
          </UtteranceButton>
          <i>{t("How can I go to Incheon?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Asking about reasons or motives")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        <Trans>
          When one wishes to inquire about a reason the adverb&nbsp;
          <E q="67848">왜</E> is used.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="67848">왜</E>&nbsp;
            <E q="83162">항상</E>&nbsp;
            <E q="92041">연습</E>&nbsp;
            <E q="71729">기간</E>
            <E q="86572">에</E>&nbsp;
            <E q="61181">늦</E>
            <E q="77326">게</E>&nbsp;
            <E q="69514">와</E>
            {t("?")}
          </div>
          <UtteranceButton text="왜 항상 연습 기간에 늦게 와?">
            왜 항상 연습 기간에 늦게 와?
          </UtteranceButton>
          <i>{t("Why (do they) always come late (for) practice?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Categories")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        <Trans>
          When one wishes to ask which category or kind an object may belong to,
          the&nbsp;
          <Anchor to={TopicRoute.determiner}>determiners</Anchor>
          &nbsp;
          <E q="66237">무슨</E> is used.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="64390">너</E>
            <E q="85853">는</E>&nbsp;
            <E q="66237">무슨</E>&nbsp;
            <E q="71115">음악</E>
            <E q="86355">을</E>&nbsp;
            <E q="91767">주로</E>&nbsp;
            <E q="74104">듣</E>
            <E q="76426">니</E>
            {t("?")}
          </div>
          <UtteranceButton text="너는 무슨 음악을 주로 듣니?">
            너는 무슨 음악을 주로 듣니?
          </UtteranceButton>
          <i>{t("What kind of music do you usually listen to?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Selections")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        <Trans>
          When one wishes to distinguish an object from a group of
          selections&nbsp;
          <E q="62822">어느</E> is used.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="25620">공항</E>
            <E q="86572">에</E>&nbsp;
            <E q="27500">가</E>
            <E q="80311">려면</E>&nbsp;
            <E q="62822">어느</E>&nbsp;
            <E q="36678">버스</E>
            <E q="85764">를</E>&nbsp;
            <E q="91122">타</E>
            <E q="86255">야 하</E>
            <E q="87438">나요</E>
            {t("?")}
          </div>
          <UtteranceButton text="공항에 가려면 어느 버스를 타야 하나요?">
            공항에 가려면 어느 버스를 타야 하나요?
          </UtteranceButton>
          <i>{t("Which bus do I need to take to get to the airport?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Quantity")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        <Trans>
          When one inquires about a quantity the numeral&nbsp;
          <E q="66235">몇</E> is used.
        </Trans>
        &nbsp;
        <Trans>
          몇 is placed before a&nbsp;
          <Anchor to={TopicRoute.counters}>counter</Anchor>
        </Trans>
        .
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="66235">몇</E>&nbsp;
              <E q="62266" senseIndexes={[1]}>
                달
              </E>
              <E q="86355">을</E>
              &nbsp;
              <E q="66375" senseIndexes={[6]}>
                보냈
              </E>
              <E q="86571">어요</E>
              {t("?")}
            </div>
            <UtteranceButton text="몇 달을 보냈어요?">
              몇 달을 보냈어요?
            </UtteranceButton>
            <i>{t("How many months did you spend?")}</i>
          </DialogGrid>
        </Section>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Degree and extent")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        <Trans>
          When one inquires about the degree to which something occurs, the
          adverb <E q="67316">얼마나</E> is used.
        </Trans>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="67316">얼마나</E>&nbsp;
              <E q="64682">마실</E>
              <E q="81068">래</E>
              {t("?")}
            </div>
            <UtteranceButton text="얼마나 마실래?">
              얼마나 마실래?
            </UtteranceButton>
            <i>{t("How much would you like to drink?")}</i>
          </DialogGrid>
        </Section>
      </Section>
    </>
  );
}
