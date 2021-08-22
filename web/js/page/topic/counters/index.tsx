import React from "react";
import { useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export function Counters() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
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
      </Section>
      <Section>
        {t("Certain numbers are modified when used with a counter.")}
      </Section>
      <Section styleName="table-counter">
        <span>{t("Number")}</span>
        <span>{t("with counter")}</span>
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
      <Section marginSize={MarginSizeName.large}>
        {t(
          "When counting objects the format is written [noun] + [number] + [counter] or [noun] + [number].",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="81672">소주</E>
            &nbsp;
            <E q="71458">두</E>
            &nbsp;
            <E q="62777">병</E>
          </div>
          <UtteranceButton text="소주 두 병" />
          <i>{t("2 bottles of soju")}</i>
          <div />
          <div>
            <E q="17822">스무</E>
            &nbsp;
            <E q="72469">해</E>
          </div>
          <UtteranceButton text="스무 해" />
          <i>{t("20 years")}</i>
          <div />
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t("In formal cases, the format is [number] + [counter]의 + [noun].")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="17284">여덟</E>
            &nbsp;
            <E q="25581" senseIndexes={[2]}>
              곡
            </E>
            <E q="86290">의</E>
            &nbsp;
            <E q="20195">노래</E>
          </div>
          <UtteranceButton text="여덟 곡의 노래" />
          <i>{t("8 pieces of music")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("Below we show examples of common counters.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            이십사&nbsp;
            <E q="17304">개월</E>
          </div>
          <UtteranceButton text="이십사 개월" />
          <i>{t("24 months")}</i>
          <div />
          <div>
            <E q="58161">사람</E>&nbsp;
            <E q="58111">다섯</E>&nbsp;
            <E q="70812">명</E>
          </div>
          <UtteranceButton text="사람 다섯 명" />
          <i>{t("5 people")}</i>
          <div />
          <div>
            <E q="27303">거북이</E>&nbsp;
            <E q="58111">한</E>&nbsp;
            <E q="70812">마리</E>
          </div>
          <UtteranceButton text="거북이 한 마리" />
          <i>{t("1 turtle")}</i>
          <div />
          <div>
            백삼십오&nbsp;
            <E q="20264" senseIndexes={[3]}>
              충
            </E>
          </div>
          <UtteranceButton text="백삼십오 충" />
          <i>{t("135 floors")}</i>
          <div />
          <div>
            <E q="72167">컴퓨터</E>&nbsp;
            <E q="67805">열</E>&nbsp;
            <E q="22784">개</E>
          </div>
          <UtteranceButton text="컴퓨터 열 개" />
          <i>{t("10 computers")}</i>
          <div />
        </DialogGrid>
      </Section>
    </>
  );
}
