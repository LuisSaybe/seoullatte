import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function ParticleESo() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="68853">에서</E> is added to a noun or particle and
          has various meanings.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "에서 is used to indicate that an action continuously takes place at a location.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="64390">너</E>
            <E q="85851">는</E>&nbsp;
            <E q="20207">방학</E>
            <E q="70075">이라고</E>&nbsp;
            <E q="71358">집</E>
            <E q="68853">에서</E>&nbsp;
            <E q="27373">텔레비전</E>
            <E q="86554">만</E>&nbsp;
            <E q="61190">보</E>
            <E q="76426">니</E>
          </div>
          <UtteranceButton text="너는 방학이라고 집에서 텔레비전만 보니?" />
          <i>{t("")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("에서 is used to indicate a starting point.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="62522">지금</E>&nbsp;
            <E q="73276">학교</E>
            <E q="68853">에서</E>&nbsp;
            <E q="71358">집</E>
            <E q="85784">으로</E>&nbsp;
            <E q="27500">가</E>
            <E q="85853">는</E>&nbsp;
            <E q="59251">길</E>
            <E q="86232">이</E>
            <E q="80806">야</E>
          </div>
          <UtteranceButton text="지금 학교에서 집으로 가는 길이야." />
          <i>{t("I am on my from school now.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "에서 is used to indicate a source from which something is derived.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            A:&nbsp;
            <E q="29737">이번</E>&nbsp;
            <E q="19548">주말</E>
            <E q="86572">에</E>
            <E q="86258">도</E>&nbsp;
            <E q="17695">계속</E>&nbsp;
            <E q="36681">비</E>
            <E q="66341">가</E>&nbsp;
            <E q="69514">올</E>
            <E q="86335">까</E>
            <E q="86116">요</E>
          </div>
          <UtteranceButton text="이번 주말에도 계속 비가 올까요?" />
          <i>
            {t("A: I wonder if it will continue to rain even on this weekend?")}
          </i>
          <div />
          <div>
            B:&nbsp;
            <E q="26878">아닐</E>
            <E q="86267">걸요</E>.&nbsp;
            <E q="70779">일기</E>&nbsp;
            <E q="14141">예보</E>
            <E q="68853">에서</E>&nbsp;
            <E q="19548">주말</E>
            <E q="86111">은</E>&nbsp;
            <E q="66031">맑</E>
            <E q="85793">다고</E>&nbsp;
            <E q="73277">하</E>
            <E q="77062">던</E>
            <E q="86256">데요</E>
          </div>
          <UtteranceButton text="아닐 걸요. 일기 예보에서 주말은 맑다고 하던데요" />
          <i>
            {t(
              "B: It does not seem so. The weather forecast says it will be clear.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("에서 may indicate the reason for doing an action.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="감사하">감사하</E>
            <E q="85851">는</E>&nbsp;
            <E q="20911">마음</E>
            <E q="68853">에서</E>&nbsp;
            <E q="24147">편지</E>
            <E q="85764">를</E>&nbsp;
            <E q="65172">썼</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="감사하는 마음에서 편지를 썼다." />
          <i>{t("I wrote a letter out of gratitude.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          Similar to the <E q="85851">는</E> / <E q="86111">은</E> 에서 may
          indicate the topic of a clause.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="31749">정부</E>
            <E q="68853">에서</E>&nbsp;
            <E q="70222">유치원</E>&nbsp;
            <E q="24053">교육비</E>&nbsp;
            <E q="85764">를</E>&nbsp;
            <E q="27943">지원해</E>&nbsp;
            <E q="76439">준</E>
            <E q="85033">다</E>
          </div>
          <UtteranceButton text="정부에서 유치원 교육비를 지원해 준다." />
          <i>{t("The government supports kindergarten education expenses.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
