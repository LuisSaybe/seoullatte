import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { E } from "web/js/component/definition-popup";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useNavigateToHash } from "web/js/hook/useNavigateToHash";
import { useCanUseKoreanUtterance } from "web/js/hook/useCanUseKoreanUtterance";
import { Section } from "web/js/component/section";
import { MarginSizeName } from "web/js/interface/size";
import { Anchor } from "web/js/component/anchor";
import { TopicRoute } from "web/js/interface/route";
import { DialogGrid } from "web/js/component/dialog-grid";

export function BatchimSuffix() {
  const { t } = useTranslation();
  const navigate = useNavigateToHash();
  const canUseKoreanUtterance = useCanUseKoreanUtterance();

  useEffect(() => {
    navigate();
  }, [navigate]);

  return (
    <>
      <Section>
        {t(
          "Some suffixes change based on whether a word has ends in a consonant or vowel.",
        )}
        &nbsp;
        {t(
          "Many suffixes will add the syllable 으 if the word it attches to ends in a consonant.",
        )}
        &nbsp;
        {/* prettier-ignore */}
        <Trans>
          For example, the honorific suffix <E q="80330">시</E> will become <E q="80329">으시</E> when added to a predicate stem that <Anchor to={TopicRoute.batchim}>ends in a consonant</Anchor>.
        </Trans>
      </Section>
      <Section>
        {t(
          "The predicate stem of 괜찮다 ends in a consonant ㅎ so when combined with the honorific suffix 시, a 으시 will be placed after the predicate stem.",
        )}
        &nbsp;
        {/* prettier-ignore */}
        <Trans>
          Note that <E q="80329">으시</E> becomes <E q="86609">으세요</E> in the <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor>.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="60097">괜찮</E>
            <E q="86609">으세요</E>
            {t("?")}
          </div>
          {canUseKoreanUtterance ? (
            <UtteranceButton text="괜찮으세요?" />
          ) : (
            <div />
          )}
          <i>{t("Are (you) ok?")}</i>
          <span></span>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "In contrast the the predicate stem for 돌아오다 does not have a 받침, so when combined with the honorific suffix 시 the predicate becomes 돌아오시.",
        )}
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="74121">할아버지</E>
            <E q="73012">께서</E>
            <E q="85851" senseIndexes={[1]}>
              는
            </E>
            &nbsp;
            <E q="17860">언제</E>
            &nbsp;
            <E q="66268">돌아오</E>
            <E q="80330" senseIndexes={[1]}>
              시
            </E>
            <E q="76426">니</E>
            {t("?")}
          </div>
          <UtteranceButton text="할아버지께서는 언제 돌아오시니?" />
          <i>{t("When does grandfather return?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
