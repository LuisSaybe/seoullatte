import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export default function Desire() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          Expressing desire is acheived in the by the usage of the auxiliary
          adjecive&nbsp;
          <DefinitionPopup q="62657">싶다</DefinitionPopup>
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
            <DefinitionPopup q="72128">초콜릿</DefinitionPopup>
            <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="49419">사</DefinitionPopup>
            <DefinitionPopup q="75269">고 싶다</DefinitionPopup>.
          </div>
          <UtteranceButton text="초콜릿을 사고 싶다">
            초콜릿을 사고 싶다
          </UtteranceButton>
          <i>(I) want to buy chocolate.</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="71358">집</DefinitionPopup>
            <DefinitionPopup q="85784">으로</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66268">돌아오</DefinitionPopup>
            <DefinitionPopup q="75269">고 싶</DefinitionPopup>
            <DefinitionPopup q="72587">지 않</DefinitionPopup>
            <DefinitionPopup q="86093" senseIndexes={[3]}>
              아
            </DefinitionPopup>
            .
          </div>
          <UtteranceButton text="초콜릿을 사고 싶다">
            집으로 돌아오고 싶지 않아
          </UtteranceButton>
          <i>(I) do not want to return to home.</i>
        </DialogGrid>
      </Section>
    </>
  );
}
