export enum Action {
  setRefOpen = "definition-popup/setRefOpen",
  setAllRefsClosed = "definition-popup/setAllRefsClosed",
}

export function setAllRefsClosed() {
  return {
    type: Action.setAllRefsClosed,
  };
}


export function setRefOpen(element: HTMLElement, open: boolean) {
  return {
    type: Action.setRefOpen,
    data: { element, open }
  };
}
