import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  ClickEventContext,
  DefinitionContext,
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  SpeechSynthesisSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import { useClickListener } from "web/js/hook/useClickListener";
import { useDefinitions } from "web/js/reducer/useDefinitions";
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
  const [definitions] = useDefinitions();
  const event = useClickListener();

  return (
    <ClickEventContext.Provider value={event}>
      <DefinitionContext.Provider value={definitions}>
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
      </DefinitionContext.Provider>
    </ClickEventContext.Provider>
  );
}
