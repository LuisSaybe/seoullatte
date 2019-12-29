import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Utterance } from "web/js/component/utterance";
import "./style.scss";

export function Syllable() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "There are 5 ways in which 한글 characters can combine to form a syllable.",
      )}
      &nbsp;
      {t(
        "In all cases, if a syllable begins with a vowel, the character ㅇ is placed before the vowel. In this case, the character ㅇ is not pronounced.",
      )}
      <ArticleSection>
        <div>&bull; {t("One vowel.")}</div>
        <div>
          {t("For example:")} <Utterance text="웨">웨</Utterance>
        </div>
      </ArticleSection>
      <ArticleSection>
        <div>&bull; {t("A vowel followed by a consonant.")}</div>
        <div>
          {t("For example:")} <Utterance text="안">안</Utterance>
        </div>
      </ArticleSection>
      <ArticleSection>
        <div>&bull; {t("A consonant followed by a vowel.")}</div>
        <div>
          {t("For example:")} <Utterance text="코">코</Utterance>
        </div>
      </ArticleSection>
      <ArticleSection>
        <div>&bull; {t("A consonant, a vowel and then a consonant.")}</div>
        <div>
          {t("For example:")} <Utterance text="들">들</Utterance>
        </div>
      </ArticleSection>
      <ArticleSection>
        <div>
          &bull;{" "}
          {t("A consonant, a vowel, a consonant, and another consonant.")}
        </div>
        <div>
          {t("For example:")} <Utterance text="젊">젊</Utterance>
        </div>
      </ArticleSection>
      <ArticleSection>
        {t(
          "The order in which a syllable is read is from top to bottom and then left to right.",
        )}
        &nbsp;
        {t("The syllable 젊 is read ㅈ ㅓ ㄹ ㅁ.")}
        &nbsp;
        {t("It is not guaranteed that a syllable pronunced how it is spelled.")}
        &nbsp;
        {t(
          "The pronounciation of Korean syllables may change depending on the preceeding syllable, the following syllable, or even based on the word's etymology.",
        )}
      </ArticleSection>
    </>
  );
}
