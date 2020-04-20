import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";

export function useKoreanUtterance(text: string) {
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );

  if (!speechSynthesis) {
    return null;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = speechSynthesisSettings?.voices?.find(
    ({ voiceURI }) => speechSynthesisSettings.voiceURI === voiceURI,
  );

  if (voice) {
    utterance.voice = voice;
  }

  if (typeof speechSynthesisSettings.rate !== "undefined") {
    utterance.rate = speechSynthesisSettings.rate;
  }

  return utterance;
}
