import { useVoicesFromLanguage } from "web/js/hook/useVoicesFromLanguage";

export function useGermanVoice() {
  const voices = useVoicesFromLanguage("de");
  return voices && voices[0];
}
