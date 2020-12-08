import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export function ExistenceAndPosession() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          We explore the words&nbsp;
          <DefinitionPopup q="68796">있다</DefinitionPopup>
          &nbsp; and <DefinitionPopup q="89917">없다</DefinitionPopup>.
        </Trans>
      </Section>
      <Section>
        <ArticleTitle>{t("Existence")}</ArticleTitle>
      </Section>
      <Section>
        <Trans>
          The adjectives&nbsp;
          <DefinitionPopup q="68797" senseIndexes={[7]}>
            있다
          </DefinitionPopup>
          &nbsp;and <DefinitionPopup q="89917">없다</DefinitionPopup> are used
          to describe the existence or non-existence of an object in physical
          space.
        </Trans>
        <Section>
          <DialogGrid>
            <div>
              <DefinitionPopup q="73276">학교</DefinitionPopup>
              <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
              <DefinitionPopup q="60319">어디</DefinitionPopup>
              <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
              <DefinitionPopup q="68796">있</DefinitionPopup>
              <DefinitionPopup q="86571">어요</DefinitionPopup>?
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
              <DefinitionPopup q="68895">부산</DefinitionPopup>
              <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
              <DefinitionPopup q="68796">있</DefinitionPopup>
              <DefinitionPopup q="86571">어요</DefinitionPopup>
            </div>
            <UtteranceButton text="부산에 있어요">
              부산에 있어요
            </UtteranceButton>
            <i>{t("(It) is in Busan.")}</i>
          </DialogGrid>
        </Section>
        <Section>
          <DialogGrid>
            <div>
              <DefinitionPopup q="17371">잔</DefinitionPopup>&nbsp;
              <DefinitionPopup q="74890">안</DefinitionPopup>
              <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
              <DefinitionPopup q="27372">커피</DefinitionPopup>
              <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
              <DefinitionPopup q="68796">있</DefinitionPopup>
              <DefinitionPopup q="86571">어요</DefinitionPopup>
            </div>
            <UtteranceButton text="잔 안에 커피가 있어요?">
              잔 안에 커피가 있어요?
            </UtteranceButton>
            <div>
              <DefinitionPopup q="68796">없</DefinitionPopup>
              <DefinitionPopup q="86571">어요</DefinitionPopup>
            </div>
            <UtteranceButton text="없어요">없어요</UtteranceButton>
            <i>{t("Is there coffee in (the) cup?")}</i>
            <div />
            <i>{t("There is no coffee.")}</i>
            <div />
          </DialogGrid>
        </Section>
      </Section>
      <Section>
        <ArticleTitle>{t("Posession")}</ArticleTitle>
      </Section>
      <Section>
        {t(
          "The adjective 있다 and 없다 indicate that subject of a sentence is possessed.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            박규희
            <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71353">표</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="85037">는다</DefinitionPopup>
          </div>
          <UtteranceButton text="박규희는 표가 있는다">
            표가 있는다
          </UtteranceButton>
          <i>Kyuhee Park has the ticket.</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="24147">편지</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="86094" senseIndexes={[3]}>
              어
            </DefinitionPopup>
          </div>
          <UtteranceButton text="편지가 있어">편지가 있어</UtteranceButton>
          <i>(They) have the letter.</i>
        </DialogGrid>
      </Section>
      <Section>
        <ArticleTitle>{t("Predicates with 있다 and 없다")}</ArticleTitle>
      </Section>
      <Section>
        {t(
          "Some adjectives contains 있다 and 없다 to indicate a subject has or lacks a quality.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="71115">음막</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70482">어때</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="음막이 어때?">음막이 어때?</UtteranceButton>
          <div>
            <DefinitionPopup q="71212">재미있</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
            {t("!")}
          </div>
          <UtteranceButton text="재미있다">재미있다</UtteranceButton>
          <i>How's the music?</i>
          <div />
          <i>It's fun!</i>
        </DialogGrid>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="20198">눈</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="69514">올</DefinitionPopup>
            <DefinitionPopup q="71355">거</DefinitionPopup>
            <DefinitionPopup q="80806">야</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="눈이 올거야?">눈이 올거야?</UtteranceButton>
          <div>
            어,&nbsp;
            <DefinitionPopup q="71301">틀림없</DefinitionPopup>
            <DefinitionPopup q="86094" senseIndexes={[3]}>
              어
            </DefinitionPopup>
          </div>
          <UtteranceButton text="어. 틀림없어">어. 틀림없어</UtteranceButton>
          <i>It's going to snow?</i>
          <div />
          <i>Yeah, definitely.</i>
        </DialogGrid>
      </Section>
    </>
  );
}
