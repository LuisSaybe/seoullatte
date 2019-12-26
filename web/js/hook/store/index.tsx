import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  LocationsContext,
  SpeechSynthesisSettingsContext,
  UserContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import { useLocations } from "web/js/hook/useLocations";
import { useSpeechSynthesisSettings } from "web/js/reducer/useSpeechSynthesisSettings";
import { useUserInterfaceSettings } from "web/js/reducer/useUserInterfaceSettings";

export function Store({ children }) {
  const [
    userInterfaceState,
    dispatchUserInterfaceState,
  ] = useUserInterfaceSettings();
  const [
    userSpeechSynthesisSettings,
    dispatchSpeechSynthesisSettings,
  ] = useSpeechSynthesisSettings();

  return (
    <SpeechSynthesisSettingsContext.Provider
      value={userSpeechSynthesisSettings}
    >
      <DispatchSpeechSynthesisSettingsContext.Provider
        value={dispatchSpeechSynthesisSettings}
      >
        <UserInterfaceSettingsContext.Provider value={userInterfaceState}>
          <DispatchUserInterfaceSettingsContext.Provider
            value={dispatchUserInterfaceState}
          >
            <BrowserRouter>{children}</BrowserRouter>
          </DispatchUserInterfaceSettingsContext.Provider>
        </UserInterfaceSettingsContext.Provider>
      </DispatchSpeechSynthesisSettingsContext.Provider>
    </SpeechSynthesisSettingsContext.Provider>
  );
}
