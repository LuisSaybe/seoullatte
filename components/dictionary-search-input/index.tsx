import * as React from "react";
import { useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Action } from "../../lib/redux/entry-search/action";
import { useFetch } from "../../lib/hook/useFetch";
import { RootState } from "../../lib/redux/reducer";
import { LanguageNames } from "../../lib/interface/korean";
import { useSettings } from "../../lib/hook/useSettings";
import { useDictionaryTranslationLanguage } from "../../lib/hook/useDictionaryTranslationLanguage";
import styles from "./index.module.scss";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onSuggestionSelected: () => void;
  inputClassname?: React.InputHTMLAttributes<HTMLInputElement>["className"];
  onChange?: (event: React.ChangeEvent, information) => void;
}

export const DictionarySearchInput = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const settings = useSettings();
    const { t } = useTranslation();
    const dictionaryLanguage = useDictionaryTranslationLanguage();
    const { className, inputClassname, onSuggestionSelected, ...rest } = props;
    const search = useFetch(Action.search);
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
      const firstSenseInTranslationLanguage = suggestion.getSenseTranslation(
        1,
        dictionaryLanguage,
      );
      const translation =
        firstSenseInTranslationLanguage ?? firstSenseTranslation;

      return (
        <div className={styles.suggestion}>
          <span className={styles["dictionary-form"]}>
            {suggestion.getDictionaryForm()}
          </span>
          {translation && <div className={styles.sense}>{translation}</div>}
        </div>
      );
    };
    const getSuggestionValue = (suggestion) => suggestion.getTargetCode();
    const onSuggestionsFetchRequested = ({ value }) => {
      if (value) {
        search(`${settings.api.url}/entry?query=${value}`);
      }
    };
    const renderSuggestionsContainer = ({ containerProps, children }) => {
      return (
        <div {...containerProps} children={children} aria-label={t("search")} />
      );
    };

    useEffect(() => {
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
