import React from "react";
import { useTranslation } from "react-i18next";

import { ArticlePage } from "web/js/component/article-page";
import { ArticleSection } from "web/js/component/article-section";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import { Utterance } from "web/js/component/utterance";
import { useChineseVoice } from "web/js/hook/useChineseVoice";
import { useEnglishVoice } from "web/js/hook/useEnglishVoice";
import { useFrenchVoice } from "web/js/hook/useFrenchVoice";
import { useGermanVoice } from "web/js/hook/useGermanVoice";

import "./style.scss";

export function Noun() {
  const { t } = useTranslation();
  const chineseVoice = useChineseVoice();
  const germanVoice = useGermanVoice();
  const frenchVoice = useFrenchVoice();
  const englishVoice = useEnglishVoice();

  return (
    <>
      <ArticleSection>
        {t("There are 3 types of nouns in the Korean language")}
        <div>
          &bull;&nbsp;<strong>{t("Sino-Korean nouns.")}</strong>&nbsp;
          {t("Sino-Korean nouns are words of Chinese origin.")}
        </div>
        <div>
          &bull;&nbsp;<strong>{t("Native Korean nouns.")}</strong>
        </div>
        <div>
          &bull;&nbsp;<strong>{t("Loan words.")}</strong>
          &nbsp;
          {t("Loan words are borrowed from other languages.")}
        </div>
      </ArticleSection>
      <ArticleSection>
        {t("Below are examples of each")}
        <div styleName="table-section">
          <TopicTitleMedium>{t("Sino-Korean nouns")}</TopicTitleMedium>
          <div styleName="hangul-hanja-table">
            <strong>{t("written in 한글")}</strong>
            <strong>{t("written in Chinese")}</strong>
            <strong>{t("translation")}</strong>
            <Utterance text="질문">질문</Utterance>
            <Utterance voice={chineseVoice} text="質問">
              質問
            </Utterance>
            <span>{t("question")}</span>
            <Utterance text="도서관">도서관</Utterance>
            <Utterance voice={chineseVoice} text="图书馆">
              图书馆
            </Utterance>
            <span>{t("library")}</span>
            <Utterance text="동">동</Utterance>
            <Utterance voice={chineseVoice} text="冬">
              冬
            </Utterance>
            <span>{t("winter")}</span>
          </div>
        </div>
        <div styleName="table-section">
          <TopicTitleMedium>{t("Native Korean Nouns")}</TopicTitleMedium>
          <div styleName="hangul-hanja-table">
            <strong>{t("written in 한글")}</strong>
            <strong>{t("written in 한자")}</strong>
            <strong>{t("translation")}</strong>
            <Utterance text="겨울">겨울</Utterance>
            <Utterance text="겨울">冬</Utterance>
            <span>{t("winter")}</span>
            <Utterance text="거북">거북</Utterance>
            <Utterance text="거북">龜</Utterance>
            <span>{t("turtle")}</span>
            <Utterance text="곧">곧</Utterance>
            <Utterance text="곧">卽</Utterance>
            <span>{t("soon, immediately")}</span>
          </div>
        </div>
        <div styleName="table-section">
          <TopicTitleMedium>{t("Loan words")}</TopicTitleMedium>
          <div styleName="hangul-hanja-table">
            <strong>{t("written in 한글")}</strong>
            <strong>{t("Corresponding foreign word")}</strong>
            <strong>{t("meaning in Korean")}</strong>
            <Utterance text="아르바이트">아르바이트</Utterance>
            <Utterance voice={germanVoice} text="arbeit">
              arbeit
            </Utterance>
            <span>{t("part time job")}</span>
            <Utterance text="망토">망토</Utterance>
            <Utterance voice={frenchVoice} text="monteau">
              monteau
            </Utterance>
            <span>{t("cape")}</span>
            <Utterance text="치즈">치즈</Utterance>
            <Utterance voice={englishVoice} text="cheese">
              cheese
            </Utterance>
            <span>{t("cheese")}</span>
          </div>
        </div>
      </ArticleSection>
    </>
  );
}
