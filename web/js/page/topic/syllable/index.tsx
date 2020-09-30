import React from "react";
import { useTranslation, Trans } from "react-i18next";

import { Section } from "web/js/component/section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import "./style.scss";

export default function Syllable() {
  const { t } = useTranslation();

  return (
    <>
      <Trans>
        There are 5 ways in which{" "}
        <DefinitionPopup q="91525">한글</DefinitionPopup> characters can combine
        to form a syllable.
      </Trans>
      &nbsp;
      {t(
        "In all cases, if a syllable begins with a vowel, the character ㅇ is placed before the vowel. In this case, the character ㅇ is not pronounced.",
      )}
      <Section>
        <div>&bull; {t("One vowel.")}</div>
        <div>
          {t("For example:")} <DefinitionPopup q="31635">오</DefinitionPopup>
        </div>
      </Section>
      <Section>
        <div>&bull; {t("A vowel followed by a consonant.")}</div>
        <div>
          {t("For example:")} <DefinitionPopup q="74890">안</DefinitionPopup>
        </div>
      </Section>
      <Section>
        <div>&bull; {t("A consonant followed by a vowel.")}</div>
        <div>
          {t("For example:")} <DefinitionPopup q="46814">코</DefinitionPopup>
        </div>
      </Section>
      <Section>
        <div>&bull; {t("A consonant, a vowel and then a consonant.")}</div>
        <div>
          {t("For example:")} <DefinitionPopup q="86264">들</DefinitionPopup>
        </div>
      </Section>
      <Section>
        <div>
          &bull;{" "}
          {t("A consonant, a vowel, a consonant, and another consonant.")}
        </div>
        <div>
          {t("For example:")} <DefinitionPopup q="20178">값</DefinitionPopup>
        </div>
      </Section>
      <Section>
        {t(
          "The order in which a syllable is pronounced is from top to bottom and then left to right.",
        )}
        &nbsp;
        {t("The syllable 값 is read ㄱ ㅏ ㅂ ㅅ.")}
        &nbsp;
        {t("It is not guaranteed that a syllable pronunced how it is spelled.")}
        &nbsp;
        {t(
          "The pronounciation of Korean syllables may change depending on the preceeding syllable, the following syllable, or even based on the word's etymology.",
        )}
      </Section>
    </>
  );
}
