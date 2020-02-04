import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Table } from "web/js/component/table";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function BoundNoun() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        <Trans>
          A bound noun always appears before a&nbsp;
          <Anchor to={TopicRoute.predicateAsModifiers}>modifier</Anchor> or
          a&nbsp;
          <Anchor to={TopicRoute.prenoun}>prenoun</Anchor>
        </Trans>
        &nbsp;
        {t(
          "Below we give examplㄷs of the some of the most commonly used bound nouns.",
        )}
        &nbsp;
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Table>
          <strong>{t("Bound noun")}</strong>
          <strong>{t("Example")}</strong>
          <DefinitionPopup q="62835">것</DefinitionPopup>
          <div>
            <DefinitionPopup q="73277">하</DefinitionPopup>
            <DefinitionPopup q="85853">는</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="62835">것</DefinitionPopup>
          </div>
          <DefinitionPopup q="15615">수</DefinitionPopup>
          <div>
            <DefinitionPopup q="58272">먹</DefinitionPopup>
            <DefinitionPopup q="69058">을</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="15615">수</DefinitionPopup>
          </div>
          <DefinitionPopup q="74123" senseIndexes={[3]}>
            때
          </DefinitionPopup>
          <div>
            <DefinitionPopup q="43883">그</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="74123" senseIndexes={[3]}>
              때
            </DefinitionPopup>
          </div>
          <DefinitionPopup q="71232">적</DefinitionPopup>
          <div>
            <DefinitionPopup q="27500">간</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="71232">적</DefinitionPopup>
          </div>
        </Table>
      </ArticleSection>
    </>
  );
}
