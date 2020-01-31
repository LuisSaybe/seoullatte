import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { DefinitionContext } from "web/js/context";
import {
  IDefinitionDisplayOptions,
  IKoreanDefinitionIdentifier,
} from "web/js/interface/korean";

import "./style.scss";

type Interface = IKoreanDefinitionIdentifier &
  IDefinitionDisplayOptions &
  React.HTMLAttributes<HTMLDivElement>;

export function Definition(props: Interface) {
  const { t } = useTranslation();
  const definitions = useContext(DefinitionContext);
  const { children, senseIndexes, q, ...rest } = props;
  const definition = definitions[props.q];

  return (
    <div {...rest} styleName="root">
      {definition && (
        <>
          <div styleName="title">
            <strong>{t("Word")}</strong>
            &nbsp;
            {definition.getDictionaryForm()}
          </div>
          <div styleName="section title">
            <strong>{t("Definitions")}</strong>
          </div>
          {Array.from(definition.getSenses())
            .filter(
              (_, index) =>
                senseIndexes?.includes(Number(index)) ?? index === 0,
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
      )}
    </div>
  );
}
