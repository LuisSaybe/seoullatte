import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";

export function useUtterance(text: string) {
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );

  if (!speechSynthesis) {
    return null;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  if (typeof speechSynthesisSettings.rate !== "undefined") {
    utterance.rate = speechSynthesisSettings.rate;
  }

  return utterance;
}
