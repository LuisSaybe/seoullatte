import { useVoicesFromLanguage } from "web/js/hook/useVoicesFromLanguage";

export function useChineseVoice() {
  const voices = useVoicesFromLanguage("zh");
  return voices ? voices[0] : null;
}
