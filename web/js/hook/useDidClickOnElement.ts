import { useContext, useEffect, useState } from "react";

import { ClickEventContext } from "web/js/context";

export function useDidClickOnElement(element: Element) {
  const event = useContext(ClickEventContext);
  return element?.contains(event?.target as Element);
}
