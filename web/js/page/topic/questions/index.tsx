import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function Questions() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          Most question are formed by using&nbsp;
          <Anchor to={TopicRoute.prenoun}>prenouns</Anchor>
        </Trans>
        <Section>이름이 뭐예요?</Section>
        <Section>이름이 김수영이예요?</Section>
      </ArticleSection>
    </>
  );
}
