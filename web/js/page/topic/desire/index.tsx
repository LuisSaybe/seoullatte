import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export function Desire() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          Expressing desire is acheived in the by the usage of the auxiliary
          adjecive&nbsp;
          <E q="62657">싶다</E>
        </Trans>
        .&nbsp;
        {t(
          "고 싶다 is added to a verb stem to indicate desire to execute the verb.",
        )}
        &nbsp;
        {t(
          "This construction can not be used in the second-person declarative sentences or third person declarative sentences.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="72128">초콜릿</E>
            <E q="69058">을</E>&nbsp;
            <E q="49419">사</E>
            <E q="75269">고 싶다</E>.
          </div>
          <UtteranceButton text="초콜릿을 사고 싶다">
            초콜릿을 사고 싶다
          </UtteranceButton>
          <i>{t("(I) want to buy chocolate.")}</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="71358">집</E>
            <E q="85784">으로</E>&nbsp;
            <E q="66268">돌아오</E>
            <E q="75269">고 싶</E>
            <E q="72587">지 않</E>
            <E q="86093" senseIndexes={[3]}>
              아
            </E>
            .
          </div>
          <UtteranceButton text="집으로 돌아오고 싶지 않아">
            집으로 돌아오고 싶지 않아
          </UtteranceButton>
          <i>{t("(I) do not want to return to home.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
