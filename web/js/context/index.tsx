import React from "react";

import {
  DispatchLocalStorageContextType,
  DispatchSpeechSynthesisSettingsContextType,
  DispatchUserInterfaceSettingsContextType,
  FetchDispatchContextType,
  FetchStateContextType,
  IDefinitionContextType,
  LocalStorageContextType,
  LocationsContextType,
  SpeechSynthesisSettingsContextType,
  UserContextType,
  UserInterfaceSettingsContextType,
  IClickEventContextType,
} from "web/js/interface";

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
export const LocationsContext = React.createContext<LocationsContextType>(null);
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

export const DefinitionContext = React.createContext<IDefinitionContextType>(
  null,
);

export const ClickEventContext = React.createContext<IClickEventContextType>(
  null,
);
