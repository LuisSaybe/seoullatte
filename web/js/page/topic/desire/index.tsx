import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
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
          "This construction can not be used in the second-person or third person declarative sentences.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <Section>
          <DefinitionPopup q="72128">초콜릿</DefinitionPopup>
          <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
          <DefinitionPopup q="49419">사</DefinitionPopup>
          <DefinitionPopup q="75269">고 싶다</DefinitionPopup>
        </Section>
        <Section>
          <DefinitionPopup q="71358">집</DefinitionPopup>
          <DefinitionPopup q="85784">으로</DefinitionPopup>&nbsp;
          <DefinitionPopup q="66268">돌아오</DefinitionPopup>
          <DefinitionPopup q="75269">고 싶</DefinitionPopup>
          <DefinitionPopup q="72587">지 않</DefinitionPopup>
          <DefinitionPopup q="86093" senseIndexes={[3]}>
            아
          </DefinitionPopup>
        </Section>
      </Section>
    </>
  );
}
