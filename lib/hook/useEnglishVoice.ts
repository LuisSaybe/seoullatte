import { useVoicesFromLanguage } from "./useVoicesFromLanguage";

export function useEnglishVoice() {
  const voices = useVoicesFromLanguage("en");
  return voices && voices[0];
}
