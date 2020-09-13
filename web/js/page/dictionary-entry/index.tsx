import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import { ArticleTitle } from "web/js/component/article-title";
import { useEntry } from "web/js/hook/useEntry";
import { ContentLoader } from "web/js/component/content-loader";
import { EntrySense } from "web/js/component/entry-sense";
import { Anchor } from "web/js/component/anchor";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useTopics } from "web/js/hook/useTopics";
import { DefaultLayout } from "web/js/component/default-layout";
import { EntryPartOfSpeech } from "web/js/component/entry-part-of-speech";
import { BackSVG } from "web/js/component/back-svg";
import { EntryWordGrade } from "web/js/component/entry-word-grade";
import { KoreaPartOfSpeech } from "web/js/interface/korean";
import "./style.scss";

export function DictionaryEntry() {
  const { t } = useTranslation();
  const { q } = useParams();
  const entry = useEntry(q);
  const topics = useTopics();

  let content;

  if (entry) {
    const partOfSpeech = entry.getPartOfSpeech();
    const relatedTopicIndex = topics.findIndex((topic) =>
      topic.relatedPartOfSpeech.includes(partOfSpeech as KoreaPartOfSpeech),
    );
    const partOfSpeechNode = (
      <EntryPartOfSpeech styleName="part-of-speech" q={Number(q)} />
    );
    let partOfSpeechSection;

    if (partOfSpeech !== KoreaPartOfSpeech.none) {
      if (relatedTopicIndex === -1) {
        partOfSpeechSection = partOfSpeechNode;
      } else {
        partOfSpeechSection = (
          <Anchor to={topics[relatedTopicIndex].paths[0]}>
            {partOfSpeechNode}
          </Anchor>
        );
      }
    }

    content = (
      <>
        <div styleName="header">
          <ArticleTitle>{entry.getDictionaryForm()}</ArticleTitle>
          <UtteranceButton text={entry.getDictionaryForm()} />
        </div>
        {partOfSpeechSection}
        {entry.hasDisplayableWordGrade() && (
          <div>
            <EntryWordGrade q={Number(q)} />
          </div>
        )}
        <div styleName="senses">
          {Array.from(entry.getSenses()).map((_, index) => (
            <EntrySense styleName="sense" key={index} q={q} index={index + 1} />
          ))}
        </div>
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
