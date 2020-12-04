import React from "react";
import { useTranslation } from "react-i18next";
import { DefinitionPopup } from "web/js/component/definition-popup";

import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { SectionTitle } from "web/js/component/section-title";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";
//86572
export default function EParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "The particle 에 attaches to nouns and particles and can have several meanings. While not exhaustive, we present the most common usages here.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("Location")}</SectionTitle>
        <span styleName="text">
          {t("The particle 에 attaches to a noun to indicate a location.")}
        </span>
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="43883">그</DefinitionPopup>&nbsp;
            <DefinitionPopup q="71468">책</DefinitionPopup>
            <DefinitionPopup senseIndexes={[1]} q="86111">
              은
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="17182">우리</DefinitionPopup>&nbsp;
            <DefinitionPopup q="73276">학교</DefinitionPopup>&nbsp;
            <DefinitionPopup q="40295">도서관</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="68796">있</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="그 책은 우리 학교 도서관에 있다." />
          <i>That book is in our school library.</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Time")}</SectionTitle>
        {t("The particle 에 attaches to a noun to indicate a time.")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            지수<DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="30184">작년</DefinitionPopup>
            <DefinitionPopup senseIndexes={[1]} q="86572">
              에
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="31665">결혼</DefinitionPopup>
            <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="73277">했</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="지수는 작년에 결혼을 했다" />
          <i>지수 married last year</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Destination")}</SectionTitle>
        {t("The particle 에 attaches to a noun to indicate a destination.")}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="17182">우리</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="31849">공원</DefinitionPopup>
            <DefinitionPopup senseIndexes={[2]} q="86572">
              에
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="27500">가</DefinitionPopup>
            <DefinitionPopup q="78337">기로 했다</DefinitionPopup>
          </div>
          <UtteranceButton text="우리는 공원에 가기로 했다" />
          <i>We decided to go to the park.</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Action subject")}</SectionTitle>
        {t(
          "The particle 에 attaches to a noun to indicate that an action is applied to it.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="60931">나</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62838">꽃</DefinitionPopup>
            <DefinitionPopup senseIndexes={[5]} q="86572">
              에
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="17596">물</DefinitionPopup>
            <DefinitionPopup q="69058">을</DefinitionPopup>&nbsp;
            <DefinitionPopup q="82136">주</DefinitionPopup>
            <DefinitionPopup q="68719">었</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="나는 꽃에 물을 주었다" />
          <i>I watered the flowers.</i>
        </DialogGrid>
      </Section>
      <Section>
        <SectionTitle>{t("Goal")}</SectionTitle>
        {t(
          "The particle 에 attaches to a noun to indicate it is a goal or objective.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="60931">나</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="29737">이번</DefinitionPopup>&nbsp;
            <DefinitionPopup q="61306">대회</DefinitionPopup>
            <DefinitionPopup q="68853">에서</DefinitionPopup>&nbsp;
            <DefinitionPopup q="37205">금메달</DefinitionPopup>
            <DefinitionPopup senseIndexes={[6]} q="86572">
              에
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="69467">목표</DefinitionPopup>
            <DefinitionPopup q="85764">를</DefinitionPopup>&nbsp;
            <DefinitionPopup q="67470">두</DefinitionPopup>
            <DefinitionPopup q="85041">다</DefinitionPopup>
          </div>
          <UtteranceButton text="나는 이번 대회에서 금메달에 목표를 두다" />
          <i>I aim at winning the gold medal at this competition.</i>
        </DialogGrid>
      </Section>
    </>
  );
}
