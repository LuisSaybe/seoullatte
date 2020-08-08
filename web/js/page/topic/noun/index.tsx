import React from "react";
import { useTranslation } from "react-i18next";

import { useChineseVoice } from "web/js/hook/useChineseVoice";
import { useEnglishVoice } from "web/js/hook/useEnglishVoice";
import { useFrenchVoice } from "web/js/hook/useFrenchVoice";
import { useGermanVoice } from "web/js/hook/useGermanVoice";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { Table } from "web/js/component/table";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import { Utterance } from "web/js/component/utterance";
import "./style.scss";

export default function Noun() {
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
        <Section>
          <TopicTitleMedium>{t("Sino-Korean nouns")}</TopicTitleMedium>
          <Table columns={2}>
            <span>{t("written in 한글")}</span>
            <span>{t("written in Chinese")}</span>
            <DefinitionPopup q="63663">질문</DefinitionPopup>
            <Utterance voice={chineseVoice} text="質問">
              質問
            </Utterance>
            <DefinitionPopup q="40295">도서관</DefinitionPopup>
            <Utterance voice={chineseVoice} text="图书馆">
              图书馆
            </Utterance>
            <DefinitionPopup q="65504">동</DefinitionPopup>
            <Utterance voice={chineseVoice} text="東">
              冬
            </Utterance>
          </Table>
        </Section>
        <Section>
          <TopicTitleMedium>{t("Native Korean Nouns")}</TopicTitleMedium>
          <Table columns={2}>
            <span>{t("written in 한글")}</span>
            <span>{t("written in 한자")}</span>
            <DefinitionPopup q="64367">겨울</DefinitionPopup>
            <Utterance text="겨울">冬</Utterance>
            <DefinitionPopup q="27289">거북</DefinitionPopup>
            <Utterance text="거북">龜</Utterance>
            <DefinitionPopup q="26802">곧</DefinitionPopup>
            <Utterance text="곧">卽</Utterance>
          </Table>
        </Section>
        <Section>
          <TopicTitleMedium>{t("Loan words")}</TopicTitleMedium>
          <Table columns={2}>
            <span>{t("written in 한글")}</span>
            <span>{t("Corresponding foreign word")}</span>
            <DefinitionPopup q="24506">아르바이트</DefinitionPopup>
            <Utterance voice={germanVoice} text="arbeit">
              arbeit
            </Utterance>
            <DefinitionPopup q="51329">망토</DefinitionPopup>
            <Utterance voice={frenchVoice} text="monteau">
              monteau
            </Utterance>
            <DefinitionPopup q="72155">치즈</DefinitionPopup>
            <Utterance voice={englishVoice} text="cheese">
              cheese
            </Utterance>
          </Table>
        </Section>
      </ArticleSection>
    </>
  );
}
