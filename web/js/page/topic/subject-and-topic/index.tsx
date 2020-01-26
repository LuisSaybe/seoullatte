import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function SubjectAndTopic() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <SectionTitle>{t("The Topic Particle")}</SectionTitle>
        {t(
          "The topic particle can be added to a noun to or another particle to indicate that the marked word is the topic of the sentence.",
        )}
        &nbsp;
        {t(
          "When added to a particle or noun that has a 받침, 은 is added to the word otherwise 는 is added to the word.",
        )}
        &nbsp;
        {t(
          "This may be used to re-introduce a new topic or a topic that was previously mentioned in conversation.",
        )}
        &nbsp;
        {t("Considering the following conversation.")}
        <Section>
          <div>
            A: 선영은 <DefinitionPopup q="70029">한국</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="69579" senseIndexes={[9]}>
              사
            </DefinitionPopup>
            <DefinitionPopup q="79402">십니까</DefinitionPopup>
          </div>
          <div>
            B: <DefinitionPopup q="17189">아니요</DefinitionPopup>.&nbsp;
            <DefinitionPopup q="70019">일본</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="69579" senseIndexes={[9]}>
              사
            </DefinitionPopup>
            <DefinitionPopup q="79398">습니다</DefinitionPopup>
          </div>
        </Section>
        <Section>
          {t(
            "In the first sentence, the topic of the conversation is established as 선영.",
          )}
          &nbsp;
          {t(
            "The response to the question does not introduce a topic or subject marker.",
          )}
          &nbsp;
          {t(
            "It is clear from context that B's response is referring to the topic previously established.",
          )}
          &nbsp;
          {t(
            "Consequently, to introduce a new topic the topic particle will be employed again.",
          )}
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("The Subject Particle")}</SectionTitle>
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
            <DefinitionPopup q="44506">저</DefinitionPopup>
            <DefinitionPopup q="85851" senseIndexes={[0, 1, 2]}>
              는
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="58161">사람</DefinitionPopup>
            <DefinitionPopup q="92101">이에요</DefinitionPopup>
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
