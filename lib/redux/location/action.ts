export enum Action {
  appendLocation = "location/appendLocation",
  popLocation = "location/pop",
}

export function appendLocation(pathname: string) {
  return {
    type: Action.appendLocation,
    data: pathname,
  };
}

export function pop() {
  return {
    type: Action.popLocation,
  };
}
