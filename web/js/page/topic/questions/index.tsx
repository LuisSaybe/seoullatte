import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export default function Questions() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          Most question are formed by using&nbsp;
          <Anchor to={TopicRoute.prenoun}>prenouns</Anchor>
          &nbsp;and pronouns.
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
          <i>{t("What do (you) eat?")}</i>
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
          <DefinitionPopup q="62078">누구</DefinitionPopup>
          <DefinitionPopup q="80330">세</DefinitionPopup>
          <DefinitionPopup q="86116">요</DefinitionPopup>
          {"?"}
        </Section>
        <Section>
          <i>{t("Who are you?")}</i>
        </Section>
        <Section>
          <DefinitionPopup q="20250">요즘</DefinitionPopup>
          <DefinitionPopup q="86111">은</DefinitionPopup>&nbsp;
          <DefinitionPopup q="60319">어디</DefinitionPopup>
          <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
          <DefinitionPopup q="27500">가</DefinitionPopup>
          <DefinitionPopup q="86258">도</DefinitionPopup>&nbsp;
          <DefinitionPopup q="78368">집값</DefinitionPopup>
          <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
          <DefinitionPopup q="66318">비싸</DefinitionPopup>
          <DefinitionPopup q="77333" senseIndexes={[1]}>
            네
          </DefinitionPopup>
        </Section>
        <Section>
          <i>
            {t(
              "Nowadays house prices are expensive no matter where (one) goes.",
            )}
          </i>
        </Section>
        <Section>
          <DefinitionPopup q="17860">언제</DefinitionPopup>
          <DefinitionPopup q="70055">부터</DefinitionPopup>&nbsp;
          <DefinitionPopup q="66567">시작할</DefinitionPopup>
          <DefinitionPopup q="86120">까</DefinitionPopup>
          {"?"}
        </Section>
        <Section>
          <i>{t("From when shall (I) start?")}</i>
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
        <Section>
          <i>{t("How can I go to Incheon?")}</i>
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
          <DefinitionPopup q="69514">와</DefinitionPopup>
          {t("?")}
        </Section>
        <Section>
          <i>{t("Why (do they) always come late (for) practice?")}</i>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Categories and selections")}</SectionTitle>
        <Trans>
          When one wishes to ask which category or kind an object may belong to,
          the&nbsp;
          <Anchor to={TopicRoute.prenoun}>prenoun</Anchor>
          &nbsp;
          <DefinitionPopup q="66237">무슨</DefinitionPopup> is used.
        </Trans>
        <Section>
          <DefinitionPopup q="64390">너</DefinitionPopup>
          <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
          <DefinitionPopup q="66237">무슨</DefinitionPopup>&nbsp;
          <DefinitionPopup q="60198">과목</DefinitionPopup>&nbsp;
          <DefinitionPopup q="92032">제일</DefinitionPopup>&nbsp;
          <DefinitionPopup q="15317">무관심해</DefinitionPopup>?
        </Section>
        <Section>
          <i>{t("Which subject are your most indifferent to?")}</i>
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
        &nbsp;
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
        <Section>
          <i>{t("How many months did you spend?")}</i>
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
        <Section>
          <i>{t("How much would you like to drink?")}</i>
        </Section>
      </ArticleSection>
    </>
  );
}
