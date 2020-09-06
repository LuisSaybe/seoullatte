import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import styles from "./style.scss";

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
        <span styleName='table-entry'>{t("Declarative")}</span>
        <span styleName='table-entry'>{t("Interrogative")}</span>
        <span styleName='table-entry'>{t("Imperative")}</span>
        <span styleName='table-entry'>{t("Proposotive")}</span>
        <DefinitionPopup buttonClassname={styles['table-entry']} q="79398">습니다</DefinitionPopup>
        <DefinitionPopup buttonClassname={styles['table-entry']} q="79402">습니까</DefinitionPopup>
        <DefinitionPopup buttonClassname={styles['table-entry']} q="66884">십시오</DefinitionPopup>
        <DefinitionPopup buttonClassname={styles['table-entry']} q="68880">읍시다</DefinitionPopup>
      </div>
      <SectionTitle>{t("For predicates stems ending in a vowel")}</SectionTitle>
      <div styleName="table">
        <span styleName='table-entry'>{t("Declarative")}</span>
        <span styleName='table-entry'>{t("Interrogative")}</span>
        <span styleName='table-entry'>{t("Imperative")}</span>
        <span styleName='table-entry'>{t("Proposotive")}</span>
        <span styleName='table-entry'>ㅂ니다</span>
        <span styleName='table-entry'>ㅂ니까</span>
        <span styleName='table-entry'>ㅂ시오</span>
        <span styleName='table-entry'>ㅂ시다</span>
      </div>
      <Section>
        {t("ㅂ becomes the 받침 of the last syllable in the predicate.")}
      </Section>
      <SectionTitle>{t("Examples")}</SectionTitle>
      <div styleName="table-example">
        <span styleName='table-entry'>{t("Predicate")}</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <DefinitionPopup buttonClassname={styles['table-entry']} q="58272">먹다</DefinitionPopup>
        <span styleName='table-entry'>먹습니다</span>
        <span styleName='table-entry'>먹습니까</span>
        <span styleName='table-entry'>먹읍시오</span>
        <span styleName='table-entry'>먹읍시다</span>
        <DefinitionPopup buttonClassname={styles['table-entry']} q="92101">이다</DefinitionPopup>
        <span styleName='table-entry'>입니다</span>
        <span styleName='table-entry'>입니까</span>
        <span styleName='table-entry'>입시오</span>
        <span styleName='table-entry'>입시다</span>
      </div>
    </ArticleSection>
  );
}
