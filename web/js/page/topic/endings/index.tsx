import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { SectionTitle } from "web/js/component/section-title";

import { Section } from "web/js/component/section";
import "./style.scss";

export function Endings() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "Korean predicates combine with endings to form sentences. Endings are affixed to a predicate in a particular order and changes the meaning of a sentence when added. Below we cover two categories of endings and give examples.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Pre-Final Endings")}</SectionTitle>
        {t("Pre-final ending are affixed directly to a predicate.")}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Final Endings")}</SectionTitle>
        {t(
          "A final ending is placed after any pre-final ending. While a sentence may not contain a pre-final ending, a sentence will always end with this type of ending.",
        )}
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{t("Examples")}</SectionTitle>
        <Section>
          <div styleName="predicate">&bull; Conjugated Predicate</div>
          <div styleName="pre-final-ending">&bull; Pre-final Ending</div>
          <div styleName="final-ending">&bull; Final Ending</div>
        </Section>
        <Section styleName="sentence">
          <span styleName="predicate">알</span>
          <span styleName="pre-final-ending">겠</span>
          <span styleName="final-ending">습니다</span>
        </Section>
        <Section styleName="sentence">
          <span styleName="predicate">덥</span>
          <span styleName="pre-final-ending">네</span>
        </Section>
        <Section styleName="sentence">
          <span styleName="predicate">생각해</span>
          <span styleName="final-ending">요</span>
        </Section>
        <Section styleName="sentence">
          <span styleName="predicate">괜찮</span>
          <span styleName="pre-final-ending">으세</span>
          <span styleName="final-ending">요</span>
        </Section>
      </ArticleSection>
    </>
  );
}
