import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export default function SubjectParticle() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "The subject particle is added to a word to indicate that it is the subject of a sentence.",
        )}
        &nbsp;
        {t(
          "If the predicate at the end of the clause is a verb the subject is the executor of the verb.",
        )}
        &nbsp;
        {t(
          "If the predicate at the end of the clause is an adjective then the subject has this quality described by the adjective.",
        )}
        &nbsp;
        {t(
          "If the predicate at the end of the clause is a copular then the copular describes the relationship directly between the subject and the noun which the copular accepts.",
        )}
        &nbsp;
        {t(
          "When added to a particle or noun, 이 is added for a word which has a 받침, otherwise 가 is added.",
        )}
        <SectionTitle>{t("Examples")}</SectionTitle>
        <Trans>
          <div>
            <DefinitionPopup q="89180">네</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>
            &nbsp;
            <DefinitionPopup senseIndexes={[1]} q="15186">
              똑똑해
            </DefinitionPopup>
          </div>
          <div>
            <DefinitionPopup q="15689">강아지</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="79033">좋아</DefinitionPopup>
          </div>
        </Trans>
      </ArticleSection>
    </>
  );
}
