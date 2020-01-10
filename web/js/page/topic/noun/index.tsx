import React from "react";
import { useTranslation } from "react-i18next";

import { useChineseVoice } from "web/js/hook/useChineseVoice";
import { useEnglishVoice } from "web/js/hook/useEnglishVoice";
import { useFrenchVoice } from "web/js/hook/useFrenchVoice";
import { useGermanVoice } from "web/js/hook/useGermanVoice";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import { Utterance } from "web/js/component/utterance";
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
            <DefinitionPopup q="63663">질문</DefinitionPopup>
            <Utterance voice={chineseVoice} text="質問">
              質問
            </Utterance>
            <span>{t("question")}</span>
            <DefinitionPopup q="40295">도서관</DefinitionPopup>
            <Utterance voice={chineseVoice} text="图书馆">
              图书馆
            </Utterance>
            <span>{t("library")}</span>
            <DefinitionPopup q="65504">동</DefinitionPopup>
            <Utterance voice={chineseVoice} text="東">
              冬
            </Utterance>
            <span>{t("east")}</span>
          </div>
        </div>
        <div styleName="table-section">
          <TopicTitleMedium>{t("Native Korean Nouns")}</TopicTitleMedium>
          <div styleName="hangul-hanja-table">
            <strong>{t("written in 한글")}</strong>
            <strong>{t("written in 한자")}</strong>
            <strong>{t("translation")}</strong>
            <DefinitionPopup q="64367">겨울</DefinitionPopup>
            <Utterance text="겨울">冬</Utterance>
            <span>{t("winter")}</span>
            <DefinitionPopup q="27289">거북</DefinitionPopup>
            <Utterance text="거북">龜</Utterance>
            <span>{t("turtle")}</span>
            <DefinitionPopup q="26802">곧</DefinitionPopup>
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
            <DefinitionPopup q="24506">아르바이트</DefinitionPopup>
            <Utterance voice={germanVoice} text="arbeit">
              arbeit
            </Utterance>
            <span>{t("part time job")}</span>
            <DefinitionPopup q="51329">망토</DefinitionPopup>
            <Utterance voice={frenchVoice} text="monteau">
              monteau
            </Utterance>
            <span>{t("cape")}</span>
            <DefinitionPopup q="72155">치즈</DefinitionPopup>
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
