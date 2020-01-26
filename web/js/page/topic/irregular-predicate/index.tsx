import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import "./style.scss";

export function IrregularPredicate() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "Some predicates conjugate irregularly depending on their suffixes, we go through all irregular conjugations in this section.",
      )}
      <ArticleSection>
        <ArticleTitle>{t("ㄷ Irregular Predicates")}</ArticleTitle>
        {t(
          "If a predicate is ㄷ-irregular, then ㄷ will become ㄹ when joined with a suffix that starts with a vowel.",
        )}
        <ArticleSection>
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
        </ArticleSection>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅂ Irregular Predicates")}</ArticleTitle>
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
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅅ Irregular Predicates")}</ArticleTitle>
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
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㅎ Irregular Predicates")}</ArticleTitle>
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
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("르 Irregular Predicates")}</ArticleTitle>
        {t(
          "If a predicate is 르 then ㅡ is removed from the stem when a suffix which begins with 어 or 아 is added.",
        )}
        <Section styleName="column-table-3">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <span>{t("Irregular")}</span>
          <DefinitionPopup q="19935">고르다</DefinitionPopup>
          <span>고라요</span>
          <span>yes</span>
          <DefinitionPopup q="64547">따르다</DefinitionPopup>
          <span>따르다</span>
          <span>no</span>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("ㄹ Irregular Predicates")}</ArticleTitle>
        {t(
          "If a suffix beginning with ㄴ, ㅂ, or ㅅ is added to a predicate stem with a ㄹ 반침, then the ㄹ is removed.",
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
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("으 Irregular Predicates")}</ArticleTitle>
        {t(
          "If the final letter of a predicate is ㅡ then ㅡ is removed when a suffix which begins with a vowel is added.",
        )}
        &nbsp;
        {t("This behaviour applies to all predicate stems ending in ㅡ.")}
        <Section styleName="column-table-2">
          <span>{t("Predicate")}</span>
          <span>{t("Conjugation")}</span>
          <DefinitionPopup q="89697">예쁘다</DefinitionPopup>
          <span>예뻐</span>
          <DefinitionPopup q="18396">고프다</DefinitionPopup>
          <span>고파</span>
        </Section>
      </ArticleSection>
    </>
  );
}
