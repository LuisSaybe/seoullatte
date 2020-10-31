import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import "./style.scss";

export default function FormalAndInformalSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "The Korean languages exhibits grammatical structures and sets of words which define who is the more senior person during communication.",
        )}
        &nbsp;
        {t(
          "We introduce two categories in which Korean speech may be categorized under.",
        )}
      </Section>
      <Section>
        <ArticleTitle>{t("Informal Speech")}</ArticleTitle>
      </Section>
      <Section>
        <Trans>
          <DefinitionPopup q="15843">반말</DefinitionPopup> is a type of speech
          used in one of two cases.
        </Trans>
      </Section>
      <Section>
        <div>
          &bull;&nbsp;
          {t(
            "When two people are very close or their relationship does not clearly define who is the senior.",
          )}
        </div>
        <div>
          &bull;&nbsp;
          {t("Used when talking down to a younger or inferior person.")}
        </div>
      </Section>
      <Section>
        <ArticleTitle>{t("Formal Speech")}</ArticleTitle>
      </Section>
      <Section>
        <Trans>
          <DefinitionPopup q="24607">존댓말</DefinitionPopup> is a form used in
          referring to a person or thing in order to convey respect.
        </Trans>
      </Section>
    </>
  );
}
