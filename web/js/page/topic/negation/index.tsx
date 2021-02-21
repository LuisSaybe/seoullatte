import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export function Negation() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          Some <Anchor to={TopicRoute.predicate}>predicates</Anchor> have a
          corresponding negated predicate.
        </Trans>
        &nbsp;
        {t("Some predicates are defined as the negation of another predicate.")}
        &nbsp;
        <Trans>
          For example, <DefinitionPopup q="92101">이다</DefinitionPopup>&nbsp;
          and&nbsp;
          <DefinitionPopup q="26878">아니다</DefinitionPopup>.&nbsp;
          <DefinitionPopup q="68796">있다</DefinitionPopup> and&nbsp;
          <DefinitionPopup q="89917">없다</DefinitionPopup>.&nbsp;
          <DefinitionPopup q="89445">알다</DefinitionPopup> and&nbsp;
          <DefinitionPopup q="29712">모르다</DefinitionPopup>
        </Trans>
        .&nbsp;
        {t(
          "Predicates not appearing in these pairs can be negated using the 안 and the 지 않다 construction.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <SectionTitle>{t("Negation with 안")}</SectionTitle>
      </Section>
      <Section>
        {t("Compound predicates are of the form noun + 하다.")}
        &nbsp;
        <Trans>
          For example, <DefinitionPopup q="23394">공부하다</DefinitionPopup>.
        </Trans>
        &nbsp;
        {t(
          "If a predicate is not a compound predicate, it can be negated by placing the adverb 안 before the predicate. This construction can not be used for proposotive or imperative clauses.",
        )}
        <Section marginSize={MarginSizeName.medium}>
          <DialogGrid>
            <div>
              <DefinitionPopup q="36681">비</DefinitionPopup>
              <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
              <DefinitionPopup q="71372">안</DefinitionPopup>&nbsp;
              <DefinitionPopup q="69514">와</DefinitionPopup>
              <DefinitionPopup q="80220" senseIndexes={[1]}>
                서
              </DefinitionPopup>
              &nbsp;
              <DefinitionPopup q="88045">펼쳤</DefinitionPopup>
              <DefinitionPopup q="86038">던</DefinitionPopup>&nbsp;
              <DefinitionPopup q="71103">우산</DefinitionPopup>
              <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
              <DefinitionPopup q="62539">다시</DefinitionPopup>&nbsp;
              <DefinitionPopup q="31735">접</DefinitionPopup>
              <DefinitionPopup q="68719">었</DefinitionPopup>
              <DefinitionPopup q="85041">다</DefinitionPopup>
            </div>
            <UtteranceButton text="비가 안 와서 펼쳤던 우산을 다시 접었다">
              비가 안 와서 펼쳤던 우산을 다시 접었다
            </UtteranceButton>
            <i>{t("It did not rain so (I) refolded (my) umbrella.")}</i>
          </DialogGrid>
        </Section>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <SectionTitle>{t("Negation with -지 않다")}</SectionTitle>
      </Section>
      <Section>
        <Trans>
          The <DefinitionPopup q="72587">-지 않다</DefinitionPopup> construction
          can also be used to negate a predicate where 지 is placed after the
          predicate stem.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="72704">눈</DefinitionPopup>
            <DefinitionPopup q="86355">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="57289">닫</DefinitionPopup>
            <DefinitionPopup q="72587">지 않</DefinitionPopup>
            <DefinitionPopup q="90137">겠</DefinitionPopup>
            <DefinitionPopup q="86094">어</DefinitionPopup>
          </div>
          <UtteranceButton text="눈을 닫지 않겠어">
            눈을 닫지 않겠어
          </UtteranceButton>
          <i>{t("(I) will not close (my) eyes.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
