import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export default function Questions() {
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
          <DefinitionPopup q="17199">무엇</DefinitionPopup> is a pronoun used a
          placeholder for any object. 무엇 is often contracted to&nbsp;
          <DefinitionPopup q="67416">뭣</DefinitionPopup> or&nbsp;
          <DefinitionPopup q="84991">뭐</DefinitionPopup>.
        </Trans>
        &nbsp;
        {t("For example, when inquiring what someone is eating:")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="17199">무엇</DefinitionPopup>
            <DefinitionPopup q="86355">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="58272">먹</DefinitionPopup>
            <DefinitionPopup q="76230">냐</DefinitionPopup>
            {"?"}
          </div>
          <UtteranceButton text="무엇을 먹냐?">무엇을 먹냐?</UtteranceButton>
          <i>{t("What do (you) eat?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <Trans>
          In the same fashion, the pronouns&nbsp;
          <DefinitionPopup q="62078">누구</DefinitionPopup>,&nbsp;
          <DefinitionPopup q="60319">어디</DefinitionPopup>,&nbsp;
          <DefinitionPopup q="17860">언제</DefinitionPopup> can be used to ask
          questions.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="62078">누구</DefinitionPopup>
            <DefinitionPopup q="80330">세</DefinitionPopup>
            <DefinitionPopup q="86116">요</DefinitionPopup>
            {"?"}
          </div>
          <UtteranceButton text="누구세요?">누구세요?</UtteranceButton>
          <i>{t("Who are (you)?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="60319">어디</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="86558">세요</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="어디에 가세요?">
            어디에 가세요?
          </UtteranceButton>
          <i>{t("Where are (you) going?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="17860">언제</DefinitionPopup>
            <DefinitionPopup q="70055">부터</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66567">시작할</DefinitionPopup>
            <DefinitionPopup q="86120">까</DefinitionPopup>
            {"?"}
          </div>
          <UtteranceButton text="언제부터 시작할까?">
            언제부터 시작할까?
          </UtteranceButton>
          <i>{t("From when shall (I) start?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Asking about methods")}</SectionTitle>
        <Trans>
          When one wishes to inquire about a method or manner the adverb&nbsp;
          <DefinitionPopup q="70482">어떻</DefinitionPopup>
          <DefinitionPopup q="66938">게</DefinitionPopup> is used.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="68898">인천</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70482">어떻</DefinitionPopup>
            <DefinitionPopup q="66938">게</DefinitionPopup>&nbsp;
            <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="87438">나요</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="인천에 어떻게 가나요?">
            인천에 어떻게 가나요?
          </UtteranceButton>
          <i>{t("How can I go to Incheon?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Asking about reasons or motives")}</SectionTitle>
        <Trans>
          When one wishes to inquire about a reason the adverb&nbsp;
          <DefinitionPopup q="67848">왜</DefinitionPopup> is used.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="67848">왜</DefinitionPopup>&nbsp;
            <DefinitionPopup q="83162">항상</DefinitionPopup>&nbsp;
            <DefinitionPopup q="92041">연습</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71729">기간</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="61181">늦</DefinitionPopup>
            <DefinitionPopup q="77326">게</DefinitionPopup>&nbsp;
            <DefinitionPopup q="69514">와</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="왜 항상 연습 기간에 늦게 와?">
            왜 항상 연습 기간에 늦게 와?
          </UtteranceButton>
          <i>{t("Why (do they) always come late (for) practice?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Categories")}</SectionTitle>
        <Trans>
          When one wishes to ask which category or kind an object may belong to,
          the&nbsp;
          <Anchor to={TopicRoute.determiner}>determiners</Anchor>
          &nbsp;
          <DefinitionPopup q="66237">무슨</DefinitionPopup> is used.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="64390">너</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66237">무슨</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71115">음악</DefinitionPopup>
            <DefinitionPopup q="86355">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="91767">주로</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74104">듣</DefinitionPopup>
            <DefinitionPopup q="76426">니</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="너는 무슨 음악을 주로 듣니?">
            너는 무슨 음악을 주로 듣니?
          </UtteranceButton>
          <i>{t("What kind of music do you usually listen to?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Selections")}</SectionTitle>
        <Trans>
          When one wishes to distinguish an object from a group of
          selections&nbsp;
          <DefinitionPopup q="62822">어느</DefinitionPopup> is used.
        </Trans>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="25620">공항</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="80311">려면</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62822">어느</DefinitionPopup>&nbsp;
            <DefinitionPopup q="36678">버스</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="91122">타</DefinitionPopup>
            <DefinitionPopup q="86255">야 하</DefinitionPopup>
            <DefinitionPopup q="87438">나요</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="공항에 가려면 어느 버스를 타야 하나요?">
            공항에 가려면 어느 버스를 타야 하나요?
          </UtteranceButton>
          <i>{t("Which bus do I need to take to get to the airport?")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Quantity")}</SectionTitle>
      </Section>
      <Trans>
        When one inquires about a quantity the numeral&nbsp;
        <DefinitionPopup q="66235">몇</DefinitionPopup> is used.
      </Trans>
      &nbsp;
      <Trans>
        몇 is placed before a&nbsp;
        <Anchor to={TopicRoute.counters}>counter</Anchor>
      </Trans>
      .
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="66235">몇</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62266" senseIndexes={[1]}>
              달
            </DefinitionPopup>
            <DefinitionPopup q="86355">을</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="66375" senseIndexes={[6]}>
              보냈
            </DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="몇 달을 보냈어요?">
            몇 달을 보냈어요?
          </UtteranceButton>
          <i>{t("How many months did you spend?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle>{t("Degree and extent")}</SectionTitle>
      <Trans>
        When one inquires about the degree to which something occurs, the adverb{" "}
        <DefinitionPopup q="67316">얼마나</DefinitionPopup> is used.
      </Trans>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="67316">얼마나</DefinitionPopup>&nbsp;
            <DefinitionPopup q="64682">마실</DefinitionPopup>
            <DefinitionPopup q="81065">래</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="얼마나 마실래?">
            얼마나 마실래?
          </UtteranceButton>
          <i>{t("How much would you like to drink?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
