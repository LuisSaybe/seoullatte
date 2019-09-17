import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { isValidEmail, safe } from 'web/js/helper';

import { USER_SCHEMA } from 'common/schema';
import { T } from 'common/i18n';
import { getNavigatorLanguage } from 'common/helpers';
import { routes } from 'web/js/routes';
import { MessageBlock } from 'web/js/component/message-block';
import { EmailSearchIcon } from 'web/js/component/email-search-icon';
import { ApplicationContext, FetchDispatchContext, FetchStateContext } from 'web/js/context';
import { Button } from 'web/js/component/button';
import { Anchor } from 'web/js/component/anchor';
import { Input } from 'web/js/component/input';
import './style.scss';

import {
  ACCOUNT_PATH,
  TOKEN_PATH,
  USER_EMAIL_PATH
} from 'common/routes';

import {
  SEARCH_EMAIL,
  CREATE_ACCOUNT,
  TOKEN_FROM_PASSWORD
} from 'web/js/reducer/useFetch';

export function SignupComponent({ history }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');
  const [ commonPasswordError, setCommonPasswordError ] = useState(false);
  const [ passwordLengthError, setPasswordLengthError ] = useState(false);
  const [ passwordsDoNoMatch, setPasswordsDoNoMatch ] = useState(false);
  const emailEqualsPassword = email !== '' && email.toLocaleLowerCase() === password.toLocaleLowerCase();
  const { userId } = useContext(ApplicationContext);
  const [ dispatchFetch, dispatchFetchDelete ] = useContext(FetchDispatchContext);
  const fetchState = useContext(FetchStateContext);
  const emailFetchState = fetchState[SEARCH_EMAIL];
  const createAccountState = fetchState[CREATE_ACCOUNT];
  const isCreatingAccount = safe(() => createAccountState.fetching, false);
  const emailIsAvailable = safe(() => emailFetchState.response.status === 404, false);
  const emailIsTaken = safe(() => emailFetchState.response.status === 200, false);
  const didFailToCreateAccount = safe(() => !createAccountState.response.ok, false) ||
    safe(() => createAccountState.state.error, false);
  const errorMessages = [];
  const onSubmit = e => {
    e.preventDefault();

    if (safe(() => createAccountState.fetching) || !emailIsAvailable || emailEqualsPassword) {
      return;
    }

    const displayPasswordsDoNoMatch = password !== passwordConfirm;
    const displayPasswordLengthError = password.length < USER_SCHEMA.properties.password.minLength ||
      passwordConfirm.length < USER_SCHEMA.properties.password.minLength;
    const displayCommonPasswordError = USER_SCHEMA.properties.password.not.enum.includes(password);

    setCommonPasswordError(displayCommonPasswordError);
    setPasswordsDoNoMatch(displayPasswordsDoNoMatch);
    setPasswordLengthError(displayPasswordLengthError);
    setCommonPasswordError(displayCommonPasswordError);

    const hasError = displayCommonPasswordError || displayPasswordLengthError || displayPasswordsDoNoMatch;

    if (hasError) {
      return;
    }

    const body = {
      email,
      password: password,
      lastLanguage: getNavigatorLanguage(window.navigator)
    };

    dispatchFetch(
      ACCOUNT_PATH,
      {
        method: 'POST',
        body,
      },
      CREATE_ACCOUNT
    );
  };

  let emailTakenMessage;

  useEffect(() => {
    return () => {
      dispatchFetchDelete([TOKEN_FROM_PASSWORD, CREATE_ACCOUNT, SEARCH_EMAIL]);
    };
  }, []);

  useEffect(() => {
    if (userId !== null) {
      history.push(routes.home());
    }
  }, [ userId ]);

  useEffect(() => {
    if (safe(() => createAccountState.response.ok)) {
      dispatchFetch(TOKEN_PATH, {
        method: 'POST',
        body: {
          email: createAccountState.originalBody.email,
          password: createAccountState.originalBody.password
        }
      }, TOKEN_FROM_PASSWORD);
    }
  }, [ createAccountState ]);

  useEffect(() => {
    if (isValidEmail(email)) {
      dispatchFetch(USER_EMAIL_PATH, { query: { email } }, SEARCH_EMAIL);
    }
  }, [email]);

  if (commonPasswordError) {
    errorMessages.push(T('Your password is too common, please choose another password'));
  }

  if (passwordLengthError) {
    errorMessages.push(T('Your password must be at least 8 characters'));
  }

  if (didFailToCreateAccount) {
    errorMessages.push(T('Unable to create your account. Please try again'));
  }

  if (emailEqualsPassword) {
    errorMessages.push(T('Your email and password must be different'));
  }

  if (emailIsTaken) {
    emailTakenMessage = (
      <MessageBlock key='email-taken'>
        {T('Sorry, that email already is taken')}
      </MessageBlock>
    );
  }

  return (
    <form styleName='root' onSubmit={onSubmit}>
      <div styleName='email-row'>
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder={T('Email')}
          type='email'
          autoComplete='email'
          required
        />
        <div styleName='check-icon-container'>
          <EmailSearchIcon />
        </div>
        {emailTakenMessage}
      </div>
      <Input
        onChange={e => setPassword(e.target.value)}
        value={password}
        placeholder={T('Password')}
        type='password'
        error={passwordsDoNoMatch}
        autoComplete='new-password'
        minLength={USER_SCHEMA.properties.password.minLength}
        required
      />
      <Input
        onChange={e => setPasswordConfirm(e.target.value)}
        value={passwordConfirm}
        placeholder={T('Password Confirm')}
        type='password'
        error={passwordsDoNoMatch}
        autoComplete='new-password'
        minLength={USER_SCHEMA.properties.password.minLength}
        required={true}
      />
    <Button loading={isCreatingAccount}>
        {T('Create Account')}
      </Button>
      <Anchor to={routes.login()}>
        {T('Already have an account?')}
      </Anchor>
      {
        errorMessages.map(message => (
          <MessageBlock key={message}>
            {message}
          </MessageBlock>
        ))
      }
    </form>
  );
}

SignupComponent.propTypes = {
  history: PropTypes.object.isRequired
};

export const Signup = withRouter(SignupComponent);
