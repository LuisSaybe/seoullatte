import * as React from "react";
import Autosuggest from "react-autosuggest";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Action } from "web/js/redux/entry-search/action";
import { useFetch } from "web/js/hook/useFetch";
import { RootState } from "web/js/redux/reducer";
import { LanguageNames } from "web/js/interface/korean";
import styles from "./style.scss";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onSuggestionSelected: () => void;
  inputClassname?: React.InputHTMLAttributes<HTMLInputElement>["className"];
  onChange?: (event: React.ChangeEvent, information) => void;
}

export const DictionarySearchInput = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { t } = useTranslation();
    const { className, inputClassname, onSuggestionSelected, ...rest } = props;
    const [search] = useFetch(Action.search);
    const [suggestions, setSuggestions] = React.useState([]);
    const entries = useSelector((state: RootState) => {
      const ids = state.entrySearch[props.value.toString()] ?? [];
      return ids.map((id) => state.entry[id]);
    });
    const entriesHash = entries.map((entry) => entry.getTargetCode()).join();
    const renderSuggestion = (suggestion) => {
      const firstSenseTranslation = suggestion.getSenseTranslation(
        1,
        LanguageNames.english,
      );

      return (
        <div className={styles.suggestion}>
          <span styleName="dictionary-form">
            {suggestion.getDictionaryForm()}
          </span>
          {firstSenseTranslation && (
            <>
              <div styleName="sense">{firstSenseTranslation}</div>
            </>
          )}
        </div>
      );
    };
    const getSuggestionValue = (suggestion) => suggestion.getTargetCode();
    const onSuggestionsFetchRequested = ({ value }) => {
      if (value) {
        search(`https://api.seoullatte.com/entry?query=${value}`);
      }
    };
    const renderSuggestionsContainer = ({ containerProps, children }) => {
      return (
        <div {...containerProps} children={children} aria-label={t("search")} />
      );
    };

    React.useEffect(() => {
      setSuggestions(entries);
    }, [entriesHash]);

    return (
      <Autosuggest
        theme={{
          container: `${styles.root} ${className ?? ""}`,
          suggestionsContainerOpen: styles.suggestionsContainerOpen,
          suggestionsList: styles.suggestionsList,
          suggestionHighlighted: styles.suggestionHighlighted,
        }}
        onSuggestionSelected={onSuggestionSelected}
        renderSuggestionsContainer={renderSuggestionsContainer}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          ...rest,
          className: `${styles.input} ${inputClassname || ""}`,
          ref,
        }}
      />
    );
  },
);
