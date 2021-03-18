import React from "react";
import { useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function EParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "The particle 에 attaches to nouns and particles and can have several meanings. While not exhaustive, we present the most common usages here.",
        )}
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Location")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        {t("The particle 에 attaches to a noun to indicate a location.")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="43883">그</E>&nbsp;
            <E q="71468">책</E>
            <E senseIndexes={[1]} q="86111">
              은
            </E>
            &nbsp;
            <E q="17182">우리</E>&nbsp;
            <E q="73276">학교</E>&nbsp;
            <E q="40295">도서관</E>
            <E q="86572">에</E>&nbsp;
            <E q="68796">있</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="그 책은 우리 학교 도서관에 있다." />
          <i>That book is in our school library.</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>{t("Time")}</SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        {t("The particle 에 attaches to a noun to indicate a time.")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            지수<E q="85853">는</E>&nbsp;
            <E q="30184">작년</E>
            <E senseIndexes={[1]} q="86572">
              에
            </E>
            &nbsp;
            <E q="31665">결혼</E>
            <E q="69058">을</E>&nbsp;
            <E q="73277">했</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="지수는 작년에 결혼을 했다" />
          <i>{t("지수 married last year")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Destination")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        {t("The particle 에 attaches to a noun to indicate a destination.")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="17182">우리</E>
            <E q="85853">는</E>&nbsp;
            <E q="31849">공원</E>
            <E senseIndexes={[2]} q="86572">
              에
            </E>
            &nbsp;
            <E q="27500">가</E>
            <E q="78337">기로 했다</E>
          </div>
          <UtteranceButton text="우리는 공원에 가기로 했다" />
          <i>{t("We decided to go to the park.")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>
        {t("Action subject")}
      </SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "The particle 에 attaches to a noun to indicate that an action is applied to it.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85853">는</E>&nbsp;
            <E q="62838">꽃</E>
            <E senseIndexes={[5]} q="86572">
              에
            </E>
            &nbsp;
            <E q="17596">물</E>
            <E q="69058">을</E>&nbsp;
            <E q="82136">주</E>
            <E q="68719">었</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="나는 꽃에 물을 주었다" />
          <i>{t("I watered the flowers.")}</i>
        </DialogGrid>
      </Section>
      <SectionTitle marginSize={MarginSizeName.large}>{t("Goal")}</SectionTitle>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "The particle 에 attaches to a noun to indicate it is a goal or objective.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="60931">나</E>
            <E q="85853">는</E>&nbsp;
            <E q="29737">이번</E>&nbsp;
            <E q="61306">대회</E>
            <E q="68853">에서</E>&nbsp;
            <E q="37205">금메달</E>
            <E senseIndexes={[6]} q="86572">
              에
            </E>
            &nbsp;
            <E q="69467">목표</E>
            <E q="85764">를</E>&nbsp;
            <E q="67470">두</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="나는 이번 대회에서 금메달에 목표를 두다" />
          <i>{t("I aim at winning the gold medal at this competition.")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
