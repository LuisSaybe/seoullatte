import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function Questions() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          Most question are formed by using&nbsp;
          <Anchor to={TopicRoute.prenoun}>prenouns</Anchor> and pronouns.
        </Trans>
        <SectionTitle>
          {t("Asking about the identity of an object")}
        </SectionTitle>
        <Section>
          <Trans>
            <DefinitionPopup q="17199">무엇</DefinitionPopup> is a pronoun used
            a placeholder for any object. 무엇 is often contracted to&nbsp;
            <DefinitionPopup q="67416">뭣</DefinitionPopup> or&nbsp;
            <DefinitionPopup q="84991">뭐</DefinitionPopup>.
          </Trans>
          &nbsp;
          {t("For example, when inquiring what someone is eating:")}
        </Section>
        <Section>
          <DefinitionPopup q="17199">무엇</DefinitionPopup>
          <DefinitionPopup q="86355">을</DefinitionPopup>&nbsp;
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="76230">냐</DefinitionPopup>
          {"?"}
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
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Asking about methods")}</SectionTitle>
        <Trans>
          When one wishes to inquire about a method or manner the adverb&nbsp;
          <DefinitionPopup q="70482">어떻</DefinitionPopup>
          <DefinitionPopup q="66938">게</DefinitionPopup> is used.
        </Trans>
        <Section>
          <DefinitionPopup q="68898">인천</DefinitionPopup>
          <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
          <DefinitionPopup q="70482">어떻</DefinitionPopup>
          <DefinitionPopup q="66938">게</DefinitionPopup>&nbsp;
          <DefinitionPopup q="27500">가</DefinitionPopup>
          <DefinitionPopup q="87438">나요</DefinitionPopup>
          {t("?")}
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Asking about reasons or motives")}</SectionTitle>
        <Trans>
          When one wishes to inquire about a reason the adverb&nbsp;
          <DefinitionPopup q="67848">왜</DefinitionPopup> is used.
        </Trans>
        <Section>
          <DefinitionPopup q="67848">왜</DefinitionPopup>&nbsp;
          <DefinitionPopup q="83162">항상</DefinitionPopup>&nbsp;
          <DefinitionPopup q="92041">연습</DefinitionPopup>&nbsp;
          <DefinitionPopup q="71729">기간</DefinitionPopup>
          <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
          <DefinitionPopup q="61181">늦</DefinitionPopup>
          <DefinitionPopup q="77326">게</DefinitionPopup>&nbsp;
          <DefinitionPopup q="69514">오</DefinitionPopup>
          <DefinitionPopup q="73807">구나</DefinitionPopup>
          {t("?")}
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Categories and selections")}</SectionTitle>
        <Trans>
          When one wishes to ask which category or kind an object may belong to,
          the <Anchor to={TopicRoute.prenoun}>prenoun</Anchor>&nbsp;
          <DefinitionPopup q="66237">무슨</DefinitionPopup> is used.
        </Trans>
        <Section>
          <DefinitionPopup q="66237">무슨</DefinitionPopup>&nbsp;
          <DefinitionPopup q="60198">과목</DefinitionPopup>
          <DefinitionPopup q="86111">은</DefinitionPopup>&nbsp;
          <DefinitionPopup q="92032">제일</DefinitionPopup>&nbsp;
          <DefinitionPopup q="15317">무관심해</DefinitionPopup>?
        </Section>
        <Section>
          <Trans>
            When one wishes to distinguish an object from a group of
            selections&nbsp;
            <DefinitionPopup q="62822">어느</DefinitionPopup> is used.
          </Trans>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Quantity")}</SectionTitle>
        <Trans>
          When one inquires about a quantity the numeral&nbsp;
          <DefinitionPopup q="66235">몇</DefinitionPopup> is used.
        </Trans>
        <Trans>
          몇 is placed before a&nbsp;
          <Anchor to={TopicRoute.counting}>counter</Anchor>
        </Trans>
        .
        <Section>
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
        </Section>
        <SectionTitle>{t("Degree and extent")}</SectionTitle>
        <Trans>
          When one inquires about the degree to which something occurs, the
          adverb <DefinitionPopup q="67316">얼마나</DefinitionPopup> is used.
        </Trans>
        <Section>
          <DefinitionPopup q="67316">얼마나</DefinitionPopup>&nbsp;
          <DefinitionPopup q="64682">마실</DefinitionPopup>
          <DefinitionPopup q="81065">래</DefinitionPopup>
          {t("?")}
        </Section>
      </ArticleSection>
    </>
  );
}
