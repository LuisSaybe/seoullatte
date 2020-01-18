import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Utterance } from "web/js/component/utterance";
import "./style.scss";

export function FormalAndInformalSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "The Korean languages exhibits grammatical structures and sets of words which define who is the more senior person during communication.",
        )}
        &nbsp;
        {t(
          "We introduce two categories in which Korean speech may be categorized under.",
        )}
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Informal Speech")}</ArticleTitle>
        <Trans>
          <DefinitionPopup q="15843">반말</DefinitionPopup> is a type of speech
          used in one of two cases.
        </Trans>
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
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Formal Speech")}</ArticleTitle>
        <Trans>
          <DefinitionPopup q="24607">존댓말</DefinitionPopup> is a form used in
          referring to a person or thing in order to convey respect.
        </Trans>
      </ArticleSection>
    </>
  );
}
