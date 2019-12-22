import PropTypes from "prop-types";
import React from "react";

import {
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  SpeechSynthesisSettingsContext,
  UserContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import { useSpeechSynthesisSettings } from "web/js/reducer/useSpeechSynthesisSettings";
import { useUserInterfaceSettings } from "web/js/reducer/useUserInterfaceSettings";
import { useUsers } from "web/js/reducer/useUsers";

export function Store({ children }) {
  const [usersState] = useUsers();
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
            <UserContext.Provider value={usersState}>
              {children}
            </UserContext.Provider>
          </DispatchUserInterfaceSettingsContext.Provider>
        </UserInterfaceSettingsContext.Provider>
      </DispatchSpeechSynthesisSettingsContext.Provider>
    </SpeechSynthesisSettingsContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
