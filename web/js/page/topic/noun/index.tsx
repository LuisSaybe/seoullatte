import React from "react";
import { useTranslation } from "react-i18next";

import { useChineseVoice } from "web/js/hook/useChineseVoice";
import { useEnglishVoice } from "web/js/hook/useEnglishVoice";
import { useFrenchVoice } from "web/js/hook/useFrenchVoice";
import { useGermanVoice } from "web/js/hook/useGermanVoice";

import { E } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { Table } from "web/js/component/table";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import { Utterance } from "web/js/component/utterance";

export function Noun() {
  const { t } = useTranslation();
  const chineseVoice = useChineseVoice();
  const germanVoice = useGermanVoice();
  const frenchVoice = useFrenchVoice();
  const englishVoice = useEnglishVoice();

  return (
    <>
      <Section>
        {t("There are 3 types of nouns in the Korean language")}
      </Section>
      <Section>
        &bull;&nbsp;<strong>{t("Native Korean nouns.")}</strong>
      </Section>
      <Section>
        &bull;&nbsp;<strong>{t("Sino-Korean nouns.")}</strong>&nbsp;
        {t("Sino-Korean nouns are words of Chinese origin.")}
      </Section>
      <Section>
        &bull;&nbsp;<strong>{t("Loan words.")}</strong>
        &nbsp;
        {t("Loan words are borrowed from other languages.")}
      </Section>
      <Section>
        {t("Below are examples of each")}
        <Section>
          <TopicTitleMedium>{t("Sino-Korean nouns")}</TopicTitleMedium>
          <Table columns={2}>
            <span>{t("written in 한글")}</span>
            <span>{t("written in Chinese")}</span>
            <E q="63663">질문</E>
            <Utterance voice={chineseVoice} text="質問">
              質問
            </Utterance>
            <E q="40295">도서관</E>
            <Utterance voice={chineseVoice} text="图书馆">
              图书馆
            </Utterance>
            <E q="65504">동</E>
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
            <E q="64367">겨울</E>
            <Utterance text="겨울">冬</Utterance>
            <E q="27289">거북</E>
            <Utterance text="거북">龜</Utterance>
            <E q="26802">곧</E>
            <Utterance text="곧">卽</Utterance>
          </Table>
        </Section>
        <Section>
          <TopicTitleMedium>{t("Loan words")}</TopicTitleMedium>
          <Table columns={2}>
            <span>{t("written in 한글")}</span>
            <span>{t("Corresponding foreign word")}</span>
            <E q="24506">아르바이트</E>
            <Utterance voice={germanVoice} text="arbeit">
              arbeit
            </Utterance>
            <E q="51329">망토</E>
            <Utterance voice={frenchVoice} text="monteau">
              monteau
            </Utterance>
            <E q="72155">치즈</E>
            <Utterance voice={englishVoice} text="cheese">
              cheese
            </Utterance>
          </Table>
        </Section>
      </Section>
    </>
  );
}
