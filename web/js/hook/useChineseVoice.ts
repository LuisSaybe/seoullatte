import { useVoicesFromLanguage } from "web/js/hook/useVoicesFromLanguage";

export function useChineseVoice() {
  const voices = useVoicesFromLanguage("zh");
  return voices[0];
}
