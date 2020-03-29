import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function ExistenceAndPosession() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          We explore the words&nbsp;
          <DefinitionPopup q="68796">있다</DefinitionPopup>
          &nbsp; and <DefinitionPopup q="89917">없다</DefinitionPopup>.
        </Trans>
        &nbsp;
        {t(
          "있다 is either a verb or an adjective depending on its meaning while 없다 is an adjective.",
        )}
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Existence")}</ArticleTitle>
        <Trans>
          The adjectives&nbsp;
          <DefinitionPopup senseIndexes={[12]} q="68797">
            있다
          </DefinitionPopup>
          &nbsp; and <DefinitionPopup q="89917">없다</DefinitionPopup> are used
          to describe the existence or non-existence of an object, event or
          quality.
        </Trans>
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
          <Section>
            <div>
              A: <i>{t("Where is (the) school?")}</i>
            </div>
            <div>
              B: <i>{t("(It) is in Busan.")}</i>
            </div>
          </Section>
        </Section>
        <Section>
          <div>
            A:&nbsp;
            <DefinitionPopup q="17371">잔</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74890">안</DefinitionPopup>
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
          <Section>
            <div>
              A: <i>{t("Is there coffee in (the) cup?")}</i>
            </div>
            <div>
              B: <i>{t("There is not.")}</i>
            </div>
          </Section>
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
          <DefinitionPopup q="85037">는다</DefinitionPopup>
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
          "Some adjectives contains 있다 and 없다 to indicate a subject has or lacks a quality.",
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
        <Section>
          <div>
            A:&nbsp;
            <DefinitionPopup q="20198">눈</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="69514">올</DefinitionPopup>
            <DefinitionPopup q="71355">거</DefinitionPopup>
            <DefinitionPopup q="80806">야</DefinitionPopup>
            {t("?")}
          </div>
          <div>
            B:&nbsp;
            <DefinitionPopup q="17294">네</DefinitionPopup>.&nbsp;
            <DefinitionPopup q="71301">틀림없</DefinitionPopup>
            <DefinitionPopup q="86094" senseIndexes={[3]}>
              어
            </DefinitionPopup>
          </div>
        </Section>
      </ArticleSection>
    </>
  );
}
