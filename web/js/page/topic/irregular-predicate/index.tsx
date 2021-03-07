import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { ArticleTitle } from "web/js/component/article-title";
import { E } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import { Table } from "web/js/component/table";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export const S_IRREGULAR_ID = "s-irregular";
export const U_IRREGULAR_ID = "u-irregular";

export function IrregularPredicate() {
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
            <E q="86232">이다</E> and&nbsp;
            <E q="26878">아니다</E> are both conjugated irregularly in the&nbsp;
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
              <E q="86232">이다</E>
              <span>이에요</span>
              <span>이야</span>
              <E q="86232">이다</E>
              <span>예요</span>
              <span>야</span>
              <E q="26878">아니다</E>
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
              <E q="69296">말다</E>
              <span>{t("마요 or 말아요")}</span>
              <span>마</span>
            </Table>
          </Section>
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
            <E q="69471">묻다</E>
            <span>
              물<E q="86094">어</E>
            </span>
            <span>{t("yes")}</span>
            <E q="57289">닫다</E>
            <span>
              닫<E q="86093">아</E>
            </span>
            <span>{t("no")}</span>
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
          <E q="71290">아름답다</E>
          <span>
            아름다<E q="86094">워</E>
          </span>
          <span>{t("yes")}</span>
          <E q="17174">입다</E>
          <span>
            입<E q="86094">어</E>
          </span>
          <span>{t("no")}</span>
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
          <E q="62354">낫다</E>
          <span>
            나<E q="86568">아요</E>
          </span>
          <span>{t("yes")}</span>
          <E q="71461">웃다</E>
          <span>
            웃<E q="86571">어요</E>
          </span>
          <span>{t("no")}</span>
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
          <E q="71157">이렇다</E>
          <span>
            이래<E q="86116">요</E>
          </span>
          <span>{t("yes")}</span>
          <E q="79033">좋다</E>
          <span>
            좋<E q="86568">아요</E>
          </span>
          <span>{t("no")}</span>
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
          <E q="19935">고르다</E>
          <span>
            골<E q="86568">라요</E>
          </span>
          <span>{t("yes")}</span>
          <E q="25022">저지르다</E>
          <span>
            저질<E q="86571">러요</E>
          </span>
          <span>{t("yes")}</span>
          <E q="64547">따르다</E>
          <span>
            따<E q="86568">라요</E>
          </span>
          <span>{t("no")}</span>
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
          <E q="60317">만들다</E>
          <div>
            <E q="60317">만드</E>
            <E q="85037">는다</E>
          </div>
          <E q="69579">살다</E>
          <div>
            <E q="69579">사</E>
            <E q="86558">세요</E>
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
        <E q="89697">예쁘다</E>
        <span>
          예<E q="86094">뻐</E>
        </span>
        <E q="18396">고프다</E>
        <span>
          고<E q="86093">파</E>
        </span>
      </Section>
    </>
  );
}
