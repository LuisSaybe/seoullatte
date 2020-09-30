import React from "react";
import { useTranslation } from "react-i18next";

import { Section } from "web/js/component/section";
import "./style.scss";

export default function Numbers() {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
}
