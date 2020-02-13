import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import {
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  FetchDispatchContext,
  LocationsContext,
  SpeechSynthesisSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";
import { useArticleRoutes } from "web/js/hook/useArticleRoutes";
import { useGoogleAnalyticsPageHit } from "web/js/hook/useGoogleAnalyticsPageHit";
import { useLocations } from "web/js/hook/useLocations";
import { Operation } from "web/js/interface/reducer";
import { routes } from "web/js/routes";

import { BurgerMenu } from "web/js/component/burger-menu";
import { getLanguage, Language } from "web/js/helper/language";
import { DispatchFetchId } from "web/js/interface/fetch";
import { AboutUs } from "web/js/page/about-us";
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
  const [dispatchFetch] = useContext(FetchDispatchContext);

  useEffect(() => {
    dispatchFetch(
      "https://luissaybe.nyc3.digitaloceanspaces.com/seoul-latte/words/1.json.gz",
      {},
      DispatchFetchId.GET_WORDS,
    );
  }, [dispatchFetch]);

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
          type: Operation.MERGE,
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
        type: Operation.MERGE,
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
        type: Operation.MERGE,
      });
    };

    window.addEventListener(languagechangeEvent, onLanguageChange);
    return () => {
      window.removeEventListener(languagechangeEvent, onLanguageChange);
    };
  }, [dispatchUserInterfaceSettings]);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <LocationsContext.Provider value={locations}>
        <BurgerMenu />
        <Switch>
          <Route path={routes.configuration()} component={Configuration} />
          <Route path={routes.aboutUs()} component={AboutUs} />
          {articleRoutes}
          <Route component={NotFound} />
        </Switch>
      </LocationsContext.Provider>
    </>
  );
}
