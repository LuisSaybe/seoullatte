import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useArticleRoutes } from "web/js/hook/useArticleRoutes";
import { routes } from "web/js/routes";
import { BurgerMenu } from "web/js/component/burger-menu";
import { getLanguage, Language } from "web/js/helper/language";
import { AboutUs } from "web/js/page/about-us";
import { Configuration } from "web/js/page/configuration";
import { NotFound } from "web/js/page/not-found";
import { RootState } from "web/js/redux/reducer";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { Subscribers } from "web/js/component/subscribers";
import "./style.scss";

export function Application() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const articleRoutes = useArticleRoutes();
  const { language, speechSynthesisSettings } = useSelector(
    (state: RootState) => state.userInterface,
  );

  useEffect(() => {
    if (!window.speechSynthesis?.getVoices) {
      return;
    }

    const voicesChanged = () => {
      const voices = window.speechSynthesis.getVoices();
      const didChange = voices.some(
        (_, index) => speechSynthesisSettings.voices[index] !== voices[index],
      );

      if (didChange) {
        dispatch(
          updateUserInterface({
            speechSynthesisSettings: {
              ...speechSynthesisSettings,
              voices,
            },
          }),
        );
      }
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
  }, [speechSynthesisSettings]);

  useEffect(() => {
    const languagechangeEvent = "languagechange";
    const onLanguageChange = () => {
      dispatch(
        updateUserInterface({
          language: getLanguage(window.navigator),
        }),
      );
    };

    window.addEventListener(languagechangeEvent, onLanguageChange);
    return () => {
      window.removeEventListener(languagechangeEvent, onLanguageChange);
    };
  }, []);

  useEffect(() => {
    if (!speechSynthesisSettings.voiceURI && speechSynthesisSettings.voices) {
      const voices = speechSynthesisSettings.voices.filter((voice) =>
        voice.lang.includes(Language.ko),
      );

      if (voices.length > 0) {
        dispatch(
          updateUserInterface({
            speechSynthesisSettings: {
              ...speechSynthesisSettings,
              voiceURI: voices[0].voiceURI,
            },
          }),
        );
      }
    }
  }, [speechSynthesisSettings]);

  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <>
      <Subscribers />
      <BurgerMenu />
      <Switch>
        <Route path={routes.configuration()} component={Configuration} />
        <Route path={routes.aboutUs()} component={AboutUs} />
        {articleRoutes}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
