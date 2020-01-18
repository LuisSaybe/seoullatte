import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";

import { ArticleTitle } from "web/js/component/article-title";
import "./style.scss";

export function IntimateSpeech() {
  const { t } = useTranslation();

  return (
    <ArticleSection>
      <Section>
        {t(
          "The intimate speech level has 1 conjugation for all sentence types. Declarative, Interrogative, Imperative, Propositive.",
        )}
      </Section>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Section>
          <div>{t("Predicate")} 끄다</div>
          <div>{t("1. The predicate 끄다 is irregular and becomes ㄲ")}</div>
          <div>
            {t(
              "2. The stem does not contain a vowel, and so 어 is added to the stem.",
            )}
          </div>
          <div>{t("Conjugated preciate")} 꺼</div>
        </Section>
        <Section>
          <div>{t("Predicate")} 먹다</div>
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
          <div>{t("Predicate")} 아름답다</div>
          <div>
            {t("1. The predicate 아름답다 is irregular and becomes 아름다우.")}
          </div>
          <div>
            {t(
              "2. The vowel pronounced closest to the end of the word is ㅜ and so 어 is added to the stem.",
            )}
          </div>
          <div>{t("Conjugated preciate")} 아름다워</div>
        </Section>
        <Section>
          <div>{t("Predicate")} 나쁘다</div>
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
