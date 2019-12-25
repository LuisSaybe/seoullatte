import { useVoicesFromLanguage } from "web/js/hook/useVoicesFromLanguage";

export function useEnglishVoice() {
  const voices = useVoicesFromLanguage("en");
  return voices ? voices[0] : null;
}
