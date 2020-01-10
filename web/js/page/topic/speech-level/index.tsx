import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { TopicRoute } from "web/js/interface/route";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import { Utterance } from "web/js/component/utterance";
import "./style.scss";

export function SpeechLevel() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t(
          "Korean sentences exists in one of many speech levels which are used to express the social relationship between the speaker and the listener.",
        )}
        &nbsp;
        <Trans>
          The speech level is determined by a{" "}
          <Anchor to={TopicRoute.ending}>sentence ending</Anchor>.
        </Trans>
        &nbsp;
        {t(
          "We introduce 4 different speech levels which are widely used in modern Korean language.",
        )}
      </ArticleSection>
      <ArticleSection>
        <TopicTitleMedium>{t("The Deferential Speech level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <Utterance text="하십시오체">하십시오체</Utterance>
        </div>
        <div>
          <strong>{t("Category")}</strong>:&nbsp;
          <Utterance text="존댓말">존댓말</Utterance>
        </div>
        {t(
          "The deferential speech level is the highest of the commonly used speech levels in Korean langauge. This speech level is used in highly formal situations, fixed formal expressions, public annnouncements or in social situations in which high deference is communicated to the listener.",
        )}
      </ArticleSection>
      <ArticleSection>
        <TopicTitleMedium>{t("The Polite Speech level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <Utterance text="해요체">해요체</Utterance>
        </div>
        <div>
          <strong>{t("Category")}</strong>:&nbsp;
          <Utterance text="존댓말">존댓말</Utterance>
        </div>
        {t(
          "The polite speech level is the most common speech level used to communicate between strangers.",
        )}
      </ArticleSection>
      <ArticleSection>
        <TopicTitleMedium>{t("The Intimate Speech Level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <Utterance text="해체">해체</Utterance>
        </div>
        <div>
          <strong>{t("Category")}</strong>:&nbsp;
          <Utterance text="반말">반말</Utterance>
        </div>
        {t(
          "The intimate speech level is often used between close friends or when the speaker is speaking to children. When neither of these two cases are true, this speech level may be used to belittle or disrespect the listener.",
        )}
      </ArticleSection>
      <ArticleSection>
        <TopicTitleMedium>{t("The Plain Speech Level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <Utterance text="해라체">해라체</Utterance>
        </div>
        <div>
          <strong>{t("Category")}</strong>:&nbsp;
          <Utterance text="반말">반말</Utterance>
        </div>
        {t("The plain speech level is used in specific cases.")}
        <div>&bull;&nbsp;In journal, book or magazine writing</div>
        <div>&bull;&nbsp;Indirect quotations</div>
        <div>&bull;&nbsp;Instructional writing</div>
        <div>&bull;&nbsp;Exclamations</div>
      </ArticleSection>
    </>
  );
}
