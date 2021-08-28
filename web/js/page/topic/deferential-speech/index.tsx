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
import "./style.scss";

export function DeferentialSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The following <Anchor to={TopicRoute.ending}>endings</Anchor> are
          added to a <Anchor to={TopicRoute.predicate}>predicate</Anchor> stem
          depending on whether the clause is declarative, interrogative,
          imperative or propositive.
        </Trans>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("For predicates stems ending in a consonant")}
      </SectionTitle>
      <div styleName="table">
        <div>
          <div>{t("Declarative")}</div>
          <E q="79398">습니다</E>
        </div>
        <div>
          <div>{t("Interrogative")}</div>
          <E q="79402">습니까</E>
        </div>
        <div>
          <div>{t("Imperative")}</div>
          <E q="66348">으십시오</E>
        </div>
        <div>
          <div>{t("Propositive")}</div>
          <E q="68880">읍시다</E>
        </div>
      </div>
      <Section>
        <DialogGrid>
          <div>{t("Declarative sentence")}</div>
          <div />
          <div>
            <E q="60630">날씨</E>
            <E q="66341">가</E>&nbsp;
            <E q="66030">많이</E>&nbsp;
            <E q="44484">덥</E>
            <E q="79398">습니다</E>
          </div>
          <UtteranceButton text="날씨가 많이 덥습니다" />
          <i>{t("The weather is hot.")}</i>
          <div />
          <div>{t("Interrogative sentence")}</div>
          <div />
          <div>
            <E q="71279">손님</E>
            <E q="86290">의</E>&nbsp;
            <E q="14014">연락처</E>
            <E q="85764">를</E>&nbsp;
            <E q="29770">알려</E>&nbsp;
            <E q="82136">주</E>
            <E q="80330">시</E>
            <E q="90137">겠</E>
            <E q="79402">습니까</E>?
          </div>
          <div>
            <UtteranceButton text="손님의 연락처를 알려 주시겠습니까?" />
          </div>
          <i>{t("May I have the customer's contact information?")}</i>
          <div />
          <div>{t("Imperative sentence")}</div>
          <div />
          <div>
            <E q="64739">모두</E>&nbsp;
            <E q="60332">자리</E>
            <E q="86572">에</E>&nbsp;
            <E q="71463">앉</E>
            <E q="66348">으십시오</E>
          </div>
          <UtteranceButton text="모두 자리에 앉으십시오" />
          <i>{t("Everyone sit in their seat.")}</i>
          <div />
          <div>{t("Propositive sentence")}</div>
          <div />
          <div>
            <E q="64739">모두</E>&nbsp;
            <E q="75798">좀</E>&nbsp;
            <E q="57305">빨리</E>&nbsp;
            <E q="29667">걸</E>
            <E q="68880">읍시다</E>
          </div>
          <UtteranceButton text="모두 좀 빨리 걸읍시다" />
          <i>{t("Let's all walk a little faster.")}</i>
          <div />
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("For predicates stems ending in a vowel")}
      </SectionTitle>
      <div styleName="table">
        <div>
          <div>{t("Declarative")}</div>
          <E q="79397">ㅂ니다</E>
        </div>
        <div>
          <div>{t("Interrogative")}</div>
          <E q="79397">ㅂ니까</E>
        </div>
        <div>
          <div>{t("Imperative")}</div>
          <E q="66884">십시오</E>
        </div>
        <div>
          <div>{t("Propositive")}</div>
          <E q="68883">ㅂ시다</E>
        </div>
      </div>
      <Section>
        {/* prettier-ignore */}
        <Trans>
          ㅂ becomes the <E q="56544" senseIndexes={[1]}>받침</E> of the last syllable in the predicate.
        </Trans>
      </Section>
    </>
  );
}
