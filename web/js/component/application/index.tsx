import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useArticleRoutes } from "web/js/hook/useArticleRoutes";
import { routes } from "web/js/routes";
import { getLanguage, Language } from "web/js/helper/language";
import { AboutUs } from "web/js/page/about-us";
import { Configuration } from "web/js/page/configuration";
import { NotFound } from "web/js/page/not-found";
import { RootState } from "web/js/redux/reducer";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { Subscribers } from "web/js/component/subscribers";
import { DictionaryEntry } from "web/js/page/dictionary-entry";
import { HamburgerMenu } from "web/js/component/hamburger-menu";
import { SearchPage } from "web/js/page/search";
import { ApplicationConstants } from "web/js/helper/application";
import { PrefersColorSchemeSetting } from "web/js/interface/user-interface";
import { Color } from "web/js/helper/color";
import "./style.scss";

export function Application() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const articleRoutes = useArticleRoutes();
  const { language, speechSynthesisSettings, prefersColorScheme } = useSelector(
    (state: RootState) => state.userInterface,
  );
  const setGlobalDisplayMode = (type: PrefersColorSchemeSetting) => {
    const element = document.querySelector(
      `.${ApplicationConstants.rootClassname}`,
    );

    for (const key of Object.keys(PrefersColorSchemeSetting)) {
      element.classList.remove(PrefersColorSchemeSetting[key]);
    }

    element.classList.add(type);

    const htmlElement = document.querySelector("html");

    if (type === PrefersColorSchemeSetting.dark) {
      htmlElement.style.backgroundColor = Color.darkBackground;
    } else {
      htmlElement.style.removeProperty("background-color");
    }
  };

  useEffect(() => {
    const onChange: Parameters<
      MediaQueryList["addEventListener"]
    >["1"] = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setGlobalDisplayMode(PrefersColorSchemeSetting.dark);
      }

      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setGlobalDisplayMode(PrefersColorSchemeSetting.light);
      }
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChange);
    };
  }, [prefersColorScheme]);

  useEffect(() => {
    setGlobalDisplayMode(prefersColorScheme);
  }, [prefersColorScheme]);

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

    if (typeof window.speechSynthesis.onvoiceschanged === "undefined") {
      voicesChanged();
    } else {
      window.speechSynthesis.addEventListener("voiceschanged", voicesChanged);
      voicesChanged();
      return () => {
        window.speechSynthesis.removeEventListener(
          "voiceschanged",
          voicesChanged,
        );
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
      document.querySelector("html").setAttribute("lang", language);
    }
  }, [language, i18n]);

  return (
    <>
      <Subscribers />
      <HamburgerMenu />
      <Switch>
        <Route path={routes.search()} component={SearchPage} />
        <Route path={routes.configuration()} component={Configuration} />
        <Route path={routes.aboutUs()} component={AboutUs} />
        <Route path={routes.entry(":q(\\d+)")} component={DictionaryEntry} />
        {articleRoutes}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
