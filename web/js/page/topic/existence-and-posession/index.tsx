import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function ExistenceAndPosession() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          We explore the verbs <DefinitionPopup q="68796">있다</DefinitionPopup>
          &nbsp; and <DefinitionPopup q="68796">없다</DefinitionPopup>.
        </Trans>
        &nbsp;
        {t(
          "These verbs are antonyms and are used in many ways in the Korean language.",
        )}
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Existence")}</ArticleTitle>
        {t(
          "The verbs 있다 and 없다 are used to describe the existence or non-existence of an object or event in physical space.",
        )}
        <Section>
          <div>
            A:&nbsp;
            <DefinitionPopup q="73276">학교</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="60319">어디</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>?
          </div>
          <div>
            B:&nbsp;
            <DefinitionPopup q="68895">부산</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>
          </div>
        </Section>
        <Section>
          <div>
            A:&nbsp;
            <DefinitionPopup q="17371">잔</DefinitionPopup>&nbsp;
            <DefinitionPopup q="663748901">안</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="27372">커피</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>
            {t("?")}
          </div>
          <div>
            B:&nbsp;
            <DefinitionPopup q="68796">없</DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>
          </div>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Posession")}</ArticleTitle>
        {t(
          "The verbs 있다 and 없다 are used to indicate that an entity possesses or does not posses a physical object.",
        )}
        &nbsp;
        <Trans>
          When used in this way the object which is possesed is marked with the
          particle&nbsp;
          <Anchor to={TopicRoute.subjectAndTopicParticle}>이 or 가</Anchor>
        </Trans>
        <Section>
          <DefinitionPopup q="71353">표</DefinitionPopup>
          <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
          <DefinitionPopup q="68796">있</DefinitionPopup>
          <DefinitionPopup q="86571">는다</DefinitionPopup>
        </Section>
        <Section>
          <DefinitionPopup q="24147">편지</DefinitionPopup>
          <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
          <DefinitionPopup q="68796">있</DefinitionPopup>
          <DefinitionPopup q="86094" senseIndexes={[3]}>
            어
          </DefinitionPopup>
        </Section>
        {t(
          "The verbs 있다 and 없다 are used to indicate that an entity possesses or does not posses a quality.",
        )}
        <Section>
          <div>
            A:&nbsp;
            <DefinitionPopup q="71115">음막</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70482">어때</DefinitionPopup>
            {t("?")}
          </div>
          <div>
            B:&nbsp;
            <DefinitionPopup q="71212">재미있다</DefinitionPopup>
          </div>
        </Section>
      </ArticleSection>
    </>
  );
}
