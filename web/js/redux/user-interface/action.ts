import { UserInterface } from "web/js/interface/user-interface";

export enum Action {
  update = "user-interface-configuration/update",
}

export function updateUserInterface(data: Partial<UserInterface>) {
  return {
    type: Action.update,
    data,
  };
}
