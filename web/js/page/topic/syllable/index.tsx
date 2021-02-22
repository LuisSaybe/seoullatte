import React from "react";
import { useTranslation, Trans } from "react-i18next";

import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import "./style.scss";

export function Syllable() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          There are 5 ways in which&nbsp;
          <E q="91525">한글</E> characters can combine to form a syllable.
        </Trans>
      </Section>
      <Section>
        {t(
          "In all cases, if a syllable begins with a vowel, the character ㅇ is placed before the vowel. In this case, the character ㅇ is not pronounced.",
        )}
      </Section>
      <Section>
        <Trans>
          1 vowel as in <E q="31635">오</E>
        </Trans>
      </Section>
      <Section>
        <Trans>
          A vowel followed by a consonant as in&nbsp;
          <E q="74890">안</E>
        </Trans>
      </Section>
      <Section>
        <Trans>
          A consonant followed by a vowel&nbsp;
          <E q="46814">코</E>
        </Trans>
      </Section>
      <Section>
        <Trans>
          A consonant, a vowel, and 2 consonants as in&nbsp;
          <E q="20178">값</E>
        </Trans>
      </Section>
      <Section>
        {t(
          "A syllable is pronounced from top to bottom and then from left to right.",
        )}
        &nbsp;
        {t("The syllable 값 is read ㄱ ㅏ ㅂ ㅅ.")}
        &nbsp;
        {t(
          "It is not guaranteed that a syllable is pronunced how it is spelled.",
        )}
        &nbsp;
        {t(
          "The pronounciation of Korean syllables may change depending on the preceeding syllable, the following syllable, or even based on the word's etymology.",
        )}
      </Section>
    </>
  );
}
