import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "web/js/redux/reducer";
import { useDictionaryTranslationLanguage } from "web/js/hook/useDictionaryTranslationLanguage";
import "./style.scss";
import { useTranslation } from "react-i18next";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  index: number;
}

export function EntrySense(props: Props) {
  const { q, index, ...rest } = props;
  const { t } = useTranslation();
  const entry = useSelector((state: RootState) => state.entry[q]);
  const sense = entry.getSense(index);
  const dictionaryLanguage = useDictionaryTranslationLanguage();

  let translationNode;

  for (const translation of sense.querySelectorAll("translation") as any) {
    if (
      translation.querySelector("trans_lang").textContent === dictionaryLanguage
    ) {
      translationNode = translation;
      break;
    }
  }

  if (!translationNode) {
    return null;
  }

  const word = translationNode.querySelector("trans_word");
  const definition = translationNode.querySelector("trans_dfn");

  return (
    <div {...rest}>
      {word && (
        <div>
          <span styleName="label">{index}.</span>&nbsp;
          {word.textContent}
        </div>
      )}
      {definition && <div styleName="definition">{definition.textContent}</div>}
    </div>
  );
}
