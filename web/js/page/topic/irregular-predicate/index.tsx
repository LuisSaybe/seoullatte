import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import { Table } from "web/js/component/table";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export const S_IRREGULAR_ID = "s-irregular";
export const U_IRREGULAR_ID = "u-irregular";

export default function IrregularPredicate() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "Some predicates have irregular conjugations. Irregular predicates may conjugate based on patterns or only in specific situations.",
        )}
      </Section>
      <Section>
        <ArticleTitle>{t("Rules not based on patterns")}</ArticleTitle>
        <Section>
          {t(
            "While not exhausitive we show examples of irregular predicates which are not based on patterns.",
          )}
        </Section>
        <Section>
          <Trans>
            The predicate&nbsp;
            <DefinitionPopup q="92101">이다</DefinitionPopup> and&nbsp;
            <DefinitionPopup q="26878">아니다</DefinitionPopup> are both
            conjugated irregularly in the&nbsp;
            <Anchor to={TopicRoute.politeSpeech}>polite</Anchor>
            &nbsp;and&nbsp;
            <Anchor to={TopicRoute.intimateSpeech}>intimate</Anchor>
            &nbsp; speech level.
          </Trans>
          &nbsp;
          {t(
            "이에요 and 이야 are affixed to a noun ending in a vowel. 예요 and 야 are affixed to a noun ending in a consonant.",
          )}
          <Section marginSize={MarginSizeName.small}>
            <Table columns={3}>
              <span>{t("Predicate")}</span>
              <Anchor to={TopicRoute.politeSpeech}>
                {t("Polite Speech Level")}
              </Anchor>
              <Anchor to={TopicRoute.intimateSpeech}>
                {t("Intimate Speech Level")}
              </Anchor>
              <DefinitionPopup q="92101">이다</DefinitionPopup>
              <span>이에요</span>
              <span>이야</span>
              <DefinitionPopup q="92101">이다</DefinitionPopup>
              <span>예요</span>
              <span>야</span>
              <DefinitionPopup q="26878">아니다</DefinitionPopup>
              <span>아니에요</span>
              <span>아니야</span>
            </Table>
          </Section>
          <Section marginSize={MarginSizeName.medium}>
            <Trans>
              말다 is conjugated irregularly in the&nbsp;
              <Anchor to={TopicRoute.politeSpeech}>polite</Anchor> and&nbsp;
              <Anchor to={TopicRoute.intimateSpeech}>intimate</Anchor>&nbsp;
              imperative
            </Trans>
          </Section>
          <Section marginSize={MarginSizeName.small}>
            <Table columns={3}>
              <span>{t("Predicate")}</span>
              <Anchor to={TopicRoute.politeSpeech}>
                {t("Polite Imperative")}
              </Anchor>
              <Anchor to={TopicRoute.intimateSpeech}>
                {t("Intimate Imperative")}
              </Anchor>
              <DefinitionPopup q="69296">말다</DefinitionPopup>
              <span>{t("마요 or 말아요")}</span>
              <span>마</span>
            </Table>
          </Section>
        </Section>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <div>
          <DefinitionPopup q="23402">빵</DefinitionPopup>
          <DefinitionPopup q="26878">아니</DefinitionPopup>
          <DefinitionPopup q="80806">야</DefinitionPopup>
        </div>
        <Section>
          <i>{t("(It) is not bread")}</i>
        </Section>
        <Section>
          <DefinitionPopup q="73448">여우</DefinitionPopup>
          <DefinitionPopup q="92101">예요</DefinitionPopup>
        </Section>
        <Section>
          <i>{t("(It) is a fox")}</i>
        </Section>
      </Section>
      <SectionTitle>{t("ㄷ Irregular Predicates")}</SectionTitle>
      <Section>
        {t(
          "If a predicate is ㄷ-irregular, then ㄷ will become ㄹ when joined with a suffix that starts with a vowel.",
        )}
        <Section>
          <Section styleName="column-table-3">
            <span>{t("Predicate")}</span>
            <span>{t("Conjugation")}</span>
            <span>{t("Irregular")}</span>
            <DefinitionPopup q="69471">묻다</DefinitionPopup>
            <span>물어</span>
            <span>yes</span>
            <DefinitionPopup q="57289">닫다</DefinitionPopup>
            <span>닫아</span>
            <span>no</span>
          </Section>
        </Section>
      </Section>
      <SectionTitle>{t("ㅂ Irregular Predicates")}</SectionTitle>
      <Section>
        {t(
          "If a predicate is ㅂ-irregular, then ㅂ will become 오 or 우 when joined with a suffix that starts with a vowel.",
        )}
        <Section styleName="column-table-3">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="71290">아름답다</DefinitionPopup>
          <span>아름다워</span>
          <span>yes</span>
          <DefinitionPopup q="17174">입다</DefinitionPopup>
          <span>입어</span>
          <span>no</span>
        </Section>
      </Section>
      <SectionTitle>{t("ㅅ Irregular Predicates")}</SectionTitle>
      <Section id={S_IRREGULAR_ID}>
        {t(
          "If a predicate is ㅅ irregular, then ㅅ will be deleted when joined with a suffix that starts with a vowel.",
        )}
        <Section styleName="column-table-3">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="62354">낫다</DefinitionPopup>
          <span>나아요</span>
          <span>yes</span>
          <DefinitionPopup q="71461">웃다</DefinitionPopup>
          <span>웃어요</span>
          <span>no</span>
        </Section>
      </Section>
      <SectionTitle>{t("ㅎ Irregular Predicates")}</SectionTitle>
      <Section>
        {t(
          "If a predicate is ㅎ irregular then the ㅎ in the final syllable of the stem is removed when a suffix which begins with a vowel is added to the predicate stem.",
        )}
        <Section styleName="column-table-3">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="71157">이렇다</DefinitionPopup>
          <span>이래요</span>
          <span>yes</span>
          <DefinitionPopup q="79033">좋다</DefinitionPopup>
          <span>좋아요</span>
          <span>no</span>
        </Section>
      </Section>
      <SectionTitle>{t("르 Irregular Predicates")}</SectionTitle>
      <Section>
        {t(
          "If a predicate is 르 irregular then ㅡ is removed from the stem and a ㄹ is added as a 받침 to the syllable before 르 when a suffix which begins with 어 or 아 is added.",
        )}
        &nbsp;
        {t("All 르 predicates are 르 irregular except 따르다.")}
        <Section styleName="column-table-3">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="19935">고르다</DefinitionPopup>
          <span>골라요</span>
          <span>yes</span>
          <DefinitionPopup q="25022">저지르다</DefinitionPopup>
          <span>저질러요</span>
          <span>yes</span>
          <DefinitionPopup q="64547">따르다</DefinitionPopup>
          <span>따라요</span>
          <span>no</span>
        </Section>
      </Section>
      <SectionTitle>{t("ㄹ Irregular Predicates")}</SectionTitle>
      <Section>
        {t(
          "If a suffix beginning with ㄴ, ㅂ, or ㅅ is added to a predicate stem with a ㄹ 받침, then the ㄹ is removed.",
        )}
        &nbsp;
        {t("This behaviour applies to all predicate stems ending in ㄹ.")}
        <Section styleName="column-table-2">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <DefinitionPopup q="60317">만들다</DefinitionPopup>
          <div>
            <DefinitionPopup q="60317">만드</DefinitionPopup>
            <DefinitionPopup q="85037">는다</DefinitionPopup>
          </div>
          <DefinitionPopup q="69579">살다</DefinitionPopup>
          <div>
            <DefinitionPopup q="69579">사</DefinitionPopup>
            <DefinitionPopup q="80330">세</DefinitionPopup>
            <DefinitionPopup q="80330">요</DefinitionPopup>
          </div>
        </Section>
      </Section>
      <Section id={S_IRREGULAR_ID}>
        <ArticleTitle>{t("으 Irregular Predicates")}</ArticleTitle>
        {t(
          "If the final letter of a predicate is ㅡ then ㅡ is removed when a suffix which begins with a vowel is added.",
        )}
        &nbsp;
        {t("This behaviour applies to all predicate stems ending in ㅡ.")}
      </Section>
      <Section styleName="column-table-2">
        <span>{t("Predicate")}</span>
        <span>{t("Conjugation")}</span>
        <DefinitionPopup q="89697">예쁘다</DefinitionPopup>
        <span>예뻐</span>
        <DefinitionPopup q="18396">고프다</DefinitionPopup>
        <span>고파</span>
      </Section>
    </>
  );
}
