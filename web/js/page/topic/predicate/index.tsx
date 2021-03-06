import React from "react";
import { useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { Table } from "web/js/component/table";

export function Predicate() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t("Every predicate in Korean is composed of a stem and an ending.")}
        &nbsp;
        {t(
          'The uninflected form of a Korean predicate is written "stem + 다".',
        )}
        &nbsp;
        {t(
          "A predicate can be inflected to add additional information such as tense or formality.",
        )}
        &nbsp;
        {t(
          'The uninflected form is also referred to as the "dictionary form" or "unconjugated form".',
        )}
        &nbsp;
        {t("A predicate can be a verb, an adjective or a copula.")}
      </Section>
      <Section>
        <Table columns={3}>
          <strong>{t("Stem")}</strong>
          <strong>{t("Uninflected predicate")}</strong>
          <strong>{t("Part of Speech")}</strong>
          <span>이</span>
          <E q="86232">이다</E>
          <span>{t("Copula")}</span>
          <span>가</span>
          <E q="27500">가다</E>
          <span>{t("Verb")}</span>
          <span>재미있</span>
          <E q="71212">재미있다</E>
          <span>{t("Adjective")}</span>
        </Table>
      </Section>
    </>
  );
}
