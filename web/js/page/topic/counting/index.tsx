import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export default function Counting() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "Korean numbers use two different systems for counting. A number is either a native Korean number or a Sino-Korean number.",
        )}
        &nbsp;
        {t(
          "For counting every-day objects not exceeding 100 or age, Korean numbers are used. Sino Korean are used in academic settings and for unbounded measurements such as time duration, weight or distance.",
        )}
        <Section styleName="table">
          <span>Korean</span>
          <span>Sino-Korean</span>
          <span>Arabic</span>
          <span></span>
          <span>공</span>
          <span>0</span>
          <span>하나</span>
          <span>일</span>
          <span>1</span>
          <span>둘</span>
          <span>이</span>
          <span>2</span>
          <span>셋</span>
          <span>삼</span>
          <span>3</span>
          <span>넷</span>
          <span>사</span>
          <span>4</span>
          <span>다섯</span>
          <span>오</span>
          <span>5</span>
          <span>여섯</span>
          <span>욱</span>
          <span>6</span>
          <span>일곱</span>
          <span>칠</span>
          <span>7</span>
          <span>여덟</span>
          <span>팔</span>
          <span>8</span>
          <span>아홉</span>
          <span>구</span>
          <span>9</span>
          <span>열</span>
          <span>십</span>
          <span>10</span>
          <span>스물</span>
          <span>이십</span>
          <span>20</span>
          <span>서른</span>
          <span>삼십</span>
          <span>30</span>
          <span>마흔</span>
          <span>사십</span>
          <span>40</span>
          <span>쉰</span>
          <span>오십</span>
          <span>50</span>
          <span>예슨</span>
          <span>육십</span>
          <span>60</span>
          <span>일흔</span>
          <span>칠십</span>
          <span>70</span>
          <span>여든</span>
          <span>팔십</span>
          <span>80</span>
          <span>아흔</span>
          <span>구십</span>
          <span>90</span>
          <span></span>
          <span>백</span>
          <span>{10 ** 2}</span>
          <span></span>
          <span>천</span>
          <span>{10 ** 3}</span>
          <span></span>
          <span>만</span>
          <span>{10 ** 4}</span>
          <span></span>
          <span>십만</span>
          <span>{10 ** 5}</span>
          <span></span>
          <span>백만</span>
          <span>{10 ** 6}</span>
          <span></span>
          <span>천만</span>
          <span>{10 ** 7}</span>
          <span></span>
          <span>억</span>
          <span>100000000</span>
          <span></span>
          <span>십억</span>
          <span>1000000000</span>
          <span></span>
          <span>백억</span>
          <span>{10 ** 10}</span>
          <span></span>
          <span>천억</span>
          <span>{10 ** 11}</span>
          <span></span>
          <span>조</span>
          <span>{10 ** 12}</span>
        </Section>
      </ArticleSection>
      <ArticleSection>
        <SectionTitle>{"Counters"}</SectionTitle>
        {t(
          "Counters are used to express a quantity for a certain class of objects.",
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
          <DefinitionPopup q="81672">소주</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="71458">두</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="62777">병</DefinitionPopup>
        </Section>
        <Section>
          <DefinitionPopup q="17822">스무</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="72469">해</DefinitionPopup>
        </Section>
        <Section>
          {t("In formal cases, the format is [number] + [counter]의 + [noun].")}
        </Section>
        <Section>
          <DefinitionPopup q="17284">여덟</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="25581" senseIndexes={[2]}>
            곡
          </DefinitionPopup>
          <DefinitionPopup q="86290">의</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="20195">노래</DefinitionPopup>
        </Section>
        <Section>{t("Below we show examples of common counters.")}</Section>
        <ArticleSection>
          <ArticleTitle>{t("Examples")}</ArticleTitle>
          <Section>
            <div>
              이십사&nbsp;
              <DefinitionPopup q="17304">개월</DefinitionPopup>
            </div>
            <div>
              <DefinitionPopup q="58161">사람</DefinitionPopup>&nbsp;
              <DefinitionPopup q="58111">다섯</DefinitionPopup>&nbsp;
              <DefinitionPopup q="70812">명</DefinitionPopup>
            </div>
            <div>
              <DefinitionPopup q="27303">거북이</DefinitionPopup>&nbsp;
              <DefinitionPopup q="58111">한</DefinitionPopup>&nbsp;
              <DefinitionPopup q="70812">마리</DefinitionPopup>
            </div>
            <div>
              백삼십오&nbsp;
              <DefinitionPopup q="20264" senseIndexes={[3]}>
                충
              </DefinitionPopup>
            </div>
            <div>
              <DefinitionPopup q="72167">컴퓨터</DefinitionPopup>&nbsp;
              <DefinitionPopup q="67805">열</DefinitionPopup>&nbsp;
              <DefinitionPopup q="22784">개</DefinitionPopup>
            </div>
          </Section>
        </ArticleSection>
      </ArticleSection>
    </>
  );
}
