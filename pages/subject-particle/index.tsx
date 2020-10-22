import React from "react";
import { useTranslation } from "react-i18next";

import { DefinitionPopup } from "../../components/definition-popup";
import { DialogGrid } from "../../components/dialog-grid";
import { Section } from "../../components/section";
import { UtteranceButton } from "../../components/utterance-button";

export default function SubjectParticle() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "The subject particle is added to a word to indicate that it is the subject of a clause.",
      )}
      &nbsp;
      {t(
        "가 is added to a noun ending in vowel and 이 is added to a noun ending in a consonant.",
      )}
      &nbsp;
      {t(
        "If the predicate at the end of the clause is a verb the subject is the executor of the verb.",
      )}
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="20264">물가</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70871">점점</DefinitionPopup>&nbsp;
            <DefinitionPopup q="69518">오르</DefinitionPopup>
            <DefinitionPopup q="78583">고</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="물가가 점점 오르고 있다" />
          <i>The prices are gradually climbing</i>
        </DialogGrid>
      </Section>
      <Section>
        {t(
          "If the predicate at the end of the clause is an adjective, the adjective describes the subject.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="68206">오늘 </DefinitionPopup>&nbsp;
            <DefinitionPopup q="74178">밤</DefinitionPopup>
            <DefinitionPopup q="86111">은</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62266">달</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71761">참</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62105">밝</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="오늘 밤은 달이 참 밝다" />
          <i>The moon is truly bright tonight</i>
        </DialogGrid>
      </Section>
    </>
  );
}
