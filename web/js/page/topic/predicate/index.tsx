import React from "react";
import { useTranslation } from "react-i18next";

import { ArticlePage } from "web/js/component/article-page";
import { ArticleSection } from "web/js/component/article-section";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import { Utterance } from "web/js/hook/utterance";
import "./style.scss";

export function Predicate() {
  const { t } = useTranslation();

  return (
    <ArticlePage articleTitle={t("Predicates")}>
      <ArticleSection>
        {t("Every predicate in Korean is composed of a stem and an ending.")}
        &nbsp;
        {t(
          'The uninflected form of a Korean predicate is written "stem + 다".',
        )}
        &nbsp;
        {t(
          "A predicate can be inflected to add additional information such as tense or formality.",
        )}
        &nbsp;
        {t(
          'The uninflected form is also referred to as the "dictionary form" or "unconjugated form".',
        )}
        &nbsp;
        {t("A predicate can be a verb, an adjective or a copula.")}
      </ArticleSection>
      <div styleName="table-section">
        <div styleName="table">
          <strong>{t("Stem")}</strong>
          <strong>{t("Uninflected predicate")}</strong>
          <strong>{t("Translation")}</strong>
          <strong>{t("Part of Speech")}</strong>
          <Utterance text="이">이</Utterance>
          <Utterance text="이다">이다</Utterance>
          <span>{t("to be")}</span>
          <span>{t("Copula")}</span>
          <Utterance text="가">가</Utterance>
          <Utterance text="가다">가다</Utterance>
          <span>{t("to go")}</span>
          <span>{t("Verb")}</span>
          <Utterance text="재미있">재미있</Utterance>
          <Utterance text="재미있다">재미있다</Utterance>
          <span>{t("to be funny or interesting")}</span>
          <span>{t("Adjective")}</span>
        </div>
      </div>
    </ArticlePage>
  );
}
