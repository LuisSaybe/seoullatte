import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { Anchor } from "web/js/component/anchor";
import { DefinitionPopup } from "web/js/component/definition-popup";
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
          The verb <DefinitionPopup q="58272">먹다</DefinitionPopup> is
          conjugated as <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="85037">는다</DefinitionPopup> while the verb&nbsp;
          <DefinitionPopup q="27500">가다</DefinitionPopup> is conjugated&nbsp;
          <DefinitionPopup q="27500">간</DefinitionPopup>
          <DefinitionPopup q="85033">다</DefinitionPopup>.
        </Trans>
        &nbsp;
        <Trans>
          In the <Anchor to={TopicRoute.pastTense}>past tense</Anchor>,&nbsp;
          <DefinitionPopup q="58272">먹다</DefinitionPopup> becomes&nbsp;
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="68719">었</DefinitionPopup>
          <DefinitionPopup q="85033">다</DefinitionPopup>&nbsp; while the
          verb&nbsp;
          <DefinitionPopup q="27500">가다</DefinitionPopup> becomes&nbsp;
          <DefinitionPopup q="27500">갔</DefinitionPopup>
          <DefinitionPopup q="85041">다</DefinitionPopup>.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="62522">지금</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62843">아이</DefinitionPopup>
            <DefinitionPopup q="86264">들</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="91162">모여</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71463">앉</DefinitionPopup>
            <DefinitionPopup q="86093">아</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70703">간식</DefinitionPopup>
            <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="58272">먹</DefinitionPopup>
            <DefinitionPopup q="85037">는다</DefinitionPopup>
          </div>
          <UtteranceButton text="지금 아이들이 모여 앉아 간식을 먹는다">
            지금 아이들이 모여 앉아 간식을 먹는다
          </UtteranceButton>
          <i>Now the children sit together and eat a snack.</i>
        </DialogGrid>
      </Section>
      <SectionTitle>{t("For interrogative sentences")}</SectionTitle>
      {t(
        "니 or 냐 is added to predicate stems for spoken communication 으냐 can be added to stems that end in a consonants for written communication.",
      )}
      <Section marginSize={MarginSizeName.small}>
        <Trans>
          The verb <DefinitionPopup q="58272">먹다</DefinitionPopup> can be
          conjugated as <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="76426">니</DefinitionPopup>,{" "}
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="76235">으냐</DefinitionPopup>,{" "}
          <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="76230">냐</DefinitionPopup>.
        </Trans>
        <div>
          <Trans>
            The verb <DefinitionPopup q="27500">가다</DefinitionPopup> can be
            conjugated as <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="76426">니</DefinitionPopup> or{" "}
            <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="76230">냐</DefinitionPopup>.
          </Trans>
        </div>
        <div>
          The adjective <DefinitionPopup q="92405">이쁘다</DefinitionPopup> can
          be conjugated as <DefinitionPopup q="92405">이쁘</DefinitionPopup>
          <DefinitionPopup q="76426">니</DefinitionPopup> or{" "}
          <DefinitionPopup q="92405">이쁘</DefinitionPopup>
          <DefinitionPopup q="76230">냐</DefinitionPopup>
        </div>
      </Section>
      <SectionTitle>{t("For imperative sentences")}</SectionTitle>
      <Trans>
        <Anchor to={TopicRoute.addingVowelToPredicateStem}>
          ㅓ or ㅏ is added
        </Anchor>
        &nbsp;to a verb stem followed by 라.
      </Trans>
      <Section marginSize={MarginSizeName.small}>
        <Trans>
          The verb <DefinitionPopup q="58272">먹다</DefinitionPopup> is
          conjugated as <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="80682">어라</DefinitionPopup>.
        </Trans>
        <div>
          <Trans>
            The verb <DefinitionPopup q="27500">가다</DefinitionPopup> is
            conjugated as <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="80698">라</DefinitionPopup>.
          </Trans>
        </div>
      </Section>
      <SectionTitle>{t("For proposotive sentences")}</SectionTitle>
      {t("자 is added to the verb stem.")}
      <Section marginSize={MarginSizeName.small}>
        <Trans>
          The verb <DefinitionPopup q="58272">먹다</DefinitionPopup> is
          conjugated as <DefinitionPopup q="58272">먹</DefinitionPopup>
          <DefinitionPopup q="76236">자</DefinitionPopup>.
        </Trans>
        <div>
          <Trans>
            The verb <DefinitionPopup q="27500">가다</DefinitionPopup> is
            conjugated as <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="76236">자</DefinitionPopup>.
          </Trans>
        </div>
      </Section>
    </>
  );
}
