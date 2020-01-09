import _ from "lodash";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  DefinitionContext,
  FetchDispatchContext,
  FetchStateContext,
} from "web/js/context";
import { DispatchFetchId, IKoreanDefinitionIdentifier } from "web/js/interface";

import { Spinner } from "web/js/component/spinner";
import "./style.scss";

type Interface = IKoreanDefinitionIdentifier &
  React.HTMLAttributes<HTMLDivElement>;

export function Definition(props: Interface) {
  const { t } = useTranslation();
  const { children, q, ...rest } = props;
  const [dispatchFetch] = useContext(FetchDispatchContext);
  const fetchState = useContext(FetchStateContext);
  const viewWordState = fetchState[DispatchFetchId.VIEW_WORD];
  const definitions = useContext(DefinitionContext);
  const definition = definitions[props.q];

  useEffect(() => {
    if (!definition) {
      dispatchFetch(
        `api/view?q=${q}&method=target_code&translated=y&trans_lang=1`,
        {},
        DispatchFetchId.VIEW_WORD,
      );
    }
  }, [dispatchFetch, definition]);

  return (
    <div styleName="root" {...rest}>
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
          {Array.from(definition.getSenses()).map((sense: Element, index) => {
            const word = sense.querySelector("translation > trans_word")
              .childNodes[0].nodeValue;
            const definitionText = sense.querySelector(
              "translation > trans_dfn",
            ).childNodes[0].nodeValue;

            return (
              <div key={index} styleName="sense">
                <div>
                  <strong>{index + 1}.</strong>
                  &nbsp;
                  {word}
                </div>
                <div styleName="definition">{definitionText}</div>
              </div>
            );
          })}
        </>
      )}
      {(viewWordState?.fetching ?? true) && <Spinner />}
      {(!(viewWordState?.response?.ok ?? true) || viewWordState?.error) && (
        <div styleName="error">
          {t("Sorry, we are not able to load this definition")}
        </div>
      )}
    </div>
  );
}
