import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";

import { Anchor } from "web/js/component/anchor";
import { DefinitionPopup } from "web/js/component/definition-popup";
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
          "It is often required to add a suffix to a predicate or ending in order to change the meaning of a predicate, to change the meaning of the sentence or to connect two clauses.",
        )}
        &nbsp;
        {t("We discuss two types of added and their rules.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("받침 based changes")}</SectionTitle>
        {t(
          "If a word's final letter is a consonant this letter is reffered to as a 받침. For example, the word 방 has a 받침 since it ends in the consonant ㅇ while 여자 does not have a 받침 since the final letter ㅏ is a vowel.",
        )}
        &nbsp;
        {t("Some suffixes change based on whether a word has a 받침 or not.")}
        &nbsp;
        {t(
          "Usually, in these cases a 받침 will be added to the final syllable if it does not contain one.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Adding ㅓ or ㅏ to a predicate stem")}</SectionTitle>
        {t(
          "Some suffixes require adding ㅓ or ㅏ to a predicate stem. We discuss how to determine which is added.",
        )}
        &nbsp;
        {t(
          "If the vowel pronounced closest to the end of the predicate stem is ㅏ or ㅗ then ㅏ is added to the stem, othwerwise ㅓ is added to the stem. In the case of irregular predicates, the irregular rules must be applied before.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Placement of ㅓ or ㅏ")}</SectionTitle>
        {t(
          "After determining whether ㅓ or ㅏ is added to the predicate's stem, the new letter may be added in one of 3 ways.",
        )}
        <Section>
          <Subsection>
            <div>
              &bull;&nbsp;
              {t("The letter may be added alone as a new syllable 어 or 아.")}
            </div>
            <div>
              &bull;&nbsp;
              {t("The final vowel (if any) will change to another vowel.")}
            </div>
            <div>&bull;&nbsp;{t("The letter may not be added at all.")}</div>
          </Subsection>
        </Section>
        <Section>
          {t(
            "There is no pattern based rule which determines which of the 3 occur, but the following rules are guaranteed.",
          )}
          <Subsection>
            <div>
              &bull;&nbsp;
              {t(
                "If the stem has a 받침 then 어 or 아 is added as a new syllable based on the aforementioned rules.",
              )}
            </div>
            <div>
              &bull;&nbsp;
              <Trans>
                If the predicate is&nbsp;
                <Anchor to={TopicRoute.irregularPredicate}>ㅅ-irregular</Anchor>
                &nbsp;어 or 아 is added as a new syllable based on the
                aforementioned rules.
              </Trans>
            </div>
            <div>
              &bull;&nbsp;
              {t(
                "If the final syllable of a stem is 오, the final syllable becomes 와.",
              )}
            </div>
            <div>
              &bull;&nbsp;
              {t(
                "If the final syllable of a stem is 우 the final syllable becomes 워.",
              )}
            </div>
            <div>
              &bull;&nbsp;
              {t("If the final letter of a word is ㅡ, ㅡ is replaced by ㅓ.")}
            </div>
            <div>
              &bull;&nbsp;
              {t(
                "If the final letter of a word is ㅣ, ㅣ is replaced by ㅕ or 어 is added as a new syllable.",
              )}
            </div>
            <div>
              &bull;&nbsp;
              {t(
                "If a predicate stem ends in ㅏ the stem undergoes no change or ㅏ becomes ㅐ.",
              )}
            </div>
            <div>
              &bull;&nbsp;
              {t(
                "If a predicate stem ends in ㅚ the stem undergoes no change or ㅚ becomes ㅙ.",
              )}
            </div>
          </Subsection>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <div styleName="table">
          <span>Predicate</span>
          <span></span>
          <DefinitionPopup q="58272">먹다</DefinitionPopup>
          <span>먹어</span>
          <DefinitionPopup q="62354">낫다</DefinitionPopup>
          <span>나아</span>
          <DefinitionPopup q="62264">기다리다</DefinitionPopup>
          <span>기다려</span>
          <DefinitionPopup q="65172">쓰다</DefinitionPopup>
          <span>써</span>
          <DefinitionPopup q="73443">끄다</DefinitionPopup>
          <span>꺼</span>
          <DefinitionPopup senseIndexes={[1]} q="73270">
            피다
          </DefinitionPopup>
          <span>피어</span>
          <DefinitionPopup q="27500">가다</DefinitionPopup>
          <span>가</span>
        </div>
        <Section>
          {t(
            "In the last example, notice that ㄲ was not written with a vowel, certain irregular conjugations can remove vowels from stems before adding ㅓ or ㅏ.",
          )}
        </Section>
      </ArticleSection>
    </>
  );
}
