import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";

import { Anchor } from "web/js/component/anchor";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export default function IntimateSpeech() {
  const { t } = useTranslation();

  return (
    <ArticleSection>
      <Section>
        {t(
          "The intimate speech level has 1 conjugation for all sentence types. Declarative, Interrogative, Imperative, Propositive.",
        )}
        &nbsp;
        <Trans>
          The predicate 이다 and 아니다 are formed&nbsp;
          <Anchor canReturn to={TopicRoute.irregularPredicate}>
            irregularly
          </Anchor>
          &nbsp;in the intimate speech level.
        </Trans>
        &nbsp;
        <Trans>
          To conjugate predicates in the intimate speech level a&nbsp;
          <Anchor canReturn to={TopicRoute.addingVowelToPredicateStem}>
            ㅓ or ㅏ is added
          </Anchor>
          &nbsp;to the verb stem.
        </Trans>
      </Section>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Section>
          <div>
            {t("Predicate")}&nbsp;
            <DefinitionPopup q="73443">끄다</DefinitionPopup>
          </div>
          <div>{t("1. The predicate 끄다 is irregular and becomes ㄲ")}</div>
          <div>
            {t(
              "2. The stem does not contain a vowel, and so 어 is added to the stem.",
            )}
          </div>
          <div>{t("Conjugated predicate")} 꺼</div>
        </Section>
        <Section>
          <div>
            {t("Predicate")}&nbsp;
            <DefinitionPopup q="58272">먹다</DefinitionPopup>
          </div>
          <div>
            {t("1. The predicate 먹다 is regular and does not change.")}
          </div>
          <div>
            {t(
              "2. The vowel pronounced closest to the end of the word is ㅓ and so 어 is added to the stem.",
            )}
          </div>
          <div>{t("Conjugated predicate")} 먹어</div>
        </Section>
        <Section>
          <div>
            {t("Predicate")}&nbsp;
            <DefinitionPopup q="71290">아름답다</DefinitionPopup>
          </div>
          <div>
            {t("1. The predicate 아름답다 is irregular and becomes 아름다우.")}
          </div>
          <div>
            {t(
              "2. The vowel pronounced closest to the end of the word is ㅜ and so 어 is added to the stem.",
            )}
          </div>
          <div>{t("Conjugated predicate")} 아름다워</div>
        </Section>
        <Section>
          <div>
            {t("Predicate")}&nbsp;
            <DefinitionPopup q="26816">나쁘다</DefinitionPopup>
          </div>
          <div>
            {t("1. The predicate 나쁘다 is irregular and becomes 나ㅃ.")}
          </div>
          <div>
            {t(
              "2. The vowel pronounced closest to the end of the word is ㅏ and so 아 is added to the stem.",
            )}
          </div>
          <div>{t("Conjugated predicate")} 나빠</div>
        </Section>
      </ArticleSection>
    </ArticleSection>
  );
}
