import { useKoreanUtterance } from "web/js/hook/useKoreanUtterance";

export function useCanUseKoreanUtterance() {
  return useKoreanUtterance("") ? true : false;
}
