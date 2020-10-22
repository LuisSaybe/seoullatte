import React from "react";
import { useTranslation } from "react-i18next";

import { SectionTitle } from "../../components/section-title";
import { Section } from "../../components/section";
import styles from "./style.module.scss";

export default function Endings() {
  const { t } = useTranslation();

  return (
    <>
      <Section>
        {t(
          "Korean predicates combine with endings to form sentences. Endings are added to a predicate in a particular order and changes the meaning of a sentence when added. Below we cover two categories of endings and give examples.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("Pre-Final Endings")}</SectionTitle>
        {t("Pre-final ending are added directly to a predicate stem.")}
      </Section>
      <Section>
        <SectionTitle>{t("Final Endings")}</SectionTitle>
        {t(
          "If a predicate contains a pre-final ending, the final ending is placed after the pre-final ending. Otherwise the final-ending is added to the predicate stem.",
        )}
      </Section>
      <Section>
        <SectionTitle>{t("Examples")}</SectionTitle>
      </Section>
      <Section>
        <div className={styles.predicate}>&bull; Conjugated Predicate Stem</div>
        <div className={styles["pre-final-ending"]}>
          &bull; Pre-final Ending
        </div>
        <div className={styles["final-ending"]}>&bull; Final Ending</div>
      </Section>
      <Section className={styles.sentence}>
        <span className={styles.predicate}>알</span>
        <span className={styles["pre-final-ending"]}>겠</span>
        <span className={styles["final-ending"]}>습니다</span>
      </Section>
      <Section className={styles.sentence}>
        <span className={styles.predicate}>덥</span>
        <span className={styles["pre-final-ending"]}>네</span>
      </Section>
      <Section className={styles.sentence}>
        <span className={styles.predicate}>생각해</span>
        <span className={styles["final-ending"]}>요</span>
      </Section>
      <Section className={styles.sentence}>
        <span className={styles.predicate}>괜찮</span>
        <span className={styles["pre-final-ending"]}>으세</span>
        <span className={styles["final-ending"]}>요</span>
      </Section>
    </>
  );
}
