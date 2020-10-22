import { useKoreanUtterance } from "./useKoreanUtterance";

export function useCanUseKoreanUtterance() {
  return useKoreanUtterance("") ? true : false;
}
