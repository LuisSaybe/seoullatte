import React from "react";
import { useTranslation } from "react-i18next";

import { TopicRoute } from "common/routes";

import { ArticlePage } from "web/js/component/article-page";
import { ArticleSection } from "web/js/component/article-section";
import { NextPreviousAnchors } from "web/js/component/next-previous-anchors";
import "./style.scss";

export function Syllable() {
  const { t } = useTranslation();

  return (
    <ArticlePage articleTitle={t("Korean Syllables")}>
      {t(
        "There are 5 ways in which 한글 characters can combine to form a syllable.",
      )}
      &nbsp;
      {t(
        "In all cases, if a syllable begins with a vowel, the character ㅇ is placed before the vowel. In this case, the character ㅇ is not pronounced.",
      )}
      <ArticleSection>
        <div>&bull; {t("One vowel.")}</div>
        <div>For example: 웨</div>
      </ArticleSection>
      <ArticleSection>
        <div>&bull; {t("A vowel followed by a consonant.")}</div>
        <div>For example: 안</div>
      </ArticleSection>
      <ArticleSection>
        <div>&bull; {t("A consonant followed by a vowel.")}</div>
        <div>For example: 코</div>
      </ArticleSection>
      <ArticleSection>
        <div>&bull; {t("A consonant, a vowel and then a consonant.")}</div>
        <div>For example: 들</div>
      </ArticleSection>
      <ArticleSection>
        <div>
          &bull;{" "}
          {t("A consonant, a vowel, a consonant, and another consonant.")}
        </div>
        <div>For example: 젊</div>
      </ArticleSection>
      <ArticleSection>
        {t(
          "It is not guaranteed that a syllable is pronunced how it is spelled.",
        )}
        &nbsp;
        {t(
          "The Korean language has rules for how a syllable is pronounced alone or pronounced when adjacent to another syllable.",
        )}
      </ArticleSection>
    </ArticlePage>
  );
}
