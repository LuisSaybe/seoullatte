import React from "react";
import { useTranslation } from "react-i18next";

import { DefinitionPopup } from "../../components/definition-popup";
import { Section } from "../../components/section";
import { SectionTitle } from "../../components/section-title";
import styles from "./style.module.scss";

export default function EParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t("The particle 에 attaches to nouns and can have several meanings.")}
      </Section>
      <Section>
        <SectionTitle>{t("Location")}</SectionTitle>
        <span className={styles.text}>
          {t(
            "The particle 에 attaches to a noun to indicate that the target noun is the location of interest related to the predicate which follows it.",
          )}
        </span>
      </Section>
      <Section>
        <DefinitionPopup q="60319">어디</DefinitionPopup>
        <DefinitionPopup q="86572">에</DefinitionPopup>
        &nbsp;
        <DefinitionPopup q="68796">있</DefinitionPopup>
        <DefinitionPopup q="86571">어요</DefinitionPopup>?
      </Section>
      <Section>
        <SectionTitle>{t("Objective")}</SectionTitle>
        {t(
          "The particle 에 attaches to a noun which indicates that the noun was the objective of the predicate.",
        )}
      </Section>
      <Section>
        <DefinitionPopup q="60931">나</DefinitionPopup>
        <DefinitionPopup q="85853">는</DefinitionPopup>
        &nbsp;
        <DefinitionPopup q="20233">시험</DefinitionPopup>
        <DefinitionPopup q="86572" senseIndexes={[6]}>
          에
        </DefinitionPopup>
        &nbsp;
        <DefinitionPopup q="85306">합격한</DefinitionPopup>
        <DefinitionPopup q="85033">다</DefinitionPopup>
      </Section>
    </>
  );
}
