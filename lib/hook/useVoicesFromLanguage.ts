import { useSelector } from "react-redux";

import { RootState } from "../redux/reducer";

export function useVoicesFromLanguage(target: string) {
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );
  return speechSynthesisSettings?.voices?.filter(({ lang }) =>
    lang.includes(target),
  );
}
