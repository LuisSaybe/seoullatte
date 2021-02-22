import { useKoreanUtterance } from "web/js/hook/useKoreanUtterance";

export function useCanUseKoreanUtterance() {
  return Boolean(useKoreanUtterance(""));
}
