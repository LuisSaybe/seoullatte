import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { UnstyledTextButton } from "web/js/component/unstyled-text-button";
import { RootState } from "web/js/redux/reducer";
import { Entry } from "web/js/class/entry";
import { useKoreanUtterance } from "web/js/hook/useKoreanUtterance";
import { useEntryMetaInformation } from "web/js/hook/useEntryMetaInformation";
import "./style.scss";
import { Anchor } from "../anchor";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  senseIndexes: number[];
}

export function Definition(props: Props) {
  const { t } = useTranslation();
  const entryXML = useSelector((state: RootState) => state.entry[props.q]);
  const entry = entryXML ? new Entry(entryXML) : null;
  const utterance = useKoreanUtterance(entry?.getDictionaryForm());
  const { children, senseIndexes, q, ...rest } = props;
  const information = useEntryMetaInformation(q);
  const speak = () => {
    speechSynthesis.speak(utterance);
  };

  let content;

  if (entryXML) {
    content = (
      <>
        <div styleName="title">
          <div>{entry.getDictionaryForm()}</div>
          {speechSynthesis && (
            <UnstyledTextButton styleName="speak-button" onClick={speak}>
              speak
            </UnstyledTextButton>
          )}
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
    content = t("Unable to find definition");
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
