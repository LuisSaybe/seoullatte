import React from "react";

import {
  FetchDispatchContextType,
  FetchStateContextType,
} from "web/js/interface/fetch";
import {
  DispatchSpeechSynthesisSettingsContextType,
  SpeechSynthesisSettingsContextType,
} from "web/js/interface/speech-synthesis";
import {
  DispatchUserInterfaceSettingsContextType,
  IClickEventContextType,
  UserInterfaceSettingsContextType,
} from "web/js/interface/user-interface";
import { IDefinitionContextType } from "../interface/korean";
import {
  DispatchLocalStorageContextType,
  LocalStorageContextType,
} from "../interface/local-storage";
import { LocationsContextType } from "../interface/route";

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
