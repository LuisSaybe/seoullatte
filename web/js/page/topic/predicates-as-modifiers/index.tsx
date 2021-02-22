import React from "react";
import { useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export function PredicateAsModifier() {
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
            <E q="27500">가</E>
            <E q="85853">는</E>
            &nbsp;
            <E q="60865">남자</E>
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
            <E q="69514">온</E>
            &nbsp;
            <E q="71232">적</E>
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
            <E q="66375">보낼</E>
            &nbsp;
            <E q="24147">편지</E>
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
            <E q="71290">아름다운</E>
            &nbsp;
            <E q="27369">여자</E>
          </div>
          <div>
            <i>{t("A beautiful woman")}</i>
          </div>
        </Section>
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <E q="66586">큰</E>
            &nbsp;
            <E q="28029">건물</E>
          </div>
          <div>
            <i>{t("A large building")}</i>
          </div>
        </Section>
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <E q="23143">느린</E>
            &nbsp;
            <E q="18779">고양이</E>
          </div>
          <div>
            <i>{t("A slow cat")}</i>
          </div>
        </Section>
        <Section marginSize={MarginSizeName.medium}>
          <div>
            <E q="91737">힘들</E>
            <E q="80344">은</E>
            &nbsp;
            <E q="62254">날</E>
          </div>
          <div>
            <i>{t("A difficult day")}</i>
          </div>
        </Section>
      </Section>
    </>
  );
}
