import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { TOKEN_PATH } from 'common/routes';


import {
  ApplicationContext,
  FetchDispatchContext,
  FetchStateContext
} from 'web/js/context';
import { TOKEN_FROM_PASSWORD } from 'web/js/reducer/useFetch';
import { safe } from 'web/js/helper';
import { routes } from 'web/js/routes';
import { MessageBlock } from 'web/js/component/message-block';
import { Anchor } from 'web/js/component/anchor';
import { Button } from 'web/js/component/button';
import { Input } from 'web/js/component/input';

import './style.scss';

export function Login() {
  const { t } = useTranslation();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { userId } = useContext(ApplicationContext);
  const [ fetchDispatch ] = useContext(FetchDispatchContext);
  const fetchState = useContext(FetchStateContext);
  const tokenFromPasswordState = fetchState[TOKEN_FROM_PASSWORD];
  const onSubmit = (e) => {
    e.preventDefault();

    if (safe(() => tokenFromPasswordState.fetching)) {
      return;
    }

    fetchDispatch(TOKEN_PATH, {
      method: 'POST',
      body: {
        email: email,
        password: password
      }
    }, TOKEN_FROM_PASSWORD);
  };

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  let content;

  if (userId === null) {
    let invalidCredentialsWarning, unableToValidateMessage;

    if (safe(() => tokenFromPasswordState.response.status === 400)) {
      invalidCredentialsWarning = (
        <MessageBlock>
          {t('Sorry, invalid email or password')}
        </MessageBlock>
      );
    }

    if (safe(() => tokenFromPasswordState.response.status >= 400)) {
      unableToValidateMessage = (
        <MessageBlock>
          {t('Sorry, we were not able to log you in, please try again')}
        </MessageBlock>
      );
    }

    content = (
      <form onSubmit={onSubmit} styleName='vertical-content root'>
        {invalidCredentialsWarning}
        {unableToValidateMessage}
        <Input
          value={email}
          onChange={onEmailChange}
          placeholder={t('Email')}
          type='email'
          required
          autoComplete='email'
        />
        <Input
          onChange={onPasswordChange}
          placeholder={t('Password')}
          type='password'
          autoComplete='current-password'
          required
          value={password}
        />
        <Button loading={safe(() => tokenFromPasswordState.response.status >= 400)}>
          {t('Log In')}
        </Button>
        <Anchor to={routes.forgotPassword()}>
          {t('Forgot your password?')}
        </Anchor>
        <Anchor to={routes.signup()}>
          {t('Create an account')}
        </Anchor>
      </form>
    );
  } else {
    content = (
      <div styleName='vertical-content root'>
        <MessageBlock>
          {t('You are already logged in')}
        </MessageBlock>
      </div>
    );
  }

  return content;
}
