import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "../../components/anchor";
import { ArticleTitle } from "../../components/article-title";
import { DefinitionPopup } from "../../components/definition-popup";
import { Section } from "../../components/section";
import { Subsection } from "../../components/subsection";
import { TopicRoute } from "../../lib/interface/route";
import styles from "./style.module.scss";

export default function PastTense() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          To conjugate a predicate in the past tense, a&nbsp;
          <Anchor to={TopicRoute.ending}>pre-final ending</Anchor>
          &nbsp;past tense ending is added to a predicate.
        </Trans>
        <div>
          {t("Conjugating the predicate in the past tense follows these steps")}
        </div>
        <Section>
          <Subsection>
            <div>
              &bull;&nbsp;
              <Trans>
                <Anchor to={TopicRoute.addingVowelToPredicateStem}>
                  Add ㅓ or ㅏ
                </Anchor>
                &nbsp; to the predicate stem.
              </Trans>
            </div>
            <div>
              &bull;&nbsp;
              {t("Then add ㅆ as a 받침 to the final syllable.")}
            </div>
          </Subsection>
        </Section>
        <Section>
          <Trans>
            If the predicate is conjugated in the&nbsp;
            <Anchor to={TopicRoute.intimateSpeech}>
              intimate speech level
            </Anchor>
            &nbsp;then 어 is added as the final syllable.
          </Trans>
          &nbsp;
          <Trans>
            If the predicate is conjugated in the&nbsp;
            <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor>
            &nbsp;then 어요 is added as the final syllable.
          </Trans>
        </Section>
        <Section>
          {t(
            "The past tense may also be used to describe a recently completed action.",
          )}
          &nbsp;
          {t(
            "For example, if an office worker is already inside the office after arriving, this office worker can say the following phrase.",
          )}
          <Section>
            <DefinitionPopup q="61202">사무실</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="69514">왔</DefinitionPopup>
            <DefinitionPopup q="86094">어</DefinitionPopup>
          </Section>
        </Section>
        <Section>
          <Trans>
            When an additional 었 is added to the first past tense marker, the
            predicate's meaning is becomes more remote than the recent past. For
            example, <DefinitionPopup q="27500">갔</DefinitionPopup>
            <DefinitionPopup q="68838">었</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>&nbsp;or&nbsp;
            <DefinitionPopup q="92101">이</DefinitionPopup>
            <DefinitionPopup q="68838">었었</DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>
          </Trans>
          &nbsp;
          {t(
            "This can be used when recounting events which are in the distant past and no longer immediately relevant.",
          )}
        </Section>
      </Section>
      <Section>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Section className={styles.table}>
          <span>{t("Predicate")}</span>
          <span>{t("Past Tense")}</span>
          <DefinitionPopup q="58272">먹다</DefinitionPopup>
          <span>먹었어</span>
          <DefinitionPopup q="92405">이쁘다</DefinitionPopup>
          <span>이뻤습니까</span>
          <DefinitionPopup q="27500">가다</DefinitionPopup>
          <span>갔다</span>
          <DefinitionPopup q="69514">오다</DefinitionPopup>
          <span>왔어요</span>
        </Section>
      </Section>
    </>
  );
}
