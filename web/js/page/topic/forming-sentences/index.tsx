import React from "react";
import { useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export function FormingSentences() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "There are two ideas which are prevalent throughout the Korean language.",
        )}
        &nbsp;
        {t(
          "Firstly, the order of information is organized from general to specific.",
        )}
        &nbsp;
        {t(
          "Secondly, implicitly understood information can be ommitted from communcation.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("Word order")}</SectionTitle>
        {t(
          "A simple Korean sentence is composed of a subject and a predicate.",
        )}
        &nbsp;
        {t("The subject is written before the predicate.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="56428">바닷가</E>
            <E q="66341">가</E>&nbsp;
            <E q="71290">아름답</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="바닷가가 아름답다">
            바닷가가 아름답다
          </UtteranceButton>
          <i>{t("The beach is beautiful.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t(
          "If the predicate accepts an object, then the object is written before the predicate.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="75821">제</E>
            <E q="66341">가</E>&nbsp;
            <E q="62683">밥</E>
            <E q="69058">을</E>&nbsp;
            <E q="58272">먹</E>
            <E q="86571">어요</E>
          </div>
          <UtteranceButton text="제가 밥을 먹어요">
            제가 밥을 먹어요
          </UtteranceButton>
          <i>{t("I eat rice.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <SectionTitle>{t("Context based omission")}</SectionTitle>
        {t(
          "The subject or topic of a sentence can be omitted when the subject or topic is implicitly understood.",
        )}
        &nbsp;
        {t(
          "Pronouns are the most commonly omitted parts of speech in Korean communication.",
        )}
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              덕수{t(":")}&nbsp; 선미
              <E q="85851">는</E>&nbsp;
              <E q="58272">먹</E>
              <E q="68719">었</E>
              <E q="86571">어요</E>
              {t("?")}
            </div>
            <UtteranceButton text="신선미는 먹었어요?" />
            <i>{t("Duksu: Has Sunmi eaten?")}</i>
            <span></span>
            <div>
              선미{t(":")}&nbsp;
              <E q="71372">안</E>&nbsp;
              <E q="58272">먹</E>
              <E q="68719">었</E>
              <E q="86571">어요</E>.&nbsp;
              <E q="29316">배고파</E>
              <E q="86116">요</E>.
            </div>
            <UtteranceButton text="안 먹었어요. 배고파요." />
            <i>{t("Sunmi: (I) have not eaten. (I) am hungry.")}</i>
          </DialogGrid>
        </Section>
        <Section marginSize={MarginSizeName.large}>
          {t(
            "As for Sunmi's response, notice that neither the first sentence (안 먹었어요) nor the second sentence (배고파요) has an explicit subject.",
          )}
        </Section>
      </Section>
    </>
  );
}
