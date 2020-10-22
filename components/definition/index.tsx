import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { useEntryMetaInformation } from "../../lib/hook/useEntryMetaInformation";
import { Anchor } from "../../components/anchor";
import { UtteranceButton } from "../../components/utterance-button";
import { useEntry } from "../../lib/hook/useEntry";
import { DictionaryIcon } from "../../components/dictionary-icon";
import { useTopics } from "../../lib//hook/useTopics";
import { TeachSVG } from "../../components/teacher-svg";
import { setAllRefsClosed } from "../../lib/redux/definition-popup/action";
import { LoadingSVG } from "../../components/loading-svg";
import { Section } from "../../components/section";
import { RootState } from "../../lib/redux/reducer";
import { EmptyPrefixRouter } from "../../lib/class/routes";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  senseIndexes: number[];
}

export function Definition(props: Props) {
  const { children, senseIndexes, className, q, ...rest } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const entry = useEntry(props.q);
  const information = useEntryMetaInformation(q);
  const error = useSelector(
    (state: RootState) => state.entityFetchState.entry[q]?.error,
  );
  const topics = useTopics();
  const closeDefinitionPopups = () => {
    dispatch(setAllRefsClosed());
  };

  let content;

  if (error) {
    content = (
      <span className={styles.error}>
        {t("Unable to load dictionary entry, please try again")}
      </span>
    );
  } else if (entry) {
    const relatedTopics = topics.filter((topic) =>
      topic.relatedEntries.includes(Number(q)),
    );
    let relatedTopic;

    if (relatedTopics.length > 0) {
      const nextTopic = relatedTopics[0];

      if (!nextTopic.paths.includes(router.pathname)) {
        relatedTopic = (
          <Anchor
            onClick={closeDefinitionPopups}
            button
            className={styles["to-article-anchor"]}
            to={relatedTopics[0].paths[0]}
          >
            <TeachSVG className={styles["teacher-icon"]} />
          </Anchor>
        );
      }
    }

    content = (
      <>
        <div className={styles.title}>
          <div>{entry.getDictionaryForm()}</div>
          <div className={styles.buttons}>
            <UtteranceButton text={entry.getDictionaryForm()} />
            <Anchor
              className={styles["to-dictionary-anchor"]}
              to={EmptyPrefixRouter.entry(q)}
              button
            >
              <DictionaryIcon className={styles["book-icon"]} />
            </Anchor>
            {relatedTopic}
          </div>
        </div>
        <Section className={styles.title}>
          <strong>{t("Definition")}</strong>
        </Section>
        {Array.from(entry.getSenses())
          .filter(
            (_, index) => senseIndexes?.includes(Number(index)) ?? index === 0,
          )
          .map((sense: Element, index) => {
            const word = sense.querySelector("translation > trans_word")
              .childNodes[0].nodeValue;

            const definitionText = sense.querySelector(
              "translation > trans_dfn",
            ).childNodes[0].nodeValue;

            return (
              <div key={index} className={styles.sense}>
                <div>{word}</div>
                <div className={styles.definition}>{definitionText}</div>
              </div>
            );
          })}
      </>
    );
  } else {
    content = <LoadingSVG className={styles.loader} />;
  }

  return (
    <div {...rest} className={`${styles.root} ${className ?? ""}`}>
      {content}
      {information?.routes.length > 0 && (
        <Anchor className={styles["article-anchor"]} to={information.routes[0]}>
          {t("go to article")}
        </Anchor>
      )}
    </div>
  );
}
