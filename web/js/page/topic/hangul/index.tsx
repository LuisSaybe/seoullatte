import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import { Utterance } from "web/js/component/utterance";

import { DefinitionPopup } from "web/js/component/definition-popup";
import "./style.scss";

export function Hangul() {
  const { t } = useTranslation();

  return (
    <>
      <section styleName="section">
        <Trans>
          The modern Korean writing system is called{" "}
          <DefinitionPopup q="91525">한글</DefinitionPopup> in South Korea while
          the name is <DefinitionPopup q="67949">조선</DefinitionPopup>
          <DefinitionPopup q="59226">글</DefinitionPopup> in North Korea.
        </Trans>
        &nbsp;
        <Trans>
          The writing system was introduced and promoted in 1446 CE by Sejong
          the Great. The original name was{" "}
          <DefinitionPopup q="69716">훈민정음</DefinitionPopup>. Prior to the
          widespread usage of 한글,{" "}
          <DefinitionPopup q="72461">한자</DefinitionPopup>, a system composed
          of Chinese characters was used to write Korean language.
        </Trans>
      </section>
      <section styleName="section">
        {t("Below are the consonants and their corresponding names")}
      </section>
      <section styleName="section consonants">
        {[
          ["ㄱ", "기역"],
          ["ㄲ", "쌍기역"],
          ["ㄴ", "니은"],
          ["ㄷ", "디귿"],
          ["ㄸ", "쌍디귿"],
          ["ㄹ", "리을"],
          ["ㅁ", "미음"],
          ["ㅂ", "비읍"],
          ["ㅃ", "쌍비읍"],
          ["ㅅ", "시옷"],
          ["ㅆ", "쌍시옷"],
          ["ㅇ", "이응"],
          ["ㅈ", "지읒"],
          ["ㅉ", "쌍지읒"],
          ["ㅊ", "치읓"],
          ["ㅋ", "키읔"],
          ["ㅌ", "티읕"],
          ["ㅍ", "피읖"],
          ["ㅎ", "히읗"],
        ].map(([character, name], index) => (
          <div key={index}>
            <span styleName="character consonant">{character}</span>
            <Utterance text={name} styleName="character">
              {name}
            </Utterance>
          </div>
        ))}
      </section>
      <section styleName="section">
        {t(
          "Below are the vowels whose names are represented by their respective sounds",
        )}
      </section>
      <section styleName="section vowels">
        {[
          "ㅏ",
          "ㅓ",
          "ㅗ",
          "ㅜ",
          "ㅡ",
          "ㅣ",
          "ㅐ",
          "ㅔ",
          "ㅒ",
          "ㅖ",
          "ㅚ",
          "ㅙ",
          "ㅟ",
          "ㅞ",
        ].map((character) => (
          <Utterance key={character} text={character} styleName="character">
            {character}
          </Utterance>
        ))}
        <Utterance styleName="character" text="으이">
          ㅢ
        </Utterance>
      </section>
    </>
  );
}
