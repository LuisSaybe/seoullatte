import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export default function Negation() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          Some <Anchor to={TopicRoute.predicate}>predicates</Anchor> have a
          corresponding negated predicate.
        </Trans>
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
      <Section>
        <SectionTitle>{t("Negation with 안")}</SectionTitle>
        <Section>
          {t("Compound predicates are of the form noun + 하다.")}
          &nbsp;
          <Trans>
            For example, <DefinitionPopup q="23394">공부하다</DefinitionPopup>.
          </Trans>
          &nbsp;
          {t(
            "If a predicate is not a compound predicate, it can be negated by placing 안 before to the predicate. This construction can not be used for proposotive or imperative clauses.",
          )}
          <Section>
            <DefinitionPopup q="61306">대회</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71372">안</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66574" senseIndexes={[1]}>
              엽
            </DefinitionPopup>
            <DefinitionPopup q="79401">니까</DefinitionPopup>
          </Section>
          <Section>
            <i>{t("The meeting is not starting?")}</i>
          </Section>
        </Section>
      </Section>
      <Section>
        <SectionTitle>{t("Negation with -지 않다")}</SectionTitle>
        <Section>
          <Trans>
            The <DefinitionPopup q="72587">-지 않다</DefinitionPopup>{" "}
            construction can also be used to negate a predicate where 지 is
            placed after the predicate stem.
          </Trans>
        </Section>
        <Section>
          <DefinitionPopup q="72704">눈</DefinitionPopup>
          <DefinitionPopup q="86355">을</DefinitionPopup>&nbsp;
          <DefinitionPopup q="57289">닫</DefinitionPopup>
          <DefinitionPopup q="72587">지 않</DefinitionPopup>
          <DefinitionPopup q="90137">겠</DefinitionPopup>
          <DefinitionPopup q="86094">어</DefinitionPopup>
        </Section>
        <Section>
          <i>{t("(I) will not close (my) eyes.")}</i>
        </Section>
      </Section>
    </>
  );
}
