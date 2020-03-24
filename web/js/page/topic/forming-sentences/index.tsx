import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function FormingSentences() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "There are two ideas which are prevalent throughout the Korean language.",
        )}
        &nbsp;
        {t(
          "Firstly, implicitly understood information can be ommitted from communcation.",
        )}
        &nbsp;
        {t(
          "Secondly, the order of information is organized from general to specific.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Word order")}</SectionTitle>
        {t(
          "A simple Korean sentence is composed of a subject and a predicate.",
        )}
        &nbsp;
        {t("The subject is written before the predicate.")}
        <Section>
          <DefinitionPopup q="71002">여동생</DefinitionPopup>
          <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
          <DefinitionPopup q="27500">가</DefinitionPopup>
        </Section>
        <Section>
          <i>{t("Litte sister goes")}</i>
        </Section>
        <Section>
          {t(
            "If the predicate accepts an object, then the object is written before the predicate.",
          )}
        </Section>
        <Section>
          <DefinitionPopup q="75821">제</DefinitionPopup>
          <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
          <DefinitionPopup q="62683">밥</DefinitionPopup>
          <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="86571">어요</DefinitionPopup>
        </Section>
        <Section>
          <i>{t("I eat rice")}</i>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Context based omission")}</SectionTitle>
        {t(
          "The subject or topic of a sentence is not added to Korean sentences when the topic or subject is implicitly understood.",
        )}
        &nbsp;
        {t(
          "Pronouns are the most commonly omitted parts of speech in Korean communication.",
        )}
        <Section>
          김덕수{t(":")}&nbsp; 신선미
          <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="68719">었</DefinitionPopup>
          <DefinitionPopup q="86571">어요</DefinitionPopup>
          {t("?")}
        </Section>
        <Section>
          <i>{t("Duksu Kim: Has Sunmi Sin eaten?")}</i>
        </Section>
        <Section>
          신선미{t(":")}&nbsp;
          <DefinitionPopup q="71372">안</DefinitionPopup>&nbsp;
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="68719">었</DefinitionPopup>
          <DefinitionPopup q="86571">어요</DefinitionPopup>.&nbsp;
          <DefinitionPopup q="29316">배고파</DefinitionPopup>
          <DefinitionPopup q="86116">요</DefinitionPopup>.
        </Section>
        <Section>
          <i>{t("Sunmi Sin: I have not eaten. I am hungry.")}</i>
        </Section>
        <Section>
          {t(
            "As for Sunmi Sin's response, notice that neither the first sentence (안 먹었어요) nor the second sentence (배고파요) has an explicit subject, since the subject was already implicily understood.",
          )}
        </Section>
      </ArticleSection>
    </>
  );
}
