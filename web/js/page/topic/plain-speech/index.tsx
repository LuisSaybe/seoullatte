import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";

import { Anchor } from "web/js/component/anchor";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function PlainSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Section>
          {t(
            "The plain speech level is conjugated differently for declarative, interrogative, imperative and proposotive sentences.",
          )}
          &nbsp;
          {t(
            "The plain speech level is also conjugated based on whether the predicate is a copula, adjective or verb.",
          )}
        </Section>
        <Section>
          <SectionTitle>{t("For declarative sentences")}</SectionTitle>
          <div>
            {t(
              "If the predicate is an adjective or a copular, then 다 is added to the stem or to the past tense marker.",
            )}
          </div>
          <div>
            {t(
              "If the predicate is a verb, 는다 is add to stems ending in a consonant, otherwise ㄴ다 is added to the stem, ㄴ becomes the 받침.",
            )}
          </div>
          <div>
            <Trans>
              If the predicate is conjugated in the&nbsp;
              <Anchor to={TopicRoute.pastTense}>past tense</Anchor> then 다 is
              added to the past tense marker.
            </Trans>
          </div>
        </Section>
        <Section>
          <SectionTitle>{t("For interrogative sentences")}</SectionTitle>
          {t(
            "니 or 냐 is added to predicate stems for spoken communication 으냐 can be added to stems that end in a consonants for written communication.",
          )}
        </Section>
        <Section>
          <SectionTitle>{t("For imperative sentences")}</SectionTitle>
          {t("아라 or 어라 is added to the verb stem.")}
        </Section>
        <Section>
          <SectionTitle>{t("For proposotive sentences")}</SectionTitle>
          {t("자 is added to the verb stem.")}
        </Section>
        <Section>
          {t(
            "The imperative and proposotive conjugations are only valid for verbs and can not be conjugated with a tense marker.",
          )}
        </Section>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <SectionTitle>{t("Declarative")}</SectionTitle>
        <Section>
          <div styleName="table">
            <span>{t("Predicate")}</span>
            <span>{t("Declarative")}</span>
            <span>{t("Interrogative")}</span>
            <span>{t("Imperative")}</span>
            <span>{t("Propositive")}</span>
            <DefinitionPopup q="58272">먹다</DefinitionPopup>
            <span>먹는다</span>
            <span>먹니, 먹으냐, 먹냐</span>
            <span>먹아라</span>
            <span>먹자</span>
            <DefinitionPopup q="92405">이쁘다</DefinitionPopup>
            <span>이쁘다</span>
            <span>이쁘니, 이쁘냐</span>
            <span></span>
            <span></span>
            <DefinitionPopup q="27500">가다</DefinitionPopup>
            <span>간다</span>
            <span>가니, 가냐</span>
            <span>가라</span>
            <span>가자</span>
          </div>
        </Section>
      </ArticleSection>
    </>
  );
}
