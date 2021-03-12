import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function PluralParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="86264">들</E> is added to a noun which pluralizes
          the noun it attches to.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="58175">다</E>
            <E q="86264">들</E>&nbsp;
            <E q="70745">도착</E>
            <E q="68719">했</E>
            <E q="86094">어</E>
            {t("?")}
          </div>
          <UtteranceButton text="다들 도착했어?" />
          <i>{t("Have you all arrived?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="70029">한국</E>&nbsp;
            <E q="58161">사람</E>
            <E q="86264">들</E>
            <E q="86111">은</E>&nbsp;
            <E q="66237">무슨</E>&nbsp;
            <E q="68121">외국</E>&nbsp;
            <E q="71114">음식</E>
            <E q="86355">을</E>&nbsp;
            <E q="27929">좋아해</E>
            <E q="86116">요</E>
            {t("?")}
          </div>
          <UtteranceButton text="한국 사람들 은 무슨 외국 음식을 좋아하세요?" />
          <i>{t("What kind of foreign food do Koreans like?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="71157">이런</E>&nbsp;
            <E q="62835">것</E>
            <E q="86264">들</E>&nbsp;
            <E q="73277">해</E>
            <E q="86258">도</E>&nbsp;
            <E q="71372">안</E>&nbsp;
            <E q="89858">됩</E>
            <E q="79397">니다</E>
          </div>
          <UtteranceButton text="이런 것들 해도 안 됩니다" />
          <i>{t("It is not okay to do all these things.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="30184">작년</E>
            <E q="26847">보다</E>&nbsp;
            <E q="32514">기업</E>
            <E q="86264">들</E>&nbsp;
            <E q="86290">의</E>&nbsp;
            <E q="81615">투자</E>
            <E q="66341">가</E>&nbsp;
            <E q="26829">더</E>&nbsp;
            <E q="69295">많</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="작년보다 기업들 의 투자가 더 많다" />
          <i>
            {t("Compared to last year, there were more company investments.")}
          </i>
        </DialogGrid>
      </Section>
    </>
  );
}
