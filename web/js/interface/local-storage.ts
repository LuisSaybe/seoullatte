export enum LocalStorageActionType {
  UPDATE = "UPDATE",
  RESET = "RESET",
}

export interface ILocalStorage {
  token: string;
}

export type LocalStorageContextType = ILocalStorage;

export interface ILocalStorageUpdateAction {
  type: LocalStorageActionType.UPDATE;
  data: ILocalStorage;
}

export interface ILocalStorageResetAction {
  type: LocalStorageActionType.RESET;
}

export type DispatchLocalStorageContextType = (
  action: ILocalStorageUpdateAction | ILocalStorageResetAction,
) => void;
