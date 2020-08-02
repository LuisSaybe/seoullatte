import React from "react";
import { useTranslation } from "react-i18next";

import { useEntryMetaInformation } from "web/js/hook/useEntryMetaInformation";
import { Anchor } from "web/js/component/anchor";
import { UtteranceButton } from "web/js/component/utterance-button";
import { useEntry } from "web/js/hook/useEntry";
import { DictionaryIcon } from "web/js/component/dictionary-icon";
import { routes } from "web/js/routes";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  senseIndexes: number[];
}

export function Definition(props: Props) {
  const { t } = useTranslation();
  const entry = useEntry(props.q);
  const { children, senseIndexes, q, ...rest } = props;
  const information = useEntryMetaInformation(q);

  let content;

  if (entry) {
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
              type="button"
            >
              <DictionaryIcon styleName="book-icon" />
            </Anchor>
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
