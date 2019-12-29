import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import { getUserLanguage } from "common/helpers";

import {
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  LocationsContext,
  SpeechSynthesisSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import { StandardReducerOperation } from "web/js/interface";
import { routes } from "web/js/routes";

import { Language } from "common/model";
import { useArticleRoutes } from "web/js/hook/useArticleRoutes";
import { useGoogleAnalyticsPageHit } from "web/js/hook/useGoogleAnalyticsPageHit";
import { useLocations } from "web/js/hook/useLocations";

import { BurgerMenu } from "web/js/component/burger-menu";
import { NaturalSpinner } from "web/js/component/natural-spinner";
import { Configuration } from "web/js/page/configuration";
import { NotFound } from "web/js/page/not-found";

export function Application() {
  useGoogleAnalyticsPageHit();
  const { i18n } = useTranslation();
  const locations = useLocations();
  const articleRoutes = useArticleRoutes();
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const dispatchSpeechSynthesisSettings = useContext(
    DispatchSpeechSynthesisSettingsContext,
  );
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(
    DispatchUserInterfaceSettingsContext,
  );

  const loading = !i18n.language || !userInterfaceSettings.language;

  useEffect(() => {
    dispatchUserInterfaceSettings({
      data: {
        language: getUserLanguage(null, navigator),
      },
      type: StandardReducerOperation.MERGE,
    });
  }, []);

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
    if (!speechSynthesis) {
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
  }, [dispatchSpeechSynthesisSettings, speechSynthesis]);

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
        type: StandardReducerOperation.MERGE,
      });
    };

    window.addEventListener(languagechangeEvent, onLanguageChange);
    return () => {
      window.removeEventListener(languagechangeEvent, onLanguageChange);
    };
  }, [dispatchUserInterfaceSettings]);

  let content;

  if (loading) {
    content = <NaturalSpinner />;
  } else {
    content = (
      <>
        <BurgerMenu />
        <Switch>
          <Route path={routes.configuration()} component={Configuration} />
          {articleRoutes}
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }

  return (
    <LocationsContext.Provider value={locations}>
      {content}
    </LocationsContext.Provider>
  );
}
