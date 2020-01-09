import { useVoicesFromLanguage } from "web/js/hook/useVoicesFromLanguage";

export function useFrenchVoice() {
  const voices = useVoicesFromLanguage("fr");
  return voices && voices[0];
}
