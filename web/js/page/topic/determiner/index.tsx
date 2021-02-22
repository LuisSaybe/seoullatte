import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { E } from "web/js/component/definition-popup";
import { Section } from "web/js/component/section";
import { Table } from "web/js/component/table";
import { TopicRoute } from "web/js/interface/route";
import "./style.scss";

export function Determiner() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "A determiner is a noun which is always used to modify another noun.",
        )}
        &nbsp;
        {t("Recall there is another way to modify a noun.")}
        &nbsp;
        <Trans>
          We can&nbsp;
          <Anchor to={TopicRoute.predicateAsModifiers}>
            change a predicate into a modifier
          </Anchor>
          .
        </Trans>
        &nbsp;
        {t("Unlike adjectives, determiners can not inflect or be conjugated.")}
        &nbsp;
        <Trans>
          A determiner is a delimiter, a number, a demonstrative or a question
          noun.
        </Trans>
      </Section>
      <Section>
        <Table columns={3}>
          <strong>{t("Determiner")}</strong>
          <strong>{t("Type")}</strong>
          <strong>{t("Example")}</strong>
          <E q="17884" senseIndexes={[2]}>
            새
          </E>
          <span>{t("delimiter")}</span>
          <div>
            <E q="17884" senseIndexes={[2]}>
              새
            </E>
            &nbsp;
            <E q="30213">신발</E>
          </div>
          <E q="73278">한</E>
          <span>{t("number")}</span>
          <div>
            <E q="73278">한</E>
            &nbsp;
            <E q="26846" senseIndexes={[1]}>
              번
            </E>
          </div>
          <E q="71214">저</E>
          <span>{t("demonstrative")}</span>
          <div>
            <E q="71214">저</E>
            &nbsp;
            <E q="29596">식사</E>
          </div>
          <E q="66237">무순</E>
          <span>{t("question word")}</span>
          <div>
            <E q="66237">무순</E>
            &nbsp;
            <E q="27260" senseIndexes={[1]}>
              말
            </E>
          </div>
        </Table>
      </Section>
    </>
  );
}
