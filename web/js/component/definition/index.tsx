import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  DefinitionDisplayOptions,
  KoreanDefinitionIdentifier,
} from "web/js/interface/korean";
import { RootState } from "web/js/redux/reducer";
import { Entry } from "web/js/class/entry";
import "./style.scss";

type Interface = KoreanDefinitionIdentifier &
  DefinitionDisplayOptions &
  React.HTMLAttributes<HTMLDivElement>;

export function Definition(props: Interface) {
  const { t } = useTranslation();
  const entryXML = useSelector((state: RootState) => state.entry[props.q]);
  const { children, senseIndexes, q, ...rest } = props;

  console.log("entry3XML", entryXML);

  let content;

  if (entryXML) {
    const entry = new Entry(entryXML);
    content = (
      <>
        <div styleName="title">
          <strong>{t("Word")}</strong>
          &nbsp;
          {entry.getDictionaryForm()}
        </div>
        <div styleName="section title">
          <strong>{t("Definitions")}</strong>
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
    </div>
  );
}
