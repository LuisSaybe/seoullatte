import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
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
          imperative or proposotive.
        </Trans>
      </Section>
      <SectionTitle>
        {t("For predicates stems ending in a consonant")}
      </SectionTitle>
      <div styleName="table">
        <div>
          <div>{t("Declarative")}</div>
          <DefinitionPopup q="79398">습니다</DefinitionPopup>
        </div>
        <div>
          <div>{t("Interrogative")}</div>
          <DefinitionPopup q="79402">습니까</DefinitionPopup>
        </div>
        <div>
          <div>{t("Imperative")}</div>
          <DefinitionPopup q="66348">으십시오</DefinitionPopup>
        </div>
        <div>
          <div>{t("Proposotive")}</div>
          <DefinitionPopup q="68880">읍시다</DefinitionPopup>
        </div>
      </div>
      <Section>
        <DialogGrid>
          <div>Declarative sentence</div>
          <div />
          <div>
            <DefinitionPopup q="60630">날씨</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66030">많이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="44484">덥</DefinitionPopup>
            <DefinitionPopup q="79398">습니다</DefinitionPopup>
          </div>
          <UtteranceButton text="날씨가 많이 덥습니다" />
          <i>{t("The weather is hot.")}</i>
          <div />
          <div>Interrogative sentence</div>
          <div />
          <div>
            <DefinitionPopup q="71279">손님</DefinitionPopup>
            <DefinitionPopup q="86290">의</DefinitionPopup>&nbsp;
            <DefinitionPopup q="14014">연락처</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="29770">알려</DefinitionPopup>&nbsp;
            <DefinitionPopup q="82136">주</DefinitionPopup>
            <DefinitionPopup q="80330">시</DefinitionPopup>
            <DefinitionPopup q="90137">겠</DefinitionPopup>
            <DefinitionPopup q="79402">습니까</DefinitionPopup>?
          </div>
          <div>
            <UtteranceButton text="손님의 연락처를 알려 주시겠습니까?" />
          </div>
          <i>{t("May I have the customer's contact information?")}</i>
          <div />
          <div>Imperative sentence</div>
          <div />
          <div>
            <DefinitionPopup q="64739">모두</DefinitionPopup>&nbsp;
            <DefinitionPopup q="60332">자리</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71463">앉</DefinitionPopup>
            <DefinitionPopup q="66348">으십시오</DefinitionPopup>
          </div>
          <UtteranceButton text="모두 자리에 앉으십시오" />
          <i>{t("Everyone sit in their seat.")}</i>
          <div />
          <div>Proposotive sentence</div>
          <div />
          <div>
            <DefinitionPopup q="64739">모두</DefinitionPopup>&nbsp;
            <DefinitionPopup q="75798">좀</DefinitionPopup>&nbsp;
            <DefinitionPopup q="57305">빨리</DefinitionPopup>&nbsp;
            <DefinitionPopup q="29667">걸</DefinitionPopup>
            <DefinitionPopup q="68880">읍시다</DefinitionPopup>
          </div>
          <UtteranceButton text="모두 좀 빨리 걸읍시다" />
          <i>{t("Let's all walk a little faster.")}</i>
          <div />
        </DialogGrid>
      </Section>
      <SectionTitle>{t("For predicates stems ending in a vowel")}</SectionTitle>
      <div styleName="table">
        <div>
          <div>{t("Declarative")}</div>
          <DefinitionPopup q="79397">ㅂ니다</DefinitionPopup>
        </div>
        <div>
          <div>{t("Interrogative")}</div>
          <DefinitionPopup q="79397">ㅂ니까</DefinitionPopup>
        </div>
        <div>
          <div>{t("Imperative")}</div>
          <DefinitionPopup q="66884">십시오</DefinitionPopup>
        </div>
        <div>
          <div>{t("Proposotive")}</div>
          <DefinitionPopup q="68883">ㅂ시다</DefinitionPopup>
        </div>
      </div>
      <Section>
        {t("ㅂ becomes the 받침 of the last syllable in the predicate.")}
      </Section>
    </>
  );
}
