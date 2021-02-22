import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Anchor } from "web/js/component/anchor";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";
import "./style.scss";

export function TopicParticle() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "The topic particle can be added to a noun to or another particle to indicate that the marked word is the topic of the clause.",
        )}
        &nbsp;
        <Trans>
          When added to a particle or noun that has ends in a&nbsp;
          <Anchor to={TopicRoute.hangul}>consonant</Anchor>, 은 is added to the
          word, otherwise 는 is added to the word.
        </Trans>
        &nbsp;
        {t(
          "This may be used to re-introduce a new topic or a topic that was previously mentioned in conversation.",
        )}
      </Section>
      <Section>
        <DialogGrid>
          <div>
            <E q="44506">저</E>
            <E q="85851">는</E>&nbsp;
            <E q="31670">학생</E>
            <E q="86232">입</E>
            <E q="79397">니다</E>
          </div>
          <UtteranceButton text="저는 학생입니다" />
          <i>{t("As for myself, I am a student.")}</i>
          <div />
          <div>
            <E q="66371">사과</E>
            <E q="85851">는</E>&nbsp;
            <E q="74138">몸</E>
            <E q="86572" senseIndexes={[6]}>
              에
            </E>
            &nbsp;
            <E q="79033">좋</E>
            <E q="86278">다고</E>&nbsp;
            <E q="73277">해</E>
            <E q="86116">요</E>
          </div>
          <UtteranceButton text="사과는 몸에 좋다고 해요" />
          <i>{t("As for apples, it is said they are good for your body.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        {t("The topic particle can also used to express contrasts.")}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="74361">어머니</E>
            <E q="85851">는</E>&nbsp;
            <E q="74138">선생님</E>
            <E q="66987">이고</E>
            &nbsp;
            <E q="71343">아버지</E>
            <E q="85851">는</E>&nbsp;
            <E q="88134">회사원</E>
            <E q="92457">이다</E>
          </div>
          <UtteranceButton text="어머니는 선생님이고, 아버지는 회사원이다" />
          <i>{t("Mother is a teacher and dad is an office worker.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17878" senseIndexes={[5]}>
              밖
            </E>
            <E q="86572">에</E>&nbsp;
            <E q="85627">바람</E>
            <E q="86289">이</E>
            &nbsp;
            <E q="66030">많이</E>&nbsp;
            <E q="74179">불</E>
            <E q="86571">어요</E>
          </div>
          <UtteranceButton text="밖에 바람이 많이 불어요?" />
          <i>{t("Is it windy outside?")}</i>
          <div />
          <div>
            <E q="27368">아침</E>
            <E q="80294">에는</E>&nbsp;
            <E q="66030">많이</E>&nbsp;
            <E q="74179">불</E>
            <E q="68719">었</E>
            <E q="85135">는데</E>&nbsp;
            <E q="62522">지금</E>
            <E senseIndexes={[1]} q="86111">
              은
            </E>
            &nbsp;
            <E q="60097">괜찮</E>
            <E q="86568">아요</E>
          </div>
          <UtteranceButton text="아침에는 많이 불었는데 지금은 괜찮아요" />
          <i>{t("It was very windy in the morning but it is fine now.")}</i>
          <div />
        </DialogGrid>
      </Section>
    </>
  );
}
