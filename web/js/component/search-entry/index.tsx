import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useDictionaryTranslationLanguage } from "web/js/hook/useDictionaryTranslationLanguage";
import { useEntry } from "web/js/hook/useEntry";
import { routes } from "web/js/routes";
import { EntrySense } from "web/js/component/entry-sense";
import { appendLocation } from "web/js/redux/location/action";
import "./style.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  q: string;
}

export const SearchEntry = React.memo<Props>((props) => {
  const { q, ...rest } = props;
  const entry = useEntry(q);
  const dispatch = useDispatch();
  const to = routes.entry(q);
  const onClick = () => {
    dispatch(appendLocation(to));
  };

  return (
    <Link {...rest} onClick={onClick} to={to} styleName="root">
      <div styleName="dictionary-form">{entry.getDictionaryForm()}</div>
      <EntrySense styleName="sense" q={q} index={0} />
      <EntrySense styleName="sense" q={q} index={1} />
    </Link>
  );
});
