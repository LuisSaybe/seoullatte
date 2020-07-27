import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";

export function useUtterance(
  text: string,
  uri: SpeechSynthesisVoice["voiceURI"],
) {
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );
  const voice = speechSynthesisSettings?.voices?.find(
    ({ voiceURI }) => uri === voiceURI,
  );

  if (!speechSynthesis) {
    return null;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  if (utterance && voice) {
    utterance.voice = voice;
  }

  if (typeof speechSynthesisSettings.rate !== "undefined") {
    utterance.rate = speechSynthesisSettings.rate;
  }

  return utterance;
}
