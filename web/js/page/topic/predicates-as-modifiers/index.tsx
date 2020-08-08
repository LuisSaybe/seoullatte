import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export default function PredicateAsModifier() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "A suffix can be added to a predicate in order to change it into a modifier.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>
          {t("Verbs as modifiers in the present tense")}
        </SectionTitle>
        {t(
          "To change a verb to a modifier in the present tense, the suffix 는 is added.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Verbs as modifiers in the past tense")}</SectionTitle>
        {t(
          "To change a verb to a modifier in the past tense, the suffix 은 is added to the verb stem when the verb ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄴ becomes a suffix as a 받침.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>
          {t("Verbs as modifiers in the prospective tense")}
        </SectionTitle>
        {t(
          "To change a verb to a modifier in the prospective tense, the suffix 을 is added to the verb stem when the verb ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄹ becomes a suffix as a 받침.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Adjectives as modifiers")}</SectionTitle>
        {t(
          "To change an adjective to a modifier, the suffix 은 is added to the verb stem when the verb ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄴ becomes a suffix as a 받침.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <Section>
          <div>
            <DefinitionPopup q="27500">가는</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="60865">남자</DefinitionPopup>
          </div>
          <div>
            <DefinitionPopup q="71290">아름다운</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="27369">여자</DefinitionPopup>
          </div>
          <div>
            <DefinitionPopup q="66586">큰</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="28029">건물</DefinitionPopup>
          </div>
          <div>
            <DefinitionPopup q="23143">느린</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="18779">고양이</DefinitionPopup>
          </div>
          <div>
            <DefinitionPopup q="66375">보낼</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="24147">편지</DefinitionPopup>
          </div>
          <div>
            <DefinitionPopup q="91737">힘들은</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="62254">날</DefinitionPopup>
          </div>
        </Section>
      </ArticleSection>
    </>
  );
}
