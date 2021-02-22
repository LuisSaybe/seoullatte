import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { TopicRoute } from "web/js/interface/route";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { E } from "web/js/component/definition-popup";
import { TopicTitleMedium } from "web/js/component/topic-title-medium";
import "./style.scss";

export function SpeechLevel() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "Korean sentences exists in one of many speech levels which are used to express the social relationship between the speaker and the listener.",
        )}
        &nbsp;
        <Trans>
          The speech level is determined by a&nbsp;
          <Anchor to={TopicRoute.ending}>sentence ending</Anchor>.
        </Trans>
        &nbsp;
        {t(
          "We introduce 4 different speech levels which are widely used in modern Korean language.",
        )}
      </Section>
      <Section>
        <TopicTitleMedium>{t("The Deferential Speech level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <E q="84623">합쇼체</E>
        </div>
        {t(
          "The deferential speech level is the highest of the commonly used speech levels in Korean langauge. This speech level is used in highly formal situations, fixed formal expressions, public annnouncements or in social situations in which high deference is communicated to the listener.",
        )}
      </Section>
      <Section>
        <TopicTitleMedium>{t("The Polite Speech level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <E q="84691">해요체</E>
        </div>
        {t(
          "The polite speech level is the most common speech level used to communicate between strangers.",
        )}
      </Section>
      <Section>
        <TopicTitleMedium>{t("The Intimate Speech Level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <E q="84914">해체</E>
        </div>
        {t(
          "The intimate speech level is often used between close friends or when the speaker is speaking to children. When neither of these two cases are true, this speech level may be used to belittle or disrespect the listener.",
        )}
      </Section>
      <Section>
        <TopicTitleMedium>{t("The Plain Speech Level")}</TopicTitleMedium>
        <div>
          <strong>{t("Korean Name")}</strong>:&nbsp;
          <E q="85165">해라체</E>
        </div>
        {t("The plain speech level is used in specific cases.")}
        <div>&bull;&nbsp;{t("In journal, book or magazine writing")}</div>
        <div>&bull;&nbsp;{t("Indirect quotations")}</div>
        <div>&bull;&nbsp;{t("Instructional writing")}</div>
        <div>&bull;&nbsp;{t("Exclamations")}</div>
      </Section>
    </>
  );
}
