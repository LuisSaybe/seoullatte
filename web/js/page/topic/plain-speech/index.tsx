import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";
import { Anchor } from "web/js/component/anchor";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { Table } from "web/js/component/table";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export default function PlainSpeech() {
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
            "Only verbs can be conjugated for proposotive or imperative sentences.",
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
              <Anchor canReturn to={TopicRoute.pastTense}>
                past tense
              </Anchor>
              &nbsp;then 다 is added to the past tense ending.
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
          <Trans>
            <Anchor canReturn to={TopicRoute.addingVowelToPredicateStem}>
              ㅓ or ㅏ is added
            </Anchor>
            &nbsp;to the verb stem followed by 라
          </Trans>
        </Section>
        <Section>
          <SectionTitle>{t("For proposotive sentences")}</SectionTitle>
          {t("자 is added to a verb stem.")}
        </Section>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Section>
          <Table columns={4}>
            <span>
              <DefinitionPopup q="58272">먹</DefinitionPopup>는다
            </span>
            <span>먹니, 먹으냐, 먹냐</span>
            <span>먹아라</span>
            <span>먹자</span>
            <span>
              <DefinitionPopup q="92405">이쁘</DefinitionPopup>다
            </span>
            <span>
              <DefinitionPopup q="92405">이쁘</DefinitionPopup>니,&nbsp;
              <DefinitionPopup q="92405">이쁘</DefinitionPopup>냐
            </span>
            <span></span>
            <span></span>
            <span>간다</span>
            <span>
              <DefinitionPopup q="27500">가다</DefinitionPopup>니, 가냐
            </span>
            <span>가라</span>
            <span>가자</span>
          </Table>
        </Section>
      </ArticleSection>
    </>
  );
}
