import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { UtteranceButton } from "web/js/component/utterance-button";
import { MarginSizeName } from "web/js/interface/size";

export function Desire() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          Expressing desire is acheived in the by the usage of the auxiliary
          adjecive&nbsp;
          <E q="62657">싶다</E>
        </Trans>
        .&nbsp;
        <Trans>
          <E q="75269">고 싶다</E>&nbsp;is added to a verb stem to indicate
          desire to execute the verb
        </Trans>
        &nbsp;
        {t(
          "This construction can not be used in the second-person declarative sentences or third person declarative sentences.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="72128">초콜릿</E>
            <E q="69058">을</E>&nbsp;
            <E q="49419">사</E>
            <E q="75269">고 싶다</E>.
          </div>
          <UtteranceButton text="초콜릿을 사고 싶다" />
          <i>{t("(I) want to buy chocolate.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="71358">집</E>
            <E q="85784">으로</E>&nbsp;
            <E q="66268">돌아오</E>
            <E q="75269">고 싶</E>
            <E q="72587">지 않</E>
            <E q="86093" senseIndexes={[3]}>
              아
            </E>
            .
          </div>
          <UtteranceButton text="집으로 돌아오고 싶지 않아" />
          <i>{t("(I) do not want to return to home.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="29737">이번</E>
            <E q="63220">생일</E>
            <E q="86572">에</E>&nbsp;
            <E q="66636">받</E>
            <E q="75269">고 싶</E>
            <E q="80344">은</E>&nbsp;
            <E q="36685">선물</E>
            <E q="86289">이</E>&nbsp;
            <E q="68797">있</E>
            <E q="80262" senseIndexes={[1]}>
              으면
            </E>
            &nbsp;
            <E q="62103">말해</E>&nbsp;
            <E q="75284">봐</E>
          </div>
          <UtteranceButton text="이번 생일에 받고 싶은 선물이 있으면 말해 봐." />
          <i>
            {t(
              "If (you) have a present (you) want to receive for this birthday, say so.",
            )}
          </i>
        </DialogGrid>
      </Section>
    </>
  );
}
