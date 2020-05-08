import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import { ArticleSection } from "web/js/component/article-section";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useNavigateToHash } from "web/js/hook/useNavigateToHash";
import { Section } from "web/js/component/section";
import "./style.scss";

export function BatchimSuffix() {
  const { t } = useTranslation();
  const navigate = useNavigateToHash();

  useEffect(() => {
    navigate();
  }, [navigate]);

  return (
    <>
      <ArticleSection>
        <Trans>
          If a word's final letter is a consonant this letter is reffered to as
          a&nbsp;
          <DefinitionPopup senseIndexes={[1]} q="56544">
            받침
          </DefinitionPopup>
          .
        </Trans>
        &nbsp;
        {t(
          "For example, the word 방 has a 받침 since it ends in the consonant ㅇ while 여자 does not have a 받침 since the final letter ㅏ is a vowel.",
        )}
        &nbsp;
        {t("Some suffixes change based on whether a word has a 받침 or not.")}
        &nbsp;
        {t(
          "The honorific suffix 시 will become 으시 when added to a predicate stem that has a 받침.",
        )}
        &nbsp;
        <Section>
          {t(
            "The predicate stem 괜찮 has a 받침 and so when combined with the honorific suffix 시, a 으시 will be placed after them stem.",
          )}
        </Section>
        <Section styleName="dialog-grid">
          <div>
            <DefinitionPopup q="60097">괜찮</DefinitionPopup>
            <DefinitionPopup q="80329">으세</DefinitionPopup>
            <DefinitionPopup q="86116">요</DefinitionPopup>
            {t("?")}
          </div>
          <UtteranceButton text="괜찮으세요?" />
          <i>{t("Are (you) ok?")}</i>
          <span></span>
          <span>
            {t("In contrast the predicate stem 하 does not have a 받침.")}
          </span>
          <span></span>
          <div>
            <DefinitionPopup q="32205">누나</DefinitionPopup>
            <DefinitionPopup q="66341">가</DefinitionPopup>&nbsp;
            <DefinitionPopup q="73277">하</DefinitionPopup>
            <DefinitionPopup q="80330">시</DefinitionPopup>
            <DefinitionPopup q="80259">면</DefinitionPopup>&nbsp;
            <DefinitionPopup q="62841">시간</DefinitionPopup>
            <DefinitionPopup q="86289">이</DefinitionPopup>&nbsp;
            <DefinitionPopup q="26902">천천히</DefinitionPopup>&nbsp;
            <DefinitionPopup q="82142">지나</DefinitionPopup>
            <DefinitionPopup q="86116">요</DefinitionPopup>
          </div>
          <UtteranceButton text="누나가 하시면 시간이 천천히 지나요" />
          <i>{t("When (my) older sister does (it) time passes slowly.")}</i>
        </Section>
      </ArticleSection>
    </>
  );
}
