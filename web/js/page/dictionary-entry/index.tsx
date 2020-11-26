import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ArticleTitle } from "web/js/component/article-title";
import { useEntry } from "web/js/hook/useEntry";
import { ContentLoader } from "web/js/component/content-loader";
import { EntrySense } from "web/js/component/entry-sense";
import { Anchor } from "web/js/component/anchor";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useTopics } from "web/js/hook/useTopics";
import { DefaultLayout } from "web/js/component/default-layout";
import { EntryPartOfSpeech } from "web/js/component/entry-part-of-speech";
import { EntryWordGrade } from "web/js/component/entry-word-grade";
import { KoreaPartOfSpeech } from "web/js/interface/korean";
import { TeachSVG } from "web/js/component/teacher-svg";
import { Section } from "web/js/component/section";
import "./style.scss";
import { Conjugations } from "web/js/component/conjugations";

export function DictionaryEntry() {
  const { t } = useTranslation();
  const { q } = useParams();
  const entry = useEntry(q);
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
      <EntryPartOfSpeech styleName="part-of-speech" q={Number(q)} />
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
        <div styleName="header">
          <ArticleTitle>{entry.getDictionaryForm()}</ArticleTitle>
          <div styleName="buttons">
            {relatedTopicIndex !== -1 && (
              <Anchor
                styleName="to-topic-anchor"
                to={topics[relatedTopicIndex].paths[0]}
              >
                <TeachSVG styleName="teacher-icon" />
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
        {entry.hasConjugations() && (
          <>
            <div styleName="conjugations-title">Conjugations</div>
            <Conjugations styleName="conjugations" q={q} />
          </>
        )}
        <Section>
          {Array.from(entry.getSenses()).map((_, index) => (
            <Section key={index}>
              <EntrySense q={q} index={index + 1} />
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
    content = (
      <>
        <ContentLoader styleName="content-loader-title" />
        <ContentLoader styleName="content-loader-body" textBlocks={8} />
      </>
    );
  }

  return <DefaultLayout>{content}</DefaultLayout>;
}
