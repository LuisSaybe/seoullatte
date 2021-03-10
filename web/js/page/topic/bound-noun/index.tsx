import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export function BoundNoun() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          A bound noun always appears before a&nbsp;
          <Anchor to={TopicRoute.predicateAsModifiers}>modifier</Anchor>
          &nbsp;or a&nbsp;
          <Anchor to={TopicRoute.determiner}>determiner</Anchor>.
        </Trans>
        &nbsp;
        {t("Below we give examples of the some commonly used bound nouns.")}
        &nbsp;
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          The bound noun <E q="62835">것</E> is modified by&nbsp;
          <E q="58272">먹</E>
          <E q="69058">을</E>. 먹을 is the verb&nbsp;
          <E q="58272">먹다</E> combined with the&nbsp;
          <Anchor to={TopicRoute.predicateAsModifiers}>
            prospective ending
          </Anchor>
          &nbsp;<E q="69058">을</E>
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="62843">아이</E>
            <E q="86264">들</E>
            <E q="85851">은</E>&nbsp;
            <E q="67098">엄마</E>
            <E q="69713">에게</E>&nbsp;
            <E q="58272">먹</E>
            <E q="86355">을</E>&nbsp;
            <E q="62835">것</E>
            <E q="86355">을</E>&nbsp;
            <E q="62741">달</E>
            <E q="70074">라고</E>&nbsp;
            <E q="73277" senseIndexes={[22]}>
              했
            </E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="아이들은 엄마에게 먹을 것을 달라고 했다" />
          <i>{t("The children asked their mother for something to eat.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          The bound noun 수 is modified by 알. 알 is the verb&nbsp;
          <E q="89445">알다</E> combined with the&nbsp;
          <Anchor to={TopicRoute.predicateAsModifiers}>
            prospective ending
          </Anchor>
          &nbsp;<E q="69057">ㄹ</E>
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="29742">친구</E>
            <E q="85764">를</E>&nbsp;
            <E q="61190">보</E>
            <E q="80259">면</E>&nbsp;
            <E q="43883">그</E>&nbsp;
            <E q="58161">사람</E>
            <E q="86355">을</E>&nbsp;
            <E q="89445">알</E>&nbsp;
            <E q="15615">수</E>&nbsp;
            <E q="68797">있</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="친구를 보면 그 사람을 알 수 있다" />
          <i>{t("A man is known by the company he keeps.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          The bound noun 번 is modified by the&nbsp;
          <Anchor to={TopicRoute.determiner}>determiner</Anchor>&nbsp;
          <E q="58109">둘째</E>
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="17182">우리</E>
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            &nbsp;
            <E q="63137">선반</E>&nbsp;
            <E q="71462">위</E>
            <E q="86572">에</E>&nbsp;
            <E q="61388">놓인</E>&nbsp;
            <E q="58109">둘째</E>&nbsp;
            <E q="26846">번</E>&nbsp;
            <E q="66247">물건</E>
            <E q="86355">을</E>&nbsp;
            <E q="49419">사</E>
            <E q="78337">기로 했</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="우리는 선반 위에 놓인 둘째 번 물건을 사기로 했다." />
          <i>{t("We decided to buy the second item on the shelf.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <Trans>
          The bound noun <E q="27771">원</E> is modified by the&nbsp;
          <Anchor to={TopicRoute.determiner}>determiner</Anchor>&nbsp;
          <E q="17167">천</E>
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17167">천</E>&nbsp;
            <E q="27771">원</E>
            <E q="86554">만</E>&nbsp;
            <E q="17824">빌려</E>
            <E q="76450">줘</E>
          </div>
          <UtteranceButton text="천 원만 빌려줘." />
          <i>{t("Lend me just 1000 won.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
