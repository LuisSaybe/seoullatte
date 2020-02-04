import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { useNavigateToHash } from "web/js/hook/useNavigateToHash";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export const S_IRREGULAR = "s-irregular";

export function IrregularPredicate() {
  const { t } = useTranslation();
  const navigate = useNavigateToHash();

  useEffect(() => {
    navigate();
  }, [navigate]);

  return (
    <>
      {t(
        "Some predicates have irregular conjugations. Irregular predicates may conjugate based on patterns or only in specific situations.",
      )}
      <ArticleSection>
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
            <DefinitionPopup q="26878">이니다</DefinitionPopup> both are
            conjugated in a similar manner.
          </Trans>
          &nbsp;
          {t("In the polite speech level, 에요 is added to the stem.")}&nbsp;
          {t(
            "In the intimate speech level, 이다 becomes 이야 when added to a noun with a 받침, otherwise 이다 becomes 야.",
          )}
          &nbsp;
          {t("In the intimate speech level, 아니다 becomes 아니야.")}
        </Section>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <div>
          <DefinitionPopup q="23402">빵</DefinitionPopup>
          <DefinitionPopup q="26878">아니</DefinitionPopup>
          <DefinitionPopup q="80806">야</DefinitionPopup>
        </div>
        <div>
          <DefinitionPopup q="73448">여우</DefinitionPopup>
          <DefinitionPopup q="92101">이</DefinitionPopup>
          <DefinitionPopup q="86106">에요</DefinitionPopup>
        </div>
        <Section>
          <Trans>
            The predicate&nbsp;
            <DefinitionPopup q="69296">말다</DefinitionPopup> conjugates
            irregularly in the&nbsp;
            <Anchor to={TopicRoute.politeSpeech}>polite</Anchor>
            &nbsp;imperative and the&nbsp;
            <Anchor to={TopicRoute.intimateSpeech}>intimate</Anchor> imperative.
          </Trans>
          <Section>
            <div>
              {t("Polite imperative")}: {t("마요 or 말아요")}
            </div>
            <div>
              {t("Intimate imperative")}: {t("마")}
            </div>
          </Section>
        </Section>
      </ArticleSection>
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
      <ArticleSection id={S_IRREGULAR}>
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
