import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { Subsection } from "web/js/component/subsection";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function Suffixes() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "It is often required to add an affix to a predicate or ending in order to change the meaning of a predicate, to change the meaning of the sentence or to connect two clauses.",
        )}
        &nbsp;
        {t("We discuss two types of affixes and their rules.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("받침 based changes")}</SectionTitle>
        {t(
          "If a word's final letter is a consonant this letter is reffered to as a 받침. For example, the word 방 has a 받침 since it ends in the consonant ㅇ while 여자 does not have a 받침 since the final letter ㅏ is a vowel.",
        )}
        &nbsp;
        {t(
          "Some grammatical affixes change based on whether a word has a 받침 or not.",
        )}
        &nbsp;
        {t(
          "Usually, in these cases a 받침 will be added to the final syllable if it does not contain one.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Adding ㅓ or ㅏ to a stem")}</SectionTitle>
        {t(
          "There exists affixes that that require adding ㅓ or ㅏ to a stem. We discuss how to determine which is added.",
        )}
        &nbsp;
        {t(
          "If the vowel pronounced closest to the end of the word is ㅏ or ㅗ then ㅏ is added to the stem, othwerwise ㅓ is added to the stem.",
        )}
        &nbsp;
        {t(
          "Furthermore, depending on the final syllable of the stem, the following rules apply.",
        )}
        <Subsection>
          <div>
            {t(
              "If the stem has a 받침 then 어 or 아 is added as a new syllable based on the aforementioned rules.",
            )}
          </div>
          <Trans>
            If the predicate is&nbsp;
            <Anchor to={TopicRoute.irregularPredicate}>ㅅ-irregular</Anchor>
            &nbsp;어 or 아 is added as a new syllable based on the
            aforementioned rules.
          </Trans>
          <div>
            {t(
              "If the final syllable of a stem is 오, the final syllable becomes 와.",
            )}
          </div>
          <div>
            {t(
              "If the final syllable of a stem is 우 the final syllable becomes 워.",
            )}
          </div>
          <div>
            {t("If the final letter of a word is ㅡ, ㅡ is replaced by ㅓ.")}
          </div>
          <div>
            {t("If the final letter of a word is ㅣ, ㅣ is replaced by ㅕ.")}
          </div>
          <div>{t("In all other cases, the stem does not change.")}</div>
        </Subsection>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <div>{t("먹 + (ㅓ or ㅏ) becomes 먹어 ")}</div>
        <div>{t("낫 + (ㅓ or ㅏ) becomes 나아. 낫다 is ㅅ-irregular")}</div>
        <div>{t("기다리 + (ㅓ or ㅏ) becomes 기다려")}</div>
        <div>{t("쓰 + (ㅓ or ㅏ) becomes 써")}</div>
        <div>{t("ㄲ + (ㅓ or ㅏ) becomes 꺼 ")}</div>
        <Section>
          {t(
            "In the last example, notice that ㄲ was not written with a vowel, certain irregular conjugations can remove vowels from stems before adding ㅓ or ㅏ.",
          )}
        </Section>
      </ArticleSection>
    </>
  );
}
