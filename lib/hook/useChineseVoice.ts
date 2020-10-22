import { useVoicesFromLanguage } from "./useVoicesFromLanguage";

export function useChineseVoice() {
  const voices = useVoicesFromLanguage("zh");
  return voices && voices[0];
}
