import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { DefinitionPopup } from "web/js/component/definition-popup";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useNavigateToHash } from "web/js/hook/useNavigateToHash";
import { useCanUseKoreanUtterance } from "web/js/hook/useCanUseKoreanUtterance";
import { Section } from "web/js/component/section";
import { MarginSizeName } from "web/js/interface/size";
import { Anchor } from "web/js/component/anchor";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

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
        <Trans>
          If a word's final letter is a consonant this letter is reffered to as
          a&nbsp;
          <DefinitionPopup senseIndexes={[1]} q="56544">
            받침
          </DefinitionPopup>
          .
        </Trans>
        &nbsp;
        <Trans>
          For example, the word <DefinitionPopup q="29724">방</DefinitionPopup>
          &nbsp;has a 받침 since it ends in the consonant ㅇ while&nbsp;
          <DefinitionPopup q="27369">여자</DefinitionPopup> does not have a 받침
          since the final letter ㅏ is a vowel.
        </Trans>
        &nbsp;
        {t("Some suffixes change based on whether a word has a 받침 or not.")}
        &nbsp;
        {t(
          "For example, the honorific suffix 시 will become 으시 when added to a predicate stem that has a 받침.",
        )}
      </Section>
      <Section>
        {t(
          "The predicate stem of 괜찮다 has a 받침 so when combined with the honorific suffix 시, a 으시 will be placed after the predicate stem.",
        )}
        &nbsp;
        <Trans>
          Note that <DefinitionPopup q="80329">으시</DefinitionPopup>
          &nbsp;becomes&nbsp;
          <DefinitionPopup q="86609">으세요</DefinitionPopup> in the&nbsp;
          <Anchor to={TopicRoute.politeSpeech}>polite speech level</Anchor>.
        </Trans>
      </Section>
      <Section styleName="dialog-grid">
        <div>
          <DefinitionPopup q="60097">괜찮</DefinitionPopup>
          <DefinitionPopup q="86609">으세요</DefinitionPopup>
          {t("?")}
        </div>
        {canUseKoreanUtterance ? (
          <UtteranceButton text="괜찮으세요?" />
        ) : (
          <div />
        )}
        <i>{t("Are (you) ok?")}</i>
        <span></span>
      </Section>
      <Section marginSize={MarginSizeName.medium}>
        {t(
          "In contrast the the predicate stem for 돌아오다 does not have a 받침, so when combined with the honorific suffix 시 the predicate becomes 돌아오시.",
        )}
      </Section>
      <Section styleName="dialog-grid">
        <div>
          <DefinitionPopup q="74121">할아버지</DefinitionPopup>
          <DefinitionPopup q="73012">께서</DefinitionPopup>
          <DefinitionPopup q="85851" senseIndexes={[1]}>
            는
          </DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="17860">언제</DefinitionPopup>
          &nbsp;
          <DefinitionPopup q="66268">돌아오</DefinitionPopup>
          <DefinitionPopup q="80330" senseIndexes={[1]}>
            시
          </DefinitionPopup>
          <DefinitionPopup q="76426">니</DefinitionPopup>?
        </div>
        {canUseKoreanUtterance ? (
          <UtteranceButton text="할아버지께서는 언제 돌아오시니?" />
        ) : (
          <div />
        )}
        <i>{t("When does grandfather return?")}</i>
      </Section>
    </>
  );
}
