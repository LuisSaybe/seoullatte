import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export default function TopicParticle() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "The topic particle can be added to a noun to or another particle to indicate that the marked word is the topic of the clause.",
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
            "Consequently, to introduce a new topic the topic particle can be used again.",
          )}
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <Trans>
          <div>
            <DefinitionPopup q="44506">저</DefinitionPopup>
            <DefinitionPopup q="85851" senseIndexes={[0, 1, 2]}>
              는
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="58161">사람</DefinitionPopup>
            <DefinitionPopup q="92101">이에요</DefinitionPopup>
          </div>
        </Trans>
      </ArticleSection>
    </>
  );
}
