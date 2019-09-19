import React from 'react';
import PropTypes from 'prop-types';

import {
  UserContext,
} from 'web/js/context';

import { useUsers } from 'web/js/reducer/useUsers';

export function Store({ children }) {
  const [ usersState ] = useUsers();

  return (
    <UserContext.Provider value={usersState}> {children}</UserContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired
};
