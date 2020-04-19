import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";

export function useDidClickOnElement(element: Element) {
  const event = useSelector(
    (state: RootState) => state.userInterfaceEvent.clickEvent,
  );
  return element?.contains(event?.target as Node);
}
