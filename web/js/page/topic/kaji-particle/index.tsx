import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function KajiParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The particle <E q="69698">까지</E> is added to a particle or noun and
          has multiple meanings.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("까지 may refer to the end of a certain range.")}
        &nbsp;
        {t(
          "This range may represent abstract and physical distances or numeric ranges.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="30193">내일</E>
            <E q="69698">까지</E>&nbsp;
            <E q="64516">글쓰기</E>&nbsp;
            <E q="65226">숙제</E>
            <E q="85764">를</E>&nbsp;
            <E q="63604">제출하</E>
            <E q="86558">세요</E>
          </div>
          <UtteranceButton text="내일까지 글쓰기 숙제를 제출하세요." />
          <i>{t("Submit your writing homework by tomorrow.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            뉴욕
            <E q="68853">에서</E>&nbsp;파리
            <E q="69698">까지</E>
            <E q="86290">의</E>&nbsp;
            <E q="74099">저렴한</E>&nbsp;
            <E q="85335">항공편</E>
            <E q="86355">을</E>&nbsp;
            <E q="57320">찾</E>
            <E q="72238">고있</E>
            <E q="86571">어요</E>
          </div>
          <UtteranceButton text="뉴욕에서 파리까지의 저렴한 항공편을 찾고있어요" />
          <i>{t("I'm looking for a cheap flight from New York to Paris.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("A postpositional particle used to go beyond the normal degree.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            지수
            <E q="85851">는</E>&nbsp;
            <E q="89697">예쁘</E>
            <E q="78583">고</E>&nbsp;
            <E q="71732">착하기</E>
            <E q="69698">까지</E>&nbsp;
            <E q="73277">해</E>
            <E q="80220">서</E>&nbsp;
            <E q="60865">남자</E>
            <E q="86264">들</E>
            <E q="69713">에게</E>&nbsp;
            <E q="70758">인기</E>
            <E q="66341">가</E>&nbsp;
            <E q="69295">많</E>
            <E q="66954">았</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="지수는 예쁘고 착하기까지 해서 남자들에게 인기가 많았다." />
          <i>
            {t("지수 was popular with men because she was pretty and nice.")}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("A postpositional particle used to go beyond the normal degree.")}
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        <DialogGrid>
          <div>
            <E q="71157">이렇</E>
            <E q="77326">게</E>
            <E q="69698">까지</E>&nbsp;
            <E q="73277">하</E>
            <E q="80330">실</E>&nbsp;
            <E q="72405">필요</E>&nbsp;
            <E q="89917">없</E>
            <E q="79398">습니다</E>
          </div>
          <UtteranceButton text="이렇게까지 하실 필요 없습니다" />
          <i>{t("It is not needed for you to do it even in this way.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
