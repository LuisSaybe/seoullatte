export interface ISettings {
  api: {
    uri: string;
  };
  ga?: {
    trackingId: string;
  };
  sentry?: {
    dsn: string;
    debug: boolean;
    environment: string;
  };
}

export enum DispatchFetchId {
  UPDATE_USER = "UPDATE_USER",
  GET_USER = "GET_USER",
  SEARCH_EMAIL = "SEARCH_USER_EMAIL",
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
  TOKEN_FROM_PASSWORD = "TOKEN_FROM_PASSWORD",
  CREATE_STRIPE_CHECKOUT_SESSION = "CREATE_STRIPE_CHECKOUT_SESSION",
  GET_STRIPE_SESSION = "GET_STRIPE_SESSION",
  LOGOUT = "LOGOUT",
  VIEW_WORD = "VIEW_WORD",
}

export interface ILocalStorage {
  token: string;
}

export interface IUserInterface {
  language?: string;
  burgerMenuOpen: boolean;
}

export interface ISpeechSynthesisSettings {
  voices: SpeechSynthesisVoice[];
  voiceURI?: SpeechSynthesisVoice["voiceURI"];
  rate?: SpeechSynthesisUtterance["rate"];
}

export interface IUser {
  _id: string;
  email: string;
}

export interface IFetchStateType {
  [key: string]: IFetchState;
}

export enum StandardReducerOperation {
  MERGE = "MERGE",
  SET = "SET",
}

export enum LocalStorageActionType {
  UPDATE = "UPDATE",
  RESET = "RESET",
}

export enum FetchActionType {
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export interface ISpeechSynthesisDispatchAction {
  data: Partial<ISpeechSynthesisSettings>;
  type: StandardReducerOperation;
}

export type DispatchSpeechSynthesisSettingsContext = (
  action: IDispatchSpeechSynthesisAction,
) => void;
export type LocalStorageContextType = ILocalStorage;
export type DispatchSpeechSynthesisSettingsContextType = (
  action: ISpeechSynthesisDispatchAction,
) => void;
export type IDefinitionContextType = [{ [id: string]: IDefinition }];
export type IClickEventContextType = MouseEvent;
export type UserContextType = [{ [id: string]: IUser }];
export type UserInterfaceSettingsContextType = IUserInterface;
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
export type DispatchUserInterfaceSettingsContextType = (
  action: IUserInterfaceSeetAction | IUserInterfaceUpdateAction,
) => void;

export type FetchDispatchContextType = [DispatchFetch, DispatchFetchDelete];

export type DispatchLocalStorageContextType = (
  action: ILocalStorageUpdateAction | ILocalStorageResetAction,
) => void;

export type DisatchBurgerMenuContextType = ({
  data: IBurgerMenuSettings,
}) => void;

export interface IUserInterfaceSeetAction {
  type: StandardReducerOperation.SET;
  data: IUserInterface;
}

export interface IUserInterfaceUpdateAction {
  type: StandardReducerOperation.MERGE;
  data: Partial<IUserInterface>;
}

export type SpeechSynthesisSettingsContextType = ISpeechSynthesisSettings;
export type LocationsContextType = Array<{ pathname: string }>;
export interface ILocalStorageUpdateAction {
  type: LocalStorageActionType.UPDATE;
  data: ILocalStorage;
}

export interface ILocalStorageResetAction {
  type: LocalStorageActionType.RESET;
}

export type DispatchFetchURL = string[] | RequestInfo;

export type DispatchFetch = (
  url: DispatchFetchURL,
  options: IRequestInitCustom & Omit<RequestInit, "body">,
  id: DispatchFetchId,
) => Promise<void>;

export interface IRequestInitCustom {
  body?: any;
}

export type DispatchFetchDelete = (
  ids: IFetchDispatchActionDelete["data"]["ids"],
) => void;
export interface IFetchDispatchAction {
  type: FetchActionType;
  data: IFetchDispatchActionUpdate["data"] | IFetchDispatchActionDelete["data"];
}

export interface IDispatchSpeechSynthesisAction {
  type: StandardReducerOperation;
  data: ISpeechSynthesisSettings;
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

export interface ITopic {
  description: string;
  name: string;
  path: string;
  searchTerms: string;
  component: React.ComponentType;
}

export interface IKoreanDefinitionIdentifier {
  q: string;
}

export interface IDefinition {
  getDefinition(): string;
}
