import { getLanguage } from "web/js/helper/language";
import {
  USER_AGENT_LANGUAGE_LANGUAGE_MAP,
  LanguageNames,
} from "../interface/korean";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

export function useDictionaryTranslationLanguage() {
  const langauge = useSelector(
    (state: RootState) => state.userInterface.language,
  );
  const dictionaryLanguage = USER_AGENT_LANGUAGE_LANGUAGE_MAP.find(
    ({ codes }) => codes.includes(langauge?.toLocaleLowerCase()),
  );

  return dictionaryLanguage
    ? dictionaryLanguage.dictionaryLanguage
    : LanguageNames.english;
}
