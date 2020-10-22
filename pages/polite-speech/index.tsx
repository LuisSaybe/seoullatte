import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { DefinitionPopup } from "../../components/definition-popup";
import { Section } from "../../components/section";
import { Anchor } from "../../components/anchor";
import { ArticleTitle } from "../../components/article-title";
import { TopicRoute } from "../../lib/interface/route";

export default function PoliteSpeech() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          The polite speech level is formed identically to the&nbsp;
          <Anchor to={TopicRoute.intimateSpeech}>intimate speech level</Anchor>
          &nbsp;followed by a <DefinitionPopup q="86116">요</DefinitionPopup>.
        </Trans>
        &nbsp;
        <Trans>
          The predicate 이다 and 아니다 are formed&nbsp;
          <Anchor to={TopicRoute.irregularPredicate}>irregularly</Anchor>
          &nbsp;in the polite speech level.
        </Trans>
      </Section>
      <Section>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
      </Section>
      <Section>
        <div>
          {t("Predicate")}&nbsp;
          <DefinitionPopup q="73443">끄다</DefinitionPopup>
        </div>
        <div>{t("1. The predicate 끄다 is irregular and becomes ㄲ")}</div>
        <div>
          {t(
            "2. The stem does not contain a vowel, and so 어요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 꺼요</div>
      </Section>
      <Section>
        <div>
          {t("Predicate")}&nbsp;
          <DefinitionPopup q="58272">먹다</DefinitionPopup>
        </div>
        <div>{t("1. The predicate 먹다 is regular and does not change.")}</div>
        <div>
          {t(
            "2. The vowel pronounced closest to the end of the word is ㅓ and so 어요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 먹어요</div>
      </Section>
      <Section>
        <div>
          {t("Predicate")}&nbsp;
          <DefinitionPopup q="71290">아름답다</DefinitionPopup>
        </div>
        <div>
          {t("1. The predicate 아름답다 is irregular and becomes 아름다우.")}
        </div>
        <div>
          {t(
            "2. The vowel pronounced closest to the end of the word is ㅜ and so 어요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 아름다워요</div>
      </Section>
      <Section>
        <div>
          {t("Predicate")}&nbsp;
          <DefinitionPopup q="26816">나쁘다</DefinitionPopup>
        </div>
        <div>{t("1. The predicate 나쁘다 is irregular and becomes 나ㅃ.")}</div>
        <div>
          {t(
            "2. The vowel pronounced closest to the end of the word is ㅏ and so 아요 is added to the stem.",
          )}
        </div>
        <div>{t("Conjugated predicate")} 나빠요</div>
      </Section>
    </>
  );
}
