import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { Section } from "web/js/component/section";
import { ArticleTitle } from "web/js/component/article-title";
import { E } from "web/js/component/definition-popup";
import { Table } from "web/js/component/table";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function BoundNoun() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        <Trans>
          A bound noun always appears before a&nbsp;
          <Anchor to={TopicRoute.predicateAsModifiers}>modifier</Anchor>
          &nbsp;or a&nbsp;
          <Anchor to={TopicRoute.determiner}>determiner</Anchor>.
        </Trans>
        &nbsp;
        {t(
          "Below we give examples of the some of the most commonly used bound nouns.",
        )}
        &nbsp;
      </Section>
      <Section>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Table>
          <strong>{t("Bound noun")}</strong>
          <strong>{t("Example")}</strong>
          <E q="62835">것</E>
          <div>
            <E q="73277">하</E>
            <E q="85853">는</E>
            &nbsp;
            <E q="62835">것</E>
          </div>
          <E q="15615">수</E>
          <div>
            <E q="58272">먹</E>
            <E q="69058">을</E>
            &nbsp;
            <E q="15615">수</E>
          </div>
          <E q="74123" senseIndexes={[3]}>
            때
          </E>
          <div>
            <E q="43883">그</E>
            &nbsp;
            <E q="74123" senseIndexes={[3]}>
              때
            </E>
          </div>
          <E q="71232">적</E>
          <div>
            <E q="27500">간</E>
            &nbsp;
            <E q="71232">적</E>
          </div>
        </Table>
      </Section>
    </>
  );
}
