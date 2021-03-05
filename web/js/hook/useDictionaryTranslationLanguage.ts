import { useSelector } from "react-redux";

import {
  USER_AGENT_LANGUAGE_LANGUAGE_MAP,
  LanguageNames,
} from "web/js/interface/korean";
import { RootState } from "web/js/redux/reducer";

export function useDictionaryTranslationLanguage() {
  const langauge = useSelector(
    (state: RootState) => state.userInterface.language,
  );
  const dictionaryLanguage = USER_AGENT_LANGUAGE_LANGUAGE_MAP.find(
    ({ codes }) => codes.includes(langauge?.toLocaleLowerCase()),
  );

  return dictionaryLanguage?.dictionaryLanguage ?? LanguageNames.english;
}
