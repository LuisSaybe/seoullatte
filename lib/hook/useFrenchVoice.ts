import { useVoicesFromLanguage } from "./useVoicesFromLanguage";

export function useFrenchVoice() {
  const voices = useVoicesFromLanguage("fr");
  return voices && voices[0];
}
