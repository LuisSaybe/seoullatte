import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import {
  USER_PATH
} from 'common/routes';
import { getUserLanguage } from 'common/helpers';

import { safe } from 'web/js/helper';

import {
  ApplicationContext,
  SetApplicationStateContext,
  FetchDispatchContext,
  FetchStateContext,
  LocalStorageContext,
  UserContext,
  LocalStorageDispatchContext,
  UserInterfaceSettingsContext,
  DispatchUserInterfaceSettingsContext
} from 'web/js/context';

import { routes } from 'web/js/routes';
import { Header } from 'web/js/component/header';
import { NaturalSpinner } from 'web/js/component/natural-spinner';
import { NotFound } from 'web/js/page/not-found';
import { Login } from 'web/js/page/login';
import { ForgotPassword } from 'web/js/page/forgot-password';
import { Hangul } from 'web/js/page/topic/hangul';

import {
  TOKEN_FROM_PASSWORD,
  GET_USER
} from 'web/js/reducer/useFetch';
import './style.scss';
import { Landing } from 'web/js/page/landing';
import { Signup } from 'web/js/page/signup';

const DEFAULT_APPLICATION_STATE = { userId: null };

export function Application() {
  const { i18n } = useTranslation();
  const storage = useContext(LocalStorageContext);
  const dispatchLocalStorage = useContext(LocalStorageDispatchContext);
  const [ dispatchFetch ] = useContext(FetchDispatchContext);
  const usersState = useContext(UserContext);
  const fetchState = useContext(FetchStateContext);
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(DispatchUserInterfaceSettingsContext);

  const fetchTokenState = fetchState[TOKEN_FROM_PASSWORD];
  const getUserState = fetchState[GET_USER];

  const [ applicationState, setApplicationState ] = useState(DEFAULT_APPLICATION_STATE);
  const jwtPayload = jwt.decode(storage.token);
  const loading =
    userInterfaceSettings.language === null ||
    safe(() => getUserState.fetching) ||
    (applicationState.userId && !usersState[applicationState.userId]);
  const onLogoutClick = e => {
    e.preventDefault();
    dispatchLocalStorage({ type: 'RESET' });
  };
  const authenticatedRoutes = (
    <Switch>
    </Switch>
  );

  useEffect(() => {
    dispatchUserInterfaceSettings({
      type: 'SET',
      data: {
        language: getUserLanguage(null, navigator)
      }
    });
  }, []);

  useEffect(() => {
    if (userInterfaceSettings.language && i18n.language !== userInterfaceSettings.language) {
      i18n.changeLanguage(userInterfaceSettings.language);
    }
  }, [ userInterfaceSettings, i18n ]);

  useEffect(() => {
    const onLanguageChange = () => {
      dispatchUserInterfaceSettings({
        type: 'SET',
        data: {
          language: getUserLanguage(null, navigator)
        }
      });
    };

    window.addEventListener('languagechange', onLanguageChange);
    return () => {
      window.removeEventListener('languagechange', onLanguageChange);
    };
  }, [ dispatchUserInterfaceSettings ]);

  useEffect(() => {
    if (!safe(() => fetchTokenState.response.ok)) {
      return;
    }
    dispatchLocalStorage({
      type: 'UPDATE',
      data: {
        token: fetchTokenState.body.token
      }
    });
  }, [ fetchTokenState ]);

  useEffect(() => {
    if (jwtPayload) {
      dispatchFetch([USER_PATH, jwtPayload.sub], {}, GET_USER);
    }
  }, [ storage ]);

  useEffect(() => {
    const status = safe(() => getUserState.response.status);
    const userId = safe(() => getUserState.params.userId);

    if (jwtPayload && jwtPayload.sub === userId) {
      if (status === 401) {
        dispatchLocalStorage({ type: 'RESET' });
      }
    }
  }, [ getUserState, jwtPayload ]);

  useEffect(() => {
    const nextApplicationState = { ...applicationState };

    if (jwtPayload) {
      if (usersState[jwtPayload.sub]) {
        nextApplicationState.userId = jwtPayload.sub;
      }
    } else {
      nextApplicationState.userId = null;
    }

    if (nextApplicationState.userId !== applicationState.userId) {
      setApplicationState(nextApplicationState);
    }
  }, [ usersState, storage, applicationState ]);

  let content;


  if (loading) {
    content = <NaturalSpinner styleName='spinner' />;
  } else {
    content = (
      <>
        <Header onLogoutClick={onLogoutClick} />
        <Switch>
          <Route exact path={routes.landing()} component={Landing} />
          <Route path={routes.hangul()} component={Hangul} />
          <Route path={routes.login()} component={Login} />
          <Route path={routes.signup()} component={Signup} />
          <Route path={routes.forgotPassword()} component={ForgotPassword} />
          {applicationState.userId === null ? null : authenticatedRoutes}
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }

  return (
    <ApplicationContext.Provider value={applicationState}>
      <SetApplicationStateContext.Provider value={setApplicationState}>
        <BrowserRouter>
          <div styleName='root'>
            {content}
          </div>
        </BrowserRouter>
      </SetApplicationStateContext.Provider>
    </ApplicationContext.Provider>
  );
}
