import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import "./style.scss";

export function Hangul() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The modern Korean writing system is called&nbsp;
          <E q="91525">한글</E> in South Korea while the name is{" "}
          <E q="67949">조선</E>
          <E q="59226">글</E> in North Korea.
        </Trans>
        &nbsp;
        <Trans>
          The writing system was introduced and promoted in 1446 CE by Sejong
          the Great. The original name was&nbsp;
          <E q="69716">훈민정음</E>. Prior to the widespread usage of
          한글,&nbsp;
          <E q="72461">한자</E>, a system composed of Chinese characters was
          used to write Korean language.
        </Trans>
      </Section>
      <Section>
        {t("Below are the consonants and their corresponding names")}
      </Section>
      <Section styleName="consonants">
        {[
          ["ㄱ", "기역", "69070"],
          ["ㄲ", "쌍기역", "69072"],
          ["ㄴ", "니은", "24397"],
          ["ㄷ", "디귿", "69076"],
          ["ㄸ", "쌍디귿", "69078"],
          ["ㄹ", "리을", "69080"],
          ["ㅁ", "미음", "69082"],
          ["ㅂ", "비읍", "69085"],
          ["ㅃ", "쌍비읍", "69087"],
          ["ㅅ", "시옷", "69089"],
          ["ㅆ", "쌍시옷", "69091"],
          ["ㅇ", "이응", "69093"],
          ["ㅈ", "지읒", "70072"],
          ["ㅉ", "쌍지읒", "69097"],
          ["ㅊ", "치읓", "69099"],
          ["ㅋ", "키읔", "69101"],
          ["ㅌ", "티읕", "69103"],
          ["ㅍ", "피읖", "69105"],
          ["ㅎ", "히읗", "69107"],
        ].map(([character, name, q], index) => (
          <div key={index}>
            <span styleName="character consonant">{character}</span>
            <E q={q} styleName="character">
              {name}
            </E>
          </div>
        ))}
      </Section>
      <Section>
        {t(
          "Below are the vowels whose names are represented by their respective sounds",
        )}
      </Section>
      <Section styleName="vowels">
        {[
          ["ㅏ", "68847"],
          ["ㅓ", "68854"],
          ["ㅗ", "68872"],
          ["ㅜ", "68874"],
          ["ㅡ", "68876"],
          ["ㅣ", "68877"],
          ["ㅐ", "68848"],
          ["ㅔ", "68855"],
          ["ㅒ", "68852"],
          ["ㅖ", "68857"],
          ["ㅚ", "68861"],
          ["ㅙ", "68860"],
          ["ㅟ", "68865"],
          ["ㅞ", "68863"],
          ["ㅢ", "68868"],
        ].map(([character, q]) => (
          <E q={q} key={q} styleName="character">
            {character}
          </E>
        ))}
      </Section>
    </>
  );
}
