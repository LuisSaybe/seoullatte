import React from "react";
import { useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export function SubjectParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "The subject particle is added to a word to indicate that it is the subject of a clause.",
        )}
        &nbsp;
        {t(
          "가 is added to a noun ending in vowel and 이 is added to a noun ending in a consonant.",
        )}
      </Section>
      <Section>
        {t(
          "If the predicate at the end of the clause is a verb the subject is the executor of the verb.",
        )}
      </Section>

      <Section>
        <DialogGrid>
          <div>
            <E q="20264">물가</E>
            <E q="66341">가</E>&nbsp;
            <E q="70871">점점</E>&nbsp;
            <E q="69518">오르</E>
            <E q="78583">고</E>&nbsp;
            <E q="68796">있</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="물가가 점점 오르고 있다" />
          <i>{t("The prices are gradually climbing")}</i>
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
            <E q="68206">오늘 </E>&nbsp;
            <E q="74178">밤</E>
            <E senseIndexes={[1]} q="86111">
              은
            </E>
            &nbsp;
            <E q="62266">달</E>
            <E q="86289">이</E>&nbsp;
            <E q="71761">참</E>&nbsp;
            <E q="62105">밝</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="오늘 밤은 달이 참 밝다" />
          <i>{t("The moon is truly bright tonight")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
