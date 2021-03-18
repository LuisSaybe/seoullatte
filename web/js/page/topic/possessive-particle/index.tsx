import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function PossessiveParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="86290">의</E> is added to a noun or particle to
          indicate it is owned by, belongs to, is related to the following word.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            <E q="62818">선생님</E>
            <E q="">을</E>&nbsp;
            <E q="86093">도</E>
            <E q="69514">와</E>&nbsp;
            <E q="62911">서재</E>
            <E q="86290">의</E>&nbsp;
            <E q="71468">책</E>
            <E q="86264">들</E>
            <E q="86355">을</E>&nbsp;
            <E q="75784">정리했</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="나는 선생님을 도와 서재의 책들을 정리했다" />
          <i>{t("I helped the teacher organize the books in the study.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            지수
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            <E q="62239">아픈</E>
            <E q="29742">친구</E>
            <E q="86290">의</E>
            <E q="18259">가방</E>
            <E q="86355">을</E>&nbsp;
            <E q="66262">대신</E>
            <E q="15045">들어 주</E>
            <E q="68719">었</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="지수는 아픈 친구의 가방을 대신 들어 주었다" />
          <i>{t("지수 carried her sick friend's bag instead.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="27372">커피</E>
            <E q="86290">의</E>&nbsp;
            <E q="72483">향기</E>
            <E q="66341">가</E>&nbsp;
            <E q="62276">입</E>&nbsp;
            <E q="74890">안</E>
            <E q="86572">에</E>&nbsp;
            <E q="16271">감돈</E>
            <E q="18913">다</E>
          </div>
          <UtteranceButton text="커피의 향기가 입 안에 감돈다" />
          <i>{t("The scent of coffee is in my mouth.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="">고등</E>
            <E q="">학생</E>
            <E q="86232">인</E>&nbsp;승규&nbsp;
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            &nbsp;
            <E q="49315">하루</E>
            <E q="86290">의</E>&nbsp;
            <E q="62394">대부분</E>
            <E q="86355">을</E>&nbsp;
            <E q="73276">학교</E>
            <E q="68853">에서</E>&nbsp;
            <E q="66375">보낸</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="고등학생인 승규는 하루의 대부분을 학교에서 보낸다" />
          <i>
            {t(
              "Seung-gyu, a high school student, spends most of his day at school.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="28026">여행</E>
            <E q="86111">은</E>&nbsp;
            <E q="41324">낯선</E>&nbsp;
            <E q="18661">곳</E>
            <E q="68853">에서</E>
            <E q="86290">의</E>&nbsp;
            <E q="20192">기분</E>&nbsp;
            <E q="79033">좋</E>
            <E q="80344">은</E>&nbsp;
            <E q="62645">설렘</E>
            <E q="86232">이</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="여행은 낯선 곳에서의 기분 좋은 설렘이다" />
          <i>{t("Traveling is a pleasant thrill in a strange place.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
