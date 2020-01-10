import { useContext } from "react";

import { SpeechSynthesisSettingsContext } from "web/js/context";

export function useVoicesFromLanguage(target: string) {
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  return speechSynthesisSettings.voices?.filter(({ lang }) =>
    lang.includes(target),
  );
}
