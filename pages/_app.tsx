import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import * as Sentry from "@sentry/browser";

import { reducers } from "../lib/redux/reducer";
import { getLanguage, Language } from "../lib/helper/language";
import { RootState } from "../lib/redux/reducer";
import { updateUserInterface } from "../lib/redux/user-interface/action";
import { Subscribers } from "../components/subscribers";
import { HamburgerMenu } from "../components/hamburger-menu";
import { useSettings } from "../lib/hook/useSettings";
import "../lib/i18n";

export function Application(props) {
  const { i18n } = useTranslation();
  const settings = useSettings();
  const dispatch = useDispatch();
  const { language, speechSynthesisSettings } = useSelector(
    (state: RootState) => state.userInterface,
  );

  useEffect(() => {
    if (settings.sentry) {
      Sentry.init(settings.sentry);
    }
  }, []);

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
    }
  }, [language, i18n]);

  return (
    <>
      <Subscribers />
      <HamburgerMenu />
      {props.children}
    </>
  );
}

export default function Root({ Component, pageProps }) {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Application>
        <Component {...pageProps} />
      </Application>
    </Provider>
  );
}
