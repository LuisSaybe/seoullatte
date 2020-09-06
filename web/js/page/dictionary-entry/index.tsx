import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";

import { ArticleTitle } from "web/js/component/article-title";
import { useEntry } from "web/js/hook/useEntry";
import { ContentLoader } from "web/js/component/content-loader";
import { EntrySense } from "web/js/component/entry-sense";
import { useLastRouteOrHome } from "web/js/hook/useLastRouteOrHome";
import { Anchor } from "web/js/component/anchor";
import { RootState } from "web/js/redux/reducer";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useTopics } from "web/js/hook/useTopics";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { DefaultLayout } from "web/js/component/default-layout";
import "./style.scss";
import { EntryPartOfSpeech } from "web/js/component/entry-part-of-speech";
import { BackSVG } from "web/js/component/back-svg";

export function DictionaryEntry() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { q } = useParams();
  const entry = useEntry(q);
  const to = useLastRouteOrHome();
  const topics = useTopics();
  const returnToTopic = useSelector((state: RootState) =>
    topics.find((topic) => topic.path === state.userInterface.returnTo),
  );
  const onBackClick = () => {
    dispatch(
      updateUserInterface({
        returnTo: null,
      }),
    );
  };

  let content;

  if (entry) {
    content = (
      <>
        <div styleName="header">
          <ArticleTitle>{entry.getDictionaryForm()}</ArticleTitle>
          <UtteranceButton text={entry.getDictionaryForm()} />
        </div>
        {returnToTopic && (
          <Anchor button onClick={onBackClick} to={returnToTopic.path} styleName="returnTo">
            <BackSVG styleName='return-svg' />
          </Anchor>
        )}
        <EntryPartOfSpeech styleName="part-of-speech" q={Number(q)} />
        <div styleName="senses">
          {Array.from(entry.getSenses()).map((_, index) => (
            <EntrySense styleName="sense" key={index} q={q} index={index + 1} />
          ))}
        </div>
        <Helmet>
          <title>Definition of {entry.getDictionaryForm()}</title>
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
        <ContentLoader styleName="content-loader-body" textBlocks={4} />
      </>
    );
  }

  return <DefaultLayout>{content}</DefaultLayout>;
}
