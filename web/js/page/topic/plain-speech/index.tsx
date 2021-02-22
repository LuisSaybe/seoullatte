import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { Anchor } from "web/js/component/anchor";
import { E } from "web/js/component/definition-popup";
import { SectionTitle } from "web/js/component/section-title";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";

export function PlainSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "The plain speech level is conjugated differently for declarative, interrogative, imperative and proposotive sentences.",
        )}
        &nbsp;
        {t(
          "Only verbs can be conjugated for proposotive or imperative sentences.",
        )}
      </Section>
      <SectionTitle>{t("For declarative sentences")}</SectionTitle>
      {t(
        "If the predicate is an adjective or a copular, then 다 is added to the stem or to the past tense marker.",
      )}
      &nbsp;
      {t(
        "If the predicate is a verb, 는다 is add to stems ending in a consonant, otherwise ㄴ다 is added to the stem, ㄴ becomes the 받침.",
      )}
      &nbsp;
      <Trans>
        If the predicate is conjugated in the&nbsp;
        <Anchor to={TopicRoute.pastTense}>past tense</Anchor>
        &nbsp;then 다 is added to the past tense ending.
      </Trans>
      <Section marginSize={MarginSizeName.small}>
        <Trans>
          The verb <E q="58272">먹다</E> is conjugated as <E q="58272">먹</E>
          <E q="85037">는다</E> while the verb&nbsp;
          <E q="27500">가다</E> is conjugated&nbsp;
          <E q="27500">간</E>
          <E q="85033">다</E>.
        </Trans>
        &nbsp;
        <Trans>
          In the <Anchor to={TopicRoute.pastTense}>past tense</Anchor>,&nbsp;
          <E q="58272">먹다</E> becomes&nbsp;
          <E q="58272">먹</E>
          <E q="68719">었</E>
          <E q="85041">다</E>&nbsp; while the verb&nbsp;
          <E q="27500">가다</E> becomes&nbsp;
          <E q="27500">갔</E>
          <E q="85041">다</E>.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="62522">지금</E>&nbsp;
            <E q="62843">아이</E>
            <E q="86264">들</E>
            <E q="86289">이</E>&nbsp;
            <E q="91162">모여</E>&nbsp;
            <E q="71463">앉</E>
            <E q="86093">아</E>&nbsp;
            <E q="70703">간식</E>
            <E q="69058">을</E>&nbsp;
            <E q="58272">먹</E>
            <E q="85037">는다</E>
          </div>
          <UtteranceButton text="지금 아이들이 모여 앉아 간식을 먹는다">
            지금 아이들이 모여 앉아 간식을 먹는다
          </UtteranceButton>
          <i>{t("Now the children sit together and eat a snack.")}</i>
        </DialogGrid>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="67075">어제</E>
              <E q="70055">부터</E>&nbsp;
              <E q="17692">계속</E>&nbsp;
              <E q="36681">비</E>
              <E q="66341">가</E>&nbsp;
              <E q="69514">온</E>
              <E q="85041">다</E>
            </div>
            <UtteranceButton text="어제부터 계속 비가 온다">
              어제부터 계속 비가 온다
            </UtteranceButton>
            <i>{t("Since yesterday it has been raining.")}</i>
          </DialogGrid>
        </Section>
      </Section>
      <SectionTitle>{t("For interrogative sentences")}</SectionTitle>
      {t(
        "니 or 냐 is added to predicate stems for spoken communication 으냐 can be added to stems that end in a consonants for written communication.",
      )}
      <Section marginSize={MarginSizeName.small}>
        <Trans>
          The verb <E q="58272">먹다</E> can be conjugated as&nbsp;
          <E q="58272">먹</E>
          <E q="76426">니</E>, <E q="58272">먹</E>
          <E q="76235">으냐</E>, <E q="58272">먹</E>
          <E q="76230">냐</E>.
        </Trans>
        <div>
          <Trans>
            The verb <E q="27500">가다</E> can be conjugated as&nbsp;
            <E q="27500">가</E>
            <E q="76426">니</E> or <E q="27500">가</E>
            <E q="76230">냐</E>.
          </Trans>
        </div>
        <div>
          The adjective <E q="92405">이쁘다</E> can be conjugated as&nbsp;
          <E q="92405">이쁘</E>
          <E q="76426">니</E> or <E q="92405">이쁘</E>
          <E q="76230">냐</E>
        </div>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="">민준이</E>
            <E q="66341">가</E>&nbsp;
            <E q="84427">네</E>&nbsp;
            <E q="20286">형</E>
            <E q="86232">이</E>
            <E q="76230">냐</E>
            {t("?")}
          </div>
          <UtteranceButton text="민준이가 네 형이냐?">
            민준이가 네 형이냐?
          </UtteranceButton>
          <i>{t("Is 민준이 your older brother?")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle>{t("For imperative sentences")}</SectionTitle>
      <Trans>
        <Anchor to={TopicRoute.addingVowelToPredicateStem}>
          ㅓ or ㅏ is added
        </Anchor>
        &nbsp;to the verb stem followed by 라.
      </Trans>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17596">물</E>
            <E q="69058">을</E>&nbsp;
            <E q="51510">마구</E>&nbsp;
            <E q="71285">쓰</E>
            <E q="72584">지 말고</E>&nbsp;
            <E q="75798" senseIndexes={[2]}>
              좀
            </E>
            &nbsp;
            <E q="24445">아껴</E>&nbsp;
            <E q="71285">써</E>
            <E q="80682">라</E>
            {t("?")}
          </div>
          <UtteranceButton text="물을 마구 쓰지 말고 좀 아껴 써라">
            물을 마구 쓰지 말고 좀 아껴 써라
          </UtteranceButton>
          <i>{t("Do not waste water, please save it.")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle>{t("For proposotive sentences")}</SectionTitle>
      {t("자 is added to the verb stem.")}
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="64597">수업</E>&nbsp;
            <E q="62841">시간</E>
            <E q="86232">인</E>
            <E q="85132">데</E>&nbsp;
            <E q="75798" senseIndexes={[2]}>
              좀
            </E>
            &nbsp;
            <E q="75797">조용히</E>&nbsp;
            <E q="73277">하</E>
            <E q="76236">자</E>
          </div>
          <UtteranceButton text="수업 시간인데 좀 조용히 하자">
            수업 시간인데 좀 조용히 하자
          </UtteranceButton>
          <i>{t("It is class time so let's please be quiet.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
