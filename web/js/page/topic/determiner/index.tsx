import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Anchor } from "web/js/component/anchor";
import { E } from "web/js/component/definition-popup";
import { DialogGrid } from "web/js/component/dialog-grid";
import { Section } from "web/js/component/section";
import { Table } from "web/js/component/table";
import { UtteranceButton } from "web/js/component/utterance-button";
import { TopicRoute } from "web/js/interface/route";
import { MarginSizeName } from "web/js/interface/size";
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
      <Section marginSize={MarginSizeName.medium}>
        <Table columns={2}>
          <strong>{t("Determiner")}</strong>
          <strong>{t("Type")}</strong>
          <E q="17884" senseIndexes={[2]}>
            새
          </E>
          <span>{t("delimiter")}</span>
          <E q="73278">한</E>
          <span>{t("number")}</span>
          <E q="71214">저</E>
          <span>{t("demonstrative")}</span>
          <E q="66237">무순</E>
          <span>{t("question word")}</span>
        </Table>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="17182">우리</E>
            <E q="73276">학교</E>
            <E q="85851">는</E>&nbsp;
            <E q="67842">올해</E>
            <E q="개교하">개교한</E>&nbsp;
            <E q="17884">새</E>&nbsp;
            <E q="73276">학교</E>
            <E q="80211">라서</E>&nbsp;
            <E q="71254">아직</E>&nbsp;
            <E q="91754">졸업생</E>
            <E q="86289">이</E>&nbsp;
            <E q="68796">없</E>
            <E q="85041">다</E>
          </div>
          <UtteranceButton text="우리 학교는 올해 개교한 새 학교라서 아직 졸업생이 없다" />
          <i>
            {t(
              "My school is a new school that was established this year, so there are not graduates yet.",
            )}
          </i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="66371">사과</E>&nbsp;
            <E q="73278">한</E>&nbsp;
            <E q="22784">개</E>
            <E q="86572" senseIndexes={[7]}>
              에
            </E>
            &nbsp;
            <E q="29750">얼마</E>
            <E q="86232">예요</E>
            {t("?")}
          </div>
          <UtteranceButton text="사과 한 개에 얼마예요?" />
          <i>{t("How much is it for one apple?")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="71215">저</E>&nbsp;
            <E q="62843">아이</E>
            <E q="66341">가</E>&nbsp;
            <E q="41385">내</E>
            &nbsp;
            <E q="30210">딸</E>
            <E q="86232">이</E>
            <E q="80806">야</E>
          </div>
          <UtteranceButton text="저 아이가 내 딸이야" />
          <i>{t("That child is my daughter.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="64390">너</E>
            <E q="85851">는</E>&nbsp;
            <E q="66237">무슨</E>&nbsp;
            <E q="71115">음악</E>
            <E q="86355">을</E>&nbsp;
            <E q="91767">주로</E>&nbsp;
            <E q="74104">듣</E>
            <E q="76426">니</E>
            {t("?")}
          </div>
          <UtteranceButton text="너는 무슨 음악을 주로 듣니?" />
          <i>{t("What kind of music do you usually listen to?")}</i>
        </DialogGrid>
      </Section>
    </>
  );
}
