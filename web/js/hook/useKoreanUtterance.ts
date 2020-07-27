import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";
import { useUtterance } from "web/js/hook/useUtterance";

export function useKoreanUtterance(text: string) {
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );
  const voice = speechSynthesisSettings?.voices?.find(
    ({ voiceURI }) => speechSynthesisSettings.voiceURI === voiceURI,
  );
  const utterance = useUtterance(text, voice?.voiceURI);

  if (!voice) {
    return null;
  }

  if (utterance) {
    utterance.voice = voice;
  }

  return utterance;
}
