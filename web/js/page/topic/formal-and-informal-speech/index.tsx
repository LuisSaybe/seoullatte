import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
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
          <Utterance text="반말">반말</Utterance> is a type of speech used in
          one of two cases.
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
          <Utterance text="존댓말">존댓말</Utterance> is a form used in
          referring to a person or thing in order to convey respect.
        </Trans>
      </ArticleSection>
    </>
  );
}
