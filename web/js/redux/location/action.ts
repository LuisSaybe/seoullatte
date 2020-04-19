import { Location } from "react-router-dom";

export enum Action {
  appendLocation = "location/appendLocation",
}

export function appendLocation(data: Location) {
  return {
    type: Action.appendLocation,
    data,
  };
}
