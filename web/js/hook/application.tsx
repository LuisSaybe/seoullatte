import React, { useContext, useEffect, useRef } from "react";
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

import { DispatchFetchId } from "web/js//interface/fetch";
import { BurgerMenu } from "web/js/component/burger-menu";
import { getLanguage, Language } from "web/js/helper/language";
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
      "https://luissaybe.nyc3.digitaloceanspaces.com/seoul-latte/words/english/1-0-2000.json.gz",
      {},
      DispatchFetchId.GET_WORDS,
    );

    /* TODO, put into english import */
    const cache = ["92101", "15843", "24607", "24506"];

    for (const id of cache) {
      dispatchFetch(
        `api/view?q=${id}&method=target_code&translated=y&trans_lang=1`,
        {},
        DispatchFetchId.VIEW_WORD,
      );
    }
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
    <LocationsContext.Provider value={locations}>
      <BurgerMenu />
      <Switch>
        <Route path={routes.configuration()} component={Configuration} />
        {articleRoutes}
        <Route path={routes.aboutUs()} component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
    </LocationsContext.Provider>
  );
}
