import { useContext, useEffect, useState } from "react";

import { ClickEventContext } from "web/js/context";

export function useDidClickOnElement(element: Element) {
  const event = useContext(ClickEventContext);
  const [didClickOnElement, setDidClickOnElement] = useState();

  useEffect(() => {
    if (event) {
      setDidClickOnElement(
        element ? element.contains(event.target as Element) : false,
      );
    }
  }, [element, event]);

  return didClickOnElement;
}
