import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function ParticleButo() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="70055">부터</E> is added to a noun or particle to
          indicate an origin or starting point.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="71687">이</E>&nbsp;
            <E q="27798">지루한</E>&nbsp;
            <E q="71468">책</E>
            <E q="86355">을</E>&nbsp;
            <E q="17170">처음</E>
            <E q="70055">부터</E>&nbsp;
            <E q="48072">끝</E>
            <E q="69698">까지</E>&nbsp;
            <E q="68752">읽</E>
            <E q="86724">으려니</E>&nbsp;
            <E q="91737">힘들</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="이 지루한 책을 처음부터 끝까지 다 읽으려니 힘들다" />
          <i>
            {t("It's hard to read this boring book from beginning to end.")}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="69792">서울</E>
            <E q="70055">부터</E>&nbsp;
            <E q="68895">부산</E>
            <E q="69698">까지</E>&nbsp;
            <E q="60632">기차</E>
            <E q="85761">로</E>
            <E q="85851">는</E>&nbsp;
            <E q="72384">여섯</E>&nbsp;
            <E q="62842">시간</E>
            <E q="86289">이</E>&nbsp;
            <E q="86940">걸린</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="서울부터 부산까지 기차로는 여섯 시간이 걸린다" />
          <i>{t("It takes six hours by train from Seoul to Busan.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            9<E q="70055">부터</E>&nbsp;1
            <E q="69698">까지</E>
            <E q="86290">의</E>&nbsp;
            <E q="64563">순서</E>
            <E q="85761">로</E>&nbsp;
            <E q="91067">나열된</E>&nbsp;
            <E q="65425">숫자</E>
            <E q="86264">들</E>
            <E q="86355">을</E>&nbsp;
            <E q="61190">보</E>
            <E q="86558">세요</E>
          </div>
          <UtteranceButton text="9부터 1까지의 순서로 나열된 숫자들을 보세요" />
          <i>{t("Look at the numbers listed in order from 9 to 1.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="68206">오늘</E>&nbsp;
            <E q="20246">오전</E>&nbsp;8<E q="65108">시</E>
            <E q="70055">부터</E>&nbsp;
            <E q="67457">오후</E>&nbsp;8
            <E q="65108">시</E>
            <E q="69698">까지</E>&nbsp;
            <E q="73276">학교</E>
            <E q="86572">에</E>&nbsp;
            <E q="23394">공부했</E>
            <E q="86571">어요</E>
          </div>
          <UtteranceButton text="오늘 오전 8시부터 오후 8시까지 학교에 공부했어요" />
          <i>{t("Today I studied at school from 8 a.m. to 8 p.m.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
