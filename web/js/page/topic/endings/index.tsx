import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { SectionTitle } from "web/js/component/section-title";
import { Section } from "web/js/component/section";
import { DialogGrid } from "web/js/component/dialog-grid";
import { UtteranceButton } from "web/js/component/utterance-button";
import { E } from "web/js/component/definition-popup";
import styles from "./style.scss";
import { MarginSizeName } from "web/js/interface/size";

export function Endings() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "Korean predicates combine with endings to form sentences. Endings are added to a predicate in a particular order and changes the meaning of a sentence when added. Below we cover two categories of endings and give examples.",
        )}
      </Section>
      <SectionTitle>{t("Pre-Final Endings")}</SectionTitle>
      <Section>
        {t("Pre-final ending are added directly to a predicate stem.")}
      </Section>
      <SectionTitle>{t("Final Endings")}</SectionTitle>
      <Section>
        {t(
          "If a predicate contains a pre-final ending, the final ending is placed after the pre-final ending. Otherwise the final-ending is added to the predicate stem.",
        )}
      </Section>
      <Section>
        <Trans>
          Here are some example sentences demonstrating the placement of&nbsp;
          <span styleName="predicate category">predicate stems</span>,&nbsp;
          <span styleName="pre-final-ending category">pre-final endings</span>
          &nbsp;and&nbsp;
          <span styleName="final-ending category">final endings</span>.
        </Trans>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="64597">수업</E>
            <E q="86289">이</E>&nbsp;
            <E q="58977">벌써</E>&nbsp;
            <E q="34734" buttonClassname={styles.predicate}>
              끝났
            </E>
            <E q="90137" buttonClassname={styles["pre-final-ending"]}>
              겠
            </E>
            <E q="85041" buttonClassname={styles["final-ending"]}>
              다
            </E>
          </div>
          <UtteranceButton text="수업이 벌써 끝났겠다" />
          <i>{t("Practice already ended.")}</i>
        </DialogGrid>
      </Section>
      <Section marginSize={MarginSizeName.large}>
        <DialogGrid>
          <div>
            <E q="25945">자</E>&nbsp;
            <E q="58176">다</E>
            <E q="86264">들</E>&nbsp;
            <E q="68756" buttonClassname={styles.predicate}>
              서
            </E>
            &nbsp;
            <E q="62595">있</E>
            <E q="72584">지 말</E>
            <E q="78583" buttonClassname={styles["final-ending"]}>
              고
            </E>
            &nbsp;
            <E q="71121">의자</E>
            <E q="86572">에</E>&nbsp;
            <E q="71463" buttonClassname={styles.predicate}>
              앉
            </E>
            <E q="78434" buttonClassname={styles["pre-final-ending"]}>
              으세
            </E>
            <E q="86116" buttonClassname={styles["final-ending"]}>
              요
            </E>
          </div>
          <UtteranceButton text="자 다들 서 있지 말고 의자에 앉으세요" />
          <i>
            {t(
              "Well, both of you do not continue standing and sit in your desk.",
            )}
          </i>
        </DialogGrid>
      </Section>
    </>
  );
}
