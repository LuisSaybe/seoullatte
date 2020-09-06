import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEntryMetaInformation } from "web/js/hook/useEntryMetaInformation";
import { Anchor } from "web/js/component/anchor";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useEntry } from "web/js/hook/useEntry";
import { DictionaryIcon } from "web/js/component/dictionary-icon";
import { routes } from "web/js/routes";
import { useTopics } from "web/js/hook/useTopics";
import { TeachSVG } from "web/js/component/teacher-svg";
import { setAllRefsClosed } from "web/js/redux/definition-popup/action";
import { Button } from "web/js/component/button";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  senseIndexes: number[];
}

export function Definition(props: Props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();
  const entry = useEntry(props.q);
  const { children, senseIndexes, q, ...rest } = props;
  const information = useEntryMetaInformation(q);
  const topics = useTopics();
  const closeDefinitionPopups = () => {
    dispatch(setAllRefsClosed());
  };

  let content;

  if (entry) {
    const relatedTopics = topics.filter(topic => topic.relatedEntries.includes(Number(q)))
    let relatedTopic;

    if (relatedTopics.length > 0) {
      const nextTopic = relatedTopics[0];

      if (location.pathname === nextTopic.path) {
        relatedTopic = (
          <Button aria-label={t('Go to topic')} onClick={closeDefinitionPopups} styleName="to-article-anchor">
            <TeachSVG styleName='teacher-icon' />
          </Button>
        );
      } else {
        relatedTopic = (
          <Anchor onClick={closeDefinitionPopups} canReturn button styleName="to-article-anchor" to={relatedTopics[0].path}>
            <TeachSVG styleName='teacher-icon' />
          </Anchor>
        );
      }
    }

    content = (
      <>
        <div styleName="title">
          <div>{entry.getDictionaryForm()}</div>
          <div styleName="buttons">
            <UtteranceButton text={entry.getDictionaryForm()} />
            <Anchor
              canReturn
              styleName="to-dictionary-anchor"
              to={routes.entry(props.q)}
              button
            >
              <DictionaryIcon styleName="book-icon" />
            </Anchor>
            {relatedTopic}
          </div>
        </div>
        <div styleName="section title">
          <strong>{t("Definition")}</strong>
        </div>
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
              <div key={index} styleName="sense">
                <div>{word}</div>
                <div styleName="definition">{definitionText}</div>
              </div>
            );
          })}
      </>
    );
  } else {
    content = t("Loading...");
  }

  return (
    <div {...rest} styleName="root">
      {content}
      {information?.routes.length > 0 && (
        <Anchor styleName="article-anchor" to={information.routes[0]}>
          go to article
        </Anchor>
      )}
    </div>
  );
}
