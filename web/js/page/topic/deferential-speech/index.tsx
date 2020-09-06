import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export default function DeferentialSpeech() {
  const { t } = useTranslation();

  return (
    <ArticleSection>
      <div>
        {t(
          "The following endings are added to a predicate depending on whether the clause is declarative, interrogative, imperative or proposotive.",
        )}
      </div>
      <SectionTitle>
        {t("For predicates stems ending in a consonant")}
      </SectionTitle>
      <div styleName="table">
        <div>
          <div >{t("Declarative")}</div>
          <DefinitionPopup q="79398">습니다</DefinitionPopup>
        </div>
        <div>
          <div >{t("Interrogative")}</div>
          <DefinitionPopup q="79402">습니까</DefinitionPopup>
        </div>
        <div>
          <div >{t("Imperative")}</div>
          <DefinitionPopup q="66348">으십시오</DefinitionPopup>
        </div>
        <div>
          <div >{t("Proposotive")}</div>
          <DefinitionPopup q="68880">읍시다</DefinitionPopup>
        </div>
      </div>
      <SectionTitle>{t("For predicates stems ending in a vowel")}</SectionTitle>
      <div styleName="table">
        <div>
          <div>{t("Declarative")}</div>
          <DefinitionPopup q="79397">ㅂ니다</DefinitionPopup>
        </div>
        <div>
          <div>{t("Interrogative")}</div>
          <DefinitionPopup q="79397">ㅂ니까</DefinitionPopup>
        </div>
        <div>
          <div>{t("Imperative")}</div>
          <DefinitionPopup q="66884">십시오</DefinitionPopup>
        </div>
        <div>
          <div>{t("Proposotive")}</div>
          <DefinitionPopup q="68883">ㅂ시다</DefinitionPopup>
        </div>
      </div>
      <Section>
        {t("ㅂ becomes the 받침 of the last syllable in the predicate.")}
      </Section>
    </ArticleSection>
  );
}