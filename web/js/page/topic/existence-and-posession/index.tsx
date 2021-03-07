import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { ArticleTitle } from "web/js/component/article-title";
import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";
import { MarginSizeName } from "web/js/interface/size";

export function ExistenceAndPosession() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          We explore the words&nbsp;
          <E q="68796">있다</E>
          &nbsp; and <E q="89917">없다</E>.
        </Trans>
      </Section>
      <Section>
        <ArticleTitle>{t("Existence")}</ArticleTitle>
      </Section>
      <Section>
        <Trans>
          The adjectives&nbsp;
          <E q="68797" senseIndexes={[7]}>
            있다
          </E>
          &nbsp;and <E q="89917">없다</E> are used to describe the existence or
          non-existence of an object in physical space.
        </Trans>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="73276">학교</E>
              <E q="85853">는</E>&nbsp;
              <E q="60319">어디</E>
              <E q="86572">에</E>&nbsp;
              <E q="68796">있</E>
              <E q="86571">어요</E>?
            </div>
            <UtteranceButton text="학교는 어디에 있어요?">
              학교는 어디에 있어요?
            </UtteranceButton>
            <i>{t("Where is (the) school?")}</i>
          </DialogGrid>
        </Section>
        <Section>
          <DialogGrid>
            <div>
              <E q="68895">부산</E>
              <E q="86572">에</E>&nbsp;
              <E q="68796">있</E>
              <E q="86571">어요</E>
            </div>
            <UtteranceButton text="부산에 있어요">
              부산에 있어요
            </UtteranceButton>
            <i>{t("(It) is in Busan.")}</i>
          </DialogGrid>
        </Section>
        <Section marginSize={MarginSizeName.large}>
          <DialogGrid>
            <div>
              <E q="17371">잔</E>&nbsp;
              <E q="74890">안</E>
              <E q="86572">에</E>&nbsp;
              <E q="27372">커피</E>
              <E q="66341">가</E>&nbsp;
              <E q="68796">있</E>
              <E q="86571">어요</E>
            </div>
            <UtteranceButton text="잔 안에 커피가 있어요?">
              잔 안에 커피가 있어요?
            </UtteranceButton>
            <i>{t("Is there coffee in (the) cup?")}</i>
            <div />
            <div>
              <E q="68796">없</E>
              <E q="86571">어요</E>
            </div>
            <UtteranceButton text="없어요">없어요</UtteranceButton>
            <i>{t("There is no coffee.")}</i>
          </DialogGrid>
        </Section>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <ArticleTitle>{t("Posession")}</ArticleTitle>
      </Section>
      <Section>
        {t(
          "The adjective 있다 and 없다 indicate that subject of a sentence is possessed.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            박규희
            <E q="85853">는</E>&nbsp;
            <E q="71353">표</E>
            <E q="66341">가</E>&nbsp;
            <E q="68796">있</E>
            <E q="85037">는다</E>
          </div>
          <UtteranceButton text="박규희는 표가 있는다">
            표가 있는다
          </UtteranceButton>
          <i>{t("Kyuhee Park has the ticket.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="24147">편지</E>
            <E q="66341">가</E>&nbsp;
            <E q="68796">있</E>
            <E q="86094" senseIndexes={[3]}>
              어
            </E>
          </div>
          <UtteranceButton text="편지가 있어">편지가 있어</UtteranceButton>
          <i>{t("(They) have the letter.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <ArticleTitle>{t("Predicates with 있다 and 없다")}</ArticleTitle>
      </Section>
      <Section>
        {t(
          "Some adjectives contains 있다 and 없다 to indicate a subject has or lacks a quality.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="71115">음막</E>
            <E q="86289">이</E>&nbsp;
            <E q="70482">어때</E>
            {t("?")}
          </div>
          <UtteranceButton text="음막이 어때?">음막이 어때?</UtteranceButton>
          <i>{t("How's the music?")}</i>
          <div />
          <div>
            <E q="71212">재미있</E>
            <E q="85041">다</E>
            {t("!")}
          </div>
          <UtteranceButton text="재미있다">재미있다</UtteranceButton>
          <i>{t("It's fun!")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="20198">눈</E>
            <E q="86289">이</E>&nbsp;
            <E q="69514">올</E>
            <E q="71355">거</E>
            <E q="80806">야</E>
            {t("?")}
          </div>
          <UtteranceButton text="눈이 올거야?">눈이 올거야?</UtteranceButton>
          <i>{t("It's going to snow?")}</i>
          <div />
          <div>
            어,&nbsp;
            <E q="71301">틀림없</E>
            <E q="86094" senseIndexes={[3]}>
              어
            </E>
          </div>
          <UtteranceButton text="어. 틀림없어">어. 틀림없어</UtteranceButton>
          <i>{t("Yeah, definitely.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
