import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { getUserLanguage } from "common/helpers";

import {
  ApplicationContext,
  DispatchLocalStorageContext,
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  FetchDispatchContext,
  FetchStateContext,
  LocalStorageContext,
  SetApplicationStateContext,
  SpeechSynthesisSettingsContext,
  UserContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import {
  DispatchFetchType,
  LocalStorageActionType,
  SpeechSynthesisDispatchType,
  UserInterfaceDispatchType,
} from "web/js/interface";
import { routes } from "web/js/routes";

import { Header } from "web/js/component/header";
import { NaturalSpinner } from "web/js/component/natural-spinner";
import { Configuration } from "web/js/page/configuration";
import { Landing } from "web/js/page/landing";
import { NotFound } from "web/js/page/not-found";
import { Hangul } from "web/js/page/topic/hangul";

import "./style.scss";

const DEFAULT_APPLICATION_STATE = { userId: null };

export function Application() {
  const { i18n } = useTranslation();
  const storage = useContext(LocalStorageContext);
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const dispatchSpeechSynthesisSettings = useContext(
    DispatchSpeechSynthesisSettingsContext,
  );
  const dispatchLocalStorage = useContext(DispatchLocalStorageContext);
  const usersState = useContext(UserContext);
  const fetchState = useContext(FetchStateContext);
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(
    DispatchUserInterfaceSettingsContext,
  );

  const fetchTokenState = fetchState[DispatchFetchType.TOKEN_FROM_PASSWORD];
  const getUserState = fetchState[DispatchFetchType.GET_USER];

  const [applicationState, setApplicationState] = useState(
    DEFAULT_APPLICATION_STATE,
  );

  const loading =
    !i18n.language ||
    userInterfaceSettings.language === null ||
    getUserState?.fetching ||
    (applicationState.userId && !usersState[applicationState.userId]);
  const onLogoutClick = (e) => {
    e.preventDefault();
    dispatchLocalStorage({ type: LocalStorageActionType.RESET });
  };
  const authenticatedRoutes = <Switch></Switch>;

  useEffect(() => {
    dispatchUserInterfaceSettings({
      data: {
        language: getUserLanguage(null, navigator),
      },
      type: UserInterfaceDispatchType.SET,
    });

    if (speechSynthesis.onvoiceschanged) {
      speechSynthesis.getVoices();
    }
  }, []);

  useEffect(() => {
    if (!speechSynthesisSettings.voiceURI && speechSynthesisSettings.voices) {
      const voices = speechSynthesisSettings.voices.filter((voice) =>
        voice.lang.includes("ko"),
      );

      if (voices.length > 0) {
        dispatchSpeechSynthesisSettings({
          data: {
            voiceURI: voices[0].voiceURI,
          },
          type: SpeechSynthesisDispatchType.MERGE,
        });
      }
    }
  }, [dispatchSpeechSynthesisSettings, speechSynthesisSettings]);

  useEffect(() => {
    const voicesChanged = () => {
      dispatchSpeechSynthesisSettings({
        data: {
          voices: speechSynthesis.getVoices(),
        },
        type: SpeechSynthesisDispatchType.MERGE,
      });
    };

    if (typeof speechSynthesis.onvoiceschanged === "undefined") {
      voicesChanged();
    } else {
      const voiceschanged = "voiceschanged";
      speechSynthesis.addEventListener(voiceschanged, voicesChanged);
      return () => {
        speechSynthesis.removeEventListener(voiceschanged, voicesChanged);
      };
    }
  }, [dispatchSpeechSynthesisSettings]);

  useEffect(() => {
    if (
      userInterfaceSettings.language &&
      i18n.language !== userInterfaceSettings.language
    ) {
      i18n.changeLanguage(userInterfaceSettings.language);
    }
  }, [userInterfaceSettings, i18n]);

  useEffect(() => {
    const languagechangeEvent = "languagechange";
    const onLanguageChange = () => {
      dispatchUserInterfaceSettings({
        data: {
          language: getUserLanguage(null, navigator),
        },
        type: UserInterfaceDispatchType.SET,
      });
    };

    window.addEventListener(languagechangeEvent, onLanguageChange);
    return () => {
      window.removeEventListener(languagechangeEvent, onLanguageChange);
    };
  }, [dispatchUserInterfaceSettings]);

  let content;

  if (loading) {
    content = <NaturalSpinner styleName="spinner" />;
  } else {
    content = (
      <>
        <Header onLogoutClick={onLogoutClick} />
        <Switch>
          <Route exact path={routes.landing()} component={Landing} />
          <Route path={routes.configuration()} component={Configuration} />
          <Route path={routes.hangul()} component={Hangul} />
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
          <div styleName="root">{content}</div>
        </BrowserRouter>
      </SetApplicationStateContext.Provider>
    </ApplicationContext.Provider>
  );
}
