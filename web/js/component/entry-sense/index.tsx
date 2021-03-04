import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";
import { LanguageNames } from "web/js/interface/korean";
import { useDictionaryTranslationLanguage } from "web/js/hook/useDictionaryTranslationLanguage";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  q: string;
  index: number;
}

export function EntrySense(props: Props) {
  const { q, index, ...rest } = props;
  const entry = useSelector((state: RootState) => state.entry[q]);
  const sense = entry.getSenses()[index];
  const dictionaryLanguage = useDictionaryTranslationLanguage();
  const definition = sense.getDefinition(
    dictionaryLanguage,
    LanguageNames.english,
  );
  const word = sense.getWord(dictionaryLanguage, LanguageNames.english);

  return (
    <div {...rest}>
      {word && (
        <div>
          <span styleName="label">{index + 1}.</span>&nbsp;
          {word}
        </div>
      )}
      {definition && <div styleName="definition">{definition}</div>}
    </div>
  );
}
