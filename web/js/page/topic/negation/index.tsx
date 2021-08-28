import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";

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
          For example, <E q="86232">이다</E>&nbsp; and&nbsp;
          <E q="26878">아니다</E>.&nbsp;
          <E q="68796">있다</E> and&nbsp;
          <E q="89917">없다</E>.&nbsp;
          <E q="89445">알다</E> and&nbsp;
          <E q="29712">모르다</E>
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
          For example, <E q="23394">공부하다</E>.
        </Trans>
        &nbsp;
        {t(
          "If a predicate is not a compound predicate, it can be negated by placing the adverb 안 before the predicate. This construction can not be used for propositive or imperative clauses.",
        )}
        <Section marginSize={MarginSizeName.medium}>
          <DialogGrid>
            <div>
              <E q="36681">비</E>
              <E q="66341">가</E>&nbsp;
              <E q="71372">안</E>&nbsp;
              <E q="69514">와</E>
              <E q="80220" senseIndexes={[1]}>
                서
              </E>
              &nbsp;
              <E q="88045">펼쳤</E>
              <E q="86038">던</E>&nbsp;
              <E q="71103">우산</E>
              <E q="69058">을</E>&nbsp;
              <E q="62539">다시</E>&nbsp;
              <E q="31735">접</E>
              <E q="68719">었</E>
              <E q="85041">다</E>
            </div>
            <UtteranceButton text="비가 안 와서 펼쳤던 우산을 다시 접었다">
              비가 안 와서 펼쳤던 우산을 다시 접었다
            </UtteranceButton>
            <i>{t("It did not rain so (I) refolded (my) umbrella.")}</i>
          </DialogGrid>
        </Section>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            승규
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            &nbsp;
            <E q="16342">난방</E>
            <E q="86289">이</E>&nbsp;
            <E q="74105">들어와</E>
            <E q="67026">서</E>&nbsp;
            <E q="62522">지금</E>&nbsp;
            <E q="72146">춥</E>
            <E q="86278">다고</E>&nbsp;
            <E q="62103">말했</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="승규는 난방이 들어와서 지금은 안 춥다고 말했다" />
          <i>{t("Seungkyu said the heat came in so now it is not cold.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <SectionTitle>{t("Negation with -지 않다")}</SectionTitle>
      </Section>
      <Section>
        <Trans>
          The <E q="72587">-지 않다</E> construction can also be used to negate
          a predicate where 지 is placed after the predicate stem.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="72704">눈</E>
            <E q="86355">을</E>&nbsp;
            <E q="57289">닫</E>
            <E q="72587">지 않</E>
            <E q="90137">겠</E>
            <E q="86094">어</E>
          </div>
          <UtteranceButton text="눈을 닫지 않겠어">
            눈을 닫지 않겠어
          </UtteranceButton>
          <i>{t("(I) will not close (my) eyes.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="62522">지금</E>
            <E senseIndexes={[1]} q="86111">
              은
            </E>
            &nbsp;
            <E q="20211">배</E>
            <E q="66341">가</E>&nbsp;
            <E q="18396">고프</E>
            <E q="72587">지 않</E>
            <E q="86568">아요</E>
          </div>
          <UtteranceButton text="지금은 배가 고프지 않아요.">
            지금은 배가 고프지 않아요.
          </UtteranceButton>
          <i>{t("(Right now, (I) am not hungry.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
