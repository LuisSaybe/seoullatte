import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { Language } from "web/js/helper/language";
import { updateUserInterface } from "web/js/redux/user-interface/action";
import { RootState } from "web/js/redux/reducer";
import { DEFAULT_SPEAKING_RATE } from "web/js/interface/speech-synthesis";
import { ArticleTitle } from "web/js/component/article-title";
import { DefaultLayout } from "web/js/component/default-layout";
import "./style.scss";

export function Configuration() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const speechSynthesisSettings = useSelector(
    (state: RootState) => state.userInterface.speechSynthesisSettings,
  );
  const language = useSelector(
    (state: RootState) => state.userInterface.language,
  );
  const [voiceURI, setVoiceURI] = useState(
    speechSynthesisSettings.voiceURI ?? null,
  );
  const onChange = (e) => {
    const rate = Number(e.target.value);
    const data = { ...speechSynthesisSettings };
    if (rate === DEFAULT_SPEAKING_RATE) {
      delete data.rate;
    } else {
      data.rate = rate;
    }

    dispatch(
      updateUserInterface({
        speechSynthesisSettings: data,
      }),
    );
  };
  const onVoiceURIChange = (e) => {
    dispatch(
      updateUserInterface({
        speechSynthesisSettings: {
          ...speechSynthesisSettings,
          voiceURI: e.target.value,
        },
      }),
    );
  };
  const onLanguageChange = (e) => {
    dispatch(
      updateUserInterface({
        language: e.target.value,
      }),
    );
  };

  useEffect(() => {
    if (speechSynthesisSettings?.voiceURI) {
      setVoiceURI(speechSynthesisSettings.voiceURI);
    }
  }, [speechSynthesisSettings?.voiceURI]);

  return (
    <>
      <DefaultLayout>
        <ArticleTitle>{t("Settings")}</ArticleTitle>
        <div styleName="field">
          <label styleName="label" htmlFor="display-language">
            {t("Display Language")}
          </label>
          <select
            styleName="select"
            id="display-language"
            value={language}
            onChange={onLanguageChange}
            onBlur={onLanguageChange}
          >
            <option value={Language.en}>{t("English")}</option>
            <option value={Language.fr}>{t("French")}</option>
          </select>
        </div>
        <div styleName="field">
          <label styleName="label" htmlFor="speaking-rate">
            {t("Text-to-Speech Speed")}
          </label>
          <select
            styleName="select"
            id="speaking-rate"
            value={speechSynthesisSettings.rate ?? DEFAULT_SPEAKING_RATE}
            onChange={onChange}
            onBlur={onChange}
          >
            <option value={DEFAULT_SPEAKING_RATE}>{t("default")}</option>
            {[0.5, 0.7, 1].map((defaultRate) => (
              <option key={defaultRate} value={defaultRate}>
                {defaultRate}
              </option>
            ))}
          </select>
        </div>
        {voiceURI && (
          <div styleName="field">
            <label styleName="label" htmlFor="voice-uri">
              {t("Text-to-Speech Voice")}
            </label>
            <select
              styleName="label"
              id="voice-uri"
              value={voiceURI}
              onChange={onVoiceURIChange}
              onBlur={onVoiceURIChange}
            >
              {speechSynthesisSettings.voices
                .filter((voice) => voice.lang.includes(Language.ko))
                .map((voice) => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name}
                  </option>
                ))}
            </select>
          </div>
        )}
      </DefaultLayout>
      <Helmet>
        <title>{t("Settings")}</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Settings" />
      </Helmet>
    </>
  );
}
