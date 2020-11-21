import React from "react";
import { Link } from "react-router-dom";

import { useDictionaryTranslationLanguage } from "web/js/hook/useDictionaryTranslationLanguage";
import { useEntry } from "web/js/hook/useEntry";
import { LanguageNames } from "web/js/interface/korean";
import { routes } from "web/js/routes";
import "./style.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  q: string;
}

export const SearchEntry = React.memo<Props>((props) => {
  const { q, ...rest } = props;
  const entry = useEntry(q);
  const dictionaryLanguage = useDictionaryTranslationLanguage();
  const senseInLanguage = entry.getSenseTranslation(1, dictionaryLanguage);
  const senseInEnglish = entry.getSenseTranslation(1, LanguageNames.english);
  const firstSense = senseInLanguage || senseInEnglish;

  return (
    <Link {...rest} to={routes.entry(q)} styleName="root">
      <div styleName="dictionary-form">{entry.getDictionaryForm()}</div>
      {firstSense && <div styleName="sense">{firstSense}</div>}
    </Link>
  );
});
