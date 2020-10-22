import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../lib/redux/reducer";
import { useDictionaryTranslationLanguage } from "../../lib/hook/useDictionaryTranslationLanguage";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  index: number;
}

export function EntrySense(props: Props) {
  const { q, index, className, ...rest } = props;
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
    <div {...rest} className={className}>
      {word && (
        <div>
          <span className={styles.label}>{index}.</span>&nbsp;
          {word.textContent}
        </div>
      )}
      {definition && (
        <div className={styles.definition}>{definition.textContent}</div>
      )}
    </div>
  );
}
