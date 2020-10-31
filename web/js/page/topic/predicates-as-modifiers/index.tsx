import React from "react";
import { useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export default function PredicateAsModifier() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "A suffix can be added to a predicate in order to change it into a modifier.",
        )}
      </Section>
      <Section>
        <SectionTitle>
          {t("Verbs as modifiers in the present tense")}
        </SectionTitle>
        {t(
          "To change a verb to a modifier in the present tense, the suffix 는 is added.",
        )}
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="60865">남자</DefinitionPopup>
          </div>
          <div>
            <i>{t("The man who goes.")}</i>
          </div>
        </Section>
      </Section>
      <Section>
        <SectionTitle>{t("Verbs as modifiers in the past tense")}</SectionTitle>
        {t(
          "To change a verb to a modifier in the past tense, the suffix 은 is added to the verb stem when the verb ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄴ becomes a suffix as a 받침.")}
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="69514">온</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="71232">적</DefinitionPopup>
          </div>
          <div>
            <i>{t("The experience of having arrived")}</i>
          </div>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          {t("Verbs as modifiers in the prospective tense")}
        </SectionTitle>
        {t(
          "To change a verb to a modifier in the prospective tense, the suffix 을 is added to the verb stem when the verb ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄹ becomes a suffix as a 받침.")}
        &nbsp;
        {t(
          "A modifier in the prospective tense does indicate that a verb is guaranteed to occur in the future.",
        )}
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="66375">보낼</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="24147">편지</DefinitionPopup>
          </div>
          <div>
            <i>{t("A letter that may be sent")}</i>
          </div>
        </Section>
      </Section>
      <Section>
        <SectionTitle>{t("Adjectives as modifiers")}</SectionTitle>
        {t(
          "To change an adjective to a modifier, the suffix 은 is added to the adjective stem when the adjective ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄴ becomes a suffix as a 받침.")}
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="71290">아름다운</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="27369">여자</DefinitionPopup>
          </div>
          <div>
            <i>{t("A beautiful woman")}</i>
          </div>
        </Section>
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="66586">큰</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="28029">건물</DefinitionPopup>
          </div>
          <div>
            <i>{t("A large building")}</i>
          </div>
        </Section>
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="23143">느린</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="18779">고양이</DefinitionPopup>
          </div>
          <div>
            <i>{t("A slow cat")}</i>
          </div>
        </Section>
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <DefinitionPopup q="91737">힘들</DefinitionPopup>
            <DefinitionPopup q="80344">은</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="62254">날</DefinitionPopup>
          </div>
          <div>
            <i>{t("A difficult day")}</i>
          </div>
        </Section>
      </Section>
    </>
  );
}
