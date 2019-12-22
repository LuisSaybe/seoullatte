import React from "react";

import {
  ApplicationStateContextType,
  DispatchLocalStorageContextType,
  DispatchSpeechSynthesisSettingsContextType,
  DispatchUserInterfaceSettingsContextType,
  FetchDispatchContextType,
  FetchStateContextType,
  LocalStorageContextType,
  SetApplicationStateSetContextType,
  SpeechSynthesisSettingsContextType,
  UserContextType,
  UserInterfaceSettingsContextType,
} from "web/js/interface";

export const ApplicationContext = React.createContext<
  ApplicationStateContextType
>(null);
export const SetApplicationStateContext = React.createContext<
  SetApplicationStateSetContextType
>(null);

export const UserContext = React.createContext<UserContextType>(null);

export const UserInterfaceSettingsContext = React.createContext<
  UserInterfaceSettingsContextType
>(null);
export const DispatchUserInterfaceSettingsContext = React.createContext<
  DispatchUserInterfaceSettingsContextType
>(null);

export const SpeechSynthesisSettingsContext = React.createContext<
  SpeechSynthesisSettingsContextType
>(null);
export const DispatchSpeechSynthesisSettingsContext = React.createContext<
  DispatchSpeechSynthesisSettingsContextType
>(null);

export const FetchDispatchContext = React.createContext<
  FetchDispatchContextType
>(null);
export const FetchStateContext = React.createContext<FetchStateContextType>(
  null,
);

export const LocalStorageContext = React.createContext<LocalStorageContextType>(
  null,
);
export const DispatchLocalStorageContext = React.createContext<
  DispatchLocalStorageContextType
>(null);
