import React from "react";
import { useTranslation } from "react-i18next";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

export default function Counters() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "Counters are used to express quantities for certain types of objects.",
      )}
      &nbsp;
      {t(
        "Associated with each type of object is the name for that type of object when counting them.",
      )}
      &nbsp;
      {t("Some counters are exclusively used with Sino-Korean numbers.")}
      &nbsp;
      {t(
        " Some counters are used exclusively with Korean numbers when the number of objects is less than or equal to 20.",
      )}
      &nbsp;
      {t(
        "Usually, if the number exceends 20, then a Sino-Korean number may be used.",
      )}
      &nbsp;
      {t("We give examples of each below.")}
      <Section>
        {t("Certain numbers are modified when used with a counter.")}
      </Section>
      <Section styleName="table-counter">
        <span>Number</span>
        <span>with counter</span>
        <span>하나</span>
        <span>한</span>
        <span>둘</span>
        <span>두</span>
        <span>셋</span>
        <span>세</span>
        <span>넷</span>
        <span>네</span>
        <span>스물</span>
        <span>스무</span>
      </Section>
      <Section>
        {t(
          "When counting objects the format is written [noun] + [number] + [counter] or [noun] + [number].",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="81672">소주</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="71458">두</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="62777">병</DefinitionPopup>
          </div>
          <UtteranceButton text="소주 두 병" />
          <i>2 bottles of soju</i>
          <div />
          <div>
            <DefinitionPopup q="17822">스무</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="72469">해</DefinitionPopup>
          </div>
          <UtteranceButton text="스무 해" />
          <i>20 years</i>
          <div />
        </DialogGrid>
      </Section>
      <Section>
        {t("In formal cases, the format is [number] + [counter]의 + [noun].")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="17284">여덟</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="25581" senseIndexes={[2]}>
              곡
            </DefinitionPopup>
            <DefinitionPopup q="86290">의</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="20195">노래</DefinitionPopup>
          </div>
          <UtteranceButton text="여덟 곡의 노래" />
          <i>8 pieces of music</i>
        </DialogGrid>
      </Section>
      <Section>{t("Below we show examples of common counters.")}</Section>
      <Section>
        <DialogGrid>
          <div>
            이십사&nbsp;
            <DefinitionPopup q="17304">개월</DefinitionPopup>
          </div>
          <UtteranceButton text="이십사 개월" />
          <i>24 months</i>
          <div />
          <div>
            <DefinitionPopup q="58161">사람</DefinitionPopup>&nbsp;
            <DefinitionPopup q="58111">다섯</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70812">명</DefinitionPopup>
          </div>
          <UtteranceButton text="사람 다섯 명" />
          <i>5 people</i>
          <div />
          <div>
            <DefinitionPopup q="27303">거북이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="58111">한</DefinitionPopup>&nbsp;
            <DefinitionPopup q="70812">마리</DefinitionPopup>
          </div>
          <UtteranceButton text="거북이 한 마리" />
          <i>1 turtle</i>
          <div />
          <div>
            백삼십오&nbsp;
            <DefinitionPopup q="20264" senseIndexes={[3]}>
              충
            </DefinitionPopup>
          </div>
          <UtteranceButton text="백삼십오 충" />
          <i>135 floors</i>
          <div />
          <div>
            <DefinitionPopup q="72167">컴퓨터</DefinitionPopup>&nbsp;
            <DefinitionPopup q="67805">열</DefinitionPopup>&nbsp;
            <DefinitionPopup q="22784">개</DefinitionPopup>
          </div>
          <UtteranceButton text="컴퓨터 열 개" />
          <i>10 computers</i>
          <div />
        </DialogGrid>
      </Section>
    </>
  );
}
