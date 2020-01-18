export type DispatchFetchDelete = (
  ids: IFetchDispatchActionDelete["data"]["ids"],
) => void;
export interface IFetchDispatchAction {
  type: FetchActionType;
  data: IFetchDispatchActionUpdate["data"] | IFetchDispatchActionDelete["data"];
}

export interface IFetchDispatchActionUpdate {
  type: FetchActionType.UPDATE;
  data: IFetchState;
}

export interface IFetchDispatchActionDelete {
  type: FetchActionType.DELETE;
  data: {
    ids: string[];
  };
}

export enum FetchActionType {
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export interface IFetchStateType {
  [key: string]: IFetchState;
}

export type FetchStateContextType = IFetchStateType;
export interface IFetchState {
  id: DispatchFetchId;
  url: DispatchFetchURL;
  options: RequestInit;
  fetching: boolean;
  searchParams?: URLSearchParams;
  params?: { [id: string]: string };
  response?: Response;
  body?: any;
  error?: any;
  originalBody?: any;
}

export type DispatchFetchURL = string[] | RequestInfo;

export type DispatchFetch = (
  url: DispatchFetchURL,
  options: IRequestInitCustom & Omit<RequestInit, "body">,
  id: DispatchFetchId,
) => Promise<void>;

export enum DispatchFetchId {
  VIEW_WORD = "VIEW_WORD",
  GET_WORDS = "GET_WORDS",
}

export interface IRequestInitCustom {
  body?: any;
}

export type FetchDispatchContextType = [DispatchFetch, DispatchFetchDelete];
