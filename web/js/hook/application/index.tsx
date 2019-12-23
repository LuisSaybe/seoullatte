import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { getUserLanguage } from "common/helpers";

import {
  DispatchSpeechSynthesisSettingsContext,
  DispatchUserInterfaceSettingsContext,
  SpeechSynthesisSettingsContext,
  UserInterfaceSettingsContext,
} from "web/js/context";

import {
  SpeechSynthesisDispatchType,
  UserInterfaceDispatchType,
} from "web/js/interface";
import { routes } from "web/js/routes";

import { Language } from "common/model";
import { useTopics } from "web/js/hook/useTopics";

import { Header } from "web/js/component/header";
import { NaturalSpinner } from "web/js/component/natural-spinner";
import { Configuration } from "web/js/page/configuration";
import { Landing } from "web/js/page/landing";
import { NotFound } from "web/js/page/not-found";

import "./style.scss";

export function Application() {
  const { i18n } = useTranslation();
  const topics = useTopics();
  const speechSynthesisSettings = useContext(SpeechSynthesisSettingsContext);
  const dispatchSpeechSynthesisSettings = useContext(
    DispatchSpeechSynthesisSettingsContext,
  );
  const userInterfaceSettings = useContext(UserInterfaceSettingsContext);
  const dispatchUserInterfaceSettings = useContext(
    DispatchUserInterfaceSettingsContext,
  );

  const loading = !i18n.language || userInterfaceSettings.language === null;

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
        voice.lang.includes(Language.ko),
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
        <Header />
        <Switch>
          <Route exact path={routes.landing()} component={Landing} />
          <Route path={routes.configuration()} component={Configuration} />
          {topics.map((topic) => (
            <Route
              key={topic.path}
              path={topic.path}
              component={topic.component}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }

  return <BrowserRouter>{content}</BrowserRouter>;
}
