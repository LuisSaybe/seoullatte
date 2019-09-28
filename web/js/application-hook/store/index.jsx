import React from 'react';
import PropTypes from 'prop-types';

import {
  UserContext,
  UserInterfaceSettingsContext,
  DispatchUserInterfaceSettingsContext
} from 'web/js/context';

import { useUsers } from 'web/js/reducer/useUsers';
import { useUserInterfaceSettings } from 'web/js/reducer/useUserInterfaceSettings';

export function Store({ children }) {
  const [ usersState ] = useUsers();
  const [ userInterfaceState, dispatchUserInterfaceState ] = useUserInterfaceSettings();

  return (
    <UserInterfaceSettingsContext.Provider value={userInterfaceState}>
      <DispatchUserInterfaceSettingsContext.Provider value={dispatchUserInterfaceState}>
        <UserContext.Provider value={usersState}>{children}</UserContext.Provider>
      </DispatchUserInterfaceSettingsContext.Provider>
    </UserInterfaceSettingsContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired
};
