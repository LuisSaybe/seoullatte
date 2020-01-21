import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { Subsection } from "web/js/component/subsection";
import { TopicRoute } from "web/js/interface/route";
import { SUFFIX_ADD_DOM_ID } from "web/js/page/topic/suffixes";

import "./style.scss";

export function PastTense() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          To conjugate a predicate in the past tense, a&nbsp;
          <Anchor to={TopicRoute.ending}>pre-final ending</Anchor>
          &nbsp; past tense ending is added to a predicate.
        </Trans>
        <div>
          {t("Conjugating the predicate in the past tense follows these steps")}
        </div>
        <Section>
          <Subsection>
            <div>
              &bull;&nbsp;
              <Trans>
                <Anchor to={`${TopicRoute.suffixes}#${SUFFIX_ADD_DOM_ID}`}>
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
        <div>
          {t(
            "When an additional 었 is added to the first paste tense marker, the predicate's meaning is becomes more remote than the recent past. For example, 갔었다 or 이었었어요",
          )}
        </div>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Section styleName="table">
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
      </ArticleSection>
    </>
  );
}
