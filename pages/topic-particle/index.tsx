import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { DefinitionPopup } from "../../components/definition-popup";
import { DialogGrid } from "../../components/dialog-grid";
import { Section } from "../../components/section";
import { UtteranceButton } from "../../components/utterance-button";
import { MarginSizeName } from "../../lib/interface/size";

export default function TopicParticle() {
  const { t } = useTranslation();

  return (
    <>
      {t(
        "The topic particle can be added to a noun to or another particle to indicate that the marked word is the topic of the clause.",
      )}
      &nbsp;
      <Trans>
        When added to a particle or noun that has a&nbsp;
        <DefinitionPopup senseIndexes={[1]} q="56544">
          받침
        </DefinitionPopup>
        , 은 is added to the word otherwise 는 is added to the word.
      </Trans>
      &nbsp;
      {t(
        "This may be used to re-introduce a new topic or a topic that was previously mentioned in conversation.",
      )}
      <Section>
        <DialogGrid>
          <div>
            <DefinitionPopup q="44506">저</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="31670">학생</DefinitionPopup>
            <DefinitionPopup q="92101">입</DefinitionPopup>
            <DefinitionPopup q="79397">니다</DefinitionPopup>
          </div>
          <UtteranceButton text="저는 학생입니다" />
          <i>As for myself, I am a student.</i>
          <div />
          <div>
            <DefinitionPopup q="66371">사과</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74138">몸</DefinitionPopup>
            <DefinitionPopup q="86572" senseIndexes={[6]}>
              에
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="79033">좋</DefinitionPopup>
            <DefinitionPopup q="86278">다고</DefinitionPopup>&nbsp;
            <DefinitionPopup q="73277">해</DefinitionPopup>
            <DefinitionPopup q="86116">요</DefinitionPopup>
          </div>
          <UtteranceButton text="사과는 몸에 좋다고 해요" />
          <i>As for apples, it is said they are good for your body.</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("The topic particle can also used to express contrasts.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="74361">어머니</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74138">선생님</DefinitionPopup>
            <DefinitionPopup q="66987">이고</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="71343">아버지</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="88134">회사원</DefinitionPopup>
            <DefinitionPopup q="92457">이다</DefinitionPopup>
          </div>
          <UtteranceButton text="어머니는 선생님이고, 아버지는 회사원이다" />
          <i>Mother is a teacher and dad is an office worker.</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <DefinitionPopup q="17878" senseIndexes={[5]}>
              밖
            </DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>&nbsp;
            <DefinitionPopup q="85627">바람</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="66030">많이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74179">불</DefinitionPopup>
            <DefinitionPopup q="86571">어요</DefinitionPopup>
          </div>
          <UtteranceButton text="밖에 바람이 많이 불어요?" />
          <i>{t("Is it windy outside?")}</i>
          <div />
          <div>
            <DefinitionPopup q="27368">아침</DefinitionPopup>
            <DefinitionPopup q="86572">에</DefinitionPopup>
            <DefinitionPopup q="85851">는</DefinitionPopup>&nbsp;
            <DefinitionPopup q="66030">많이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="74179">불</DefinitionPopup>
            <DefinitionPopup q="68719">었</DefinitionPopup>
            <DefinitionPopup q="85135">는데</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62522">지금</DefinitionPopup>
            <DefinitionPopup q="86111">은</DefinitionPopup>&nbsp;
            <DefinitionPopup q="60097">괜찮</DefinitionPopup>
            <DefinitionPopup q="86568">아요</DefinitionPopup>
          </div>
          <UtteranceButton text="아침에는 많이 불었는데 지금은 괜찮아요" />
          <i>{t("It was very windy in the morning but it is fine now.")}</i>
          <div />
        </DialogGrid>
      </Section>
    </>
  );
}
