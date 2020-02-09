import React from "react";
import { useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import "./style.scss";

export function Counting() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "Korean numbers use two different systems for counting. A number is either a native Korean number or a Sino-Korean number",
        )}
        &nbsp;
        {t(
          "For counting every-day objects not exceeding 100 or age, Korean numbers are used. Sino Korean are used in academic settings and for unbounded measurements such as time duration, weight or distance.",
        )}
        <Section>
          <SectionTitle>Native Korean Numbers</SectionTitle>
          <Section styleName="table">
            <span>하나</span>
            <span>1</span>
            <span>둘</span>
            <span>2</span>
            <span>셋</span>
            <span>3</span>
            <span>넷</span>
            <span>4</span>
            <span>다섯</span>
            <span>5</span>
            <span>여섯</span>
            <span>6</span>
            <span>일곱</span>
            <span>7</span>
            <span>여덟</span>
            <span>8</span>
            <span>아홉</span>
            <span>9</span>
            <span>둘</span>
            <span>10</span>
            <span>스물</span>
            <span>20</span>
          </Section>
        </Section>
        <Section>
          <SectionTitle>Sino Korean Numbers</SectionTitle>
          <Section styleName="table">
            <span>공</span>
            <span>0</span>
            <span>일</span>
            <span>1</span>
            <span>이</span>
            <span>2</span>
            <span>삼</span>
            <span>3</span>
            <span>사</span>
            <span>4</span>
            <span>오</span>
            <span>5</span>
            <span>육</span>
            <span>6</span>
            <span>칠</span>
            <span>7</span>
            <span>팔</span>
            <span>8</span>
            <span>구</span>
            <span>9</span>
            <span>십</span>
            <span>10</span>
            <span>백</span>
            <span>100</span>
            <span>천</span>
            <span>1000</span>
            <span>만</span>
            <span>10000</span>
          </Section>
        </Section>
        <Section styleName="table"></Section>
      </ArticleSection>
    </>
  );
}
