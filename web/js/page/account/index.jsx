import React, { useEffect, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { T } from 'common/i18n';
import {
  USER_EMAIL_PATH,
  USER_PATH,
  USER_ORGANIZATIONS_PATH
} from 'common/routes';
import { UPDATE_SUCCESS } from 'web/js/helper/text';

import { Input  } from 'web/js/component/input';
import { Button  } from 'web/js/component/button';
import { MessageBlock } from 'web/js/component/message-block';
import { EmailSearchIcon } from 'web/js/component/email-search-icon';

import './style.scss';

import { safe, isValidEmail } from 'web/js/helper';
import {
  ApplicationContext,
  SetApplicationStateContext,
  FetchDispatchContext,
  FetchStateContext,
  OrganizationContext,
  UserContext
} from 'web/js/context';
import {
  UPDATE_USER,
  SEARCH_EMAIL,
  GET_USER
} from 'web/js/reducer/useFetch';

export function Account() {
  const applicationState = useContext(ApplicationContext);
  const setApplicationState = useContext(SetApplicationStateContext);
  const fetchState = useContext(FetchStateContext);
  const [ dispatchFetch, dispatchFetchDelete ] = useContext(FetchDispatchContext);
  const organizationsMap = useContext(OrganizationContext);
  const usersMap = useContext(UserContext);

  const emailFetchState = fetchState[SEARCH_EMAIL];
  const updateUserState = fetchState[UPDATE_USER];

  const emailIsTaken = safe(() => emailFetchState.response.status === 200, false);
  const organizations = Object.values(organizationsMap).sort((first, second) => first.name.localeCompare(second.name));
  const user = usersMap[applicationState.userId];

  const [ email, setEmail ] = useState(user.email);
  const [ organizationId, setOrganizationId ] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (safe(() => updateUserState.fetching) || emailIsTaken || !isValidEmail(email)) {
      return;
    }

    const body = { email };

    dispatchFetch(
      [USER_PATH, applicationState.userId],
      {
        method: 'POST',
        body,
      },
      UPDATE_USER
    );
  };

  let organizationSelect;
  let emailTakenMessage;

  if (email !== user.email && emailIsTaken) {
    emailTakenMessage = (
      <MessageBlock>
        {T('Sorry, that email already is taken.')}
      </MessageBlock>
    );
  }

  useEffect(() => {
    if (!safe(() => updateUserState.response.ok)) {
      return;
    }

    toast(UPDATE_SUCCESS);

    dispatchFetchDelete([ UPDATE_USER ]);
    dispatchFetch(
      [USER_PATH, applicationState.userId],
      {},
      GET_USER
    );

    if (applicationState.organizationId !== organizationId) {
      setApplicationState({ ...applicationState, organizationId });
    }
  }, [ updateUserState, applicationState ]);

  useEffect(() => {
    if (isValidEmail(email) && email !== user.email) {
      dispatchFetch(USER_EMAIL_PATH, { query: { email } }, SEARCH_EMAIL);
    }
  }, [email]);

  if (organizations.length > 0) {
    organizationSelect = (
      <>
        <label styleName='label' htmlFor='account-change-organization'>
          {T('Current organization')}
        </label>
        <select onBlur={e => setOrganizationId(e.target.value)} id='account-change-organization'>
          {
            organizations.map(organization => {
              return (
                <option value={organization._id} key={organization._id}>
                  {organization.name}
                </option>
              );
            })
          }
        </select>
      </>
    );
  }

  return (
    <form onSubmit={onSubmit} styleName='root'>
      <span styleName='page-title'>
        {T('My Account')}
      </span>
      <div styleName='email-update'>
        <label htmlFor='account-email' styleName='label'>
          {T('Email')}
        </label>
        <div styleName='email-row'>
          <Input id='account-email' value={email} onChange={e => setEmail(e.target.value) } />
          <div styleName='check-icon-container'>
            <EmailSearchIcon />
          </div>
          {emailTakenMessage}
        </div>
      </div>
      {organizationSelect}
      <Button loading={safe(() => updateUserState.fetching)}>
        {T('Save')}
      </Button>
    </form>
  );
}
