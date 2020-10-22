import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import { ArticleTitle } from "../../components/article-title";
import { useEntry } from "../../lib/hook/useEntry";
import { EntrySense } from "../../components/entry-sense";
import { Anchor } from "../../components/anchor";
import { UtteranceButton } from "../../components/utterance-button";
import { useTopics } from "../../lib/hook/useTopics";
import { DefaultLayout } from "../../components/default-layout";
import { EntryPartOfSpeech } from "../../components/entry-part-of-speech";
import { EntryWordGrade } from "../../components/entry-word-grade";
import { KoreaPartOfSpeech } from "../../lib/interface/korean";
import { TeachSVG } from "../../components/teacher-svg";
import { Section } from "../../components/section";
import { LoadingSVG } from "../../components/loading-svg";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

export default function DictionaryEntry() {
  const { t } = useTranslation();
  const router = useRouter();
  const { q } = router.query;
  const entry = useEntry(q as string);
  const topics = useTopics();

  let content;

  if (entry) {
    const partOfSpeech = entry.getPartOfSpeech();
    const relatedTopicIndex = topics.findIndex((topic) =>
      topic.relatedEntries.includes(Number(q)),
    );
    const relatedPartOfSpeechTopic = topics.findIndex((topic) =>
      topic.relatedPartOfSpeech.includes(partOfSpeech as KoreaPartOfSpeech),
    );
    const partOfSpeechNode = (
      <EntryPartOfSpeech className={styles["part-of-speech"]} q={Number(q)} />
    );
    let partOfSpeechSection;

    if (partOfSpeech !== KoreaPartOfSpeech.none) {
      if (relatedPartOfSpeechTopic === -1) {
        partOfSpeechSection = partOfSpeechNode;
      } else {
        partOfSpeechSection = (
          <Anchor to={topics[relatedPartOfSpeechTopic].paths[0]}>
            {partOfSpeechNode}
          </Anchor>
        );
      }
    }

    content = (
      <>
        <div className={styles.header}>
          <ArticleTitle>{entry.getDictionaryForm()}</ArticleTitle>
          <div className={styles.buttons}>
            {relatedTopicIndex !== -1 && (
              <Anchor
                className={styles["to-topic-anchor"]}
                to={topics[relatedTopicIndex].paths[0]}
              >
                <TeachSVG className={styles["teacher-icon"]} />
              </Anchor>
            )}
            <UtteranceButton text={entry.getDictionaryForm()} />
          </div>
        </div>
        {partOfSpeechSection}
        {entry.hasDisplayableWordGrade() && (
          <div>
            <EntryWordGrade q={Number(q)} />
          </div>
        )}
        <Section>
          {Array.from(entry.getSenses()).map((_, index) => (
            <Section key={index}>
              <EntrySense q={q as string} index={index + 1} />
            </Section>
          ))}
        </Section>
        <Helmet>
          <title>
            {t(`Definition of {{word}}`, { word: entry.getDictionaryForm() })}
          </title>
          <link rel="canonical" href={window.location.href} />
          <meta
            name="description"
            content={t(`Definition of ${entry.getDictionaryForm()}`)}
          />
          <meta property="og:title" content={entry.getDictionaryForm()} />
          <meta property="og:url" content={window.location.href} />
          <meta
            property="og:description"
            content={t(`Definition of ${entry.getDictionaryForm()}`)}
          />
        </Helmet>
      </>
    );
  } else {
    content = <LoadingSVG />;
  }

  return <DefaultLayout>{content}</DefaultLayout>;
}
