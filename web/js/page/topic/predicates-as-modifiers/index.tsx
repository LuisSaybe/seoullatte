import React from "react";
import { useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { MarginSizeName } from "web/js/interface/size";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";
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
          <DialogGrid>
            <div>
              <E q="27500">가</E>
              <E q="85853">는</E>
              &nbsp;
              <E q="60865">남자</E>
            </div>
            <UtteranceButton text="가는 남자" />
            <div>
              <i>{t("The man who goes.")}</i>
            </div>
          </DialogGrid>
        </Section>
      </Section>
      <Section>
        <SectionTitle>{t("Verbs as modifiers in the past tense")}</SectionTitle>
        {t(
          "To change a verb to a modifier in the past tense, the suffix 은 is added to the verb stem when the verb ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄴ becomes a suffix as a 받침.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="69881">아일랜드</E>
            <E q="68853">에서</E>&nbsp;
            <E q="69514">온</E>
            &nbsp;설샤
            <E q="86232">입</E>
            <E q="79397">니다</E>
          </div>
          <UtteranceButton text="잃은 적이 여러 있다" />
          <i>{t("(I) am Saoirse from Ireland.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17177">잃</E>
            <E q="80344">은</E>
            &nbsp;
            <E q="71232">적</E>
            <E q="86289">이</E>
            &nbsp;
            <E q="17300">여러</E>
            &nbsp;
            <E q="68797">있</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="잃은 적이 여러 있다" />
          <i>{t("(I) have lost several times.")}</i>
        </DialogGrid>
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
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="66375">보낼</E>
            &nbsp;
            <E q="24147">편지</E>
            <E q="85851">는</E>&nbsp;
            <E q="70057">중국</E>
            <E q="68853">에서</E>&nbsp;
            <E q="69514">올</E>&nbsp;
            <E q="71359" senseIndexes={[1]}>
              것
            </E>
            <E q="86232">이</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="보낼 편지" />
          <i>{t("The letters that may be sent will arrive from China.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85851">는</E>&nbsp;
            <E q="73251">휴가</E>&nbsp;
            <E q="74123">때</E>&nbsp;
            <E q="71468">책</E>
            <E q="86355">을</E>&nbsp;
            <E q="68752">읽</E>
            <E q="69058" senseIndexes={[1]}>
              을
            </E>
            &nbsp;
            <E q="23324">계획</E>
            <E q="86232">이</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="나는 휴가 때 책을 읽을 계획이다" />
          <i>{t("I'm planning to read a book on vacation.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <SectionTitle>{t("Adjectives as modifiers")}</SectionTitle>
        {t(
          "To change an adjective to a modifier, the suffix 은 is added to the adjective stem when the adjective ends in a consonant.",
        )}
        &nbsp;
        {t("If the verb stem ends in a vowel ㄴ becomes a suffix as a 받침.")}
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="71290">아름다운</E>
              &nbsp;
              <E q="27369">여자</E>
            </div>
            <UtteranceButton text="아름다운 여자" />
            <i>{t("A beautiful woman")}</i>
          </DialogGrid>
        </Section>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="66586">큰</E>
              &nbsp;
              <E q="28029">건물</E>
            </div>
            <UtteranceButton text="큰 건물" />
            <i>{t("A large building")}</i>
          </DialogGrid>
        </Section>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="23143">느린</E>
              &nbsp;
              <E q="18779">고양이</E>
            </div>
            <UtteranceButton text="느린 고양이" />
            <i>{t("A slow cat")}</i>
          </DialogGrid>
        </Section>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="91737">힘들</E>
              <E q="80344">은</E>
              &nbsp;
              <E q="62254">날</E>
            </div>
            <UtteranceButton text="힘들은 날" />
            <i>{t("A difficult day")}</i>
          </DialogGrid>
        </Section>
      </Section>
    </>
  );
}
