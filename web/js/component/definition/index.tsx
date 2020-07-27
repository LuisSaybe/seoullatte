import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Action } from "web/js/redux/entry/action";
import { RootState } from "web/js/redux/reducer";
import { useFetch } from "web/js/hook/useFetch";
import { Entry } from "web/js/class/entry";
import { useKoreanUtterance } from "web/js/hook/useKoreanUtterance";
import { useEntryMetaInformation } from "web/js/hook/useEntryMetaInformation";
import { Anchor } from "web/js/component/anchor";
import { UtteranceButton } from "web/js/component/utterance-button";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  senseIndexes: number[];
}

export function Definition(props: Props) {
  const { t } = useTranslation();
  const [dispatchGetWords] = useFetch(Action.getWords);
  const entryXML = useSelector((state: RootState) => state.entry[props.q]);
  const entry = entryXML ? new Entry(entryXML) : null;
  const utterance = useKoreanUtterance(entry?.getDictionaryForm());
  const { children, senseIndexes, q, ...rest } = props;
  const information = useEntryMetaInformation(q);

  useEffect(() => {
    if (!entryXML) {
      dispatchGetWords(`https://api.seoullatte.com/entry/${q}`);
    }
  }, [dispatchGetWords, entryXML, q]);

  let content;

  if (entryXML) {
    content = (
      <>
        <div styleName="title">
          <div>{entry.getDictionaryForm()}</div>
          {utterance && <UtteranceButton text={entry.getDictionaryForm()} />}
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
