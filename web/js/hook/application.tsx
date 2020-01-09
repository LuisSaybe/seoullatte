import React, { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import { getLanguage } from "common/helpers";

import {
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  LocationsContext,
  SpeechSynthesisSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import { Language } from "common/model";

import { useArticleRoutes } from "web/js/hook/useArticleRoutes";
import { useGoogleAnalyticsPageHit } from "web/js/hook/useGoogleAnalyticsPageHit";
import { useLocations } from "web/js/hook/useLocations";
import { StandardReducerOperation } from "web/js/interface";
import { routes } from "web/js/routes";

import { BurgerMenu } from "web/js/component/burger-menu";
import { Configuration } from "web/js/page/configuration";
import { NotFound } from "web/js/page/not-found";

export function Application() {
  useGoogleAnalyticsPageHit();
  const { i18n } = useTranslation();
  const locations = useLocations();
  const articleRoutes = useArticleRoutes();
  const articleRoutesRef = useRef(articleRoutes);
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const dispatchSpeechSynthesisSettings = useContext(
    DispatchSpeechSynthesisSettingsContext,
  );
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(
    DispatchUserInterfaceSettingsContext,
  );

  useEffect(() => {
    if (!speechSynthesisSettings.voiceURI && speechSynthesisSettings.voices) {
      const voices = speechSynthesisSettings.voices.filter((voice) =>
        voice.lang.includes(Language.ko),
      );

      if (voices.length > 0) {
        dispatchSpeechSynthesisSettings({
          data: {
            voiceURI: voices[0].voiceURI,
          },
          type: StandardReducerOperation.MERGE,
        });
      }
    }
  }, [dispatchSpeechSynthesisSettings, speechSynthesisSettings]);

  useEffect(() => {
    if (!window.speechSynthesis) {
      return;
    }

    const voicesChanged = () => {
      dispatchSpeechSynthesisSettings({
        data: {
          voices: speechSynthesis.getVoices(),
        },
        type: StandardReducerOperation.MERGE,
      });
    };

    if (typeof speechSynthesis.onvoiceschanged === "undefined") {
      voicesChanged();
    } else {
      speechSynthesis.addEventListener("voiceschanged", voicesChanged);
      voicesChanged();
      return () => {
        speechSynthesis.removeEventListener("voiceschanged", voicesChanged);
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
          language: getLanguage(window.navigator),
        },
        type: StandardReducerOperation.MERGE,
      });
    };

    window.addEventListener(languagechangeEvent, onLanguageChange);
    return () => {
      window.removeEventListener(languagechangeEvent, onLanguageChange);
    };
  }, [dispatchUserInterfaceSettings]);

  return (
    <LocationsContext.Provider value={locations}>
      <BurgerMenu />
      <Switch>
        <Route path={routes.configuration()} component={Configuration} />
        {articleRoutesRef.current}
        <Route component={NotFound} />
      </Switch>
    </LocationsContext.Provider>
  );
}
