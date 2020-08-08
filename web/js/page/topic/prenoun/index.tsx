import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { ArticleSection } from "web/js/component/article-section";
import { ArticleTitle } from "web/js/component/article-title";
import { DefinitionPopup } from "web/js/component/definition-popup";
import { Table } from "web/js/component/table";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export default function Prenoun() {
  const { t } = useTranslation();

  return (
    <>
      <ArticleSection>
        {t("A prenoun is a noun which is always used to modify another noun.")}
        &nbsp;
        {t("Recall there is another way to modify a noun.")}
        &nbsp;
        <Trans>
          We can&nbsp;
          <Anchor canReturn to={TopicRoute.predicateAsModifiers}>
            change a predicate into a modifier
          </Anchor>
          .
        </Trans>
        &nbsp;
        {t("Unlike adjectives, prenouns can not inflect or be conjugated.")}
        &nbsp;
        {t(
          "A prenoun is a delimiter, a number, a demonstrative or a question noun.",
        )}
      </ArticleSection>
      <ArticleSection>
        <ArticleTitle>{t("Examples")}</ArticleTitle>
        <Table columns={3}>
          <strong>{t("Prenoun")}</strong>
          <strong>{t("Type")}</strong>
          <strong>{t("Example")}</strong>
          <DefinitionPopup q="17884" senseIndexes={[2]}>
            새
          </DefinitionPopup>
          <span>delimiter</span>
          <div>
            <DefinitionPopup q="17884" senseIndexes={[2]}>
              새
            </DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="30213">신발</DefinitionPopup>
          </div>
          <DefinitionPopup q="73278">한</DefinitionPopup>
          <span>number</span>
          <div>
            <DefinitionPopup q="73278">한</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="26846" senseIndexes={[1]}>
              번
            </DefinitionPopup>
          </div>
          <DefinitionPopup q="71214">저</DefinitionPopup>
          <span>demonstrative</span>
          <div>
            <DefinitionPopup q="71214">저</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="29596">식사</DefinitionPopup>
          </div>
          <DefinitionPopup q="66237">무순</DefinitionPopup>
          <span>question word</span>
          <div>
            <DefinitionPopup q="66237">무순</DefinitionPopup>
            &nbsp;
            <DefinitionPopup q="27260" senseIndexes={[1]}>
              말
            </DefinitionPopup>
          </div>
        </Table>
      </ArticleSection>
    </>
  );
}
