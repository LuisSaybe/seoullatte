export enum Action {
  setClickEvent = "click-event/setClickEvent",
}

export function setClickEvent(e: React.MouseEvent) {
  return {
    type: Action.setClickEvent,
    data: e,
  };
}
