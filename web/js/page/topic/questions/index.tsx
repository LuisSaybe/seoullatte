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
        <Section>
          <Trans>
            <DefinitionPopup q="17199">무엇</DefinitionPopup> is a pronoun used
            a placeholder for any object.
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
          When one wishes to inquire about a method or manner the word&nbsp;
          <DefinitionPopup q="70482">어떻</DefinitionPopup>
          <DefinitionPopup q="66938">게</DefinitionPopup> is used.
        </Trans>
        <Section>
          <DefinitionPopup q="68898">인천</DefinitionPopup>
          <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
          <DefinitionPopup q="70482">어떻</DefinitionPopup>
          <DefinitionPopup q="66938">게</DefinitionPopup>
          <DefinitionPopup q="27500">가</DefinitionPopup>
          <DefinitionPopup q="87438">나요</DefinitionPopup>
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
          <Trans>
            When one wishes to distinguish an object from a group of
            selections&nbsp;
            <DefinitionPopup q="62822">어느</DefinitionPopup> is used.
          </Trans>
        </Section>
      </ArticleSection>
    </>
  );
}
